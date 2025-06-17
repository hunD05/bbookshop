# Vue Bookstore E-commerce

Ứng dụng web bán sách trực tuyến được xây dựng bằng Vue.js 3 và Tailwind CSS.

## Tính năng

- 🏠 Trang chủ với danh sách sách và bộ lọc theo danh mục
- 📖 Trang chi tiết sách với thông tin đầy đủ
- 🛒 Giỏ hàng với khả năng thêm/xóa/cập nhật số lượng
- 💳 Trang thanh toán với form thông tin khách hàng
- 📱 Thiết kế responsive cho mobile và desktop
- 🎨 Giao diện đẹp mắt với Tailwind CSS

## Công nghệ sử dụng

- Vue.js 3 (Composition API)
- Vue Router 4
- Vuex 4
- Tailwind CSS 3
- Vue CLI 5

## Cài đặt và chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run serve

# Build cho production
npm run build
```

## Cấu trúc dự án

```
src/
├── components/          # Các component tái sử dụng
│   ├── Header.vue
│   ├── Footer.vue
│   └── BookCard.vue
├── views/              # Các trang chính
│   ├── Home.vue
│   ├── BookDetail.vue
│   ├── Cart.vue
│   └── Checkout.vue
├── router/             # Cấu hình routing
├── store/              # Vuex store
└── assets/             # CSS và assets
```

## Tính năng chính

### Trang chủ
- Hiển thị danh sách sách với hình ảnh, giá, đánh giá
- Bộ lọc theo danh mục sách
- Hero section và phần giới thiệu tính năng

### Chi tiết sách
- Thông tin chi tiết về sách
- Chọn số lượng và thêm vào giỏ hàng
- Hiển thị giá gốc và giá khuyến mãi

### Giỏ hàng
- Xem danh sách sách đã chọn
- Cập nhật số lượng hoặc xóa sách
- Tính tổng tiền tự động

### Thanh toán
- Form nhập thông tin khách hàng
- Chọn địa chỉ giao hàng
- Chọn phương thức thanh toán
- Xem lại đơn hàng trước khi đặt

## Dữ liệu mẫu

Ứng dụng sử dụng dữ liệu mẫu với các cuốn sách phổ biến tại Việt Nam như:
- Đắc Nhân Tâm
- Sapiens: Lược sử loài người
- Atomic Habits
- Tôi Tài Giỏi, Bạn Cũng Thế
- Nhà Giả Kim
- Think and Grow Rich

## Responsive Design

Ứng dụng được thiết kế responsive với các breakpoint:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px