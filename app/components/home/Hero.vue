<script setup>
import { GitHubIcon } from 'vue3-simple-icons'

const { title, github } = useAppConfig()
</script>

<template>
  <main class="mx-auto w-full max-w-5xl px-2 py-4 md:py-8">
    <section class="rounded-3xl border border-white/10 bg-black/45 p-6 shadow-2xl shadow-fuchsia-900/20 backdrop-blur-xl md:p-10">
      <div class="space-y-6">
        <div class="space-y-3">
          <p class="inline-flex rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-3 py-1 text-xs font-medium tracking-wide text-fuchsia-300">
            minimal • neon • glass
          </p>
          <h1 class="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            {{ title }}
          </h1>
          <p class="max-w-3xl text-sm text-zinc-300 md:text-base">
            I wanted to call it <span class="font-semibold text-fuchsia-300">"Hattt Bihari!!"</span> on
            <span class="font-semibold text-fuchsia-300">hatt.bihari.xyz</span>, but that defeats the purpose of a URL shortener —
            so <span class="font-semibold text-cyan-300">s.bihari.xyz</span> is here.
          </p>
        </div>
        <div class="grid gap-3 md:grid-cols-[1fr_auto]">
          <a href="/dashboard" class="group inline-flex items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20" title="Open Dashboard">
            Open Link Shortener
          </a>
          <a :href="github" target="_blank" rel="noopener" title="GitHub" class="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/10">
            <GitHubIcon class="h-4 w-4" />
            GitHub
          </a>
        </div>
        <p class="text-xs text-zinc-400">
          Focused only on shortening links. No extra fluff.
        </p>
      </div>
    </section>
  </main>
</template>
