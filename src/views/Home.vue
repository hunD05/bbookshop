<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
          Khám phá thế giới tri thức
        </h1>
        <p class="text-xl md:text-2xl mb-8 opacity-90">
          Hàng ngàn cuốn sách hay đang chờ bạn khám phá
        </p>
        <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Mua sắm ngay
        </button>
      </div>
    </section>

    <!-- Categories -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8">Danh mục sách</h2>
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-2 rounded-full font-medium transition-colors',
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-blue-50'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Books Grid -->
    <section class="py-12">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-3xl font-bold">
            {{ selectedCategory === 'Tất cả' ? 'Sách nổi bật' : selectedCategory }}
          </h2>
          <div class="flex items-center space-x-4">
            <span class="text-gray-600">{{ filteredBooks.length }} sản phẩm</span>
          </div>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <BookCard
            v-for="book in filteredBooks"
            :key="book.id"
            :book="book"
          />
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Tại sao chọn BookStore?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Giá cả hợp lý</h3>
            <p class="text-gray-600">Cam kết giá tốt nhất thị trường với nhiều ưu đãi hấp dẫn</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Giao hàng nhanh</h3>
            <p class="text-gray-600">Giao hàng toàn quốc trong 1-3 ngày làm việc</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Chất lượng đảm bảo</h3>
            <p class="text-gray-600">Sách chính hãng, chất lượng cao từ các nhà xuất bản uy tín</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import BookCard from '../components/BookCard.vue'

export default {
  name: 'Home',
  components: {
    BookCard
  },
  setup() {
    const store = useStore()
    const selectedCategory = ref('Tất cả')

    const books = computed(() => store.state.books)
    const categories = computed(() => store.state.categories)

    const filteredBooks = computed(() => {
      if (selectedCategory.value === 'Tất cả') {
        return books.value
      }
      return books.value.filter(book => book.category === selectedCategory.value)
    })

    return {
      selectedCategory,
      books,
      categories,
      filteredBooks
    }
  }
}
</script>