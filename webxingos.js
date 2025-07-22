function abrirJanela(titulo) {
  const janela = document.createElement("div");
  janela.className = "janela";
  janela.innerHTML = `
    <div class="janela-topo">
      <span>${titulo}</span>
      <button onclick="this.closest('.janela').remove()">❌</button>
    </div>
    <div class="janela-corpo">Conteúdo de "${titulo}"</div>
  `;
  document.getElementById("janelas").appendChild(janela);

  // Posicionamento aleatório
  janela.style.top = Math.random() * 300 + "px";
  janela.style.left = Math.random() * 400 + "px";

  // Arrastar janela
  const topo = janela.querySelector(".janela-topo");
  topo.onmousedown = function (e) {
    const offsetX = e.clientX - janela.offsetLeft;
    const offsetY = e.clientY - janela.offsetTop;
    document.onmousemove = function (e) {
      janela.style.left = e.clientX - offsetX + "px";
      janela.style.top = e.clientY - offsetY + "px";
    };
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };
}

// ⏰ Relógio estilo XP
setInterval(() => {
  document.getElementById("hora-xp").textContent = new Date().toLocaleTimeString();
}, 1000);

// 🖱️ Menu de contexto XP
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  const menu = document.getElementById("menu-contexto");
  menu.style.top = e.clientY + "px";
  menu.style.left = e.clientX + "px";
  menu.classList.remove("oculto");
});

// 🖱️ Ocultar menu ao clicar fora
document.addEventListener("mousedown", function (e) {
  const menu = document.getElementById("menu-contexto");
  if (!menu.contains(e.target)) {
    menu.classList.add("oculto");
  }
});
function toggleMenu() {
  const menu = document.getElementById("menu-iniciar");
  menu.classList.toggle("oculto");
}

// Oculta menu iniciar ao clicar fora
document.addEventListener("mousedown", function (e) {
  const menu = document.getElementById("menu-iniciar");
  const botao = document.getElementById("botao-iniciar");

  if (!menu.contains(e.target) && e.target !== botao) {
    menu.classList.add("oculto");
  }
});

// Relógio estilo XP
setInterval(() => {
  document.getElementById("hora-xp").textContent = new Date().toLocaleTimeString();
}, 1000);
function abrirJanela(titulo) {
  const janela = document.createElement("div");
  janela.className = "janela";
  
  let conteudo = `<div class="janela-corpo">Conteúdo de "${titulo}"</div>`;
  
  if (titulo === "Internet Explorer") {
    conteudo = `
      <div class="janela-corpo">
        <h3 style="color:#003399;">🌐 Internet Explorer XP</h3>
        <p>Bem-vindo à WebXingOS!</p>
        <button onclick="instalarBonzi()" style="padding:6px 12px; background:#7b00b9; color:white; border:none; border-radius:6px;">🐒 Instalar BonziBuddy</button>
      </div>
    `;
  }

  janela.innerHTML = `
    <div class="janela-topo">
      <span>${titulo}</span>
      <button onclick="this.closest('.janela').remove()">❌</button>
    </div>
    ${conteudo}
  `;
  document.getElementById("janelas").appendChild(janela);

  // Posicionamento aleatório
  janela.style.top = Math.random() * 300 + "px";
  janela.style.left = Math.random() * 400 + "px";

  // Drag
  const topo = janela.querySelector(".janela-topo");
  topo.onmousedown = function (e) {
    const offsetX = e.clientX - janela.offsetLeft;
    const offsetY = e.clientY - janela.offsetTop;
    document.onmousemove = function (e) {
      janela.style.left = e.clientX - offsetX + "px";
      janela.style.top = e.clientY - offsetY + "px";
    };
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };
}
if (titulo === "BonziBuddy") {
  conteudo = `
    <div class="janela-corpo">
      <h3 style="color:#8000a0;">🐵 BonziBuddy XP</h3>
      <p>Olá! Eu sou o BonziBuddy! 😈</p>
      <p>Pronto para tornar sua experiência reversa... ainda mais caótica!</p>
      <button onclick="alert('BonziBuddy configurado!')">⚙️ Configurar</button>
    </div>
  `;
}
function executarAntivirus() {
  gerarErro("Erro crítico: Código 0x0000001");
  setTimeout(() => gerarErro("Falha na proteção reversa"), 1200);
  setTimeout(() => gerarErro("Sistema comprometido!"), 2500);
  setTimeout(() => abrirJanela("Jump Scare"), 4000);
}

function gerarErro(msg) {
  const erro = document.createElement("div");
  erro.className = "janela";
  erro.innerHTML = `
    <div class="janela-topo">
      <span>Erro do Sistema</span>
      <button onclick="this.closest('.janela').remove()">❌</button>
    </div>
    <div class="janela-corpo">
      <p style="color:red; font-weight:bold;">❌ ${msg}</p>
    </div>
  `;
  document.getElementById("janelas").appendChild(erro);

  erro.style.top = Math.random() * 300 + "px";
  erro.style.left = Math.random() * 400 + "px";
}
if (titulo === "Jump Scare") {
  conteudo = `
    <div class="janela-corpo">
      <h3 style="color:darkred;">⚠️ ALERTA</h3>
      <video autoplay muted loop width="100%">
        <source src="jumpscare.mp4" type="video/mp4">
        Seu navegador não suporta vídeo.
      </video>
    </div>
  `;
}
function abrirJogoSonic() {
  const janela = document.createElement("div");
  janela.className = "janela";
  janela.innerHTML = `
    <div class="janela-topo">
      <span>Sonic.exe</span>
      <button onclick="this.closest('.janela').remove()">❌</button>
    </div>
    <div class="janela-corpo" id="fase-sonic">
      <h3 style="color:#0099ff;">Fase 1 - Green Hill</h3>
      <p>Sonic está correndo alegremente pelo campo...</p>
      <img src="fase1.gif" width="100%">
    </div>
  `;
  document.getElementById("janelas").appendChild(janela);

  janela.style.top = "100px";
  janela.style.left = "120px";

  // Após alguns segundos, fase 2
  setTimeout(() => {
    const fase = document.getElementById("fase-sonic");
    fase.innerHTML = `
      <h3 style="color:red;">Fase 2 - Chaos Hill</h3>
      <p><strong>Sonic parou...</strong> Há olhos brilhando e sangue no chão.</p>
      <img src="fase2.gif" width="100%">
      <audio autoplay>
        <source src="sonic-scream.mp3" type="audio/mp3">
      </audio>
    `;
  }, 4000); // 4 segundos
}
function instalarWin7() {
  abrirJanela("Instalador do Windows 7");

  setTimeout(() => {
    abrirJanela("Internet Explorer");
  }, 3000);
}

