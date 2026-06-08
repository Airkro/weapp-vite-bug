<script setup lang="ts">
import Cell from '@/ui/cell.vue'
</script>

<template>
  <Cell>
    <template #default="{ io }">
      <text>{{ io }}</text>
    </template>
  </Cell>
</template>
