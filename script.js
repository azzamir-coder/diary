/* ==========================================================
   UBAH BAGIAN INI SAJA supaya jadi milikmu.
   ========================================================== */
const KONFIG = {
  nama: "Jihan",           // nama panggilan dia
  tanggalSadar: "",         // contoh: "2026-03-14" (kosongkan jika tidak mau)
  // Taruh foto di folder yang sama dengan index.html, lalu sesuaikan nama file di sini.
  // "posisi" (opsional) mengatur bagian foto yang diprioritaskan di dalam bingkai.
  // Format: "kiri-kanan atas-bawah", contoh "center 30%" = fokus ke bagian atas (wajah).
  // Kalau file belum ada, akan tampil bingkai kosong sebagai pengingat.
  foto: [
    { src: "foto1.jpg", teks: "Senyum yang bikin lupa waktu", posisi: "center 35%" },
    { src: "foto2.jpg", teks: "Kamu, apa adanya", posisi: "center 35%" }
  ],
  alasan: [
    { judul: "Caramu tertawa", isi: "Denger tawa kamu tuh sederhana, tapi selalu berhasil bikin hari burukku mendadak tenang." },
    { judul: "Caramu peduli", isi: "Kamu perhatian banget yah,tapi aku marah-marah terus HEHEHEHE." },
    { judul: "Caramu jadi diri sendiri", isi: "Kamu ga perlu pura-pura jadi orang lain, karena versi asli kamu aja udah lebih dari cukup buat bikin aku jatuh cinta." },
    { judul: "Caramu hadir", isi: "Sesuatu yang biasa aja selalu terasa manis kalau dilewati bareng kamu. Obrolan singkat sama kamu selalu jadi bagian favorit dari hariku." }
  ],
  surat: [
    "Aku tahu kita belum punya nama untuk apa yang kita jalani. Tapi aku tidak butuh nama untuk tahu bahwa kamu berarti.",
    "You look so tired lately. Nanti kita escape sebentar yuk? No stress, no busy stuff, cuma pure quality time berdua biar energi kamu fully recharged. See you soon!.",
    "Thank you ya udah selalu bikin hariku much better. If you ever need a safe space buat cerita atau sekadar butuh warm hug pas lagi exhausted, aku selalu ada. Take care!"
  ],
  janji: "Oneday Yah,Nunggu Acc Semua,Sabar Dikit AJAAAAA",
  meterTeks: "Alatnya rusak. Nilai kamu melebihi batas yang bisa diukur.",
  pesanAcak: [
    "Semangat ya hari ini! Bawaannya pengen meluk kamu bentar biar capeknya hilang 🥺.",
    "Jangan lemes gitu dong... sini aku elus kepalanya biar semangat lagi",
    "ingat istirahat ya. Rasanya pengen nyender bareng kamu sambil dengerin kamu cerita",
    "Capek banget ya hari ini? Sini peluk dulu... Nanti malam luangin waktu khusus buat kita berdua ya, no gadget, cuma aku sama kamu..",
    "Semangat ya hari ini! Kalau butuh apa-apa, tinggal bilang aku ya.",
    "Jangan lupa makan. Serius."
  ],
  tanya: {
    teks: "Boleh nggak aku terus berusaha buat dapetin kamu?",
    ya: "Boleh",
    tidak: "Nggak",
    tidakBujuk: ["Yakin?", "Coba pikir lagi", "Beneran nggak?", "Tombolnya capek lari...", "Udah, pilih Boleh aja"],
    jawabYa: "Yeay! Makasih sudah kasih aku kesempatan. Akan kujaga baik-baik."
  },
  lagu: {
    src: "lagu.mp3",              // taruh file lagumu di folder yang sama, lalu tulis namanya di sini
    judul: "Judul Lagu - Penyanyi", // untuk label aksesibilitas
    layarAwal: true               // true = ada layar "Ketuk untuk membuka" yang sekaligus memutar lagu
  },
  namaKamu: "zamier",   // dipakai di mesin ramal cinta: "Aku + Jihan"
  gacha: [
    { judul: "Recharge Energy", isi: "Kalo kamu capek,jangan lupa ada aku yah,mungkin buat cerita atau yang laen." },
    { judul: "Jadi pendengar", isi: "Cerita sepanjang apa pun, aku dengar sampai habis." },
    { judul: "Antar jemput sekali", isi: "Ke mana pun kamu mau, sekali jalan." },
    { judul: "Lagu pilihan", isi: "Aku carikan satu lagu untuk menemanimu saat lelah." },
    { judul: "Kamu yang pilih tontonan", isi: "Satu malam, kamu yang pegang kendali. Aku nurut." },
    { judul: "Jadi tukang foto", isi: "Seharian aku yang fotoin kamu, tanpa protes." }
  ],
  gachaSelesai: "Semua hadiah sudah terkumpul! Sisanya tinggal satu: aku, yang masih di sini menunggu.",
  pelukTeks: {
    1: "Diterima. Hangat nggak?",
    5: "Lima pelukan. Tambah lagi juga boleh.",
    10: "Sepuluh! Kalau aslinya sebanyak ini, aku nggak akan keberatan.",
    25: "Kamu rajin banget minta peluk. Aku suka.",
    50: "Lima puluh. Resmi jadi pelukan terbanyak yang pernah kukirim."
  },
  game: {
    target: 10,
    menang: "Kamu berhasil menangkap semuanya! Dan sebenarnya, kamu memang sudah menangkap hatiku dari dulu."
  },
  ramal: [
    { angka: "99%", teks: "Sisanya 1% tinggal dibuktikan lewat usaha." },
    { angka: "100%", teks: "Mesinnya sempat error karena terlalu cocok." },
    { angka: "\u221e%", teks: "Alat ukur menyerah. Hasilnya di luar skala." },
    { angka: "1000%", teks: "Ini bukan salah hitung. Memang segitu." }
  ]
};
/* ========================================================== */

