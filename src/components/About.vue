<template>
    <section class="py-20 bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-8">About Me</h2>
        <div class="max-w-3xl mx-auto">
          <div class="mb-8">
            <button @click="toggleDetails" class="w-full text-left bg-gray-700 p-4 rounded-lg flex justify-between items-center">
              <span class="text-xl font-semibold text-gray-100">My Journey</span>
              <span class="text-cyan-400 text-2xl transition-transform duration-300" :class="{ 'transform rotate-180': showDetails }">▼</span>
            </button>
            <transition name="slide-fade">
              <div v-if="showDetails" class="bg-gray-700 mt-2 p-4 rounded-lg">
                <p class="text-gray-300 mb-4">
                  Hi, I'm Tom Handschuch, a junior frontend developer from Thuringia. I specialize in Vue.js, JavaScript, and modern web technologies.
                </p>
                <p class="text-gray-300">
                  I have a passion for creating user-friendly and visually appealing web applications that stand out both technically and aesthetically. Driven by curiosity and enthusiasm, I am committed to developing innovative solutions while continuously enhancing my skills.
                </p>
              </div>
            </transition>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-2xl font-semibold text-cyan-400 mb-4">Skills</h3>
              <ul class="space-y-2">
                <li v-for="skill in skills" :key="skill" class="flex items-center text-gray-300">
                  <span class="text-cyan-400 mr-2">&gt;</span>
                  <span class="font-medium">{{ skill }}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-cyan-400 mb-4">Interests</h3>
              <ul class="space-y-2">
                <li v-for="interest in interests" :key="interest" class="flex items-center text-gray-300">
                  <span class="text-cyan-400 mr-2">&gt;</span>
                  <span>{{ interest }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const showDetails = ref(false)
  const toggleDetails = () => {
    showDetails.value = !showDetails.value
  }
  
  const skills = [
    'Vue.js',
    'JavaScript (ES6+)',
    'TypeScript',
    'HTML5 & CSS3',
    'Tailwind CSS',
    'Git & GitHub',
    'Responsive Web Design',
    'RESTful APIs',
  ]
  
  const interests = [
    'Open Source Contribution',
    'UI/UX Design',
    'Web Performance Optimization',
    'Progressive Web Apps',
    'Exploring New Tech Stacks',
  ]
  </script>
  
  <style scoped>
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  .slide-fade-enter-from, .slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }
  </style>
  
  