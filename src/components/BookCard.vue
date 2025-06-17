<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
    <div class="relative overflow-hidden">
      <img 
        :src="book.image" 
        :alt="book.title"
        class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      >
      <div class="absolute top-2 right-2">
        <span class="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
          -{{ Math.round((1 - book.price / book.originalPrice) * 100) }}%
        </span>
      </div>
    </div>
    
    <div class="p-4">
      <div class="mb-2">
        <span class="text-xs text-blue-600 font-medium">{{ book.category }}</span>
      </div>
      
      <h3 class="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
        {{ book.title }}
      </h3>
      
      <p class="text-sm text-gray-600 mb-2">{{ book.author }}</p>
      
      <div class="flex items-center mb-3">
        <div class="flex text-yellow-400">
          <span v-for="i in 5" :key="i" class="text-sm">
            {{ i <= Math.floor(book.rating) ? '★' : '☆' }}
          </span>
        </div>
        <span class="text-sm text-gray-500 ml-1">({{ book.rating }})</span>
      </div>
      
      <div class="flex items-center justify-between mb-4">
        <div>
          <span class="text-lg font-bold text-red-600">
            {{ formatPrice(book.price) }}
          </span>
          <span class="text-sm text-gray-500 line-through ml-2">
            {{ formatPrice(book.originalPrice) }}
          </span>
        </div>
      </div>
      
      <div class="flex space-x-2">
        <router-link 
          :to="`/book/${book.id}`"
          class="flex-1 bg-gray-100 text-gray-800 px-4 py-2 rounded-lg text-center hover:bg-gray-200 transition-colors text-sm font-medium"
        >
          Xem chi tiết
        </router-link>
        <button 
          @click="addToCart"
          class="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  name: 'BookCard',
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore()

    const formatPrice = (price) => {
      return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(price)
    }

    const addToCart = () => {
      store.dispatch('addToCart', props.book)
    }

    return {
      formatPrice,
      addToCart
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>