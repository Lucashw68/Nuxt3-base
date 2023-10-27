<template>
  <NuxtLayout>
    <div class="flex flex-col items-center justify-center h-screen w-full">
      <img
        src="https://64.media.tumblr.com/e414a762d3a1515ce8454d32c2dec579/tumblr_ogi47qqlfI1utgp6co1_500.gifv"
        alt="Error"
        class="mask mask-squircle bg-base-100 p-8"
      />
      <div class="my-8 px-8 rounded-xl max-w-[90%]">
        <h1 class="text-center text-6xl font-black text-white pt-6">
          {{ error.statusCode }}
        </h1>
        <h1 class="text-center text-xl truncate font-black text-error pb-6">
          {{ error.statusMessage || "Internal error" }}
        </h1>
      </div>
      <button class="btn bg-base-300" @click="handleError">Return home</button>
    </div>
  </NuxtLayout>
</template>

<script setup>
defineProps({
  error: {
    type: Object,
    default() {
      return {};
    },
  },
});
const handleError = () => clearError({ redirect: "/" });
</script>