const kurangGerak = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Nama ---------- */
document.getElementById("nama").textContent = KONFIG.nama;
document.title = "Hai !! Dari Zamir";

/* ---------- Langit bintang ---------- */
(function langit() {
  const kanvas = document.getElementById("langit");
  const ctx = kanvas.getContext("2d");
  let w, h, bintang = [], mx = 0, my = 0;

  let lebarTerakhir = 0;
  function ukur(paksa) {
    const dpr = window.devicePixelRatio || 1;
    w = kanvas.clientWidth; h = kanvas.clientHeight;
    kanvas.width = w * dpr; kanvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!paksa && w === lebarTerakhir && bintang.length) return; // abaikan perubahan tinggi dari address bar HP
    lebarTerakhir = w;
    const jumlah = Math.round((w * h) / 5500);
    bintang = Array.from({ length: jumlah }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 1.3 + 0.3,
      fase: Math.random() * Math.PI * 2,
      dalam: Math.random() * 0.6 + 0.2
    }));
  }

  function gambar(t) {
    ctx.clearRect(0, 0, w, h);
    for (const b of bintang) {
      const kedip = kurangGerak ? 0.8 : 0.5 + 0.5 * Math.sin(t / 900 + b.fase);
      ctx.globalAlpha = 0.25 + kedip * 0.65;
      ctx.fillStyle = "#e8457a";
      ctx.beginPath();
      ctx.arc(b.x + mx * b.dalam * 10, b.y + my * b.dalam * 10, b.r, 0, Math.PI * 2);
      ctx.fill();
    }
    /* Satu bintang paling terang: dia */
    const cx = w * 0.5 + mx * 14, cy = h * 0.2 + my * 14;
    const denyut = kurangGerak ? 1 : 1 + 0.15 * Math.sin(t / 700);
    const sinar = ctx.createRadialGradient(cx, cy, 0, cx, cy, 46 * denyut);
    sinar.addColorStop(0, "rgba(214,51,108,0.95)");
    sinar.addColorStop(0.25, "rgba(255,143,177,0.45)");
    sinar.addColorStop(1, "rgba(255,143,177,0)");
    ctx.globalAlpha = 1;
    ctx.fillStyle = sinar;
    ctx.beginPath(); ctx.arc(cx, cy, 46 * denyut, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = "#c2255c";
    ctx.beginPath(); ctx.arc(cx, cy, 3.2, 0, Math.PI * 2); ctx.fill();
    requestAnimationFrame(gambar);
  }

  window.addEventListener("resize", () => ukur(false));
  window.addEventListener("orientationchange", () => setTimeout(() => ukur(true), 250));
  if (!kurangGerak) {
    window.addEventListener("pointermove", (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    });
  }
  ukur(true);
  requestAnimationFrame(gambar);
})();

