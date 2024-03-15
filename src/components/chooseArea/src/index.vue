<template>
  <div>
    <el-select v-model="province" placeholder="请选择省分">
      <el-option>1</el-option>
    </el-select>
    <el-select v-model="city" placeholder="请选择城市">
      <el-option>2</el-option>
    </el-select>
    <el-select v-model="area" placeholder="请选择区域">
      <el-option>3</el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue';
import { ref } from 'vue';
import allAreas from '../lib/pca-code.json';

const province: Ref<string> = ref('');
const city: Ref<string> = ref('');
const area: Ref<string> = ref('');
</script>

<style lang="scss" scoped></style>
