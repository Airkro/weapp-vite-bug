<script setup lang="ts">
import { useInfiniteList } from './lib'

const back = useInfiniteList()
</script>

<template>
  <view v-for="(value, idx) in back.state" :key="idx">
    {{ value.name }}
  </view>
</template>
