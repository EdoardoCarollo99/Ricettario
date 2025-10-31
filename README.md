# 🍳 Ricettario Personale

Un semplice ricettario statico sviluppato con HTML, CSS e JavaScript vanilla - **ad uso personale** e come esercizio di studio del front-end.

## 🎯 Perché questo progetto?

In un mondo dominato da framework complessi (React, Vue, Angular, Next.js...), questo progetto serve a:

- **Ristudiare le basi**: HTML semantico, CSS moderno e JavaScript puro
- **Ricordare come funziona il web**: senza build tools, senza npm, senza dipendenze
- **Avere un ricettario personale**: semplice, veloce, sempre accessibile
- **Capire cosa si nasconde sotto i framework**: animazioni, responsive, interattività manuale

> _"Prima di usare un martello pneumatico, devi saper usare un martello normale"_

## 🚫 Cosa NON è questo progetto

- ❌ Non è un'applicazione moderna con backend
- ❌ Non usa framework o librerie (volutamente)
- ❌ Non ha gestione utenti, database o autenticazione
- ❌ Non è pensato per essere scalabile o per uso commerciale
- ❌ Non segue best practices enterprise (e va bene così)

## ✅ Cosa È questo progetto

- ✅ Un esercizio di studio del front-end vanilla
- ✅ Un ricettario personale statico e funzionale
- ✅ Un ripasso di CSS Grid, Flexbox, animazioni e transizioni
- ✅ JavaScript puro senza jQuery o altre librerie
- ✅ Un progetto hostabile gratuitamente su GitHub Pages
- ✅ Un modo per conservare le proprie ricette in formato digitale

## 🛠️ Tecnologie Utilizzate

- **HTML5**: Struttura semantica
- **CSS3**:
  - Flexbox e Grid Layout
  - Animazioni e transizioni
  - Media queries per responsive design
  - CSS custom properties (variabili)
- **JavaScript Vanilla**:
  - DOM manipulation
  - Event listeners
  - Smooth scroll
  - Lazy loading immagini
  - Filtri e ricerca dinamica
  - Calcolatore ingredienti

## 📁 Struttura del Progetto

```
Ricettario/
├── index.html              # Home page
├── pizza-teglia.html       # Pagina ricetta esempio
├── css/
│   ├── styles.css          # Stili generali
│   └── recipe-detail.css   # Stili pagine ricette
├── js/
│   └── script.js           # Tutto il JavaScript
├── images/
│   └── pizza-teglia.jpg    # Immagini delle ricette
└── README.md
```

## 🚀 Come Usarlo

### Locale

1. Clona o scarica il repository
2. Apri `index.html` nel browser
3. Fine. Non serve altro.

### Su GitHub Pages

1. Fai fork o carica il progetto su GitHub
2. Vai in Settings → Pages
3. Seleziona `main` branch e `/root`
4. Il sito sarà disponibile a `https://tuousername.github.io/ricettario`

## 📝 Come Aggiungere una Ricetta

1. Copia `pizza-teglia.html` e rinominalo (es. `carbonara.html`)
2. Modifica il contenuto HTML con la tua ricetta
3. Aggiungi una card nella `index.html` nella sezione `recipes-grid`:

```html
<article class="recipe-card" data-category="primi">
  <div class="recipe-image">
    <img src="images/tua-ricetta.jpg" alt="Nome Ricetta" />
    <div class="recipe-overlay">
      <span class="recipe-time">⏱️ 30min</span>
      <span class="recipe-difficulty">👨‍🍳 Facile</span>
    </div>
  </div>
  <div class="recipe-content">
    <h3 class="recipe-title">Nome della Ricetta</h3>
    <p class="recipe-description">Breve descrizione</p>
    <div class="recipe-footer">
      <span class="recipe-category">Primi</span>
      <a href="tua-ricetta.html" class="recipe-btn">Vedi Ricetta</a>
    </div>
  </div>
</article>
```

## 🎨 Funzionalità Implementate

- ✅ Design responsive (mobile, tablet, desktop)
- ✅ Menu hamburger animato per mobile
- ✅ Hero section con parallax effect
- ✅ Smooth scroll navigation
- ✅ Ricerca ricette in tempo reale
- ✅ Filtri per categoria
- ✅ Lazy loading immagini
- ✅ Animazioni CSS on scroll
- ✅ Calcolatore moltiplicatore ingredienti
- ✅ Scroll to top button

## 🤷‍♂️ Perché NON usare un Framework?

Questa è la domanda giusta! In un progetto reale moderno, probabilmente useresti:

- Next.js per il routing e SSG
- Tailwind per gli stili
- Un CMS headless per gestire le ricette
- TypeScript per type safety

**Ma questo progetto serve proprio a ricordare che:**

- I framework risolvono problemi che qui non esistono
- Le basi del web funzionano ancora benissimo
- A volte la semplicità è la soluzione migliore
- È importante capire cosa fanno i framework sotto il cofano

## 📚 Cosa ho Imparato/Ripassato

- CSS Grid e Flexbox senza framework
- Animazioni CSS performanti
- JavaScript DOM manipulation moderno
- Event delegation e performance
- Responsive design con media queries
- Lazy loading nativo
- HTML semantico e accessibilità
- Come deployare un sito statico gratis

## 🔮 Possibili Espansioni Future (forse)

- [ ] Dark mode
- [ ] PWA per uso offline
- [ ] Stampa ricette in PDF
- [ ] Lista della spesa
- [ ] Timer integrato
- [ ] Note personali per ricetta
- [ ] LocalStorage per salvare preferiti

Ma ricorda: **questo è un progetto di studio**, non serve aggiungere complessità inutile!

## 📄 Licenza

Questo è un progetto personale ad uso didattico. Fai quello che vuoi del codice! 🎉

---

_Creato con HTML, CSS, JS e tanta nostalgia per il web semplice_ ❤️