function abrirJanela(titulo) {
  const janela = document.createElement("div");
  janela.className = "janela";

  let conteudo = `<div class="janela-corpo"><p>Carregando...</p></div>`;

  if (titulo === "Instalador do Windows 7") {
    conteudo = `
      <div class="janela-corpo">
        <h3 style="color:#003399;">Instalador do Windows 7</h3>
        <p>🧠 Verificando compatibilidade reversa...</p>
        <p>🔧 Instalando arquivos essenciais do caos...</p>
        <progress max="100" value="30"></progress>
      </div>
    `;
  }

  if (titulo === "Internet Explorer") {
    conteudo = `
      <div class="janela-corpo">
        <h3 style="color:#990000;">Internet Explorer</h3>
        <p><strong>Bem-vindo ao WebXingOS Navegador!</strong></p>
        <ul>
          <li>📢 9 anúncios abertos em segundo plano</li>
          <li>🦠 3 vírus detectados que se acham úteis</li>
          <li>🐵 BonziBuddy está tentando assumir a aba</li>
        </ul>
        <button onclick="abrirJanela('Erro Crítico')">💥 Corrigir</button>
        <button onclick="abrirJanela('Mais Anúncios')">📣 Quero mais anúncios!</button>
      </div>
    `;
  }

  if (titulo === "Erro Crítico") {
    conteudo = `
      <div class="janela-corpo">
        <p style="color:red;"><strong>❌ Não foi possível corrigir os erros.</strong></p>
        <p>O instalador se arrependeu de existir.</p>
      </div>
    `;
  }

  if (titulo === "Mais Anúncios") {
    conteudo = `
      <div class="janela-corpo">
        <p><strong>🛍️ Promoção reversa: Compre um vírus, leve dois!</strong></p>
        <img src="ads.gif" width="100%" />
      </div>
    `;
  }

  janela.innerHTML = `
    <div class="janela-topo">
      <span>${titulo}</span>
      <button onclick="this.closest('.janela').remove()">❌</button>
    </div>
    ${conteudo}
  `;

  document.getElementById("janelas").appendChild(janela);

  janela.style.top = Math.random() * 250 + "px";
  janela.style.left = Math.random() * 400 + "px";

  const topo = janela.querySelector(".janela-topo");
  topo.onmousedown = function (e) {
    const offsetX = e.clientX - janela.offsetLeft;
    const offsetY = e.clientY - janela.offsetTop;
    document.onmousemove = function (e) {
      janela.style.left = e.clientX - offsetX + "px";
      janela.style.top = e.clientY - offsetY + "px";
    };
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  };
}
if (titulo === "Configurações") {
  conteudo = `
    <div class="janela-corpo">
      <h3>🧩 Configurações do WebXingOS XP</h3>
      <ul style="list-style:none; padding-left:0;">
        <li><button onclick="abrirJanela('Mouse')">🖱️ Configurar Mouse</button></li>
        <li><button onclick="abrirJanela('Visual')">🎨 Aparência</button></li>
        <li><button onclick="abrirJanela('Windows Update')">🔄 Windows Update</button></li>
        <li><button onclick="abrirJanela('Antivírus')">🛡️ Antivírus Padrão</button></li>
      </ul>
    </div>
  `;
}

if (titulo === "Mouse") {
  conteudo = `
    <div class="janela-corpo">
      <h3>🖱️ Configurações do Mouse</h3>
      <label>Velocidade:</label>
      <input type="range" min="1" max="10" value="5">
      <p>Dica reversa: quanto mais rápido, menos controle.</p>
    </div>
  `;
}

if (titulo === "Visual") {
  conteudo = `
    <div class="janela-corpo">
      <h3>🎨 Aparência</h3>
      <select>
        <option>XP Clássico</option>
        <option>Vista Travado</option>
        <option>Reverso Moderno</option>
      </select>
      <p>Você escolhe, ele ignora.</p>
    </div>
  `;
}

if (titulo === "Windows Update") {
  conteudo = `
    <div class="janela-corpo">
      <h3>🔄 Windows Update</h3>
      <p>Verificando atualizações disponíveis...<br>Encontrado: "Pacote de Lentidão 7.2"</p>
      <button onclick="alert('Atualização falhou por motivo desconhecido.')">Instalar</button>
    </div>
  `;
}

if (titulo === "Antivírus") {
  conteudo = `
    <div class="janela-corpo">
      <h3>🛡️ Antivírus Padrão</h3>
      <p>Status: Confuso</p>
      <button onclick="alert('Antivírus ativado. BonziBuddy em quarentena... talvez.')">Executar verificação</button>
    </div>
  `;
}
