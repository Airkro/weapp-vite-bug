<script setup lang="ts">
import TabbarItem from '@/ui/tabbar-item.vue'
import Tabbar from '@/ui/tabbar.vue'
import { list } from './lib.ts'
</script>

<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/no-unused-vars -->

<template>
  <Tabbar>
    <template #default="_">
      <TabbarItem v-for="item in list">
        {{ item.label }}
      </TabbarItem>
    </template>
  </Tabbar>
</template>
