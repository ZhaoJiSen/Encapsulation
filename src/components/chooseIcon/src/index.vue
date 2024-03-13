<template>
  <div>
    <el-button @click="handleClick" type="primary">
      <slot></slot>
    </el-button>
    <el-dialog v-model="dialogVisible" :title="title">
      <el-scrollbar height='700px'>
        <div class="container">
          <div class="item" v-for="(item, index) of Object.keys(ElIcons)" :key="index">
            <div>
              <component :is="`el-icon-${toLine(item)}`"></component>
            </div>
            <div>{{ item }}</div>
          </div>
        </div>
      </el-scrollbar>
      
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Ref } from 'vue';
import * as ElIcons from '@element-plus/icons-vue';
import { toLine } from '@/utils';

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
</script>

<style scoped lang="scss">
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
