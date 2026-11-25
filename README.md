# Portal Alviverde — Projeto acadêmico

Projeto desenvolvido com HTML, CSS e JavaScript, com tema Palmeiras.

## Como abrir
1. Extraia o arquivo ZIP.
2. Abra `index.html` no navegador.
3. Navegue pelo menu e pelos links do rodapé.

## Estrutura
- 15 páginas HTML independentes.
- CSS externo em `css/style.css`.
- CSS interno na página `estadio.html`.
- CSS inline no elemento body de `index.html`.
- Classes, IDs e seletores por tag.
- JavaScript em `js/script.js`, com interações nas páginas.
- Três integrações por Fetch em páginas separadas.

## APIs utilizadas
1. TheSportsDB — busca de informações do Palmeiras (`api-futebol.html`).
2. Open-Meteo — dados meteorológicos de São Paulo (`api-clima.html`).
3. Wikipédia REST API — resumo sobre o Palmeiras (`api-curiosidades.html`).

As APIs dependem de conexão com a internet e da disponibilidade dos serviços. Abra as páginas de API e clique nos botões para carregar os dados.

## Observações
- Páginas de resultados, elenco, agenda e classificação contêm conteúdo demonstrativo e devem ser atualizadas/confirmadas antes de serem apresentadas como dados atuais.
- O formulário de contato valida os campos no navegador, mas não envia mensagens para um servidor.
- O projeto é acadêmico e não é um site oficial do Palmeiras.

## Publicar no GitHub
1. Crie um repositório público no GitHub.
2. Envie todos os arquivos e pastas deste projeto.
3. Nas configurações do repositório, abra **Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`, depois salve.
6. Aguarde a publicação. O link do site será exibido na área GitHub Pages.
