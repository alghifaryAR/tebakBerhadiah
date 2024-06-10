// Generate a random number between 1 and 4
const randomNumber = Math.floor(Math.random() * 4) + 1;

let tebakanSaatIni = "";
let attempts = 0;

function tambahAngka(angka) {
  tebakanSaatIni += angka;
  document.getElementById("hasil1").textContent = tebakanSaatIni;
  document.getElementById("hasil").textContent = "";
}

function clearTebakan() {
  tebakanSaatIni = "";
  document.getElementById("hasil").textContent = "";
  document.getElementById("hasil1").textContent = "";
}

function refreshPage() {
  window.location.reload();
}

function periksaTebakan() {
  const tebakan = parseInt(tebakanSaatIni);
  attempts++;

  if (tebakan === randomNumber) {
    document.getElementById(
      "hasil"
    ).textContent = `Selamat! Anda menebak dengan benar dalam ${attempts} percobaan. Angka yang benar adalah ${randomNumber}.`;
    document.getElementById("keypad").innerHTML = "";
    document.getElementById("judul").textContent = "";
  } else if (tebakan < randomNumber) {
    document.getElementById(
      "hasil"
    ).textContent = `Tebakan Anda terlalu rendah. Coba lagi! Sisa percobaan: ${
      3 - attempts
    }`;
    tebakanSaatIni = ""; // Reset input tebakan setelah salah
    document.getElementById("hasil1").textContent = tebakanSaatIni;
  } else {
    document.getElementById(
      "hasil"
    ).textContent = `Tebakan Anda terlalu tinggi. Coba lagi! Sisa percobaan: ${
      3 - attempts
    }`;
    tebakanSaatIni = ""; // Reset input tebakan setelah salah
    document.getElementById("hasil1").textContent = tebakanSaatIni;
  }

  if (attempts === 3 && tebakan !== randomNumber) {
    document.getElementById(
      "hasil"
    ).textContent = `Kesempatan habis! Angka yang benar adalah ${randomNumber}.`;
    document.getElementById("keypad").innerHTML = "";
    document.getElementById("judul").textContent = "";
  }
}

function resetGame() {
  // Reset game state (not used when refreshing the page)
}
