<script lang="ts" setup>
import { useRouter } from 'wevu/router'

const router = useRouter()

function onClick() {
  router.push({ name: 'page2' })
}
</script>

<template>
  This is page1

  <view class="link" @click="onClick">链接</view>
</template>

<style>
.link {
  color: blue;
}
</style>
