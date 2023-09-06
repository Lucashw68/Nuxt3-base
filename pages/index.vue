<template>
  <div class="hero bg-base-200 py-10">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello there</h1>
        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button class="btn btn-primary" @click="testError()">
          <Icon name="mdi:play" />
          Get Started
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
