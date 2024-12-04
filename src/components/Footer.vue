<template>
    <footer class="bg-gray-900 text-gray-300 py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; {{ currentYear }} Tom Handschuch. All rights reserved.</p>
        <div class="mt-4 flex justify-center space-x-4">
          <a v-for="link in links" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 transition-colors">
            {{ link.name }}
          </a>
        </div>
        <div class="mt-4 text-sm">
          <p>Built with <span class="text-cyan-400">Vue.js</span> and <span class="text-cyan-400">Tailwind CSS</span></p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const currentYear = ref(new Date().getFullYear())
  
  const links = [
    { name: 'GitHub', url: 'https://github.com/tomhandschuch' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tom-handschuch-75b3b3331/' },
  ]
  </script>