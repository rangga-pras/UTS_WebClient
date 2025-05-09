# Exercise 2 – JavaScript vs TypeScript in Practice

Repository ini berisi implementasi **5 fungsi dasar** dalam dua bahasa pemrograman: **JavaScript** dan **TypeScript**, sebagai pembanding praktik penggunaan keduanya. Setiap fungsi dibuat dalam file terpisah berdasarkan nama fungsinya (bukan kata kerja), dan dieksekusi bersamaan melalui satu file utama (`main.js` atau `main.ts`).

---

## 📁 Struktur Folder

```
exercise_2/
├── javascript/
│   ├── convertLength.js
│   ├── fahrenheitToCelcius.js
│   ├── oddEven.js
│   ├── removeString.js
│   ├── palindrome.js
│   └── main.js
├── typescript/
│   ├── convertLength.ts
│   ├── fahrenheitToCelcius.ts
│   ├── oddEven.ts
│   ├── removeString.ts
│   ├── palindrome.ts
│   └── main.ts
```

---

## 🚀 Cara Menjalankan

### TypeScript (compile menjadi JavaScript)
```bash
cd typescript
tsc main.ts
node main.js
```

---

## 📌 Soal & Fungsi yang Diimplementasikan

1. **Konversi suhu Fahrenheit ke Celsius**
   - Fungsi: `fahrenheitToCelsius(f: number): number`

2. **Konversi panjang dari centimeter ke kilometer**
   - Fungsi: `convertLength(cm: number): string`

3. **Menentukan apakah bilangan genap**
   - Fungsi: `isEven(n: number): boolean`

4. **Menghapus substring pertama yang ditemukan dalam sebuah string**
   - Fungsi: `removeFirstOccurrence(text: string, search: string): string`

5. **Mengecek apakah string adalah palindrome**
   - Fungsi: `isPalindrome(text: string): boolean`

---

## 📦 Teknologi yang Digunakan

- JavaScript (ES6)
- TypeScript
- Node.js
- TypeScript Compiler (`tsc`)

---

## 📋 Contoh Output

```bash
Fahrenheit to Celsius: 37.77777777777778
Length Converter: 1000 km
Is 1000 even? true
Is 1001 even? false
Remove 'ell' from 'Hello world': Ho world
Is 'madam' a palindrome? true
```

---

## 🧩 Git Workflow

Proyek ini mengikuti alur kerja Git standar:
1. Inisialisasi repository:
   ```bash
   git init
   ```
2. Menambahkan dan commit awal:
   ```bash
   git add .
   git commit -m "Initial commit"
   ```
3. Menyambungkan ke repository GitHub:
   ```bash
   git remote add origin https://github.com/rangga-pras/UTS_WebClient.git
   git push -u origin main
   ```

Setiap perubahan dapat dilacak, diverifikasi, dan diatur melalui GitHub sebagai kontrol versi proyek.

---
