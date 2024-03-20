<template>
  <div class="trend">
    <div :style="{ color: textColor }" class="text">
      <slot v-if="slots.default"></slot>
      <span v-else>{{ text }}</span>
    </div>
    <div class="icon">
      <component
        :is="`el-icon-${toLine(customUpIcon)}`"
        v-if="trend === 'up'"
        :style="{ color: !reverseColor ? upIconColor : '#52c41a' }"
      />
      <component
        :is="`el-icon-${toLine(customDownIcon)}`"
        v-else
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useSlots } from 'vue';
import { toLine } from '@/utils';

const props = defineProps({
  // 趋势上升 up 或下降 down
  trend: { type: String, default: 'up' },
  // 趋势显示的文字
  text: { type: String, default: '文字' },
  // 图标颜色
  upIconColor: { type: String, default: '#f5222d' },
  downIconColor: { type: String, default: '#52c41a' },
  // 反转颜色，只在使用默认颜色下生效
  reverseColor: { type: Boolean, default: false },
  // 文字颜色
  upTextIconColor: { type: String, default: '#000000' },
  downTextIconColor: { type: String, default: '#000000' },
  // 自定义图标
  customUpIcon: { type: String, default: 'ArrowUp' },
  customDownIcon: { type: String, default: 'ArrowDown' }
});

// 通过 useSlots 判断是否使用了插槽，如果使用了 slots 上则会存在所使用的插槽名称，默认为 default
let slots = useSlots();

const textColor = computed(() => {
  return props.trend === 'up' ? props.upTextIconColor : props.downTextIconColor;
});
</script>

<style lang="scss" scoped>
.trend {
  display: flex;
  align-items: center;

  .text {
    font-size: 14px;
    margin-right: 4px;
  }

  .icon {
    svg {
      width: 1em !important;
      height: 1em !important;
    }
  }
}
</style>
