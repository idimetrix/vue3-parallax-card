<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-3">
    <TiltEffect
      v-for="item in items"
      :key="item.src"
      class="aspect-square flex"
      :item="item"
      :settings="settings"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'WeddingPage',
}
</script>

<script setup lang="ts">
import { WEDDINGS } from '~/constants'
import type { Settings } from 'tilt-3d'

const items = ref(
  Array.from({ length: 12 }).map((_, index) => ({
    src: `/images/wedding/${index + 1}.jpg`,
    ...WEDDINGS[index],
  })),
)

const settings = ref<Partial<Settings>>({
  speed: 400,
  perspective: 500,
  max: 15,
})
</script>