/* ---------- Daftar alasan ---------- */
(function alasan() {
  const ul = document.getElementById("daftar-alasan");
  KONFIG.alasan.forEach((a) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("aria-expanded", "false");
    const judul = document.createElement("strong");
    judul.textContent = a.judul;
    const isi = document.createElement("span");
    isi.className = "isi";
    isi.textContent = a.isi;
    btn.append(judul, isi);
    btn.addEventListener("click", () => {
      const buka = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!buka));
    });
    li.appendChild(btn);
    ul.appendChild(li);
  });
})();

/* ---------- Surat & hitung hari ---------- */
(function surat() {
  const el = document.getElementById("surat");
  KONFIG.surat.forEach((teks) => {
    const p = document.createElement("p");
    p.textContent = teks;
    el.appendChild(p);
  });

  if (KONFIG.tanggalSadar) {
    const mulai = new Date(KONFIG.tanggalSadar);
    const hari = Math.floor((Date.now() - mulai) / 86400000);
    if (!isNaN(hari) && hari >= 0) {
      const p = document.getElementById("hitung");
      p.textContent = "Sudah " + hari + " hari sejak aku sadar kamu sespesial ini.";
      p.hidden = false;
    }
  }
})();

/* ---------- Rasi hati ---------- */
(function hati() {
  const kanvas = document.getElementById("hati");
  const ctx = kanvas.getContext("2d");
  const tombol = document.getElementById("tombol-janji");
  const teks = document.getElementById("janji-teks");
  const W = kanvas.width, H = kanvas.height;

  const titik = [];
  const N = 28;
  for (let i = 0; i < N; i++) {
    const t = (i / N) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    titik.push({ x: W / 2 + x * 15, y: H / 2 + y * 15 + 10 });
  }

  function gambar(jumlah) {
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = "rgba(214,51,108,0.7)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let i = 0; i < jumlah; i++) {
      i === 0 ? ctx.moveTo(titik[i].x, titik[i].y) : ctx.lineTo(titik[i].x, titik[i].y);
    }
    if (jumlah === N) ctx.closePath();
    ctx.stroke();
    for (let i = 0; i < jumlah; i++) {
      ctx.fillStyle = i === jumlah - 1 && jumlah < N ? "#ff6b9a" : "#d6336c";
      ctx.beginPath(); ctx.arc(titik[i].x, titik[i].y, 3.5, 0, Math.PI * 2); ctx.fill();
    }
  }

  gambar(0);

  tombol.addEventListener("click", () => {
    tombol.disabled = true;
    if (kurangGerak) {
      gambar(N);
      teks.textContent = KONFIG.janji;
      return;
    }
    let i = 0;
    const waktu = setInterval(() => {
      i++;
      gambar(i);
      if (i >= N) {
        clearInterval(waktu);
        teks.textContent = KONFIG.janji;
      }
    }, 90);
  });
})();

