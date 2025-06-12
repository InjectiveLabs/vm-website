<script lang="ts" setup>
import { TURNKEY_CONTAINER_ID } from '@shared/utils/constant'

useHead({
  htmlAttrs: {
    class: 'h-full'
  },
  bodyAttrs: {
    class: 'h-full'
  }
})
</script>

<template>
  <section class="container mx-auto h-full">
    <div :id="TURNKEY_CONTAINER_ID" class="opacity-0 h-0" />
    <NuxtPage class="h-full" />
  </section>
</template>
