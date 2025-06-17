import { createStore } from 'vuex'

export default createStore({
  state: {
    books: [
      {
        id: 1,
        title: 'Đắc Nhân Tâm',
        author: 'Dale Carnegie',
        price: 89000,
        originalPrice: 120000,
        image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Cuốn sách kinh điển về nghệ thuật giao tiếp và ứng xử',
        category: 'Kỹ năng sống',
        rating: 4.8,
        inStock: true
      },
      {
        id: 2,
        title: 'Sapiens: Lược sử loài người',
        author: 'Yuval Noah Harari',
        price: 159000,
        originalPrice: 200000,
        image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Câu chuyện về sự tiến hóa của loài người từ thời tiền sử đến hiện đại',
        category: 'Lịch sử',
        rating: 4.9,
        inStock: true
      },
      {
        id: 3,
        title: 'Atomic Habits',
        author: 'James Clear',
        price: 129000,
        originalPrice: 160000,
        image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Hướng dẫn xây dựng thói quen tốt và loại bỏ thói quen xấu',
        category: 'Phát triển bản thân',
        rating: 4.7,
        inStock: true
      },
      {
        id: 4,
        title: 'Tôi Tài Giỏi, Bạn Cũng Thế',
        author: 'Adam Khoo',
        price: 99000,
        originalPrice: 130000,
        image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Phương pháp học tập hiệu quả và phát triển trí tuệ',
        category: 'Giáo dục',
        rating: 4.6,
        inStock: true
      },
      {
        id: 5,
        title: 'Nhà Giả Kim',
        author: 'Paulo Coelho',
        price: 79000,
        originalPrice: 100000,
        image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Câu chuyện về hành trình tìm kiếm ước mơ và ý nghĩa cuộc sống',
        category: 'Văn học',
        rating: 4.8,
        inStock: true
      },
      {
        id: 6,
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill',
        price: 119000,
        originalPrice: 150000,
        image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400',
        description: 'Bí quyết thành công và làm giàu từ tư duy',
        category: 'Kinh doanh',
        rating: 4.7,
        inStock: true
      }
    ],
    cart: [],
    categories: ['Tất cả', 'Kỹ năng sống', 'Lịch sử', 'Phát triển bản thân', 'Giáo dục', 'Văn học', 'Kinh doanh']
  },
  getters: {
    cartItemCount: state => {
      return state.cart.reduce((total, item) => total + item.quantity, 0)
    },
    cartTotal: state => {
      return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    },
    getBookById: state => id => {
      return state.books.find(book => book.id === parseInt(id))
    }
  },
  mutations: {
    ADD_TO_CART(state, book) {
      const existingItem = state.cart.find(item => item.id === book.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        state.cart.push({ ...book, quantity: 1 })
      }
    },
    REMOVE_FROM_CART(state, bookId) {
      state.cart = state.cart.filter(item => item.id !== bookId)
    },
    UPDATE_CART_QUANTITY(state, { bookId, quantity }) {
      const item = state.cart.find(item => item.id === bookId)
      if (item) {
        item.quantity = quantity
      }
    },
    CLEAR_CART(state) {
      state.cart = []
    }
  },
  actions: {
    addToCart({ commit }, book) {
      commit('ADD_TO_CART', book)
    },
    removeFromCart({ commit }, bookId) {
      commit('REMOVE_FROM_CART', bookId)
    },
    updateCartQuantity({ commit }, payload) {
      commit('UPDATE_CART_QUANTITY', payload)
    },
    clearCart({ commit }) {
      commit('CLEAR_CART')
    }
  }
})