/* ---------- Galeri foto ---------- */
(function galeri() {
  const wadah = document.getElementById("galeri");
  const dlg = document.getElementById("perbesar");
  const img = document.getElementById("perbesar-img");
  const cap = document.getElementById("perbesar-cap");
  const miring = [-3, 2, -1.5, 3, -2.5, 1.5];

  KONFIG.foto.forEach((f, i) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "polaroid";
    btn.style.setProperty("--miring", miring[i % miring.length] + "deg");

    const bingkai = document.createElement("span");
    bingkai.className = "bingkai";
    const gambar = document.createElement("img");
    gambar.alt = f.teks;
    gambar.loading = "lazy";
    gambar.style.objectPosition = f.posisi || "center 35%";
    gambar.src = f.src;
    gambar.addEventListener("error", () => {
      gambar.remove();
      btn.dataset.kosong = "1";
      const k = document.createElement("span");
      k.className = "kosong";
      k.textContent = "Taruh foto Jihan di " + f.src;
      bingkai.appendChild(k);
    });
    bingkai.appendChild(gambar);

    const label = document.createElement("span");
    label.className = "cap";
    label.textContent = f.teks;
    btn.append(bingkai, label);

    btn.addEventListener("click", () => {
      if (btn.dataset.kosong) return;
      img.src = f.src; img.alt = f.teks; cap.textContent = f.teks;
      if (typeof dlg.showModal === "function") dlg.showModal();
      else dlg.setAttribute("open", ""); // Safari lama
    });
    wadah.appendChild(btn);
  });

  const tutup = () => (typeof dlg.close === "function" ? dlg.close() : dlg.removeAttribute("open"));
  document.getElementById("tutup").addEventListener("click", tutup);
  dlg.addEventListener("click", (e) => { if (e.target === dlg) tutup(); });
})();

/* ---------- Hati kecil saat mengetuk ---------- */
(function percik() {
  if (kurangGerak) return;
  document.addEventListener("pointerdown", (e) => {
    for (let i = 0; i < 6; i++) {
      const s = document.createElement("span");
      s.className = "percik";
      s.textContent = "\u2665";
      const sudut = Math.random() * Math.PI * 2, jarak = 30 + Math.random() * 40;
      s.style.left = e.clientX + "px";
      s.style.top = e.clientY + "px";
      s.style.setProperty("--dx", Math.cos(sudut) * jarak + "px");
      s.style.setProperty("--dy", Math.sin(sudut) * jarak - 20 + "px");
      s.style.fontSize = 12 + Math.random() * 12 + "px";
      s.addEventListener("animationend", () => s.remove());
      document.body.appendChild(s);
    }
  });
})();

/* ---------- Meter spesial ---------- */
(function meter() {
  const bar = document.getElementById("meter");
  const isi = document.getElementById("isi-meter");
  const angka = document.getElementById("meter-angka");
  const teks = document.getElementById("meter-teks");
  const tombol = document.getElementById("tombol-meter");

  function selesai() {
    bar.classList.add("meluap");
    angka.textContent = "\u221e%";
    teks.textContent = KONFIG.meterTeks;
    tombol.disabled = false;
    tombol.textContent = "Ukur lagi";
  }

  tombol.addEventListener("click", () => {
    tombol.disabled = true;
    bar.classList.remove("meluap");
    teks.textContent = "";
    if (kurangGerak) { isi.style.width = "100%"; bar.setAttribute("aria-valuenow", "100"); return selesai(); }
    const mulai = performance.now(), durasi = 1500;
    isi.style.width = "0%";
    (function langkah(t) {
      const p = Math.min((t - mulai) / durasi, 1);
      const nilai = Math.round(p * 100);
      isi.style.width = nilai + "%";
      angka.textContent = nilai + "%";
      bar.setAttribute("aria-valuenow", String(nilai));
      if (p < 1) requestAnimationFrame(langkah);
      else setTimeout(selesai, 400);
    })(mulai);
  });
})();

/* ---------- Pesan acak ---------- */
(function pesan() {
  const tombol = document.getElementById("tombol-pesan");
  const teks = document.getElementById("pesan-teks");
  let terakhir = -1;
  tombol.addEventListener("click", () => {
    let i;
    do { i = Math.floor(Math.random() * KONFIG.pesanAcak.length); }
    while (i === terakhir && KONFIG.pesanAcak.length > 1);
    terakhir = i;
    teks.textContent = KONFIG.pesanAcak[i];
    tombol.textContent = "Pesan lainnya";
  });
})();

