<template>
  <header class="bg-white shadow-lg sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-lg">📚</span>
          </div>
          <span class="text-xl font-bold text-gray-800">BBook</span>
        </router-link>

        <!-- Search Bar -->
        <div class="flex-1 max-w-lg mx-8">
          <div class="relative">
            <input type="text" placeholder="Tìm kiếm sách..."
              class="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>

        <!-- Cart -->
        <router-link to="/cart" class="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4m-3 0h14l-1.5 9h-11L5 11z" />
          </svg>

          <span v-if="cartItemCount > 0"
            class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {{ cartItemCount }}
          </span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Header',
  setup() {
    const store = useStore()
    const cartItemCount = computed(() => store.getters.cartItemCount)

    return {
      cartItemCount
    }
  }
}
</script>