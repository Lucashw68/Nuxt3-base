<template>
  <div class="hero bg-base-200 py-10 rounded-b-3xl shadow-xl">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello there</h1>
        <p class="py-6">Nuxt 3 base template</p>
        <button class="btn btn-primary" @click="testError()">
          <Icon name="mdi:play" />
          Test error page
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toastification'

const toast = useToast()

onMounted(() => {
  toast.success("Hello !", {
    timeout: 2000
  });
})

function testError() {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found', fatal: true })
}
</script>
