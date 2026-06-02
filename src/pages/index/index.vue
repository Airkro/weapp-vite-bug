<script setup lang="ts">
import Avatar from '@/ui/avatar.vue'
import CellGroup from '@/ui/cell-group.vue'
import Cell from '@/ui/cell.vue'

// 定义两层循环的数据
const cellGroups = [
  {
    id: 1,
    cells: [
      { id: 101 },
    ],
  },
  {
    id: 2,
    cells: [
      { id: 201 },
      { id: 202 },
    ],
  },
]
</script>

<template>
  <CellGroup v-for="{ id, cells } in cellGroups" :key="id" :value="id">
    <Cell v-for="{ id: cid } in cells" :key="cid" :value="cid">
      <template #icon>
        <Avatar />
      </template>
      <view>child = {{ cid }}</view>
    </Cell>
  </CellGroup>
</template>
