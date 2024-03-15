<template>
  <div>
    <el-select v-model="province" placeholder="请选择省分" style="width: 240px">
      <el-option
        v-for="item of allAreas"
        :key="item.code"
        :label="item.name"
        :value="item.code"
        clearable
      />
    </el-select>
    <el-select
      v-model="city"
      :disabled="!city || !province"
      placeholder="请选择城市"
      clearable
      style="width: 240px; margin: 0 10px"
    >
      <el-option
        v-for='item of selectCity'
        :key='item.code'
        :value='item.code'
        :label='item.name'
      />
    </el-select>
    <el-select
      v-model="area"
      :disabled="!area || !city"
      placeholder="请选择区域"
      clearable
      style="width: 240px"
    >
      <el-option>3</el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, computed } from 'vue';
import allAreas from '../lib/pca-code.json';

const province: Ref<string> = ref('');
const city: Ref<string> = ref('');
const area: Ref<string> = ref('');

// 2-10
// 在选择省分后将城市过滤
const selectCity = computed(() => {
  let cities = [];
  cities = allAreas.filter(area => {
    if (area.code === province.value) {
      return true;
    }
  });
  
  return cities[0]?.children
});

console.log(selectCity);
</script>

<style lang="scss" scoped></style>
