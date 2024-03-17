<template>
  <choose-area @change-area='changeArea'></choose-area>
</template>

<script setup lang="ts">
const changeArea = (value: any) => {
  console.log(value)
}
</script>

<style scoped lang="scss"></style>
