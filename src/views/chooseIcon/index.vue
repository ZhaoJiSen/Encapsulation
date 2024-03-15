<template>
  <div>
    <choose-icon title="选择图标" v-model:visible="visible"
      >选择图标</choose-icon
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

import ChooseIcon from '@/components/chooseIcon/src/index.vue';

const visible: Ref<boolean> = ref(false);
</script>

<style scoped></style>
