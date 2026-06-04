<script setup lang="ts">
import Cell1 from '@/ui/cell1.vue'
import Cell2 from '@/ui/cell2.vue'
</script>

<template>
  <Cell1>
    <template #default="{ io }">
      <text>{{ io }}</text>
    </template>
  </Cell1>
  <Cell2>1234</Cell2>
</template>
