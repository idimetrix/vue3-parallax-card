export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('focus', {
        mounted (el, binding) {
            el.focus()
        },
        unmounted(el, binding) {

        }
    })
})
