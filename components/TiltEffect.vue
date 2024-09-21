<template>
  <div class="overflow-hidden flex relative cursor-pointer justify-center items-center group">
    <NuxtImg
      class="aspect-square flex group-hover:scale-105 relative transition-all duration-300"
      :src="item.src"
    />
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'TiltEffect',
}
</script>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

interface Props extends /** @vue-ignore */ HTMLAttributes {
  item: {
    src: string
    title: string
    description: string
  }
}

const props = withDefaults(defineProps<Props>(), {})
</script>
