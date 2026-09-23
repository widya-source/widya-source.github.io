# Portfolio — Widya Aprilia

Portofolio **fresh graduate Teknik Informatika** dengan tema gelap modern, lengkap dengan
animasi (typing effect, reveal on scroll, marquee logo tech stack, counter statistik, cursor glow)
dan **logo resmi teknologi** (Python, JavaScript, PHP, HTML, CSS, Flask, Laravel, CodeIgniter,
Bootstrap, Pandas, NumPy, Scikit-learn, MySQL, SQLite, Git, GitHub, VS Code, Figma, Flutter,
Dart, Vite, Adobe Photoshop, Adobe Premiere Pro, CorelDraw, Microsoft Word & PowerPoint).

## 7 Project di portofolio
**Data, ML & Sistem Cerdas**
1. NLP Lyrics Clustering (Python · Flask · Pandas · TF-IDF · K-Means)
2. ML Prediksi Pendapatan Penduduk — end-to-end (Python · Scikit-learn · Flask)
3. Plant Disease Detection — sistem cerdas prediksi penyakit tanaman (Python · Scikit-learn · Flask)
4. Klasterisasi Pola Perjalanan Wisatawan Nusantara — DBSCAN + SIG (Python · Pandas · Scikit-learn)

**Web & Application Development**
5. Sistem Reservasi Layanan MUA — Glamora MUA (Laravel · PHP · MySQL · Vite)
6. Sistem Pelaporan Technical Director — metode Waterfall (CodeIgniter 3 · PHP · MySQL)
7. SimpleContact — chat ala WhatsApp (Flutter · Dart)

## Sertifikat unggulan
- Publikasi artikel jurnal **BUSITI (terakreditasi Sinta 2)** — penulis utama: "Klasterisasi Pola Perjalanan Wisatawan Nusantara Menggunakan DBSCAN Berbasis SIG"
- Millennials Entrepreneur Summit Singapura & Malaysia 2022 · Semarang Young Entrepreneurship Festival 2022 (Public Speaking, Leadership, Entrepreneurship) · Akademi Keuangan Mahasiswa UPGRIS 2022

## Struktur file
```
portfolio_fresh_graduate/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── icons/              # logo bahasa pemrograman & aplikasi
    ├── profile.JPEG        # foto profil (hero)
    ├── CV_Widya_Aprilia.pdf              # CV final (otomotis dari CV_Widya_Aprilia_src.html)
    ├── CV_Widya_Aprilia_src.html         # sumber CV (untuk diedit & dibuat ulang PDF-nya)
    ├── Portofolio_Widya_Aprilia.pdf      # Portofolio final (otomotis dari Portofolio_Widya_Aprilia_src.html)
    └── Portofolio_Widya_Aprilia_src.html # sumber portofolio (untuk diedit & dibuat ulang PDF-nya)
```

## Menjalankan website
Cukup buka `index.html` di browser (tidak perlu server).

## Yang perlu diisi (satu-satunya placeholder tersisa)
- Link tiap project di `index.html` (sudah mengarah ke `github.com/widya-source/...`) — sesuaikan nama repo dengan yang asli.

## CV & Portofolio (PDF)
- **CV** (`assets/CV_Widya_Aprilia.pdf`) — ringkasan tertulis riwayat hidup, pendidikan, dan pengalaman kerja (format ATS, 3 halaman). Sudah terhubung ke tombol **Download CV**.
- **Portofolio** (`assets/Portofolio_Widya_Aprilia.pdf`) — kumpulan bukti karya & proyek (3 halaman): tiap karya menjelaskan masalah, solusi, hasil, dan link repository.
Untuk mengubah isinya: edit file `_src.html` terkait, lalu render ulang ke PDF
(beri tahu saya, atau buka file HTML di Chrome lalu File → Print → Save as PDF).

## Deploy online (buat portofolio jadi publik)
Gunakan **GitHub Pages** (gratis) — URL jadi `https://widya-source.github.io/`:
1. Buat repository di GitHub dengan nama **`widya-source.github.io`** (harus persis: `<username>.github.io`).
2. Upload isi folder `myportofolio` (index.html, style.css, script.js, assets/) ke repo tersebut.
3. Di repo → **Settings → Pages** → Source: *Deploy from a branch* → pilih branch `main` / `/ (root)` → **Save**.
4. Tunggu 1–2 menit, lalu buka `https://widya-source.github.io/`.

Alternatif: Netlify / Vercel (drop folder langsung ke dashboard, dapat URL otomatis).

Fitur: responsive, navigasi sticky + mobile menu, progress bar scroll, tombol kembali ke atas,
dukungan `prefers-reduced-motion`, dan fallback `<noscript>`.