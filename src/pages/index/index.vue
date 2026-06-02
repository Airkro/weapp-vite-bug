<script setup lang="ts">
import Cell from '@/ui/cell.vue'

function func(text: string = '') {
  return text.split('').reverse().join('')
}

const text = '123456789'
</script>

<template>
  <Cell>
    <text>{{ func(text) }}</text>
  </Cell>
</template>
