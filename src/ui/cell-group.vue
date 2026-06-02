<script lang="ts">
export default {
  name: 'CellGroup',
  props: {
    value: Number,
  },
}
</script>

<template>
  --cell-group--{{ value }}
  <view class="cell-group">
    <slot />
  </view>
</template>

<style>
.cell-group {
  padding-top: 1em;
  margin-bottom: 1em;
}
</style>
