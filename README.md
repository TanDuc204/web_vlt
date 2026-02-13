# 💝 Happy Valentine, Quỳnh

Một trang web Valentine dễ thương được tạo bởi Tấn dành cho Quỳnh.

## ✨ Features

- **Mobile-first design** - Tối ưu cho trải nghiệm di động
- **Photo Album Slider** - Trình chiếu ảnh với swipe mượt mà
- **Love Letter Block** - Khối thư tình với animation fade-in
- **Short Wishes** - Các câu chúc ngắn với hiệu ứng xuất hiện
- **Secret Modal** - Modal bí mật với câu random mỗi lần mở
- **Floating Hearts** - Hiệu ứng tim bay nhẹ nhàng

## 🛠 Tech Stack

- **Next.js 14** - React framework
- **Tailwind CSS** - Styling
- **Swiper** - Photo carousel

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
web_vlt/
├── app/
│   ├── api/
│   │   └── content/
│   │       └── route.js      # API endpoint
│   ├── content.json          # Content data
│   ├── globals.css           # Global styles
│   ├── layout.js             # Root layout
│   └── page.js               # Main page
├── components/
│   ├── Header.js             # Header component
│   ├── PhotoAlbum.js         # Photo slider
│   ├── LoveLetter.js         # Letter block
│   ├── ShortWishes.js        # Wishes section
│   ├── CTAButton.js          # Call-to-action button
│   ├── SecretModal.js        # Secret modal popup
│   ├── Footer.js             # Footer component
│   └── FloatingHearts.js     # Animated hearts
├── public/
│   └── images/               # Album photos
└── package.json
```

## 🎨 Customization

Chỉnh sửa nội dung trong `app/content.json`:

- `recipientName` - Tên người nhận
- `senderName` - Tên người gửi
- `loveLetter` - Nội dung thư tình
- `shortWishes` - Các câu chúc ngắn
- `secretMessages` - Tin nhắn bí mật

Thay ảnh trong `public/images/` (đặt tên 1.jpg, 2.jpg, ...)

## 💕 Made with Love

By Tấn for Quỳnh • 14/02
