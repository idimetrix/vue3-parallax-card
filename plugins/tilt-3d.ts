import { Tilt3d, type Settings } from 'tilt-3d'
import type { DirectiveBinding } from 'vue'

const map: Map<HTMLElement, Tilt3d> = new Map()

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive<HTMLElement, Partial<Settings>>('tilt-3d', {
    mounted(el: HTMLElement, binding: DirectiveBinding<Partial<Settings>>) {
      if (map.has(el)) return

      const tilt3d = new Tilt3d(el, binding.value || {})

      map.set(el, tilt3d)
    },
    unmounted(el: HTMLElement) {
      const tilt3d = map.get(el)

      tilt3d?.destroy()

      map.delete(el)
    },
    getSSRProps() {
      return {}
    },
  })
})
