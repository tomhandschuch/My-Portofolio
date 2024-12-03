<template>
  <section class="py-20 bg-gray-900">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-8">My Projects</h2>
      <div class="flex justify-center mb-8">
        <button
          v-for="category in categories"
          :key="category"
          @click="setFilter(category)"
          :class="[
            'mx-2 px-4 py-2 rounded-full transition-colors',
            filter === category ? 'bg-cyan-500 text-gray-900' : 'bg-gray-800 text-gray-300',
            'hover:bg-cyan-400 hover:text-gray-900'
          ]"
        >
          {{ category }}
        </button>
      </div>
      <transition-group name="project-list" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
        >
          <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
          <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-xl font-semibold text-cyan-400 mb-2">{{ project.title }}</h3>
            <p class="text-gray-400 mb-4 flex-grow">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tech in project.technologies" :key="tech" class="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                {{ tech }}
              </span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block bg-cyan-500 text-gray-900 px-4 py-2 rounded hover:bg-cyan-400 transition-colors text-center"
            >
              View Project
            </a>
          </div>
        </div>
      </transition-group>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const projects = [
  { id: 1, title: 'Lernified', description: 'A modern web app designed to simplify learning. It allows users to create, manage, and track custom quizzes while providing instant feedback to boost knowledge retention.', category: 'Web Development', image: 'https://picsum.photos/200/300', link: 'https://learnified.netlify.app', technologies: ['Vue.js', 'Pinia', 'Node.js'] },
  { id: 2, title: 'Portfolio Website', description: 'A collection of my work as a Frontend Developer, featuring creative and user-friendly web applications built with modern technologies.', category: 'UI/UX Design', image: 'https://picsum.photos/200/300', link: 'https://github.com/tomhandschuch/portfolio', technologies: ['Vue.js', 'Tailwind CSS', 'GSAP'] },
]

const categories = ['All', 'Web Development', 'UI/UX Design']
const filter = ref('All')

const setFilter = (category) => {
  filter.value = category
}

const filteredProjects = computed(() => {
  return filter.value === 'All' ? projects : projects.filter(project => project.category === filter.value)
})
</script>

<style scoped>
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.2s ease;
}
.project-list-leave-active {
  position: absolute;
}
.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

