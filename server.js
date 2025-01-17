// Import các thư viện cần thiết
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware để xử lý JSON và cho phép CORS
app.use(express.json());
app.use(require('cors')());

// Danh sách sản phẩm mẫu
let products = [
  { id: 1, name: 'Product 1', price: 100, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 200, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 300, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: 400, image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: 500, image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', price: 600, image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Product 7', price: 700, image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Product 8', price: 800, image: 'https://via.placeholder.com/150' },
  { id: 9, name: 'Product 9', price: 900, image: 'https://via.placeholder.com/150' },
  { id: 10, name: 'Product 10', price: 1000, image: 'https://via.placeholder.com/150' },
];


// API để lấy danh sách sản phẩm
app.get('/products', (req, res) => {
  res.json(products);
});

// Khởi chạy server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
