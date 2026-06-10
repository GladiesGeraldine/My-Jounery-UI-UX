# 📓 Learning Data, One Step at a Time — Jurnal Belajar Pribadi

Website ini adalah proyek portofolio interaktif dan jurnal digital personal yang mendokumentasikan perjalanan belajar saya sebagai mahasiswi Sistem Informasi (FILKOM UB) menuju impian menjadi seorang *Data Analyst*. Proyek ini dibangun dengan pendekatan estetika *scrapbook* digital untuk memenuhi Tugas Individu mata kuliah Desain Antarmuka Pengguna.

## 🔗 Tautan Penting
* **Live Website:** [Kunjungi Website Saya](https://gladiesgeraldine.github.io/My-Jounery-UI-UX/)
* **Repository:** [GitHub Repository](https://github.com/GladiesGeraldine/My-Jounery-UI-UX)

---

## ✨ Fitur Utama Website

Website ini tidak hanya mengandalkan visual yang menarik, tetapi juga dilengkapi dengan fungsionalitas interaktif:

### 1. Sistem Filter Proyek Interaktif
Pengguna dapat menyaring daftar proyek berdasarkan kategori (UI/UX, Pemweb, PPB) secara *real-time* melalui tombol tab filter yang responsif tanpa perlu memuat ulang halaman.

### 2. Animasi Muncul Saat Di-scroll (*Scroll-Fade Animation*)
Menggunakan *Intersection Observer API* pada JavaScript untuk mendeteksi pergerakan *scroll* pengguna, memberikan efek transisi kemunculan elemen (*fade-in & slide-up*) yang halus dan modern.

### 3. Navigasi Dinamis (*Active Navigation Highlight*)
Menu pada *navbar* akan otomatis berubah menjadi aktif (*highlight*) sesuai dengan area *section* yang sedang dilihat oleh pengguna di layar.

### 4. Optimalisasi Layout Seluler (*Mobile Responsive Design*)
Tampilan website telah dioptimalkan secara penuh menggunakan CSS Grid, Flexbox, dan `@media screen` agar tetap rapi, proporsional, dan terhindar dari teks terpotong saat diakses via *smartphone* atau tablet.

---

## 🎨 Prinsip Desain UI/UX

Website ini dirancang secara matang dengan menerapkan prinsip-prinsip utama antarmuka pengguna:

### 🎯 Target Pengguna (Target Audience)
* Dosen mata kuliah Desain Antarmuka Pengguna.
* Rekruter atau praktisi industri di bidang *Data Science / Analytics*.
* Rekan sesama mahasiswa untuk berbagi inspirasi.

### 🎨 Konsistensi Desain (Consistency)
* **Palet Warna:** Menggunakan tema alam/sage yang menenangkan (Sage Green `#A7B194`, Off-White `#FBFBF9`, dan Dark Slate `#2D3129`) untuk memperkuat kesan jurnal/scrapbook digital yang estetik namun tetap profesional.
* **Tipografi:** Kombinasi font *Playfair Display* (Serif) untuk memberikan hierarki visual yang kuat pada judul/heading, serta *DM Sans* (Sans-Serif) untuk kejelasan keterbacaan pada teks paragraf body.

### 🧭 Navigasi yang Jelas (Navigation)
* Komponen *Fixed Navbar* di bagian atas dilengkapi dengan efek *backdrop blur* transparan, memudahkan pengguna berpindah antar-bagian halaman secara instan kapan saja.

---

## 🛠️ Teknologi & Alat Kerja yang Digunakan

### Elemen Frontend & Hosting
* **HTML5:** Struktur semantik dokumen website.
* **CSS3:** Kustomisasi layout (Grid & Flexbox), pewarnaan, *scrapbook styling*, dan *floating animation*.
* **JavaScript (Vanilla JS):** Logika interaktivitas filter, navigasi dinamis, dan deteksi scroll.
* **FontAwesome:** Library ikon visual pada bagian timeline dan footer.
* **GitHub Pages:** Layanan hosting untuk meluncurkan website ke publik.

### Aplikasi Desain & Kerja Harian
* **Figma:** Perancangan *Hi-Fi Design System*.
* **MySQL Workbench & Bizagi Modeler:** Pemodelan basis data dan proses bisnis.
* **VS Code:** Editor kode utama selama pengembangan.

---

## 📂 Struktur Direktori Proyek

```text
├── index.html          # Struktur utama halaman website
├── style.css           # Desain visual, variabel warna, dan query responsif mobile
├── script.js          # Logika interaktivitas dan animasi scroll
├── pict/               # Folder penyimpanan aset gambar (gambar1.jpg s.d gambar13.jpeg)
└── README.md           # Dokumentasi proyek
