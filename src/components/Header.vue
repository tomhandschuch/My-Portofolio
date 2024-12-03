<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 shadow-md">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <a href="#home" class="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
        <span class="blink-cursor">></span> TH
      </a>

      <!-- Navigation -->
      <nav>
        <ul class="flex space-x-4">
          <li v-for="item in navItems" :key="item.name">
            <a :href="item.path" class="text-gray-300 hover:text-cyan-400 transition-colors">
              {{ item.name }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- Social Links -->
      <div class="flex space-x-4">
        <a v-for="social in socialLinks" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-cyan-400 transition-colors">
          <component :is="social.icon" size="24" />
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Github, Twitter, Linkedin } from 'lucide-vue-next'

// Navigation Items (Updated for Anchor Links)
const navItems = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Projects', path: '#projects' },
  { name: 'Contact', path: '#contact' },
]

// Social Links
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/tomhandschuch', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tom-handschuch-75b3b3331/', icon: Linkedin },
]
</script>

<style scoped>
.blink-cursor {
  animation: blink 3s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
