<template>
  <el-badge
    :value="notificationCount"
    :max="notificationMax"
    :is-dot='notificationDot'
    :hidden='notificationHidden'
    :type='notificationType'
    :show-zero="notificationZero"
  >
    <component :is="`el-icon-${toLine(customIcon)}`" />
  </el-badge>
</template>

<script lang="ts" setup>
import { toLine } from '@/utils';
import {PropType} from "vue";

type Type = 'primary' | 'success' | 'warning' | 'error';

const props = defineProps({
  // 自定义图标
  customIcon: { type: String, default: 'Bell' },
  // el-badge 的 value
  notificationCount: { type: Number, default: 0 },
  // el-badge 的 max 最大值 超过最大值会显示 {max}+
  notificationMax: { type: Number, default: 99 },
  // el-badge 的 is-dot 是否显示小圆点
  notificationDot: { type: Boolean, default: false },
  // el-badge 的 hidden 是否隐藏 Badge
  notificationHidden: { type: Boolean, default: false },
  // el-badge 的 type 默认为 danger
  notificationType: { type: String as PropType<Type>, default: 'danger' },
  // el-badge 的 show-zero 值为零时是否显示 Badge, false 不显示
  notificationZero: { type: Boolean, default: true }
});
</script>

<style lang="scss" scoped></style>
