# 🧩 Soal 6 - React Hooks Pokémon App (Advanced Version)

## 📌 Deskripsi Proyek
Project ini merupakan pengembangan dari tugas sebelumnya (Soal 5), dengan menambahkan berbagai fitur lanjutan menggunakan **React Hooks** dan API publik dari [PokeAPI](https://pokeapi.co/). Aplikasi ini memungkinkan pengguna untuk melihat daftar Pokémon, memfilter berdasarkan tipe, dan beralih tampilan layout antara grid dan list.

---

## 🎯 Fitur Utama

### ✅ 1. **Pengambilan Data Pokémon dari API**
- Menggunakan `useEffect` untuk fetch 8 Pokémon pertama dari PokeAPI
- Data yang diambil: nama, ID, gambar resmi, tipe Pokémon, dan statistik dasar

### ✅ 2. **Penyimpanan LocalStorage**
- Data yang sudah di-fetch akan disimpan di `localStorage`
- Saat halaman direload, data diambil langsung dari cache tanpa fetch ulang
- Efisien dan menghemat kuota API

### ✅ 3. **Pencarian Nama Pokémon**
- Disediakan search bar untuk memfilter Pokémon berdasarkan nama
- Search bersifat real-time, menggunakan `useState`

### ✅ 4. **Filter Berdasarkan Type Pokémon**
- Menggunakan `Context API` untuk mengatur dan menyebarkan `selectedType`
- Dropdown filter memungkinkan pengguna memilih tipe seperti: Grass, Fire, Water, dsb
- Pokémon akan difilter sesuai tipe yang dipilih

### ✅ 5. **Switch Layout: Grid ↔ List**
- Tersedia toggle switch dua mode tampilan:
  - `Grid`: menampilkan kartu Pokémon dalam 2–4 kolom
  - `List`: menampilkan Pokémon dalam format vertikal lebar satu per baris
- Menggunakan `useState` dan ternary layout logic
- Tampilan berubah secara visual dan interaktif sesuai pilihan user

### ✅ 6. **Halaman Detail Pokémon**
- Setiap kartu dapat diklik untuk melihat halaman detail Pokémon
- Menampilkan:
  - Gambar utama Pokémon
  - Gambar sprite kecil (pixel version)
  - ID, nama, tipe, serta statistik: HP, Attack, Defense, Speed
  - Health bar progresif (dengan nilai 0–255)
  - Tombol `← Back` untuk kembali ke halaman utama

---

## 🛠️ Teknologi yang Digunakan

- **ReactJS** (Vite)
- **React Router DOM**
- **Tailwind CSS**
- **Context API**
- **LocalStorage API**
- **Fetch API**
- **PokeAPI**

---

## 📦 Struktur Proyek

```
src/
├── assets/
├── components/
│   ├── card/
│   │   └── Card.jsx
│   ├── list_card/
│   │   └── ListCard.jsx
│   └── navbar/
│       └── Navbar.jsx
├── context/
│   └── FilterContext.jsx
├── pages/
│   ├── HomePage/
│   │   └── HomePage.jsx
│   └── DetailPage/
│       └── DetailPage.jsx
├── App.jsx
└── main.jsx
```

---

## ⚛️ Penggunaan React Hooks

| Hook             | File                  | Fungsi                                                             |
|------------------|-----------------------|--------------------------------------------------------------------|
| `useState`       | HomePage, Card        | Menyimpan state lokal seperti data, input, layout view            |
| `useEffect`      | HomePage              | Fetch data dari API, simpan ke localStorage                       |
| `useNavigate`    | Card, DetailPage      | Navigasi antar halaman (ke detail dan back)                       |
| `useLocation`    | DetailPage            | Ambil data dari navigasi menuju halaman detail                    |
| `useContext`     | HomePage              | Ambil state filter `selectedType`                                 |
| `createContext`  | FilterContext         | Buat context global untuk dropdown filter tipe                    |


---

## 🎨 Tampilan Halaman

### 🏠 Halaman Utama
- Sticky Navbar
- Filter tipe dan pencarian nama
- Toggle layout switch
- Daftar 8 Pokémon

### 📄 Halaman Detail
- Gambar besar Pokémon + sprite pixel
- Stat lengkap dengan health bar
- Tombol kembali ke halaman utama

---

## 🌟 Kelebihan Proyek

- Clean code dengan React Hooks
- User-friendly UI (gelap, responsive)
- Interaktif dan ringan karena menggunakan localStorage
- Struktur folder terorganisir (component-based + context)
- Bisa dengan mudah dikembangkan (misal: pagination, dark mode toggle, dsb.)

---
