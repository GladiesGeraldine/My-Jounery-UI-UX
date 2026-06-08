# 📓 Learning Data, One Step at a Time — Jurnal Belajar Pribadi

Website ini adalah proyek portofolio interaktif dan jurnal digital personal yang mendokumentasikan perjalanan belajar saya sebagai mahasiswi Sistem Informasi (FILKOM UB) menuju impian menjadi seorang *Data Analyst*[cite: 2]. Proyek ini dibangun dengan pendekatan estetika *scrapbook* digital untuk memenuhi Tugas Individu mata kuliah Desain Antarmuka Pengguna[cite: 2, 4].

## 🔗 Tautan Penting
* **Live Website:** [Kunjungi Website Saya](https://gladiesgeraldine.github.io/My-Jounery-UI-UX/)[cite: 2]
* **Repository:** [GitHub Repository](https://github.com/GladiesGeraldine/My-Jounery-UI-UX)[cite: 2]

---

## ✨ Fitur Utama Website

Website ini tidak hanya mengandalkan visual yang menarik, tetapi juga dilengkapi dengan fungsionalitas interaktif:

### 1. Sistem Filter Proyek Interaktif
Pengguna dapat menyaring daftar proyek berdasarkan kategori (UI/UX, Pemweb, PPB) secara *real-time* melalui tombol tab filter yang responsif tanpa perlu memuat ulang halaman[cite: 1, 3].

### 2. Animasi Muncul Saat Di-scroll (*Scroll-Fade Animation*)
Menggunakan *Intersection Observer API* pada JavaScript untuk mendeteksi pergerakan *scroll* pengguna, memberikan efek transisi kemunculan elemen (*fade-in & slide-up*) yang halus dan modern[cite: 3, 4].

### 3. Navigasi Dinamis (*Active Navigation Highlight*)
Menu pada *navbar* akan otomatis berubah menjadi aktif (*highlight*) sesuai dengan area *section* yang sedang dilihat oleh pengguna di layar[cite: 3, 4].

### 4. Optimalisasi Layout Seluler (*Mobile Responsive Design*)
Tampilan website telah dioptimalkan secara penuh menggunakan CSS Grid, Flexbox, dan `@media screen` agar tetap rapi, proporsional, dan terhindar dari teks terpotong saat diakses via *smartphone* atau tablet[cite: 2, 4].

---

## 🎨 Prinsip Desain UI/UX

Website ini dirancang secara matang dengan menerapkan prinsip-prinsip utama antarmuka pengguna:

### 🎯 Target Pengguna (Target Audience)
* Dosen mata kuliah Desain Antarmuka Pengguna[cite: 2].
* Rekruter atau praktisi industri di bidang *Data Science / Analytics*[cite: 2].
* Rekan sesama mahasiswa untuk berbagi inspirasi[cite: 2].

### 🎨 Konsistensi Desain (Consistency)
* **Palet Warna:** Menggunakan tema alam/sage yang menenangkan (Sage Green `#A7B194`, Off-White `#FBFBF9`, dan Dark Slate `#2D3129`) untuk memperkuat kesan jurnal/scrapbook digital yang estetik namun tetap profesional[cite: 2, 4].
* **Tipografi:** Kombinasi font *Playfair Display* (Serif) untuk memberikan hierarki visual yang kuat pada judul/heading, serta *DM Sans* (Sans-Serif) untuk kejelasan keterbacaan pada teks paragraf body.

### 🧭 Navigasi yang Jelas (Navigation)
* Komponen *Fixed Navbar* di bagian atas dilengkapi dengan efek *backdrop blur* transparan, memudahkan pengguna berpindah antar-bagian halaman secara instan kapan saja[cite: 2, 4].

---

## 🛠️ Teknologi & Alat Kerja yang Digunakan

### Elemen Frontend & Hosting
* **HTML5:** Struktur semantik dokumen website[cite: 2].
* **CSS3:** Kustomisasi layout (Grid & Flexbox), pewarnaan, *scrapbook styling*, dan *floating animation*[cite: 2, 4].
* **JavaScript (Vanilla JS):** Logika interaktivitas filter, navigasi dinamis, dan deteksi scroll[cite: 3].
* **FontAwesome:** Library ikon visual pada bagian timeline dan footer[cite: 1, 2].
* **GitHub Pages:** Layanan hosting untuk meluncurkan website ke publik[cite: 2].

### Aplikasi Desain & Kerja Harian
* **Figma:** Perancangan *Hi-Fi Design System*[cite: 1, 4].
* **MySQL Workbench & Bizagi Modeler:** Pemodelan basis data dan proses bisnis[cite: 1, 4].
* **VS Code:** Editor kode utama selama pengembangan[cite: 1, 4].

---

## 📂 Struktur Direktori Proyek

```text
├── index.html          # Struktur utama halaman website
├── style.css           # Desain visual, variabel warna, dan query responsif mobile
├── script.js          # Logika interaktivitas dan animasi scroll
├── pict/               # Folder penyimpanan aset gambar (gambar1.jpg s.d gambar13.jpeg)
└── README.md           # Dokumentasi proyek