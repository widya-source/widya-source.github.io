# Widya Aprilia — Portofolio Pribadi

Website portofolio pribadi **Widya Aprilia**, fresh graduate S1 Teknik Informatika
Universitas PGRI Semarang. Menampilkan profil, keahlian teknis, 7 project pilihan,
riwayat pendidikan, sertifikat & pelatihan, serta pengalaman organisasi.

**Live Demo:** https://widya-source.github.io/

---

## Tentang

Portofolio ini dibuat sebagai media personal branding untuk menampilkan karya,
keterampilan, dan pencapaian di bidang **Software Development**, **Web Development**,
**Machine Learning**, dan **Pengolahan Data**. Fokus pada pengalaman pengguna yang
bersih, responsif, dan cepat dengan tema gelap modern.

## Fitur

- **Mode terang & gelap** dengan tombol toggle, tersimpan otomatis (localStorage) dan mengikuti preferensi sistem (`prefers-color-scheme`)
- Desain responsif (mobile, tablet, desktop) dengan tema modern dan kontras warna yang disesuaikan per mode
- Animasi halus: typing effect, reveal on scroll, marquee tech stack, dan counter statistik
- Navigasi sticky dengan menu mobile dan indikator section aktif
- Progress bar scroll dan tombol kembali ke atas
- Dukungan `prefers-reduced-motion` serta fallback `<noscript>`

## Tech Stack

- **HTML5** — struktur semantik
- **CSS3** — custom properties, flexbox, grid, animasi
- **JavaScript (vanilla)** — interaksi dan animasi (`IntersectionObserver`, `requestAnimationFrame`)
- **Google Fonts** — Inter & Space Grotesk
- Logo teknologi dalam format **SVG**

## Project Unggulan

**Data, Machine Learning & Sistem Cerdas**

1. NLP Lyrics Clustering — Python · Flask · Pandas · TF-IDF · K-Means
2. ML Prediksi Pendapatan Penduduk (end-to-end) — Python · Scikit-learn · Flask
3. Plant Disease Detection — Python · Scikit-learn · Flask
4. Klasterisasi Pola Perjalanan Wisatawan Nusantara — DBSCAN + SIG — Python · Pandas · Scikit-learn

**Web & Application Development**

5. Sistem Reservasi Layanan MUA "Glamora MUA" — Laravel · PHP · MySQL · Vite
6. Sistem Pelaporan Technical Director (metode Waterfall) — CodeIgniter 3 · PHP · MySQL
7. SimpleContact — chat ala WhatsApp — Flutter · Dart

## Struktur Proyek

```
myportofolio/
├── index.html          # Halaman utama
├── style.css           # Styling & animasi
├── script.js           # Interaksi & animasi
├── README.md
└── assets/
    ├── profile.JPEG    # Foto profil
    └── icons/          # Logo teknologi (SVG)
```

## Menjalankan Secara Lokal

Tidak memerlukan proses build. Cukup buka `index.html` di browser, atau jalankan
server lokal sederhana:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Lalu buka `http://localhost:8000`.

## Deploy

Website ini di-deploy dengan **GitHub Pages** dari branch `main` (folder root):

1. Buka **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `main` / `/(root)` → **Save**

Setiap `push` ke branch `main` akan otomatis memperbarui situs.

## Kontak

- **Email:** widyaaprila04@gmail.com
- **LinkedIn:** [linkedin.com/in/widya-aprilia20](https://www.linkedin.com/in/widya-aprilia20)
- **GitHub:** [github.com/widya-source](https://github.com/widya-source)

---

© 2026 Widya Aprilia. Dibuat dengan dedikasi untuk dunia teknologi.