/* ---------- Pertanyaan kecil (tombol Tidak kabur) ---------- */
(function tanya() {
  const area = document.getElementById("area-tanya");
  const ya = document.getElementById("btn-ya");
  const tidak = document.getElementById("btn-tidak");
  const jawab = document.getElementById("jawaban");
  const T = KONFIG.tanya;
  let kabur = 0;

  document.getElementById("pertanyaan").textContent = T.teks;
  ya.textContent = T.ya;
  tidak.textContent = T.tidak;

  function hindar() {
    kabur++;
    const a = area.getBoundingClientRect(), b = tidak.getBoundingClientRect();
    const x = Math.random() * Math.max(a.width - b.width, 0);
    const y = Math.random() * Math.max(a.height - b.height, 0);
    tidak.style.transform = "translate(" + (x - tidak.offsetLeft) + "px," + (y - tidak.offsetTop) + "px)";
    tidak.textContent = T.tidakBujuk[(kabur - 1) % T.tidakBujuk.length];
    ya.style.transform = "scale(" + Math.min(1 + kabur * 0.1, 1.6) + ")";
  }

  tidak.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") hindar(); });
  tidak.addEventListener("pointerdown", (e) => { e.preventDefault(); hindar(); });
  tidak.addEventListener("click", (e) => { e.preventDefault(); if (e.detail === 0) hindar(); });

  ya.addEventListener("click", () => {
    ya.disabled = true;
    tidak.hidden = true;
    jawab.textContent = T.jawabYa;
    if (kurangGerak) return;
    for (let i = 0; i < 40; i++) {
      const s = document.createElement("span");
      s.className = "konfeti";
      s.textContent = Math.random() > 0.3 ? "\u2665" : "\u2728";
      s.style.left = Math.random() * 100 + "vw";
      s.style.fontSize = 14 + Math.random() * 20 + "px";
      s.style.setProperty("--dur", 2.2 + Math.random() * 2.2 + "s");
      s.style.setProperty("--rot", (Math.random() * 360 - 180) + "deg");
      s.style.animationDelay = Math.random() * 0.8 + "s";
      s.addEventListener("animationend", () => s.remove());
      document.body.appendChild(s);
    }
  });
})();


