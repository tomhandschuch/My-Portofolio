<template>
  <section class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900" @mousemove="moveEyes">
    <div class="text-center z-10">
      <div class="mb-8 relative">
        <div class="w-64 h-64 mx-auto relative">
          <svg class="w-full h-full" viewBox="0 0 200 200">
            <!-- Face -->
            <circle cx="100" cy="100" r="90" fill="#22d3ee" />

            <!-- Eyes -->
            <g class="eyes">
              <circle cx="70" cy="80" r="18" fill="white" />
              <circle :cx="70 + eyeX" :cy="80 + eyeY" r="9" fill="black" />
              <circle cx="130" cy="80" r="18" fill="white" />
              <circle :cx="130 + eyeX" :cy="80 + eyeY" r="9" fill="black" />
            </g>

            <!-- Mouth -->
            <path d="M 70 130 Q 100 150 130 130" fill="none" stroke="black" stroke-width="4" stroke-linecap="round" />
          </svg>
        </div>
      </div>
      <h1 class="text-4xl md:text-6xl font-bold text-gray-100 mb-4">Tom Handschuch</h1>
      <p class="text-xl md:text-2xl text-cyan-400">
        <vue3-typer
          :text='["Frontend Developer", "Vue.js Enthusiast", "Web Developer"]'
          :repeat='Infinity'
          :shuffle='false'
          initial-action='typing'
          :pre-type-delay='70'
          :type-delay='70'
          :pre-erase-delay='1000'
          :erase-delay='250'
          erase-style='select-all'
          :erase-on-complete='false'
          caret-animation='blink'
        ></vue3-typer>
      </p>
    </div>
    <div class="absolute inset-0 flex items-center justify-center opacity-5">
      <pre class="text-cyan-400 text-xs md:text-sm overflow-hidden" style="max-height: 80vh;">
        <code>{{ codeSnippet }}</code>
      </pre>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Vue3Typer from 'vue3-typer'

const codeSnippet = ref('')
const eyeX = ref(0)
const eyeY = ref(0)

const moveEyes = (event) => {
  const maxMove = 5 // Maximalbewegung der Pupillen
  const windowCenterX = window.innerWidth / 2
  const windowCenterY = window.innerHeight / 2

  // Berechne Pupillenbewegung relativ zur Fenstergröße
  eyeX.value = ((event.clientX - windowCenterX) / window.innerWidth) * maxMove
  eyeY.value = ((event.clientY - windowCenterY) / window.innerHeight) * maxMove
}

onMounted(() => {
  setTimeout(() => {
    codeSnippet.value = `
import { ref, computed } from 'vue'

const count = ref(0)
const double = computed(() => count.value * 2)

function increment() {
  count.value++
}

// Vue 3 Component
export default {
  setup() {
    return {
      count,
      double,
      increment
    }
  }
}
    `.trim()
  }, 1000)
})
</script>

<style scoped>
.vue3-typer {
  font-family: 'Fira Code', monospace;
}

svg {
  max-width: 100%;
  height: auto;
}

.eyes circle {
  transition: transform 0.1s ease-out;
}
</style>
