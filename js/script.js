
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  if (menu && nav) menu.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(opened));
  });

  const theme = document.getElementById("theme-toggle");
  if (theme) theme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    theme.textContent = document.body.classList.contains("dark") ? "Ativar tema claro" : "Alternar tema";
  });

  const top = document.getElementById("top-button");
  if (top) top.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));

  const filter = document.getElementById("filtro-jogador");
  if (filter) filter.addEventListener("input", () => {
    const term = filter.value.toLocaleLowerCase("pt-BR");
    document.querySelectorAll(".player").forEach(card => {
      card.hidden = !card.textContent.toLocaleLowerCase("pt-BR").includes(term);
    });
  });

  const form = document.getElementById("contact-form");
  if (form) form.addEventListener("submit", event => {
    event.preventDefault();
    const feedback = document.getElementById("form-feedback");
    if (!form.reportValidity()) return;
    feedback.textContent = "Mensagem validada! Este formulário é demonstrativo e não envia dados para um servidor.";
    form.reset();
  });

  const torcidaBtn = document.getElementById("torcida-btn");
  if (torcidaBtn) torcidaBtn.addEventListener("click", () => {
    document.getElementById("torcida-msg").textContent = "Avanti, Palestra! A torcida faz parte dessa história.";
  });

  const footballBtn = document.getElementById("football-load");
  if (footballBtn) footballBtn.addEventListener("click", async () => {
    const out = document.getElementById("football-result");
    out.textContent = "Consultando TheSportsDB...";
    try {
      const response = await fetch("https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=Palmeiras");
      if (!response.ok) throw new Error("Não foi possível acessar o serviço.");
      const data = await response.json();
      const team = data.teams && data.teams[0];
      if (!team) throw new Error("Nenhum time encontrado.");
      out.innerHTML = `<h2>${escapeHTML(team.strTeam)}</h2><p><strong>País:</strong> ${escapeHTML(team.strCountry || "Não informado")}</p><p><strong>Esporte:</strong> ${escapeHTML(team.strSport || "Não informado")}</p><p>${escapeHTML(team.strDescriptionEN || "Descrição não disponível.")}</p>`;
    } catch (error) { out.textContent = error.message + " Tente novamente mais tarde."; }
  });

  const weatherBtn = document.getElementById("weather-load");
  if (weatherBtn) weatherBtn.addEventListener("click", async () => {
    const out = document.getElementById("weather-result");
    out.textContent = "Consultando Open-Meteo...";
    try {
      const url = "https://api.open-meteo.com/v1/forecast?latitude=-23.5505&longitude=-46.6333&current=temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=America%2FSao_Paulo";
      const response = await fetch(url);
      if (!response.ok) throw new Error("Não foi possível acessar o serviço.");
      const data = await response.json();
      const c = data.current;
      out.innerHTML = `<h2>São Paulo agora</h2><p><strong>Temperatura:</strong> ${c.temperature_2m} ${data.current_units.temperature_2m}</p><p><strong>Umidade:</strong> ${c.relative_humidity_2m}${data.current_units.relative_humidity_2m}</p><p><strong>Vento:</strong> ${c.wind_speed_10m} ${data.current_units.wind_speed_10m}</p>`;
    } catch (error) { out.textContent = error.message + " Tente novamente mais tarde."; }
  });

  const wikiBtn = document.getElementById("wiki-load");
  if (wikiBtn) wikiBtn.addEventListener("click", async () => {
    const out = document.getElementById("wiki-result");
    out.textContent = "Buscando na Wikipédia...";
    try {
      const url = "https://pt.wikipedia.org/api/rest_v1/page/summary/Sociedade_Esportiva_Palmeiras";
      const response = await fetch(url);
      if (!response.ok) throw new Error("Não foi possível acessar a Wikipédia.");
      const data = await response.json();
      const paragraph = document.createElement("p");
      paragraph.textContent = data.extract || "Resumo não disponível.";
      out.replaceChildren();
      const heading = document.createElement("h2");
      heading.textContent = data.title || "Sociedade Esportiva Palmeiras";
      out.append(heading, paragraph);
      if (data.content_urls?.desktop?.page) {
        const link = document.createElement("a");
        link.href = data.content_urls.desktop.page;
        link.target = "_blank";
        link.rel = "noopener";
        link.textContent = "Ler artigo completo ↗";
        out.append(link);
      }
    } catch (error) { out.textContent = error.message + " Tente novamente mais tarde."; }
  });
});

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[char]));
}
