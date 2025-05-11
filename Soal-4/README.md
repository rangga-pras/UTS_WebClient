
# 🎨 Soal 4 - Build website sesuai design dengn VITE

## 📌 Deskripsi Tugas

Project ini merupakan implementasi dari **Tugas UTS Mata Kuliah Web Client Development**. Tujuannya adalah untuk membangun **website portofolio pribadi** sesuai dengan desain Figma dari klien.

Fokus utama dari tugas ini:

* Menggunakan **React + Vite** untuk membangun struktur SPA
* Styling menggunakan **Tailwind CSS**
* Navigasi antar halaman menggunakan **React Router DOM**
* Menyesuaikan seluruh UI/UX dengan desain PDF dan website referensi klien

---

## 🛠️ Teknologi yang Digunakan

* ⚛️ **ReactJS** (via Vite)
* 🧭 **React Router DOM**
* 🎨 **Tailwind CSS**
* 📁 **Local asset system**
* 💡 **Responsive layout & custom animation**

---

## ⚛️ Komponen dan Hooks yang Digunakan

| Komponen/Hooks | Lokasi                       | Fungsi                                                |
| -------------- | ---------------------------- | ----------------------------------------------------- |
| `useState`     | LandingPage.jsx, Contact.jsx | Menyimpan status scroll dan toggle sidebar/tombol CTA |
| `useEffect`    | LandingPage.jsx              | Mendeteksi scroll untuk sticky navbar                 |
| `React Router` | App.jsx                      | Routing antar halaman (`/` dan `/contact`)            |

---

## 📦 Struktur Folder

```
src/
├── assets/
│   └── images/
│       ├── person.png
│       ├── person2.jpg
│       └── person3.png
├── pages/
│   ├── LandingPage.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🧠 Fitur Utama

* Hero section dengan teks bergerak overlay & tombol emoji 👋
* Sticky navbar yang berubah menjadi tombol ☰ + sidebar hitam saat scroll
* Section About & Recent Work dengan hover interaktif
* Carousel 2 baris otomatis dengan hover “Visit site”
* Testimonial section dengan avatar, nama, jabatan, dan quote
* Contact page 2 kolom (kiri: foto & info, kanan: form input)
* Footer elegan dengan CTA & sosial media — responsif penuh

---

## 🖥️ Preview Tampilan

### Halaman Utama (Landing Page)

* Hero
* About & Work
* Carousel
* Testimonial
* Footer

### Halaman Kontak (Contact Page)

* Contact
* Footer

---

## 🚀 Cara Menjalankan Project

### 1. Install Dependency

```bash
npm install
```

### 2. Jalankan Server Lokal

```bash
npm run dev
```

Akses di browser: [http://localhost:5173](http://localhost:5173)

---

##
