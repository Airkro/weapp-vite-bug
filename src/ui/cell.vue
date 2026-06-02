<script lang="ts">
export default {
  name: 'Cell',
  props: {
    value: Number,
  },
}
</script>

<template>
  ---cell---{{ value }}
  <view class="cell">
    <slot name="icon" />
    <slot />
  </view>
</template>

<style>
.cell {
  margin-bottom: 1em;
}
</style>
