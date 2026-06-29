<script setup lang="ts">
import { ref } from 'wevu';

const io = ref({
  abc: {
    efg: 123
  }
})
</script>

<template>
  <navigator url="/pages/page2" v-text="io.abc.efg"/>
</template>