/* ---------- Mesin gacha ---------- */
(function gacha() {
  const hadiah = KONFIG.gacha;
  const kaca = document.getElementById("kaca");
  const area = document.getElementById("gacha");
  const tuas = document.getElementById("tombol-putar");
  const teks = document.getElementById("gacha-teks");
  const koleksi = document.getElementById("gacha-koleksi");
  const warna = ["#ff8fb1", "#e8457a", "#ffb8d1", "#c2255c", "#ff6b9a", "#f7a8c0"];
  const dapat = [];

  for (let i = 0; i < 15; i++) {
    const b = document.createElement("span");
    b.className = "bola";
    const r = Math.round(Math.random() * 360);
    b.style.setProperty("--r", r + "deg");
    b.style.transform = "rotate(" + r + "deg)";
    b.style.left = 4 + Math.random() * 74 + "%";
    b.style.top = 36 + Math.random() * 46 + "%";
    b.style.background = "linear-gradient(180deg, " + warna[i % warna.length] + " 50%, #fff 50%)";
    kaca.appendChild(b);
  }

  function perbaruiKoleksi() {
    koleksi.textContent = "";
    const b = document.createElement("b");
    b.textContent = dapat.length + " / " + hadiah.length;
    koleksi.append("Terkumpul ", b);
    if (dapat.length) koleksi.append(": " + dapat.map((h) => h.judul).join(", "));
  }
  perbaruiKoleksi();

  function tampil(h) {
    teks.textContent = "";
    const s = document.createElement("strong");
    s.textContent = h.judul + ". ";
    teks.append(s, h.isi);
    dapat.push(h);
    perbaruiKoleksi();
    if (dapat.length >= hadiah.length) {
      const p = document.createElement("span");
      p.style.display = "block"; p.style.marginTop = "0.8rem";
      p.textContent = KONFIG.gachaSelesai;
      teks.appendChild(p);
      tuas.textContent = "Lengkap";
      return;
    }
    tuas.disabled = false;
  }

  function jatuhkan(h) {
    const k = document.createElement("button");
    k.type = "button";
    k.className = "kapsul-jatuh";
    k.setAttribute("aria-label", "Buka kapsul");
    k.style.setProperty("--w", warna[Math.floor(Math.random() * warna.length)]);
    k.innerHTML = '<span class="atas"></span><span class="bawah"></span>';
    teks.textContent = "Kapsulnya jatuh! Ketuk untuk membuka.";
    if (kurangGerak) k.classList.add("statis");
    else k.addEventListener("animationend", () => k.classList.add("siap"), { once: true });
    k.addEventListener("click", () => {
      k.classList.remove("siap");
      k.classList.add("terbuka");
      setTimeout(() => { k.remove(); tampil(h); }, kurangGerak ? 0 : 550);
    });
    area.appendChild(k);
    k.focus({ preventScroll: true });
  }

  tuas.addEventListener("click", () => {
    const sisa = hadiah.filter((h) => !dapat.includes(h));
    if (!sisa.length) return;
    const h = sisa[Math.floor(Math.random() * sisa.length)];
    tuas.disabled = true;
    teks.textContent = "";
    if (kurangGerak) return jatuhkan(h);
    tuas.classList.add("putar");
    kaca.classList.add("goyang");
    setTimeout(() => {
      tuas.classList.remove("putar");
      kaca.classList.remove("goyang");
      jatuhkan(h);
    }, 900);
  });
})();

/* ---------- Peluk virtual ---------- */
(function peluk() {
  const tombol = document.getElementById("tombol-peluk");
  const hitung = document.getElementById("peluk-hitung");
  const teks = document.getElementById("peluk-teks");
  let n = 0;
  tombol.addEventListener("click", () => {
    n++;
    hitung.textContent = n + " pelukan";
    tombol.style.setProperty("--skala", Math.min(1 + n * 0.02, 1.6));
    if (KONFIG.pelukTeks[n]) teks.textContent = KONFIG.pelukTeks[n];
    if (!kurangGerak) {
      tombol.classList.remove("debar");
      void tombol.offsetWidth;
      tombol.classList.add("debar");
    }
  });
})();

/* ---------- Game tangkap hati ---------- */
(function game() {
  const arena = document.getElementById("arena");
  const skorEl = document.getElementById("skor");
  const tombol = document.getElementById("tombol-main");
  const teks = document.getElementById("game-teks");
  const target = KONFIG.game.target;
  let skor = 0, timer = null;

  document.getElementById("game-petunjuk").textContent = "Ketuk hati yang jatuh. Dapat " + target + " untuk buka kejutan.";
  skorEl.textContent = "0 / " + target;

  function berhenti() { clearInterval(timer); timer = null; }

  function muncul() {
    const h = document.createElement("button");
    h.type = "button";
    h.className = "hati-jatuh";
    h.textContent = "\u2665";
    h.setAttribute("aria-label", "Tangkap hati");
    h.style.left = Math.random() * Math.max(arena.clientWidth - 48, 0) + "px";
    h.style.fontSize = 26 + Math.random() * 12 + "px";
    if (kurangGerak) {
      h.classList.add("statis");
      h.style.top = Math.random() * Math.max(arena.clientHeight - 48, 0) + "px";
      setTimeout(() => h.remove(), 3000);
    } else {
      h.style.setProperty("--tinggi", arena.clientHeight + 70 + "px");
      h.style.setProperty("--dur", 2.6 + Math.random() * 1.6 + "s");
      h.addEventListener("animationend", () => h.remove());
    }
    h.addEventListener("pointerdown", (e) => {
      e.stopPropagation();
      h.remove();
      skor++;
      skorEl.textContent = Math.min(skor, target) + " / " + target;
      if (skor >= target) menang();
    });
    arena.appendChild(h);
  }

  function menang() {
    berhenti();
    arena.querySelectorAll(".hati-jatuh").forEach((x) => x.remove());
    teks.textContent = KONFIG.game.menang;
    tombol.disabled = false;
    tombol.textContent = "Main lagi";
  }

  tombol.addEventListener("click", () => {
    if (timer) return;
    skor = 0;
    skorEl.textContent = "0 / " + target;
    teks.textContent = "";
    tombol.disabled = true;
    arena.querySelectorAll(".hati-jatuh").forEach((x) => x.remove());
    muncul();
    timer = setInterval(muncul, kurangGerak ? 1100 : 650);
  });
})();

