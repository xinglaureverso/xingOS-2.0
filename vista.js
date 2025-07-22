function tremerVista() {
  const tela = document.getElementById("tela");
  tela.style.transform = "rotate(0.5deg)";
  setTimeout(() => {
    tela.style.transform = "rotate(-0.5deg)";
  }, 200);
  setTimeout(() => {
    tela.style.transform = "rotate(0deg)";
  }, 400);
}

setInterval(tremerVista, 40000); // a cada 40 segundos

function voltarXP() {
  const tela = document.getElementById("tela");
  tela.innerHTML = "<h2>🧪 Reinstalando XP...</h2><p>Aguarde 41 segundos reversos.</p>";
  
  setTimeout(() => {
    window.location.href = "webxingOS.html";
  }, 41000);
}
