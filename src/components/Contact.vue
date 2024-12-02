<template>
    <section class="py-20 bg-gray-800">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-8">Contact Me</h2>
        <form @submit.prevent="handleSubmit" class="max-w-lg mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
          <div class="mb-6">
            <label for="name" class="block text-cyan-400 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              placeholder="Your Name"
              class="w-full px-3 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500"
              required
            />
          </div>
          <div class="mb-6">
            <label for="email" class="block text-cyan-400 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              placeholder="Your Email"
              class="w-full px-3 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500"
              required
            />
          </div>
          <div class="mb-6">
            <label for="message" class="block text-cyan-400 font-bold mb-2">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              placeholder="Your Message"
              rows="4"
              class="w-full px-3 py-2 text-gray-300 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-500"
              required
            ></textarea>
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="bg-cyan-500 text-gray-900 px-6 py-3 rounded-lg hover:bg-cyan-400 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const formData = ref({
    name: '',
    email: '',
    message: '',
  })
  
  const handleSubmit = () => {
    console.log('Form submitted:', formData.value)
    // Here you would typically send the form data to a server
    // Reset form after submission
    formData.value = { name: '', email: '', message: '' }
  }
  </script>
  
  <style scoped>
  input, textarea {
    transition: border-color 0.3s ease;
  }
  
  input:focus, textarea:focus {
    border-color: #22d3ee;
    box-shadow: 0 0 0 2px rgba(34, 211, 238, 0.2);
  }
  
  button {
    position: relative;
    overflow: hidden;
  }
  
  button::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 1;
    }
    20% {
      transform: scale(25, 25);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(40, 40);
    }
  }
  
  button:focus:not(:active)::after {
    animation: ripple 1s ease-out;
  }
  </style>