<script lang="ts" setup>
import { useRouter } from 'wevu/router'

const router = useRouter()

function onClick1() {
  router.back()
}

function onClick2() {
  wx.navigateBack()
}
</script>

<template>
  This is page2

  <view class="link" @click="onClick1">Wevu 返回</view>
  <view class="link" @click="onClick2">原生返回</view>
</template>

<style>
.link {
  color: blue;
}
</style>
