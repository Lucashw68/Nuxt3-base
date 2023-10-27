<template>
  <div class="flex flex-col h-screen">
    <OrganismsHeader />

    <main class="flex-grow">
      <div class="w-3/4 mx-auto h-full">
        <slot />
      </div>
    </main>

  </div>
</template>
