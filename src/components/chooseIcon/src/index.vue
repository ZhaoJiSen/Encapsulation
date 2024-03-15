<template>
  <div>
    <el-button type="primary" @click="handleClick">
      <slot></slot>
    </el-button>
    <el-dialog v-model="dialogVisible" :title="title">
      <el-scrollbar height="700px">
        <div class="container">
          <div
            v-for="(item, index) of Object.keys(ElIcons)"
            :key="index"
            class="item"
          >
            <div @click="handleCopy(`el-icon-${toLine(item)}`)">
              <component :is="`el-icon-${toLine(item)}`"></component>
            </div>
            <div>{{ item }}</div>
          </div>
        </div>
      </el-scrollbar>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue';
import { ref, watch } from 'vue';
import { toLine } from '@/utils';

import * as ElIcons from '@element-plus/icons-vue';
import useCopy from '@/hooks/useCopy.ts';

const props = defineProps<{
  title: string;
  visible: boolean;
}>();

const emits = defineEmits<{
  (e: 'update:visible', visible: boolean): void;
}>();

const dialogVisible: Ref<boolean> = ref(props.visible);

// 监听变化
watch(
  () => props.visible,
  value => {
    dialogVisible.value = value;
  }
);
watch(
  () => dialogVisible.value,
  value => {
    emits('update:visible', value);
  }
);

const handleClick = () => {
  emits('update:visible', !props.visible);
};

const handleCopy = (iconName: string) => {
  useCopy(iconName);
  dialogVisible.value = false;
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    margin-bottom: 20px;
    cursor: pointer;
    box-sizing: border-box;

    svg {
      width: 2em !important;
      height: 2em !important;
    }
  }
}
</style>
