<template>
  <el-container>
    <el-aside width="auto">
      <nav-aside :collapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <!-- 通过 v-mode 的形式进行传值 -->
        <nav-header v-model:collapse="isCollapse" />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import navHeader from './navHdader/index.vue';
import navAside from './navAside/index.vue';

import { ref } from 'vue';
import type { Ref } from 'vue';

const isCollapse: Ref<boolean> = ref(false);
</script>

<style scoped lang="scss">
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>
