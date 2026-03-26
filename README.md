# niice-basics
# 🌐 Webflow Scripts – [Projectnaam]

Dit project bevat alle custom scripts en styles voor het [Projectnaam] Webflow-project.  
Het is opgezet volgens de team no-code werkwijze: lokale ontwikkeling met GitHub-sync en integratie in Webflow via RawGitHack (development) en jsDelivr (production).

---

## 📁 Projectstructuur

/js → map voor alle .js files
main.js → hoofdscript met imports van alle functies
/css → map voor alle .css files
main.css → hoofdscript met imports van alle css
README.md → deze handleiding

---

## 🚀 Workflow-overzicht

1. **Project aanmaken in Webflow**
   - Zet de basisstructuur op (pagina’s, CMS, symbolen, etc.).

2. **GitHub repo aanmaken**
   - Gebruik de `Niice Basics` template.
   - Naamconventie: `klantnaam-webflow-scripts`.

3. **Lokaal klonen & openen**
   ```bash
   git clone https://github.com/niice-nocode/klantnaam-webflow-project.git
   code klantnaam-webflow-project

4. **Code schrijven**

Gebruik Claude in Visual Studio Code of desktop-app.
Voeg nieuwe .js of .css bestanden toe binnen /assets.

Importeer nieuwe bestanden in main.js of main.css.

5. **Syncen met Github**

git add .
git commit -m "Beschrijving van wijziging"
git push origin main

6. **Integreren in Webflow**

Gebruik RawGitHack voor development.
Gebruik jsDelivr voor production.

Voorbeeld:

<!-- DEVELOPMENT (RawGitHack) -->
<script src="https://raw.githack.com/teamnaam/klantnaam-webflow-scripts/main/assets/js/main.js"></script>

<!-- PRODUCTION (jsDelivr) -->
<!-- <script src="https://cdn.jsdelivr.net/gh/teamnaam/klantnaam-webflow-scripts/assets/js/main.js"></script> -->


Bij livegang

Comment de RawGitHack links uit.

Activeer de jsDelivr links.


## 📄 Voorbeeld commentstructuur in Webflow

<!-- ===== DEVELOPMENT FILES ===== -->
<link rel="stylesheet" href="https://raw.githack.com/teamnaam/klantnaam-webflow-scripts/main/assets/css/main.css">
<script src="https://raw.githack.com/teamnaam/klantnaam-webflow-scripts/main/assets/js/main.js"></script>

<!-- ===== PRODUCTION FILES ===== -->
<!--
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/teamnaam/klantnaam-webflow-scripts/assets/css/main.css">
<script src="https://cdn.jsdelivr.net/gh/teamnaam/klantnaam-webflow-scripts/assets/js/main.js"></script>
-->
