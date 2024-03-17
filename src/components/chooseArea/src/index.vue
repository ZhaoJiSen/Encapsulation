<template>
  <div>
    <el-select
      v-model="province"
      placeholder="请选择省分"
      style="width: 240px"
      clearable
    >
      <el-option
        v-for="item of allAreas"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
    <el-select
      v-model="city"
      :disabled="!province"
      placeholder="请选择城市"
      clearable
      style="width: 240px; margin: 0 10px"
    >
      <el-option
        v-for="item of selectCity"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
    <el-select
      v-model="area"
      :disabled="!province || !city"
      placeholder="请选择区域"
      clearable
      style="width: 240px"
    >
      <el-option
        v-for="item of selectArea"
        :key="item.code"
        :label="item.name"
        :value="item.code"
      />
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { watch, ref } from 'vue';
import allAreas from '../lib/pca-code.json';

export interface IArea {
  name: string;
  code: string;
  children?: Array<IArea>;
}

export interface IDate {
  name: string;
  code: string;
}

export interface IAreaOptions {
  province: IDate;
  city: IDate;
  area: IDate;
}

const province = ref<string>('');
const city = ref<string>('');
const area = ref<string>('');
const selectCity = ref<IArea[]>([]);
const selectArea = ref<IArea[]>([]);

const emits = defineEmits<{
  (e: 'changeArea', {}: IAreaOptions): void;
}>();

watch(
  () => province.value,
  newValue => {
    if (newValue) {
      selectCity.value = allAreas.find(
        item => item.code === province.value
      )!.children;
    }
    // 重新选择省份后市区与区域需要重新选择
    city.value = '';
    area.value = '';
  }
);

watch(
  () => city.value,
  newValue => {
    if (newValue) {
      selectArea.value = selectCity.value.find(
        item => item.code === city.value
      )!.children!;
    }
    // 重新选择市区后区域需要重新选择
    area.value = '';
  }
);

// 监听区域，因为区域一但有值，那么省与市一定有值
watch(
  () => area.value,
  newValue => {
    if (newValue) {
      const provinceData: IDate = {
        code: province.value,
        name: allAreas.find(item => item.code === province.value)!.name
      };
      const cityData: IDate = {
        code: city.value,
        name: selectCity.value.find(item => item.code === city.value)!.name
      };
      const areaData: IDate = {
        code: newValue,
        name: selectArea.value.find(item => item.code === newValue)!.name
      };

      emits('changeArea', {
        province: provinceData,
        city: cityData,
        area: areaData
      });
    }
  }
);
</script>
