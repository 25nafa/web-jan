const musicIcon = document.getElementById("music");
const bgMusic = document.getElementById("bgMusic");
const musicPlayer = document.getElementById("musicPlayer");
const musicToggleBtn = document.getElementById("musicToggleBtn");

let isMusicPlaying = false;

musicIcon.addEventListener("click", (e) => {
  e.preventDefault();

  musicPlayer.classList.remove("hidden");

  if (!isMusicPlaying) {
    bgMusic.volume = 0.4;
    bgMusic.play();
    musicToggleBtn.textContent = "⏸ Pause";
  } else {
    bgMusic.pause();
    musicToggleBtn.textContent = "▶️ Play";
  }

  isMusicPlaying = !isMusicPlaying;
});

musicToggleBtn.addEventListener("click", () => {
  if (isMusicPlaying) {
    bgMusic.pause();
    musicToggleBtn.textContent = "▶️ Play";
  } else {
    bgMusic.play();
    musicToggleBtn.textContent = "⏸ Pause";
  }

  isMusicPlaying = !isMusicPlaying;
});

// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar menghilangkan navbar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if(!hamburger.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "Friend";
let candleCount = parseInt(params.get("candles")) || 4;
candleCount = Math.min(Math.max(candleCount, 1), 30);


const cake = document.getElementById("cake");

      const colors = [
        "green-candle",
        "purple-candle",
        "blue-candle",
        "yellow-candle",
      ];
      const CAKE_VISUAL_WIDTH = 35;

      function createCandles(count) {
        cake.innerHTML = "";
        const CANDLE_VISUAL_WIDTH = 2;
        const availableWidth = CAKE_VISUAL_WIDTH;
        const candlesPerRow = 6;
        const rowCount = Math.ceil(count / candlesPerRow);
        const shiftAmount = 4;

        for (let i = 0; i < count; i++) {
          const candle = document.createElement("div");
          candle.classList.add("candle");
          const colorClass = colors[Math.floor(Math.random() * colors.length)];
          candle.classList.add(colorClass);

          const row = Math.floor(i / candlesPerRow);
          const col = i % candlesPerRow;
          const totalCandlesInRow = Math.min(
            candlesPerRow,
            count - row * candlesPerRow
          );
          const rowSpacing = availableWidth / (totalCandlesInRow + 1);

          const leftBase = rowSpacing * (col + 1) - CANDLE_VISUAL_WIDTH / 2 + 5;
          const rowShift = row % 2 === 0 ? 0 : shiftAmount;

          candle.style.position = "absolute";
          candle.style.top = `${10 + row * 3}px`;
          candle.style.left = `${leftBase - rowShift + 4}px`;

          cake.appendChild(candle);
        }
      }

      createCandles(candleCount);

function launchConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    ctaSound.currentTime = 0;
    ctaSound.volume = 1.0;
    ctaSound.play();
}
function openMessage() {
  document.getElementById("messageBox").classList.remove("hidden");
}
function openMessage() {
  document.getElementById("messageBox").classList.add("active");
}

function saveMessage() {
  const message = document.getElementById("userMessage").value;
  if (message.trim() === "") return alert("Pesannya jangan kosong ya 🙂");

  localStorage.setItem("birthdayMessage", message);
  showMessage();
}

function showMessage() {
  const saved = localStorage.getItem("birthdayMessage");
  if (saved) {
    document.getElementById("savedMessage").innerHTML =
      `<p><strong>Pesanmu:</strong><br>${saved}</p>`;
  }
}

showMessage();

const messages = [
  "Hei… kamu masih hidup. Itu sudah pencapaian besar hari ini 🐣",
  "Jangan sedih ya. Nanti kucing imajiner kamu bingung.",
  "Kamu hebat. Walaupun hari ini cuma hebat dalam rebahan.",
  "Kalau capek, tidak apa-apa. Kita pura-pura jadi kentang dulu 🥔",
  "Pelan-pelan ya. Dunia juga jalannya sambil nyenggol.",
  "Kamu tidak aneh. Kamu edisi terbatas ✨",
  "Hari ini kacau? Cocok. Kamu juga lucu pas kacau.",
  "Tenang… semua akan baik-baik saja. Atau minimal tidak makin aneh.",
  "Kalau bingung, senyum dulu. Otak suka loading sambil senyum.",
  "Kamu kuat. Tapi kalau mau manja juga boleh kok 🌸",
  "Tidak perlu sempurna. Cukup jadi kamu versi hari ini.",
  "Semangat ya… walaupun semangatnya bentuknya kecil dan gemetar."
];


function showRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("cardText").innerText = messages[randomIndex];
  document.getElementById("card").classList.remove("hidden");
}
const images = [
  "img/8c0b7739e29cbd0f5c877b565601ec2a.jpg",
  "img/abe35a6b471240e3fb730c3856e4f919.jpg",
  "img/f9c11858139522e2befd166564952843.jpg",
  "img/821709af679424d6dac76b37188556e4.jpg",
  'img/0b6ce7ba75244bb30eb19c9bc17bfc0d.jpg',
  'img/9a68125995eac71b3f228bd7fe1025f5.jpg',
  'img/new1.jpg',
  'img/new2.jpg',
  'img/new3.jpg',
  'img/new4.jpg',
  'img/new5.jpg',
  'img/new6.jpg',
  'img/new7.jpg',
  'img/new8.jpg'
];

function showRandomMessage() {
  // random message
  const msgIndex = Math.floor(Math.random() * messages.length);
  document.getElementById("cardText").innerText = messages[msgIndex];

  // random image
  const imgIndex = Math.floor(Math.random() * images.length);
  document.getElementById("cardImg").src = images[imgIndex];

  // tampilkan card
  document.getElementById("card").classList.remove("hidden");
}
const moodMessages = {
  senang: "Mode 🦄✨ aktif. Dunia aman (sementara).",
  sedih: "🪦😭 Oke, kita rebahan dulu. Nangis boleh.",
  capek: "🫠🪫 Tubuh mati, jiwa loading...",
  tenang: "🧘‍♂️🫧 Hening... tidak ada drama hari ini.",
  overthinking: "🧠🔥 Otak overheat. Matikan dulu pikiran."
};
const moodSongs = {
  senang: "audio/You've Got a Friend in Me (Instrumental Version  Remastered 2015).mp3",
  sedih: "audio/So Close(instrumental version)-Enchanted OST [KkY3_CThZIU].mp3",
  capek: "audio/Toy Story 2 - When She Loved Me  Instrumental.mp3",
  tenang: "audio/Unforgettable (From Disney's, Finding Dory).mp3",
  overthinking: "audio/3 - Nomanisone Island_National Movers [Inside Out Expanded Soundtrack] [HkZE1J3zj04].mp3"
};

const audio = document.getElementById("moodAudio");
const musicBtn = document.getElementById("musicBtn");
const moodResult = document.getElementById("moodResult");

const moodButtons = document.querySelectorAll(".mood-options button");
const musicControl = document.getElementById("musicControl");

moodButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const mood = btn.dataset.mood;

    // tampilkan pesan mood
    moodResult.textContent = moodMessages[mood];
    moodResult.classList.remove("hidden");

    // tampilkan tombol music
    musicControl.classList.remove("hidden");

    // simpan mood
    localStorage.setItem("todayMood", mood);

    // ganti lagu sesuai mood
    audio.pause();
    audio.currentTime = 0;
    audio.src = moodSongs[mood];
    audio.volume = 0.5;
    audio.play();

    isPlaying = true;
    musicBtn.textContent = "⏸️ Pause Music";
  });
});
// tombol play / pause music
musicBtn.addEventListener("click", () => {
  if (!audio.src) return; // belum pilih mood

  if (isPlaying) {
    audio.pause();
    musicBtn.textContent = "▶️ Play Music";
  } else {
    audio.play();
    musicBtn.textContent = "⏸️ Pause Music";
  }

  isPlaying = !isPlaying;
});
const ctaBtn = document.getElementById("ctaStart");
const ctaSound = document.getElementById("ctaSound");

ctaBtn.addEventListener("click", function (e) {
  // cegah anchor langsung loncat
  e.preventDefault();

  // mainkan sound (aman karena user interaction)
  ctaSound.currentTime = 0;
  ctaSound.volume = 1.0;
  ctaSound.play();

  // confetti 10x (interval halus)
  let count = 0;
  const interval = setInterval(() => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    count++;
    if (count >= 50) clearInterval(interval);
  }, 200); // tiap 200ms

  // scroll halus ke birthday cake
  document.querySelector("#birthday-cake").scrollIntoView({
    behavior: "smooth"
  });
});