/* ---------- Mesin ramal cinta ---------- */
(function ramal() {
  const angka = document.getElementById("ramal-angka");
  const teks = document.getElementById("ramal-teks");
  const tombol = document.getElementById("tombol-ramal");
  document.getElementById("ramal-pasangan").textContent = KONFIG.namaKamu + " + " + KONFIG.nama;

  function hasil() {
    const r = KONFIG.ramal[Math.floor(Math.random() * KONFIG.ramal.length)];
    angka.textContent = r.angka;
    teks.textContent = r.teks;
    tombol.disabled = false;
    tombol.textContent = "Ramal lagi";
  }

  tombol.addEventListener("click", () => {
    tombol.disabled = true;
    teks.textContent = "";
    if (kurangGerak) return hasil();
    let langkah = 0;
    const putar = setInterval(() => {
      angka.textContent = Math.floor(Math.random() * 100) + "%";
      if (++langkah >= 14) { clearInterval(putar); hasil(); }
    }, 90);
  });
})();


/* ---------- Lagu latar ---------- */
(function lagu() {
  const L = KONFIG.lagu;
  if (!L || !L.src) return;
  const audio = document.getElementById("lagu");
  const tombol = document.getElementById("tombol-lagu");
  const label = document.getElementById("label-lagu");
  const layar = document.getElementById("layar-awal");
  const info = document.getElementById("awal-info");
  const root = document.documentElement;
  audio.src = L.src;
  audio.volume = 0.7;

  function atur(main) {
    tombol.setAttribute("aria-pressed", String(main));
    tombol.setAttribute("aria-label", (main ? "Jeda lagu: " : "Putar lagu: ") + L.judul);
    label.textContent = main ? "Jeda" : "Putar lagu";
  }
  function putar() {
    const p = audio.play();
    if (p && p.catch) p.catch(() => atur(false));
  }
  audio.addEventListener("play", () => atur(true));
  audio.addEventListener("pause", () => atur(false));
  audio.addEventListener("error", () => {
    tombol.hidden = true;
    if (!layar.hidden) tutupLayar(false);
  });

  function tutupLayar(sambilPutar) {
    if (sambilPutar) putar();
    layar.classList.add("tutup");
    root.classList.remove("kunci");
    setTimeout(() => { layar.hidden = true; }, kurangGerak ? 0 : 700);
    const t = document.getElementById("tombol-lagu");
    if (!t.hidden) t.focus({ preventScroll: true });
  }

  tombol.hidden = false;
  tombol.addEventListener("click", () => (audio.paused ? putar() : audio.pause()));
  atur(false);

  if (L.layarAwal) {
    document.getElementById("awal-judul").textContent = "Untuk " + KONFIG.nama;
    info.textContent = "Ada lagu yang menemani. Pelankan volume kalau sedang di tempat umum.";
    layar.hidden = false;
    root.classList.add("kunci");
    document.getElementById("tombol-buka").addEventListener("click", () => tutupLayar(true));
    document.getElementById("tombol-buka").focus({ preventScroll: true });
  }

  document.addEventListener("visibilitychange", () => { if (document.hidden && !audio.paused) audio.pause(); });
})();