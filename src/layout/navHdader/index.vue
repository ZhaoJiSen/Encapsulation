<template>
  <div class="header">
    <span @click="toogle">
      <el-icon-expand v-if="collapse"></el-icon-expand>
      <el-icon-fold v-else="!collapse"></el-icon-fold>
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  collapse: boolean;
}>();

const emits = defineEmits<{
  // 因为使用了 v-mode 来传，所以需要使用固定的格式 update:
  (e: 'update:collapse', collapse: boolean): void;
}>();

const toogle = () => {
  emits('update:collapse', !props.collapse);
};
</script>

<style scoped lang="scss">
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
