/** Indonesian (Bahasa Indonesia). Same shape as en.ts. */
import type { HubText } from "../../lib/hubs";
import { chartHub, dpiTable, homeTable, printHub, sizesHub, softwareTable } from "../build";
import type { Messages } from "./en";

const sizeLabels = [
  "8,5 × 11 inci (Letter)",
  "Ukuran A4",
  "5 × 7 inci",
  "4 × 6 inci",
  "8 × 10 inci",
  "18 × 24 inci",
  "24 × 36 inci",
  "2 × 2 inci",
  "Ukuran kartu (2,5 × 3,5)",
];

export const id: Messages = {
  ui: {
    common: {
      pageNames: { home: "Beranda", dpi: "DPI", software: "Perangkat lunak", print: "Cetak & foto", sizes: "Ukuran", chart: "Tabel" },
      quality: { archival: "Kualitas cetak arsip", proof: "Kualitas cetak uji", screen: "Resolusi layar" },
      qualityInline: { archival: "kualitas cetak arsip", proof: "kualitas cetak uji", screen: "resolusi layar" },
      copied: "Tersalin!",
      copyFailed: "Gagal menyalin",
    },
    nav: {
      brandSub: "KONVERTER DPI & PPI",
      homeAria: "Beranda Inches to Pixel",
      topAria: "Inches to Pixel, kembali ke atas",
      pagesAria: "Halaman",
      pages: "Halaman",
      onThisPage: "Di halaman ini",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
      share: "Bagikan",
      linkCopied: "Tautan disalin",
      sections: { converter: "Konverter", visual: "Skala visual", slides: "Slide", presets: "Ukuran", guide: "Panduan DPI", faq: "FAQ" },
      language: "Bahasa",
      languageAria: "Pilih bahasa",
    },
    theme: { toDark: "Beralih ke mode gelap", toLight: "Beralih ke mode terang", dark: "Mode gelap", light: "Mode terang" },
    footer: { languages: "Bahasa" },
    faq: { eyebrow: "Pertanyaan umum", title: "PANDUAN", highlight: "AHLI" },
    hero: {
      badge: "Seni skala digital",
      badgeRule: "1 INCI = 96 PX",
      h1Before: "Kalkulator inci ke ",
      h1Highlight: "piksel",
      h1After: "",
      shelfTitle: "Pilih resolusi target (DPI / PPI)",
      tags: { standard: "Standar", fineArt: "Seni rupa" },
      presets: [
        { label: "Standar web", desc: "Web lama & layar" },
        { label: "Standar CSS", desc: "W3C & bawaan Windows" },
        { label: "Draf redaksi", desc: "Koran & cetak uji" },
        { label: "Cetak seni", desc: "Giclée museum & buku" },
        { label: "Layar Retina", desc: "OLED & ponsel unggulan" },
      ],
      equations: [
        { label: "Aturan W3C", value: "1 in = 96 px", note: "standar CSS" },
        { label: "Aturan cetak museum", value: "1 in = 300 px", note: "pada 300 DPI" },
        { label: "Padanan metrik", value: "1 in = 2,54 cm", note: "= 25,4 mm" },
      ],
    },
    converter: {
      title: "Konverter inci ke piksel",
      modeAria: "Mode konverter",
      tabLengthShort: "Panjang",
      tabLength: "Satu panjang (1D)",
      tabSizeShort: "L × T",
      tabSize: "Dimensi 2D (L × T)",
      resolution: "Resolusi",
      dpiRange: "Gunakan 1 sampai {max}",
      enterAbove0: "Masukkan angka lebih dari 0.",
      physicalSize: "Ukuran fisik (inci)",
      swap: "Tukar",
      swapTitle: "Tukar lebar dan tinggi",
      ratioLocked: "Rasio terkunci",
      lockRatio: "Kunci rasio",
      width: "Lebar",
      height: "Tinggi",
      lockHint: "Lebar dan tinggi berubah bersamaan agar tetap {ratio}.",
      totalArea: "Luas total",
      sqIn: "inci²",
      aspectRatio: "Rasio aspek",
      digitalSize: "Ukuran digital (piksel)",
      copySize: "Salin ukuran",
      totalPixels: "Total piksel",
      megapixels: "Megapiksel",
      ratioTitle: "Atur tinggi dari lebar berdasarkan rasio aspek",
      ratios: ["1:1 Persegi", "4:3 Klasik", "16:9 Layar lebar", "3:2 Foto 35 mm", "4:5 Galeri", "5:7 Cetak"],
      centimeters: "Sentimeter",
      millimeters: "Milimeter",
      points: "Poin (72 / inci)",
      surfaceArea: "Luas permukaan",
      lengthInInches: "Panjang dalam inci",
      lengthInPixels: "Panjang dalam piksel",
      pixelsAt: "Piksel pada {dpi} DPI",
      copyPixels: "Salin piksel",
      formulaTitle: "Rumusnya",
      formula: "Piksel = Inci × DPI",
      reverse: "Kebalikannya: Inci = Piksel ÷ DPI",
      copyCss: "Salin CSS",
    },
    visual: {
      eyebrow: "Tampilan waktu nyata",
      title: "VIEWPORT",
      highlight: "ARSITEKTURAL",
      description:
        "Lihat skala fisik dalam inci berubah menjadi struktur piksel digital secara langsung. Beralih antara gambar teknik presisi, kaca pembesar piksel ala perhiasan, dan pameran galeri.",
      modeAria: "Mode pratinjau",
      modes: { canvas: "Kanvas teknik", loupe: "Kaca pembesar piksel", gallery: "Salon galeri" },
      zoomOut: "Perkecil",
      zoomIn: "Perbesar",
      resetZoom: "Atur ulang zoom",
      summary: "{w} kali {h} inci, {wpx} kali {hpx} piksel pada {dpi} DPI",
      loupeTitle: "Satu inci fisik di bawah kaca pembesar",
      loupeDesc: "Bagaimana kerapatan kisi berubah dari layar (72 DPI) ke standar CSS (96 DPI) hingga cetak seni (300 DPI).",
      loupe72: "72 DPI · Web lama",
      loupe72Note: "Tepi piksel kasar terlihat oleh mata.",
      loupe96: "96 DPI · CSS W3C",
      loupe96Note: "1 inci tepat sama dengan 96 piksel CSS.",
      loupe300: "300 DPI · Arsip",
      loupe300Note: "Nada kontinu tanpa jeda.",
      yourSetting: "Pengaturan Anda:",
    },
    slides: {
      eyebrow: "Kelas visual & slide",
      title: "INCI KE PIKSEL:",
      highlight: "VISUAL & SLIDE",
      description:
        "Penjelajahan visual interaktif tentang perubahan inci menjadi raster, standar W3C, geometri subpiksel Retina, dan skala cetak premium.",
      carouselAria: "Slide inci ke piksel",
      slide: "Slide",
      pauseAria: "Jeda tayangan slide otomatis",
      playAria: "Mulai tayangan slide otomatis",
      pause: "Jeda",
      play: "Putar",
      prev: "Slide sebelumnya",
      next: "Slide berikutnya",
      slideOf: "{n} dari {total}: {title}",
      axiom: "Aksioma matematis:",
      calibrate: "ATUR KONVERTER DENGAN SPESIFIKASI INI",
      chooseSlide: "Pilih slide",
      slideLabel: "Slide {n}: {title}",
      specsTitle: "Spesifikasi slide:",
      items: [
        {
          badge: "DASAR-DASAR",
          title: "Awal mula inci digital",
          subtitle: "Bagaimana kerapatan mengubah jarak menjadi gambar raster",
          quote: "Satu inci fisik tetap dalam perunggu; di dunia digital, besarnya ditentukan oleh kerapatan.",
          keyFormula: "Piksel = Inci × DPI (titik per inci)",
          description:
            "Berbeda dengan penggaris kuningan atau baja, inci digital tidak memiliki jumlah piksel yang tetap. Jumlah pikselnya bertambah langsung sesuai DPI (titik per inci) media.",
          specs: [
            { label: "72 DPI (Web 1.0)", value: "72 piksel" },
            { label: "96 DPI (standar CSS)", value: "96 piksel" },
            { label: "150 DPI (redaksi)", value: "150 piksel" },
            { label: "300 DPI (seni rupa)", value: "300 piksel" },
            { label: "600 DPI (sangat halus)", value: "600 piksel" },
          ],
        },
        {
          badge: "KANON RESMI W3C",
          title: "Standar 96 piksel CSS",
          subtitle: "Jangkar matematis web global",
          quote: "1in = 96px bukan perkiraan, melainkan konstanta tetap yang tertuang dalam spesifikasi CSS W3C.",
          keyFormula: "1 inci ≡ 96 px CSS ≡ 2,54 cm ≡ 72 pt ≡ 6 pc",
          description:
            "Pada 1996, World Wide Web Consortium menetapkan piksel acuan pada jarak pandang 28 inci dengan sudut 0,0213 derajat. Dari situ ditetapkan bahwa 1 inci CSS secara matematis sama dengan tepat 96 piksel CSS.",
          specs: [
            { label: "Jarak acuan", value: "28 inci (71 cm)" },
            { label: "Sudut pandang", value: "0,0213 derajat" },
            { label: "US Letter (8,5×11\")", value: "816 × 1.056 px" },
            { label: "Poin (pt) per inci", value: "72 pt" },
            { label: "Pika (pc) per inci", value: "6 pc" },
          ],
        },
        {
          badge: "STANDAR GICLÉE ARSIP",
          title: "Seni museum & 300 DPI",
          subtitle: "Ambang penglihatan manusia yang tak kasatmata",
          quote: "Cetak premium sejati membutuhkan minimal 300 DPI: di situ setiap tetes tinta melebur menjadi nada yang mulus.",
          keyFormula: "Piksel yang dibutuhkan = Inci target × 300 DPI",
          description:
            "Saat melihat cetakan galeri dari jarak baca normal 12–14 inci, retina manusia dapat membedakan hingga 300 titik per inci. Di bawah 300 DPI, pikselasi bertangga mengurangi ketajaman tepi.",
          specs: [
            { label: "Standar museum", value: "Giclée 300 DPI" },
            { label: "Bingkai 16×20\"", value: "4.800 × 6.000 px" },
            { label: "Total beban sensor", value: "28,8 megapiksel" },
            { label: "Kerapatan tetes tinta", value: "1.200–2.400 tetes" },
            { label: "Daya tahan arsip", value: "Lebih dari 100 tahun" },
          ],
        },
        {
          badge: "LAYAR RETINA & KERAPATAN TINGGI",
          title: "Rasio piksel perangkat (DPR)",
          subtitle: "Piksel perangkat keras fisik vs piksel CSS abstrak",
          quote: "Di layar Super Retina 3x, 1 inci CSS tetap bernilai 96 unit CSS, tetapi memakai 288 dioda fisik.",
          keyFormula: "Px fisik perangkat = Px CSS × DPR (1x, 2x, 3x)",
          description:
            "Layar Super Retina XDR Apple dan layar 4K/8K modern memisahkan piksel perangkat keras fisik dari piksel logis CSS. Garis CSS 96 px di iPhone 16 Pro digambar dengan hampir 300 mikro-subpiksel OLED fisik.",
          specs: [
            { label: "1 inci CSS", value: "96 px CSS" },
            { label: "Faktor DPR Apple", value: "3,00x Super Retina" },
            { label: "Px perangkat keras fisik", value: "288 px perangkat keras" },
            { label: "PPI perangkat keras", value: "460 PPI" },
            { label: "Susunan subpiksel", value: "OLED PenTile berlian" },
          ],
        },
        {
          badge: "PROPORSI PILIHAN",
          title: "Matriks bingkai premium",
          subtitle: "Ukuran arsitektural & seni rupa standar pada 300 DPI",
          quote: "Proporsi emas pembingkaian seni klasik, diterjemahkan menjadi spesifikasi digital yang tepat.",
          keyFormula: "Kualitas arsip (300 DPI) = Pameran galeri tanpa cela",
          description:
            "Dari potret salon klasik hingga karya museum berukuran besar, setiap ukuran bingkai dalam inci memiliki kanvas piksel tepat yang dibutuhkan untuk reproduksi tanpa cacat.",
          specs: [
            { label: "Potret galeri 8 × 10\"", value: "2.400 × 3.000 px" },
            { label: "Cetakan salon 11 × 14\"", value: "3.300 × 4.200 px" },
            { label: "Bingkai kolektor 16 × 20\"", value: "4.800 × 6.000 px" },
            { label: "Karya besar 24 × 36\"", value: "7.200 × 10.800 px" },
            { label: "Mural museum 40 × 60\"", value: "12.000 × 18.000 px" },
          ],
        },
      ],
      spectrum: {
        title: "1 INCI FISIK DI BERBAGAI KERAPATAN",
        bars: ["72 DPI (layar lama)", "96 DPI (CSS W3C)", "150 DPI (cetak uji redaksi)", "300 DPI (giclée seni)"],
        note: "Pada 300 DPI, 1 inci berisi lebih dari 4× lipat piksel dibanding standar web lama.",
      },
      w3c: {
        title: "PIKSEL ACUAN & SUDUT W3C",
        observer: "Pengamat",
        distance: "Jarak pandang 28\" (0,0213°)",
        cssInch: "Inci CSS",
        centimeters: "Sentimeter",
        typographyPt: "Poin tipografi",
        picas: "Pika",
      },
      fineart: {
        title: "PIKSELASI RASTER VS NADA GICLÉE KONTINU",
        printed72: "Dicetak 72 DPI",
        jagged: "Tepi bergerigi terlihat (aliasing)",
        archival300: "Arsip 300 DPI",
        smooth: "Lengkung mulus yang sangat tajam",
        summary: "16 × 20 inci pada 300 DPI = 4.800 × 6.000 piksel (28,8 MP)",
      },
      retina: {
        title: "GEOMETRI SUBPIKSEL & RASIO PIKSEL PERANGKAT",
        rows: [
          { name: "Layar 1x DPR", device: "Monitor standar lama", value: "1 px CSS = 1 px fisik" },
          { name: "2x DPR (Retina)", device: "MacBook Pro & iPad Pro", value: "1 px CSS = 4 px fisik (2×2)" },
          { name: "3x DPR (Super Retina XDR)", device: "iPhone Pro OLED", value: "1 px CSS = 9 px fisik (3×3)" },
        ],
        summary: "1 inci di iPhone 16 Pro = 96 px CSS = ",
        summaryStrong: "288 piksel fisik",
      },
      framing: {
        title: "PROPORSI DINDING GALERI PADA 300 DPI",
        sensor: "Sensor: {mp}",
        note: "Untuk karya besar (24×36\" ke atas), sensor format medium beresolusi tinggi atau pembesaran AI memastikan bebas grain.",
      },
    },
    presets: {
      eyebrow: "Indeks ukuran pilihan",
      title: "MATRIKS",
      highlight: "UKURAN",
      description:
        "Kumpulan ukuran acuan untuk bingkai museum, alat tulis redaksi, layar unggulan, dan aset digital.",
      filterAria: "Saring ukuran menurut kategori",
      categories: {
        all: "Semua format",
        art: "Seni & bingkai",
        editorial: "Redaksi & buku",
        device: "Layar perangkat",
        social: "Digital & media sosial",
      },
      showing: "Menampilkan {shown} dari {total} ukuran",
      recommended: "Disarankan {dpi} DPI",
      physicalSize: "Ukuran fisik",
      web: "96 DPI (web)",
      print: "300 DPI (cetak)",
      use: "GUNAKAN UKURAN INI",
      useAria: "Gunakan {name} pada {dpi} DPI di konverter",
      items: [
        { name: "Potret galeri klasik 8 × 10\"", description: "Standar ikonik potret museum dan bingkai seni." },
        { name: "Cetakan pameran 11 × 14\"", description: "Cetakan arsip standar untuk galeri interior." },
        { name: "Bingkai dinding kolektor 16 × 20\"", description: "Ukuran favorit untuk ruang yang ingin tampil menonjol." },
        { name: "Karya besar 24 × 36\"", description: "Karya utama untuk hunian premium." },
        { name: "Mural arsitektural 30 × 40\"", description: "Karya berskala museum dengan kedalaman nada penuh." },
        { name: "Kertas US Letter 8,5 × 11\"", description: "Kertas standar Amerika untuk dokumen." },
        { name: "A4 internasional 8,27 × 11,69\"", description: "Kertas standar global (ISO 216) untuk cetak internasional." },
        { name: "Kartu nama eksekutif 3,5 × 2,0\"", description: "Standar kartu nama khusus dengan cetak foil emas." },
        { name: "Buku seni monograf 12 × 12\"", description: "Halaman ganda persegi buku meja premium." },
        { name: "Layar iPhone 16 Pro (fisik)", description: "Ukuran fisik layar Super Retina unggulan." },
        { name: "Layar MacBook Pro 16,2\" (fisik)", description: "Ukuran fisik layar Liquid Retina XDR." },
        { name: "TV 4K 55\" (fisik)", description: "Ukuran fisik panel UHD 3840×2160." },
        { name: "Kanvas persegi 1080 × 1080 px", description: "Aset persegi 1080 px yang dinyatakan dalam inci pada 96 DPI." },
        { name: "Reel/Story vertikal 1080 × 1920 px", description: "Kanvas ponsel layar penuh (rasio 9:16)." },
      ],
    },
    hubCalc: {
      titleIn: "Kalkulator inci ke piksel",
      titlePx: "Kalkulator piksel ke inci",
      size: "Ukuran",
      customSize: "Ukuran khusus",
      width: "Lebar",
      height: "Tinggi",
      dpi: "DPI",
      custom: "Lainnya",
      dpiError: "Gunakan DPI dari 1 sampai {max}.",
      result: "Hasil",
      resultSub: "{w} × {h} {unit} pada {dpi} DPI",
      enterBoth: "Masukkan lebar dan tinggi lebih dari 0.",
      needMore: "Perlu kunci rasio, satuan lain, atau pratinjau visual?",
      openFull: "Buka konverter lengkap",
    },
    sizeLabels,
  },
  content: {
    meta: {
      siteTitle: "Kalkulator Inci ke Piksel | Konversi Ukuran dengan PPI",
      siteDescription:
        "Konversi inci ke piksel dengan PPI pilihan Anda. Pelajari rumusnya, hitung lebar dan tinggi, dan lihat contoh dimensi untuk cetak dan CSS.",
    },
    page: {
      skipToConverter: "Lompat ke konverter",
      skipToCalculator: "Lompat ke kalkulator",
      breadcrumb: "Navigasi jejak",
      related: "Halaman terkait",
      relatedHome: "Konverter inci ke piksel",
      hubFaqDescription: "Jawaban singkat untuk pertanyaan yang paling sering diajukan tentang topik ini.",
    },
    footer: {
      blurb:
        "Konverter inci ke piksel gratis untuk layar dan cetak. Konversi ukuran apa pun pada DPI apa pun, periksa ukuran cetak, dan temukan nilai umum di satu tempat.",
      openConverter: "Buka konverter",
      pages: "Halaman",
      copyright: "©2026 InchestoPixel.com",
      backToTop: "KEMBALI KE ATAS",
    },
    home: {
      intro:
        "Gunakan kalkulator ini untuk mengonversi ukuran dalam inci ke piksel pada resolusi gambar pilihan Anda, yang diukur dalam piksel per inci (PPI). Hasilnya bergantung pada pengaturan ini: pada 300 PPI, 1 inci sama dengan 300 piksel.",
      howTo: {
        heading: "Cara mengonversi inci ke piksel",
        steps: [
          "Masukkan panjang yang ingin dikonversi, dalam satuan inci.",
          "Pilih resolusi gambar yang dibutuhkan proyek Anda. Untuk cetak, tanyakan kepada percetakan Anda.",
          "Hitung jumlah pikselnya. Untuk mengonversi lebar dan tinggi, ulangi perhitungan untuk setiap dimensi dengan pengaturan yang sama.",
        ],
        note: "Simpan resolusi bersama hasilnya agar Anda bisa memeriksa ukuran cetak yang dimaksud nanti.",
      },
      formula: {
        heading: "Rumus dan contoh",
        main: "Piksel = inci × PPI",
        explain: "Kalikan panjang fisik dalam inci dengan jumlah piksel per inci untuk mendapatkan jumlah piksel di sepanjang dimensi tersebut.",
        backwardLead: "Untuk menghitung sebaliknya:",
        backward: "Inci = piksel ÷ PPI",
        examples: [
          {
            heading: "Contoh satu panjang",
            lead: "Pada 96 PPI, panjang 2 inci menjadi:",
            math: ["2 × 96 = 192 piksel"],
            after: [
              "Hasil ini tepat untuk resolusi yang dipilih. Bukan berarti setiap layar menampilkan 192 piksel di sepanjang dua inci fisik.",
            ],
          },
          {
            heading: "Contoh lebar dan tinggi untuk cetak",
            lead: "Untuk gambar 8,5 × 11 inci pada 300 PPI:",
            math: ["Lebar: 8,5 × 300 = 2.550 piksel", "Tinggi: 11 × 300 = 3.300 piksel"],
            after: [
              "Dimensi gambar yang dibutuhkan adalah 2.550 × 3.300 piksel, sebelum tambahan bleed yang mungkin diminta percetakan.",
            ],
          },
          {
            heading: "Contoh hasil piksel desimal",
            lead: "Untuk 2,33 inci pada 150 PPI:",
            math: ["2,33 × 150 = 349,5 piksel"],
            after: [
              "Gambar raster membutuhkan dimensi piksel bulat. Membulatkan 349,5 ke piksel bulat terdekat, dengan setengah dibulatkan ke atas, menghasilkan 350 piksel. Pada resolusi yang sama, itu setara dengan sekitar 2,333 inci.",
            ],
          },
        ],
        closing: "Bulatkan hanya di langkah terakhir, sesuai kebutuhan proyek Anda.",
      },
      reference: {
        heading: "Tabel acuan inci ke piksel",
        intro:
          "Judul kolom menunjukkan resolusi gambar dalam PPI; nilai di bawahnya adalah jumlah piksel. Pengaturan ini hanyalah contoh, bukan ketentuan universal.",
        table: homeTable("id", { corner: "Panjang (inci)", col: "{ppi}" }),
        caption: "Inci ke piksel pada 72, 96, 150, dan 300 PPI",
        footnote: "Semua nilai tabel tepat untuk masukan yang tercantum.",
      },
      guide: { eyebrow: "Dasar teori", title: "PIKSEL, UKURAN CETAK, DAN", highlight: "PPI" },
      explainers: [
        {
          heading: "Piksel gambar, ukuran cetak, dan piksel CSS",
          paragraphs: [
            "Dimensi piksel menggambarkan lebar dan tinggi gambar dalam piksel. Dimensi cetak menggambarkan ukuran fisiknya dalam inci. Resolusi gambar menghubungkan keduanya: dimensi piksel yang sama bisa menghasilkan ukuran cetak yang berbeda.",
            "CSS memakai hubungan tetap: 1in = 96px. Ini adalah satuan acuan CSS, sehingga piksel CSS belum tentu sama dengan satu piksel fisik perangkat, dan inci CSS di layar mungkin tidak benar-benar berukuran satu inci. Gunakan hubungan ini untuk ukuran CSS; jangan menganggapnya menggambarkan kerapatan piksel fisik layar.",
          ],
        },
        {
          heading: "Resolusi gambar dan resolusi printer",
          paragraphs: [
            "PPI menggambarkan piksel gambar per inci; DPI menggambarkan titik per inci yang dihasilkan printer. Keduanya berkaitan dalam alur kerja cetak, tetapi tidak dapat dipertukarkan. Untuk kalkulator ini, gunakan persyaratan resolusi gambar, bukan spesifikasi perangkat keras printer.",
          ],
        },
        {
          heading: "Mengubah resolusi tidak menambah detail gambar",
          paragraphs: [
            "Mengubah metadata resolusi gambar saja tidak mengubah jumlah pikselnya, tetapi mengubah ukuran cetak yang dimaksud. Resampling mengubah jumlah piksel. Sekadar menetapkan resolusi lebih tinggi tidak menciptakan detail baru.",
          ],
        },
      ],
      browse: "Jelajahi menurut topik",
      faqDescription: "Jawaban atas pertanyaan umum tentang konversi inci ke piksel.",
      faqs: [
        {
          question: "Resolusi berapa yang sebaiknya saya gunakan?",
          answer:
            "Gunakan nilai yang dibutuhkan hasil akhir Anda. Untuk cetak, tanyakan kepada percetakan resolusi gambar yang diperlukan pada ukuran akhir. Jika unggahan digital menyebutkan dimensi piksel, ikuti dimensi tersebut secara langsung.",
        },
        {
          question: "Apakah konversi ke piksel mengubah rasio aspek?",
          answer:
            "Menggunakan resolusi yang sama untuk lebar dan tinggi menjaga rasionya sebelum pembulatan. Misalnya, gambar 4 × 4 inci pada 300 PPI menjadi 1.200 × 1.200 piksel. Keduanya persegi: rasio menggambarkan bentuk, bukan resolusi.",
        },
        {
          question: "Bisakah saya menghitung ukuran cetak dari gambar yang sudah ada?",
          answer:
            "Bisa. Bagi setiap dimensi piksel dengan resolusi gambar yang dimaksud. Pada 300 PPI, gambar 1.800 × 1.200 piksel setara dengan 6 × 4 inci. Pemangkasan atau penskalaan saat mencetak dapat mengubah ukuran akhir.",
        },
      ],
    },
    hubs: {
      dpi: {
        nav: "DPI",
        h1: "Konverter Inci ke Piksel Berdasarkan DPI",
        seoTitle: "Konverter Inci ke Piksel DPI | Hitung Ukuran Cetak",
        description:
          "Konversi inci ke piksel dengan DPI proyek Anda. Gunakan rumus, contoh perhitungan, dan tabel acuan 72–600 DPI untuk memeriksa dimensi gambar untuk cetak.",
        answer:
          "Hitung dimensi piksel dari ukuran fisik dan resolusi yang Anda pilih. Kalikan inci dengan DPI yang ditentukan: pada 300 DPI, 4 inci sama dengan 1.200 piksel.",
        introNotes: [
          "Dalam konversi ini, DPI berarti kerapatan piksel gambar target, yang secara teknis disebut PPI. Gunakan resolusi yang dibutuhkan proyek Anda; satu inci tidak memiliki satu nilai piksel yang tetap.",
        ],
        sections: [
          {
            heading: "Cara mengonversi inci ke piksel",
            blocks: [
              {
                type: "steps",
                items: [
                  "Masukkan panjang fisik dalam inci.",
                  "Masukkan resolusi target. Untuk cetak, gunakan resolusi gambar yang diminta percetakan Anda.",
                  "Kalikan inci dengan resolusi tersebut untuk mendapatkan panjang dalam piksel.",
                  "Untuk gambar, hitung lebar dan tinggi secara terpisah dengan resolusi yang sama.",
                ],
              },
              {
                type: "note",
                text: "Pertahankan rasio lebar-tinggi asli saat mengonversi desain yang sudah ada. Mengubah rasio itu berarti harus memangkas atau meregangkan.",
              },
            ],
          },
          {
            heading: "Rumus dan contoh perhitungan",
            blocks: [
              { type: "math", lines: ["Piksel = Inci × DPI"], large: true },
              { type: "p", text: "Keterangan:" },
              {
                type: "list",
                items: [
                  "Piksel adalah panjang digital dalam piksel, disingkat px.",
                  "Inci adalah panjang fisik yang dimaksud.",
                  "DPI adalah nilai konversi yang dipilih, diartikan sebagai piksel gambar per inci.",
                ],
              },
              { type: "p", text: "Untuk gambar persegi panjang:" },
              {
                type: "math",
                lines: ["Lebar dalam piksel = Lebar dalam inci × DPI", "Tinggi dalam piksel = Tinggi dalam inci × DPI"],
              },
              {
                type: "sub",
                heading: "Gambar 8 × 10 inci pada 300 DPI",
                blocks: [
                  { type: "p", text: "Jika proyek Anda membutuhkan 300 PPI:" },
                  { type: "math", lines: ["Lebar: 8 × 300 = 2.400 px", "Tinggi: 10 × 300 = 3.000 px"] },
                  { type: "p", text: "Dimensi yang dibutuhkan adalah 2.400 × 3.000 piksel. Hasil ini tepat." },
                ],
              },
              {
                type: "sub",
                heading: "Panjang 2,5 inci pada 96 DPI",
                blocks: [
                  { type: "math", lines: ["2,5 × 96 = 240 px"] },
                  {
                    type: "p",
                    text: "Pada kerapatan 96 piksel per inci, 2,5 inci tepat setara dengan 240 piksel. Panjang yang sama pada kerapatan lain menghasilkan angka yang berbeda.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Hasil desimal pada 150 DPI",
                blocks: [
                  { type: "math", lines: ["1,23 × 150 = 184,5 px"] },
                  {
                    type: "p",
                    text: "Gambar raster membutuhkan dimensi piksel bulat. Dibulatkan ke piksel bulat terdekat, dengan setengah dibulatkan ke atas, hasilnya 185 px.",
                  },
                ],
              },
              {
                type: "note",
                text: "Bulatkan hanya hasil akhirnya. Jika spesifikasi produksi menetapkan jumlah piksel minimum, bulatkan ke atas. Membulatkan lebar dan tinggi secara terpisah dapat sedikit mengubah rasio aspek, jadi periksa dimensi akhir bila proporsi yang tepat penting.",
              },
            ],
          },
          {
            heading: "Tabel acuan inci ke piksel",
            blocks: [
              {
                type: "p",
                text: "Semua nilai di bawah tepat. Kolom DPI menunjukkan kerapatan gambar target dalam PPI untuk perhitungan ini.",
              },
              {
                type: "table",
                caption: "Piksel untuk 1, 4, dan 6 inci pada 72 sampai 600 DPI",
                table: dpiTable("id", {
                  corner: "DPI yang ditentukan",
                  cols: ["1 inci", "4 inci", "6 inci"],
                  row: "{dpi} DPI",
                  cell: "{px} px",
                }),
              },
              {
                type: "p",
                text: "Misalnya, gambar 4 × 6 inci pada 300 DPI membutuhkan 1.200 × 1.800 piksel. Pada 72 DPI, ukuran fisik yang sama setara dengan 288 × 432 piksel.",
              },
            ],
          },
          {
            heading: "Pilih resolusi yang tepat untuk pekerjaan",
            blocks: [
              {
                type: "sub",
                heading: "DPI dan PPI menjelaskan hal yang berbeda",
                blocks: [
                  {
                    type: "p",
                    text: "PPI berarti piksel per inci: piksel gambar yang dialokasikan untuk setiap inci keluaran. DPI berarti titik per inci: titik yang dapat dihasilkan printer. Keduanya ukuran yang berbeda.",
                  },
                  {
                    type: "p",
                    text: "Jika spesifikasi cetak menyebut “300 DPI” untuk meminta gambar 300 PPI, gunakan 300 dalam perhitungan. Jangan mengganti PPI gambar yang diminta dengan resolusi DPI perangkat keras printer.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Ukuran fisik dan dimensi piksel saling terkait",
                blocks: [
                  {
                    type: "p",
                    text: "Inci menggambarkan ukuran fisik; dimensi piksel menggambarkan lebar dan tinggi digital gambar. Pada ukuran fisik yang tetap, PPI target yang lebih tinggi membutuhkan lebih banyak piksel.",
                  },
                  {
                    type: "p",
                    text: "Mengubah pengaturan resolusi gambar yang sudah ada tanpa resampling tidak menambah piksel. Yang berubah adalah hubungan antara ukuran cetak dan kerapatan pikselnya. Resampling mengubah jumlah piksel, jadi sekadar menghitung target yang lebih besar tidak memperbaiki gambar sumber.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Ukuran di layar perlu konteks",
                blocks: [
                  {
                    type: "p",
                    text: "Jangan menganggap setiap layar memiliki 72 atau 96 piksel fisik per inci. CSS mendefinisikan 1 inci sebagai 96 piksel CSS, tetapi piksel CSS belum tentu piksel perangkat individual atau ukuran fisik nyata di layar.",
                  },
                  {
                    type: "p",
                    text: "Untuk mengunggah gambar, ikuti dimensi piksel yang diminta tujuan. Untuk mencetak, ikuti persyaratan ukuran fisik dan resolusi gambarnya.",
                  },
                ],
              },
            ],
          },
        ],
        faq: [
          {
            question: "Bagaimana cara memakainya sebagai kalkulator 300 DPI?",
            answer:
              "Gunakan 300 sebagai resolusi target dan kalikan setiap ukuran inci dengan 300. Misalnya, gambar 5 × 7 inci membutuhkan 1.500 × 2.100 piksel pada 300 PPI.",
          },
          {
            question: "Bisakah saya mengonversi inci ke piksel tanpa mengetahui DPI?",
            answer:
              "Tanpa kerapatan piksel target, tidak ada satu jawaban yang pasti. Panjang 2 inci setara dengan 144 piksel pada 72 PPI, 192 piksel pada 96 PPI, atau 600 piksel pada 300 PPI.",
          },
          {
            question: "Apakah bleed perlu dimasukkan dalam dimensi?",
            answer:
              "Jika percetakan meminta bleed, hitung dari ukuran karya penuh termasuk bleed tersebut. Misalnya, desain 4 × 6 inci dengan bleed 0,125 inci di setiap sisi menjadi 4,25 × 6,25 inci. Pada 300 PPI, itu 1.275 × 1.875 piksel. Gunakan spesifikasi bleed yang sebenarnya dari percetakan Anda.",
          },
        ],
      } as HubText,
      software: {
        nav: "Perangkat lunak",
        h1: "Inci ke Piksel di Perangkat Lunak",
        seoTitle: "Inci ke Piksel di Perangkat Lunak: Panduan Konversi PPI",
        description:
          "Konversi inci ke piksel dengan PPI proyek Anda. Lihat contoh perhitungan dan pelajari bagaimana dimensi gambar, resampling, dan pengaturan ekspor memengaruhi hasil.",
        answer:
          "Konversi inci ke piksel dengan mengalikan ukuran dalam inci dengan piksel per inci (PPI) yang dibutuhkan. Satu inci sama dengan 300 px pada 300 PPI, atau 96 px pada 96 PPI. Saat mengonversi di perangkat lunak, gunakan resolusi yang dibutuhkan keluaran Anda—bukan nilai bawaan yang dianggap universal.",
        sections: [
          {
            heading: "Cara mengonversi dimensi Anda",
            blocks: [
              {
                type: "steps",
                items: [
                  "Tentukan lebar atau tinggi yang Anda butuhkan dalam inci.",
                  "Pilih PPI yang dibutuhkan untuk keluaran itu. Untuk cetak, periksa spesifikasi resolusi gambar dari percetakan.",
                  "Hitung jumlah piksel dengan ukuran inci dan PPI.",
                  "Ulangi untuk dimensi lainnya dengan PPI yang sama.",
                ],
              },
              {
                type: "note",
                text: "Untuk gambar yang sudah ada, pertahankan proporsinya. Jika lebar dan tinggi yang dibutuhkan memiliki rasio aspek berbeda, pangkas gambar atau tambahkan ruang di sekitarnya alih-alih meregangkannya.",
              },
            ],
          },
          {
            heading: "Rumus dan contoh",
            blocks: [
              { type: "math", lines: ["Piksel = Inci × PPI"], large: true },
              {
                type: "list",
                items: [
                  "Piksel (px): jumlah piksel gambar di sepanjang satu dimensi.",
                  "Inci (in): panjang fisik yang dimaksud untuk dimensi itu.",
                  "PPI: jumlah piksel gambar per inci pada ukuran tersebut.",
                ],
              },
              { type: "p", text: "Perhitungan dilakukan terpisah untuk lebar dan tinggi." },
              {
                type: "sub",
                heading: "Gambar 4 × 6 inci pada 300 PPI",
                blocks: [
                  { type: "math", lines: ["Lebar: 4 × 300 = 1.200 px", "Tinggi: 6 × 300 = 1.800 px"] },
                  {
                    type: "p",
                    text: "Dimensi gambar target adalah 1.200 × 1.800 px, tanpa bleed atau bingkai tambahan.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Gambar 8 × 10 inci pada 150 PPI",
                blocks: [
                  { type: "math", lines: ["Lebar: 8 × 150 = 1.200 px", "Tinggi: 10 × 150 = 1.500 px"] },
                  {
                    type: "p",
                    text: "Hasilnya 1.200 × 1.500 px. Contoh ini memakai 150 PPI sebagai persyaratan yang ditentukan, bukan rekomendasi untuk setiap pekerjaan cetak.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Ukuran desimal",
                blocks: [
                  { type: "p", text: "Untuk lebar 2,125 inci pada 300 PPI:" },
                  { type: "math", lines: ["2,125 × 300 = 637,5 px"] },
                  {
                    type: "p",
                    text: "Hasil matematisnya tepat, tetapi gambar raster membutuhkan lebar bilangan bulat. Dibulatkan ke piksel terdekat, gunakan 638 px. Pada 300 PPI, itu setara dengan sekitar 2,127 inci.",
                  },
                ],
              },
              {
                type: "note",
                text: "Bulatkan di akhir perhitungan. Jika spesifikasi produksi menetapkan jumlah piksel minimum, bulatkan ke atas bila perlu untuk memenuhinya.",
              },
            ],
          },
          {
            heading: "Tabel konversi cepat",
            blocks: [
              {
                type: "p",
                text: "Nilai ini tepat untuk PPI yang disebutkan. Kolomnya adalah contoh perhitungan, bukan pengaturan bawaan perangkat lunak.",
              },
              {
                type: "table",
                caption: "Inci ke piksel pada 96, 150, dan 300 PPI",
                table: softwareTable("id", {
                  corner: "Panjang (inci)",
                  cols: ["Pada 96 PPI (px)", "Pada 150 PPI (px)", "Pada 300 PPI (px)"],
                }),
              },
            ],
          },
          {
            heading: "Terapkan hasilnya di perangkat lunak Anda",
            blocks: [
              {
                type: "sub",
                heading: "Photoshop: bedakan mengubah ukuran dan resampling",
                blocks: [
                  {
                    type: "p",
                    text: "Bandingkan dimensi piksel target dengan dimensi gambar saat ini sebelum melakukan perubahan.",
                  },
                  {
                    type: "p",
                    text: "Saat resampling dinonaktifkan, mengubah PPI tidak mengubah jumlah piksel tetapi mengubah ukuran cetak yang dimaksud. Saat resampling aktif, mengubah ukuran atau resolusi dapat menambah atau mengurangi piksel. Pertahankan lebar dan tinggi tetap proporsional saat mengubah ukuran. Adobe menjelaskan hubungan ini dalam panduan mengubah ukuran dan resampling.",
                  },
                  {
                    type: "p",
                    text: "Menaikkan PPI saja tidak menciptakan detail tambahan. Memperbesar dengan resampling menambahkan piksel hasil perhitungan; detail yang tidak ada di gambar asli tidak kembali.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Illustrator: periksa resolusi ekspor raster",
                blocks: [
                  {
                    type: "p",
                    text: "Karya vektor tidak memiliki jumlah piksel yang tetap. Saat Anda mengekspornya ke format raster seperti PNG atau JPEG, ukuran fisik karya dan resolusi ekspor menentukan dimensi keluaran.",
                  },
                  {
                    type: "p",
                    text: "Misalnya, area ekspor selebar 4 inci pada 300 PPI membutuhkan lebar 1.200 px. Periksa dimensi file hasil ekspor, terutama jika ekspor menyertakan batas atau padding tambahan. Pengaturan yang tersedia di Illustrator bergantung pada format ekspor.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Figma: perhitungkan skala ekspor",
                blocks: [
                  {
                    type: "p",
                    text: "Untuk aset raster, hitung dulu piksel keluaran yang dibutuhkan, lalu perhitungkan skala ekspor. Frame selebar 600 piksel yang diekspor pada 2× menghasilkan gambar selebar 1.200 piksel. Jangan menerapkan pengali lagi jika frame Anda sudah memakai dimensi keluaran target. Lihat format dan pengaturan ekspor Figma.",
                  },
                  {
                    type: "p",
                    text: "Untuk gambar selebar 4 inci yang akan dicetak pada 300 PPI, targetnya adalah lebar 1.200 px, apa pun kombinasi frame dan skala yang dipakai untuk membuatnya.",
                  },
                ],
              },
            ],
          },
          {
            heading: "Hindari kesalahan konversi yang umum",
            blocks: [
              {
                type: "sub",
                heading: "PPI dan DPI menjelaskan hal yang berbeda",
                blocks: [
                  {
                    type: "p",
                    text: "PPI mengukur piksel gambar per inci; DPI umumnya mengukur titik printer per inci. Jika spesifikasi cetak memakai “DPI” untuk gambar, pastikan apakah yang dimaksud adalah PPI gambar yang dibutuhkan. Jangan otomatis memakai resolusi titik perangkat keras printer sebagai masukan konverter.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Piksel CSS adalah satuan logis",
                blocks: [
                  {
                    type: "p",
                    text: "CSS mendefinisikan 1 inci sebagai 96 piksel CSS. Itu tidak berarti setiap gambar harus memakai 96 PPI, atau bahwa elemen berukuran satu inci CSS akan berukuran satu inci fisik di setiap layar. Layar berkerapatan tinggi dapat memakai beberapa piksel perangkat untuk satu piksel CSS. Lihat penjelasan W3C tentang satuan CSS.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Periksa hasil akhir, bukan hanya ukuran dokumen",
                blocks: [
                  {
                    type: "p",
                    text: "Saat menyiapkan gambar untuk Canva, Procreate, Paint, InDesign, Word, PowerPoint, atau Google Slides, bedakan dimensi piksel gambar dari ukuran saat ditempatkan. Periksa dimensi gambar akhir dan ukuran cetak yang dimaksud, alih-alih menganggap nama aplikasi menentukan konversinya.",
                  },
                ],
              },
            ],
          },
        ],
        faq: [
          {
            question: "PPI berapa yang sebaiknya saya gunakan?",
            answer:
              "Gunakan resolusi yang dibutuhkan alur kerja keluaran Anda. Untuk cetak, tanyakan kepada percetakan. Untuk aset layar yang ditentukan dalam piksel, gunakan dimensi piksel itu secara langsung; konversi inci mungkin tidak diperlukan.",
          },
          {
            question: "Mengapa gambar yang sama tampak berbeda ukurannya di aplikasi yang berbeda?",
            answer:
              "Aplikasi dapat menyesuaikan gambar dengan halaman, menampilkannya pada tingkat zoom tertentu, atau memakai metadata resolusi untuk menentukan ukuran saat ditempatkan. Ukuran yang terlihat saja tidak memberi tahu apakah dimensi pikselnya berubah.",
          },
          {
            question: "Bisakah saya menghitung inci ke piksel di Excel atau Google Sheets?",
            answer:
              "Bisa. Jika sel A2 berisi inci dan B2 berisi PPI, gunakan:\n=A2*B2\nUntuk membulatkan ukuran positif ke piksel bulat terdekat, gunakan:\n=ROUND(A2*B2;0)\n(Pemisah argumen bisa berupa koma atau titik koma, tergantung pengaturan wilayah.) Ini menghitung dimensi piksel; tidak mengubah ukuran gambar atau lebar kolom spreadsheet.",
          },
        ],
      } as HubText,
      print: printHub("id", {
        nav: "Cetak & foto",
        h1: "Inci ke Piksel untuk Cetak, Foto, dan Gambar",
        description:
          "Berapa piksel yang dibutuhkan untuk cetakan tajam: foto 4×6, 5×7, 8×10, dan 11×14 inci pada 150 dan 300 DPI, dengan kalkulator ukuran cetak.",
        answer: "Untuk cetakan tajam, Anda membutuhkan ukuran cetak × 300 piksel di setiap sisi.",
        printing: {
          heading: "Cetak",
          body: "Piksel yang dibutuhkan = ukuran cetak dalam inci × DPI cetak. Sebagian besar percetakan menargetkan 300 DPI.",
          corner: "Ukuran cetak",
          row: "{w} × {h} inci",
        },
        photos: {
          heading: "Foto dan gambar",
          body: "Foto dengan piksel terlalu sedikit akan tampak buram saat dicetak besar. Bandingkan ukuran piksel gambar Anda dengan tabel di atas sebelum memesan cetakan.",
        },
        faq: [
          {
            question: "Bisakah saya memperbesar foto kecil?",
            answer: "Pembesaran menambah piksel tetapi tidak menambah detail, sehingga hasil pembesaran besar tampak buram.",
          },
        ],
      }),
      sizes: sizesHub(
        "id",
        {
          nav: "Ukuran",
          h1: "Ukuran Cetak dan Kertas Umum dalam Piksel",
          description:
            "Letter, A4, 4×6, 5×7, 8×10, 18×24, 24×36, dan ukuran kartu dalam piksel pada 72, 150, dan 300 DPI. Pilih ukuran dan konversi seketika.",
          answer: "Kertas Letter (8,5 × 11 inci) berukuran 2.550 × 3.300 px pada 300 DPI.",
          overview: {
            heading: "Semua ukuran umum dalam sekilas",
            body: "Ukuran piksel setiap format pada 72, 150, dan 300 DPI.",
            corner: "Ukuran",
          },
          sizeBody:
            "{label} berukuran {w} × {h} inci. Pada 300 DPI menjadi {w300} × {h300} px, dan pada 72 DPI menjadi {w72} × {h72} px.",
          faq: [
            {
              question: "Ukuran apa yang paling umum untuk dicetak?",
              answer: "Letter dan A4 untuk dokumen, 4 × 6 dan 5 × 7 untuk foto.",
            },
          ],
        },
        sizeLabels,
      ),
      chart: chartHub("id", {
        nav: "Tabel",
        h1: "Tabel Inci ke Piksel (Semua Nilai Umum)",
        description:
          "Tabel konversi inci ke piksel dari 1/8 inci sampai 96 inci pada 72, 96, 150, dan 300 DPI. Temukan nilai umum apa pun dalam sekilas.",
        answer: "Temukan ukuran apa pun dari 1/8 inci sampai 96 inci pada 72, 96, 150, dan 300 DPI.",
        chart: {
          heading: "Tabel konversi",
          body: "Tabel acuan lengkap. Setiap baris adalah nilai yang bisa Anda tautkan.",
          corner: "Inci",
        },
        items: ["1/8 inci", "2 inci", "2,5 inci", "3 inci", "4 inci", "5 inci", "8,5 inci"],
        itemBody:
          "{label} sama dengan {px72} px pada 72 DPI, {px96} px pada 96 DPI, {px150} px pada 150 DPI, dan {px300} px pada 300 DPI.",
        faq: [
          {
            question: "Di mana nilai lainnya?",
            answer: "Nilai seperti 10, 12, 24, atau 48 inci ada sebagai baris di tabel konversi di atas.",
          },
        ],
      }),
    },
  },
};
