<template>
  <div
    class="relative flex min-h-[calc(100vh-9rem)] flex-col justify-center py-8"
  >
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div
        class="
          absolute top-8 left-1/2 size-56 -translate-x-1/2 rounded-full
          bg-fuchsia-500/20 blur-3xl
        "
      />
      <div
        class="
          absolute right-8 bottom-8 size-40 rounded-full bg-cyan-400/15 blur-3xl
        "
      />
      <div
        class="
          absolute bottom-12 left-8 size-32 rounded-full bg-violet-500/15
          blur-2xl
        "
      />
    </div>
    <HomeHero />
  </div>
</template>
