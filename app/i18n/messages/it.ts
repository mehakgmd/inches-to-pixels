/** Italian (Italiano). Same shape as en.ts. */
import type { HubText } from "../../lib/hubs";
import { chartHub, dpiTable, homeTable, printHub, sizesHub, softwareTable } from "../build";
import type { Messages } from "./en";

const sizeLabels = [
  "8,5 × 11 pollici (Letter)",
  "Formato A4",
  "5 × 7 pollici",
  "4 × 6 pollici",
  "8 × 10 pollici",
  "18 × 24 pollici",
  "24 × 36 pollici",
  "2 × 2 pollici",
  "Formato biglietto (2,5 × 3,5)",
];

export const it: Messages = {
  ui: {
    common: {
      pageNames: { home: "Home", dpi: "DPI", software: "Software", print: "Stampa e foto", sizes: "Formati", chart: "Tabella" },
      quality: { archival: "Qualità di stampa d’archivio", proof: "Qualità di prova di stampa", screen: "Risoluzione schermo" },
      qualityInline: { archival: "qualità di stampa d’archivio", proof: "qualità di prova di stampa", screen: "risoluzione schermo" },
      copied: "Copiato!",
      copyFailed: "Copia non riuscita",
    },
    nav: {
      brandSub: "CONVERTITORE DPI E PPI",
      homeAria: "Home di Inches to Pixel",
      topAria: "Inches to Pixel, torna su",
      pagesAria: "Pagine",
      pages: "Pagine",
      onThisPage: "In questa pagina",
      openMenu: "Apri menu",
      closeMenu: "Chiudi menu",
      share: "Condividi",
      linkCopied: "Link copiato",
      sections: { converter: "Convertitore", visual: "Scala visiva", slides: "Slide", presets: "Formati", guide: "Guida DPI", faq: "FAQ" },
      language: "Lingua",
      languageAria: "Scegli la lingua",
    },
    theme: { toDark: "Passa alla modalità scura", toLight: "Passa alla modalità chiara", dark: "Modalità scura", light: "Modalità chiara" },
    footer: { languages: "Lingue" },
    faq: { eyebrow: "Domande frequenti", title: "RISPOSTE", highlight: "ESPERTE" },
    hero: {
      badge: "L’arte della scala digitale",
      badgeRule: "1 POLL = 96 PX",
      h1Before: "Calcolatore da pollici a ",
      h1Highlight: "pixel",
      h1After: "",
      shelfTitle: "Scegli la risoluzione di destinazione (DPI / PPI)",
      tags: { standard: "Standard", fineArt: "Fine art" },
      presets: [
        { label: "Standard web", desc: "Web storico e schermi" },
        { label: "Standard CSS", desc: "W3C e Windows nativo" },
        { label: "Bozza editoriale", desc: "Giornali e prove" },
        { label: "Stampa fine art", desc: "Giclée da museo e libri" },
        { label: "Display Retina", desc: "OLED e smartphone top" },
      ],
      equations: [
        { label: "Regola W3C", value: "1 in = 96 px", note: "standard CSS" },
        { label: "Regola della stampa museale", value: "1 in = 300 px", note: "a 300 DPI" },
        { label: "Corrispondenza metrica", value: "1 in = 2,54 cm", note: "= 25,4 mm" },
      ],
    },
    converter: {
      title: "Convertitore da pollici a pixel",
      modeAria: "Modalità del convertitore",
      tabLengthShort: "Lunghezza",
      tabLength: "Lunghezza singola (1D)",
      tabSizeShort: "L × A",
      tabSize: "Dimensioni 2D (L × A)",
      resolution: "Risoluzione",
      dpiRange: "Usa da 1 a {max}",
      enterAbove0: "Inserisci un numero maggiore di 0.",
      physicalSize: "Dimensione fisica (pollici)",
      swap: "Inverti",
      swapTitle: "Inverti larghezza e altezza",
      ratioLocked: "Proporzioni bloccate",
      lockRatio: "Blocca proporzioni",
      width: "Larghezza",
      height: "Altezza",
      lockHint: "Larghezza e altezza cambiano insieme per mantenere {ratio}.",
      totalArea: "Area totale",
      sqIn: "poll²",
      aspectRatio: "Proporzioni",
      digitalSize: "Dimensione digitale (pixel)",
      copySize: "Copia dimensione",
      totalPixels: "Pixel totali",
      megapixels: "Megapixel",
      ratioTitle: "Imposta l’altezza dalla larghezza in base alle proporzioni",
      ratios: ["1:1 Quadrato", "4:3 Classico", "16:9 Panoramico", "3:2 Foto 35 mm", "4:5 Galleria", "5:7 Stampa"],
      centimeters: "Centimetri",
      millimeters: "Millimetri",
      points: "Punti (72 / poll)",
      surfaceArea: "Superficie",
      lengthInInches: "Lunghezza in pollici",
      lengthInPixels: "Lunghezza in pixel",
      pixelsAt: "Pixel a {dpi} DPI",
      copyPixels: "Copia pixel",
      formulaTitle: "La formula",
      formula: "Pixel = Pollici × DPI",
      reverse: "Inversa: Pollici = Pixel ÷ DPI",
      copyCss: "Copia CSS",
    },
    visual: {
      eyebrow: "Vista in tempo reale",
      title: "IL VIEWPORT",
      highlight: "ARCHITETTONICO",
      description:
        "Guarda la scala fisica in pollici trasformarsi in strutture di pixel digitali dal vivo. Passa dal disegno di precisione alla lente da gioielliere fino all’esposizione in galleria.",
      modeAria: "Modalità di anteprima",
      modes: { canvas: "Tavola tecnica", loupe: "Lente sui pixel", gallery: "Salone galleria" },
      zoomOut: "Riduci",
      zoomIn: "Ingrandisci",
      resetZoom: "Reimposta zoom",
      summary: "{w} per {h} pollici, {wpx} per {hpx} pixel a {dpi} DPI",
      loupeTitle: "Un pollice fisico sotto la lente",
      loupeDesc: "Come cambia la densità della griglia dallo schermo (72 DPI) allo standard CSS (96 DPI) fino alla stampa fine art (300 DPI).",
      loupe72: "72 DPI · Web storico",
      loupe72Note: "Bordi dei pixel grossolani visibili a occhio nudo.",
      loupe96: "96 DPI · CSS W3C",
      loupe96Note: "1 pollice equivale esattamente a 96 pixel CSS.",
      loupe300: "300 DPI · Archivio",
      loupe300Note: "Tono continuo senza stacchi.",
      yourSetting: "La tua impostazione:",
    },
    slides: {
      eyebrow: "Masterclass visiva e slide",
      title: "DA POLLICI A PIXEL:",
      highlight: "IMMAGINI E SLIDE",
      description:
        "Un’esplorazione visiva interattiva del passaggio da pollici a pixel, degli standard W3C, della geometria dei subpixel Retina e dei formati di stampa di pregio.",
      carouselAria: "Slide da pollici a pixel",
      slide: "Slide",
      pauseAria: "Metti in pausa la presentazione automatica",
      playAria: "Avvia la presentazione automatica",
      pause: "Pausa",
      play: "Avvia",
      prev: "Slide precedente",
      next: "Slide successiva",
      slideOf: "{n} di {total}: {title}",
      axiom: "Assioma matematico:",
      calibrate: "IMPOSTA IL CONVERTITORE CON QUESTI VALORI",
      chooseSlide: "Scegli la slide",
      slideLabel: "Slide {n}: {title}",
      specsTitle: "Specifiche della slide:",
      items: [
        {
          badge: "LE FONDAMENTA",
          title: "La nascita del pollice digitale",
          subtitle: "Come la densità trasforma la distanza in immagine raster",
          quote: "Un pollice fisico è costante nel bronzo; nel mondo digitale la sua grandezza dipende dalla densità.",
          keyFormula: "Pixel = Pollici × DPI (punti per pollice)",
          description:
            "A differenza di un righello in ottone o acciaio, un pollice digitale non ha un numero fisso di pixel. Il suo numero di pixel cresce direttamente con i DPI (punti per pollice) del supporto.",
          specs: [
            { label: "72 DPI (Web 1.0)", value: "72 pixel" },
            { label: "96 DPI (standard CSS)", value: "96 pixel" },
            { label: "150 DPI (editoria)", value: "150 pixel" },
            { label: "300 DPI (fine art)", value: "300 pixel" },
            { label: "600 DPI (ultra fine)", value: "600 pixel" },
          ],
        },
        {
          badge: "IL CANONE FORMALE DEL W3C",
          title: "Lo standard dei 96 pixel CSS",
          subtitle: "L’ancora matematica del web globale",
          quote: "1in = 96px non è un’approssimazione: è una costante immutabile sancita dalle specifiche CSS del W3C.",
          keyFormula: "1 pollice ≡ 96 px CSS ≡ 2,54 cm ≡ 72 pt ≡ 6 pc",
          description:
            "Nel 1996 il World Wide Web Consortium ha ancorato il pixel di riferimento a una distanza di visione di 28 pollici con un angolo di 0,0213 gradi. Ne deriva che 1 pollice CSS corrisponde matematicamente a esattamente 96 pixel CSS.",
          specs: [
            { label: "Distanza di riferimento", value: "28 pollici (71 cm)" },
            { label: "Angolo sotteso", value: "0,0213 gradi" },
            { label: "US Letter (8,5×11\")", value: "816 × 1.056 px" },
            { label: "Punti (pt) per pollice", value: "72 pt" },
            { label: "Pica (pc) per pollice", value: "6 pc" },
          ],
        },
        {
          badge: "STANDARD GICLÉE D’ARCHIVIO",
          title: "Arte museale e 300 DPI",
          subtitle: "La soglia impercettibile della visione umana",
          quote: "La vera stampa di pregio richiede almeno 300 DPI: lì le singole gocce d’inchiostro si fondono in un tono continuo.",
          keyFormula: "Pixel necessari = Pollici di destinazione × 300 DPI",
          description:
            "Osservando stampe da galleria a una normale distanza di lettura di 12-14 pollici, la retina umana distingue fino a 300 punti per pollice. Sotto i 300 DPI la pixelatura a gradini compromette la nitidezza dei bordi.",
          specs: [
            { label: "Standard museale", value: "Giclée a 300 DPI" },
            { label: "Cornice 16×20\"", value: "4.800 × 6.000 px" },
            { label: "Carico totale del sensore", value: "28,8 megapixel" },
            { label: "Densità delle gocce", value: "1.200 - 2.400 gocce" },
            { label: "Durata d’archivio", value: "Oltre 100 anni" },
          ],
        },
        {
          badge: "DISPLAY RETINA E AD ALTA DENSITÀ",
          title: "Il rapporto pixel del dispositivo (DPR)",
          subtitle: "Pixel hardware fisici contro pixel CSS astratti",
          quote: "Su un display Super Retina 3x, 1 pollice CSS vale sempre 96 unità CSS, ma occupa 288 diodi fisici.",
          keyFormula: "Px fisici del dispositivo = Px CSS × DPR (1x, 2x, 3x)",
          description:
            "I display Super Retina XDR di Apple e i moderni schermi 4K/8K separano i pixel hardware fisici dai pixel logici CSS. Una linea CSS di 96 px su un iPhone 16 Pro viene resa con quasi 300 micro-subpixel OLED fisici.",
          specs: [
            { label: "1 pollice CSS", value: "96 px CSS" },
            { label: "Fattore DPR Apple", value: "3,00x Super Retina" },
            { label: "Px hardware fisici", value: "288 px hardware" },
            { label: "PPI hardware", value: "460 PPI" },
            { label: "Disposizione dei subpixel", value: "OLED PenTile a diamante" },
          ],
        },
        {
          badge: "PROPORZIONI SELEZIONATE",
          title: "La matrice delle cornici di pregio",
          subtitle: "Formati architettonici e fine art standard a 300 DPI",
          quote: "Le proporzioni auree della cornice classica, tradotte in specifiche digitali esatte.",
          keyFormula: "Qualità d’archivio (300 DPI) = Mostra in galleria impeccabile",
          description:
            "Dai ritratti da salotto classici alle grandi opere museali, ogni formato di cornice in pollici corrisponde a una tela di pixel esatta per una riproduzione senza difetti.",
          specs: [
            { label: "Ritratto da galleria 8 × 10\"", value: "2.400 × 3.000 px" },
            { label: "Stampa da salotto 11 × 14\"", value: "3.300 × 4.200 px" },
            { label: "Cornice da collezione 16 × 20\"", value: "4.800 × 6.000 px" },
            { label: "Grande formato 24 × 36\"", value: "7.200 × 10.800 px" },
            { label: "Murale museale 40 × 60\"", value: "12.000 × 18.000 px" },
          ],
        },
      ],
      spectrum: {
        title: "1 POLLICE FISICO A DENSITÀ DIVERSE",
        bars: ["72 DPI (schermo storico)", "96 DPI (CSS W3C)", "150 DPI (prova editoriale)", "300 DPI (giclée fine art)"],
        note: "A 300 DPI, 1 pollice contiene oltre 4 volte i pixel dei vecchi standard web.",
      },
      w3c: {
        title: "PIXEL DI RIFERIMENTO E ANGOLO DEL W3C",
        observer: "Osservatore",
        distance: "Distanza di visione 28\" (0,0213°)",
        cssInch: "Pollice CSS",
        centimeters: "Centimetri",
        typographyPt: "Punti tipografici",
        picas: "Pica",
      },
      fineart: {
        title: "PIXELATURA RASTER CONTRO TONO GICLÉE CONTINUO",
        printed72: "Stampato a 72 DPI",
        jagged: "Bordi seghettati visibili (aliasing)",
        archival300: "Archivio a 300 DPI",
        smooth: "Curva continua nitidissima",
        summary: "16 × 20 pollici a 300 DPI = 4.800 × 6.000 pixel (28,8 MP)",
      },
      retina: {
        title: "GEOMETRIA DEI SUBPIXEL E RAPPORTO PIXEL",
        rows: [
          { name: "Display 1x DPR", device: "Monitor standard datato", value: "1 px CSS = 1 px fisico" },
          { name: "2x DPR (Retina)", device: "MacBook Pro e iPad Pro", value: "1 px CSS = 4 px fisici (2×2)" },
          { name: "3x DPR (Super Retina XDR)", device: "iPhone Pro OLED", value: "1 px CSS = 9 px fisici (3×3)" },
        ],
        summary: "1 pollice su iPhone 16 Pro = 96 px CSS = ",
        summaryStrong: "288 pixel fisici",
      },
      framing: {
        title: "PROPORZIONI DA PARETE DI GALLERIA A 300 DPI",
        sensor: "Sensore: {mp}",
        note: "Per i grandi formati (24×36\" e oltre), sensori medio formato ad alta risoluzione o l’ingrandimento con IA eliminano la grana.",
      },
    },
    presets: {
      eyebrow: "Indice di formati selezionati",
      title: "LA MATRICE DEI",
      highlight: "FORMATI",
      description:
        "Una raccolta di formati di riferimento per cornici museali, cancelleria editoriale, display di punta e risorse digitali.",
      filterAria: "Filtra i formati per categoria",
      categories: {
        all: "Tutti i formati",
        art: "Arte e cornici",
        editorial: "Editoria e libri",
        device: "Display dei dispositivi",
        social: "Digitale e social",
      },
      showing: "{shown} formati su {total}",
      recommended: "{dpi} DPI consigliati",
      physicalSize: "Dimensione fisica",
      web: "96 DPI (web)",
      print: "300 DPI (stampa)",
      use: "USA QUESTO FORMATO",
      useAria: "Usa {name} a {dpi} DPI nel convertitore",
      items: [
        { name: "Ritratto da galleria classico 8 × 10\"", description: "Standard iconico per ritratti museali e cornici d’arte." },
        { name: "Stampa da esposizione 11 × 14\"", description: "Stampa d’archivio standard per gallerie d’interni." },
        { name: "Cornice da collezione 16 × 20\"", description: "Formato preferito per ambienti di grande impatto." },
        { name: "Opera di grande formato 24 × 36\"", description: "Pezzo centrale per residenze di pregio." },
        { name: "Murale architettonico 30 × 40\"", description: "Opera in scala museale con piena profondità tonale." },
        { name: "Foglio US Letter 8,5 × 11\"", description: "Cancelleria standard americana per documenti." },
        { name: "A4 internazionale 8,27 × 11,69\"", description: "Carta standard mondiale (ISO 216)." },
        { name: "Biglietto da visita 3,5 × 2,0\"", description: "Standard per biglietti da visita su misura con stampa a caldo oro." },
        { name: "Libro d’arte monografico 12 × 12\"", description: "Doppia pagina quadrata di un volume di pregio." },
        { name: "Schermo di iPhone 16 Pro (fisico)", description: "Dimensione fisica del display Super Retina di punta." },
        { name: "Display di MacBook Pro 16,2\" (fisico)", description: "Dimensione fisica del display Liquid Retina XDR." },
        { name: "TV 4K da 55\" (fisico)", description: "Dimensioni fisiche di un pannello UHD 3840×2160." },
        { name: "Tela quadrata 1080 × 1080 px", description: "Risorsa quadrata da 1080 px espressa in pollici a 96 DPI." },
        { name: "Reel/Storia verticale 1080 × 1920 px", description: "Tela mobile a schermo intero (proporzioni 9:16)." },
      ],
    },
    hubCalc: {
      titleIn: "Calcolatore da pollici a pixel",
      titlePx: "Calcolatore da pixel a pollici",
      size: "Formato",
      customSize: "Formato personalizzato",
      width: "Larghezza",
      height: "Altezza",
      dpi: "DPI",
      custom: "Altro",
      dpiError: "Usa un valore DPI da 1 a {max}.",
      result: "Risultato",
      resultSub: "{w} × {h} {unit} a {dpi} DPI",
      enterBoth: "Inserisci larghezza e altezza maggiori di 0.",
      needMore: "Ti servono il blocco delle proporzioni, altre unità o un’anteprima?",
      openFull: "Apri il convertitore completo",
    },
    sizeLabels,
  },
  content: {
    meta: {
      siteTitle: "Calcolatore da pollici a pixel | Converti con i PPI",
      siteDescription:
        "Converti pollici in pixel con i PPI che preferisci. Scopri la formula, calcola larghezza e altezza e controlla dimensioni di esempio per stampa e CSS.",
    },
    page: {
      skipToConverter: "Vai al convertitore",
      skipToCalculator: "Vai al calcolatore",
      breadcrumb: "Percorso di navigazione",
      related: "Pagine correlate",
      relatedHome: "Convertitore da pollici a pixel",
      hubFaqDescription: "Risposte brevi alle domande più frequenti su questo argomento.",
    },
    footer: {
      blurb:
        "Convertitore gratuito da pollici a pixel per schermo e stampa. Converti qualsiasi dimensione a qualsiasi DPI, verifica i formati di stampa e trova i valori più comuni in un unico posto.",
      openConverter: "Apri il convertitore",
      pages: "Pagine",
      copyright: "©2026 InchestoPixel.com",
      backToTop: "TORNA SU",
    },
    home: {
      intro:
        "Usa questo calcolatore per convertire una misura in pollici in pixel alla risoluzione d’immagine scelta, espressa in pixel per pollice (PPI). Il risultato dipende da questa impostazione: a 300 PPI, 1 pollice corrisponde a 300 pixel.",
      howTo: {
        heading: "Come convertire pollici in pixel",
        steps: [
          "Inserisci la lunghezza da convertire, misurata in pollici.",
          "Scegli la risoluzione d’immagine richiesta dal tuo progetto. Per la stampa, chiedi al tuo stampatore.",
          "Calcola il numero di pixel. Per convertire larghezza e altezza, ripeti il calcolo per ogni dimensione con la stessa impostazione.",
        ],
        note: "Salva la risoluzione insieme al risultato, così potrai verificare in seguito la dimensione di stampa prevista.",
      },
      formula: {
        heading: "Formula ed esempi",
        main: "Pixel = pollici × PPI",
        explain: "Moltiplica la lunghezza fisica in pollici per il numero di pixel per pollice per ottenere il numero di pixel lungo quella dimensione.",
        backwardLead: "Per il calcolo inverso:",
        backward: "Pollici = pixel ÷ PPI",
        examples: [
          {
            heading: "Esempio di una sola lunghezza",
            lead: "A 96 PPI, una lunghezza di 2 pollici diventa:",
            math: ["2 × 96 = 192 pixel"],
            after: [
              "Questo risultato è esatto per la risoluzione scelta. Non significa che ogni schermo mostri 192 pixel su due pollici fisici.",
            ],
          },
          {
            heading: "Esempio di larghezza e altezza per una stampa",
            lead: "Per un’immagine di 8,5 × 11 pollici a 300 PPI:",
            math: ["Larghezza: 8,5 × 300 = 2.550 pixel", "Altezza: 11 × 300 = 3.300 pixel"],
            after: [
              "Le dimensioni necessarie sono 2.550 × 3.300 pixel, prima di eventuali abbondanze richieste dallo stampatore.",
            ],
          },
          {
            heading: "Esempio di un risultato decimale",
            lead: "Per 2,33 pollici a 150 PPI:",
            math: ["2,33 × 150 = 349,5 pixel"],
            after: [
              "Le immagini raster richiedono pixel interi. Arrotondando 349,5 al pixel intero più vicino, con le metà per eccesso, si ottengono 350 pixel. Alla stessa risoluzione corrispondono a circa 2,333 pollici.",
            ],
          },
        ],
        closing: "Arrotonda solo all’ultimo passaggio, secondo i requisiti del progetto.",
      },
      reference: {
        heading: "Tabella di riferimento da pollici a pixel",
        intro:
          "Le intestazioni delle colonne indicano la risoluzione d’immagine in PPI; i valori sotto sono numeri di pixel. Queste impostazioni sono esempi, non requisiti universali.",
        table: homeTable("it", { corner: "Lunghezza (pollici)", col: "{ppi}" }),
        caption: "Pollici in pixel a 72, 96, 150 e 300 PPI",
        footnote: "Tutti i valori della tabella sono esatti per i dati indicati.",
      },
      guide: { eyebrow: "Fondamenti teorici", title: "PIXEL, DIMENSIONE DI STAMPA E", highlight: "PPI" },
      explainers: [
        {
          heading: "Pixel dell’immagine, dimensione di stampa e pixel CSS",
          paragraphs: [
            "Le dimensioni in pixel descrivono larghezza e altezza di un’immagine in pixel. Le dimensioni di stampa ne descrivono la grandezza fisica in pollici. La risoluzione d’immagine collega le due: le stesse dimensioni in pixel possono dare stampe di grandezza diversa.",
            "Il CSS usa un rapporto fisso: 1in = 96px. Sono unità di riferimento CSS, quindi un pixel CSS non è necessariamente un pixel fisico del dispositivo e un pollice CSS sullo schermo può non misurare un pollice reale. Usa questo rapporto per le dimensioni CSS, senza presumere che descriva la densità fisica dei pixel di un display.",
          ],
        },
        {
          heading: "Risoluzione dell’immagine e risoluzione della stampante",
          paragraphs: [
            "I PPI indicano i pixel d’immagine per pollice; i DPI i punti per pollice prodotti da una stampante. Sono collegati nei flussi di stampa, ma non sono intercambiabili. Per questo calcolatore usa la risoluzione d’immagine richiesta, non le specifiche hardware della stampante.",
          ],
        },
        {
          heading: "Cambiare la risoluzione non aggiunge dettaglio",
          paragraphs: [
            "Modificare solo i metadati di risoluzione di un’immagine lascia invariato il numero di pixel e cambia la dimensione di stampa prevista. Il ricampionamento invece cambia il numero di pixel. Assegnare semplicemente una risoluzione più alta non crea nuovo dettaglio.",
          ],
        },
      ],
      browse: "Sfoglia per argomento",
      faqDescription: "Risposte alle domande più comuni sulla conversione da pollici a pixel.",
      faqs: [
        {
          question: "Quale risoluzione devo usare?",
          answer:
            "Usa il valore richiesto dall’output finale. Per la stampa, chiedi allo stampatore la risoluzione d’immagine necessaria alla dimensione finale. Se un caricamento digitale indica dimensioni in pixel, segui direttamente quelle dimensioni.",
        },
        {
          question: "La conversione in pixel cambia le proporzioni?",
          answer:
            "Usare la stessa risoluzione per larghezza e altezza ne conserva il rapporto prima dell’arrotondamento. Per esempio, un’immagine di 4 × 4 pollici a 300 PPI diventa 1.200 × 1.200 pixel. Entrambe sono quadrate: il rapporto descrive la forma, non la risoluzione.",
        },
        {
          question: "Posso calcolare la dimensione di stampa di un’immagine esistente?",
          answer:
            "Sì. Dividi ogni dimensione in pixel per la risoluzione d’immagine prevista. A 300 PPI, un’immagine di 1.800 × 1.200 pixel corrisponde a 6 × 4 pollici. Ritagli o ridimensionamenti in fase di stampa possono cambiare la dimensione finale.",
        },
      ],
    },
    hubs: {
      dpi: {
        nav: "DPI",
        h1: "Convertitore da pollici a pixel in base ai DPI",
        seoTitle: "Convertitore pollici-pixel DPI | Calcola la dimensione di stampa",
        description:
          "Converti pollici in pixel con i DPI del tuo progetto. Formula, esempi svolti e una tabella da 72 a 600 DPI per verificare le dimensioni d’immagine per la stampa.",
        answer:
          "Calcola le dimensioni in pixel partendo da una misura fisica e dalla risoluzione scelta. Moltiplica i pollici per i DPI indicati: a 300 DPI, 4 pollici corrispondono a 1.200 pixel.",
        introNotes: [
          "In questa conversione, DPI indica la densità di pixel dell’immagine di destinazione, tecnicamente chiamata PPI. Usa la risoluzione richiesta dal progetto: un pollice non ha un unico valore in pixel.",
        ],
        sections: [
          {
            heading: "Come convertire pollici in pixel",
            blocks: [
              {
                type: "steps",
                items: [
                  "Inserisci la lunghezza fisica in pollici.",
                  "Inserisci la risoluzione di destinazione. Per la stampa, usa la risoluzione d’immagine richiesta dallo stampatore.",
                  "Moltiplica i pollici per quella risoluzione per ottenere la lunghezza in pixel.",
                  "Per un’immagine, calcola larghezza e altezza separatamente con la stessa risoluzione.",
                ],
              },
              {
                type: "note",
                text: "Quando converti un progetto esistente, mantieni il rapporto originale tra larghezza e altezza. Cambiarlo richiede di ritagliare o deformare.",
              },
            ],
          },
          {
            heading: "Formula ed esempi svolti",
            blocks: [
              { type: "math", lines: ["Pixel = Pollici × DPI"], large: true },
              { type: "p", text: "Dove:" },
              {
                type: "list",
                items: [
                  "Pixel è la lunghezza digitale in pixel, abbreviata px.",
                  "Pollici è la lunghezza fisica prevista.",
                  "DPI è il valore di conversione scelto, inteso come pixel d’immagine per pollice.",
                ],
              },
              { type: "p", text: "Per un’immagine rettangolare:" },
              {
                type: "math",
                lines: ["Larghezza in pixel = Larghezza in pollici × DPI", "Altezza in pixel = Altezza in pollici × DPI"],
              },
              {
                type: "sub",
                heading: "Un’immagine di 8 × 10 pollici a 300 DPI",
                blocks: [
                  { type: "p", text: "Se il progetto richiede 300 PPI:" },
                  { type: "math", lines: ["Larghezza: 8 × 300 = 2.400 px", "Altezza: 10 × 300 = 3.000 px"] },
                  { type: "p", text: "Le dimensioni necessarie sono 2.400 × 3.000 pixel. Questi risultati sono esatti." },
                ],
              },
              {
                type: "sub",
                heading: "Una lunghezza di 2,5 pollici a 96 DPI",
                blocks: [
                  { type: "math", lines: ["2,5 × 96 = 240 px"] },
                  {
                    type: "p",
                    text: "Con una densità di 96 pixel per pollice, 2,5 pollici corrispondono esattamente a 240 pixel. La stessa lunghezza con un’altra densità dà un risultato diverso.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Un risultato decimale a 150 DPI",
                blocks: [
                  { type: "math", lines: ["1,23 × 150 = 184,5 px"] },
                  {
                    type: "p",
                    text: "Un’immagine raster richiede pixel interi. Arrotondando al pixel intero più vicino, con le metà per eccesso, si ottengono 185 px.",
                  },
                ],
              },
              {
                type: "note",
                text: "Arrotonda solo il risultato finale. Se una specifica di produzione fissa un numero minimo di pixel, arrotonda per eccesso. Arrotondare larghezza e altezza separatamente può alterare leggermente le proporzioni: controlla le dimensioni finali quando le proporzioni esatte contano.",
              },
            ],
          },
          {
            heading: "Tabella di riferimento da pollici a pixel",
            blocks: [
              {
                type: "p",
                text: "Tutti i valori sono esatti. La colonna DPI rappresenta la densità d’immagine di destinazione in PPI per questo calcolo.",
              },
              {
                type: "table",
                caption: "Pixel per 1, 4 e 6 pollici da 72 a 600 DPI",
                table: dpiTable("it", {
                  corner: "DPI indicati",
                  cols: ["1 pollice", "4 pollici", "6 pollici"],
                  row: "{dpi} DPI",
                  cell: "{px} px",
                }),
              },
              {
                type: "p",
                text: "Per esempio, un’immagine di 4 × 6 pollici a 300 DPI richiede 1.200 × 1.800 pixel. A 72 DPI la stessa dimensione fisica corrisponde a 288 × 432 pixel.",
              },
            ],
          },
          {
            heading: "Scegli la risoluzione giusta per il lavoro",
            blocks: [
              {
                type: "sub",
                heading: "DPI e PPI indicano cose diverse",
                blocks: [
                  {
                    type: "p",
                    text: "PPI significa pixel per pollice: i pixel d’immagine assegnati a ogni pollice di output. DPI significa punti per pollice: i punti che una stampante può produrre. Sono misure distinte.",
                  },
                  {
                    type: "p",
                    text: "Quando una specifica di stampa scrive «300 DPI» per chiedere un’immagine a 300 PPI, usa 300 nel calcolo. Non sostituire i PPI d’immagine richiesti con la risoluzione DPI hardware della stampante.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Dimensione fisica e dimensioni in pixel vanno insieme",
                blocks: [
                  {
                    type: "p",
                    text: "I pollici descrivono la dimensione fisica; le dimensioni in pixel descrivono larghezza e altezza digitali dell’immagine. A parità di dimensione fisica, PPI di destinazione più alti richiedono più pixel.",
                  },
                  {
                    type: "p",
                    text: "Cambiare la risoluzione di un’immagine esistente senza ricampionare non aggiunge pixel. Cambia il rapporto tra dimensione di stampa e densità di pixel. Il ricampionamento cambia il numero di pixel, quindi calcolare un obiettivo più grande non migliora da solo l’immagine di partenza.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Le misure a schermo richiedono contesto",
                blocks: [
                  {
                    type: "p",
                    text: "Non dare per scontato che ogni schermo abbia 72 o 96 pixel fisici per pollice. Il CSS definisce 1 pollice come 96 pixel CSS, ma i pixel CSS non sono necessariamente singoli pixel del dispositivo né una misura fisica reale sullo schermo.",
                  },
                  {
                    type: "p",
                    text: "Per caricare un’immagine, segui le dimensioni in pixel richieste dalla destinazione. Per la stampa, segui i requisiti di dimensione fisica e risoluzione d’immagine.",
                  },
                ],
              },
            ],
          },
        ],
        faq: [
          {
            question: "Come lo uso come calcolatore a 300 DPI?",
            answer:
              "Imposta 300 come risoluzione di destinazione e moltiplica ogni misura in pollici per 300. Per esempio, un’immagine di 5 × 7 pollici richiede 1.500 × 2.100 pixel a 300 PPI.",
          },
          {
            question: "Posso convertire pollici in pixel senza conoscere i DPI?",
            answer:
              "Senza una densità di pixel di destinazione non c’è una risposta unica. Una lunghezza di 2 pollici corrisponde a 144 pixel a 72 PPI, 192 pixel a 96 PPI o 600 pixel a 300 PPI.",
          },
          {
            question: "Devo includere l’abbondanza nelle dimensioni?",
            answer:
              "Se lo stampatore richiede l’abbondanza, calcola dalla dimensione totale del lavoro compresa l’abbondanza. Per esempio, un progetto di 4 × 6 pollici con 0,125 pollici di abbondanza per lato diventa 4,25 × 6,25 pollici. A 300 PPI sono 1.275 × 1.875 pixel. Usa la specifica di abbondanza reale del tuo stampatore.",
          },
        ],
      } as HubText,
      software: {
        nav: "Software",
        h1: "Da pollici a pixel nei software",
        seoTitle: "Da pollici a pixel nei software: guida alla conversione PPI",
        description:
          "Converti pollici in pixel con i PPI del tuo progetto. Esempi svolti e spiegazioni su come dimensioni d’immagine, ricampionamento e impostazioni di esportazione influenzano il risultato.",
        answer:
          "Per convertire pollici in pixel, moltiplica la misura in pollici per i pixel per pollice (PPI) richiesti. Un pollice equivale a 300 px a 300 PPI o a 96 px a 96 PPI. Nei software usa la risoluzione richiesta dall’output, non un valore predefinito presunto universale.",
        sections: [
          {
            heading: "Come convertire le tue dimensioni",
            blocks: [
              {
                type: "steps",
                items: [
                  "Individua la larghezza o l’altezza necessaria in pollici.",
                  "Scegli i PPI richiesti per quell’output. Per la stampa, verifica la risoluzione d’immagine indicata dallo stampatore.",
                  "Calcola il numero di pixel con la misura in pollici e i PPI.",
                  "Ripeti per l’altra dimensione con gli stessi PPI.",
                ],
              },
              {
                type: "note",
                text: "Per un’immagine esistente, mantieni le proporzioni. Se larghezza e altezza richieste hanno proporzioni diverse, ritaglia l’immagine o aggiungi spazio intorno invece di deformarla.",
              },
            ],
          },
          {
            heading: "Formula ed esempi",
            blocks: [
              { type: "math", lines: ["Pixel = Pollici × PPI"], large: true },
              {
                type: "list",
                items: [
                  "Pixel (px): il numero di pixel dell’immagine lungo una dimensione.",
                  "Pollici (in): la lunghezza fisica prevista di quella dimensione.",
                  "PPI: il numero di pixel dell’immagine per pollice a quella dimensione.",
                ],
              },
              { type: "p", text: "Il calcolo si applica separatamente a larghezza e altezza." },
              {
                type: "sub",
                heading: "Un’immagine di 4 × 6 pollici a 300 PPI",
                blocks: [
                  { type: "math", lines: ["Larghezza: 4 × 300 = 1.200 px", "Altezza: 6 × 300 = 1.800 px"] },
                  {
                    type: "p",
                    text: "Le dimensioni di destinazione sono 1.200 × 1.800 px, senza abbondanza o bordi aggiuntivi.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Un’immagine di 8 × 10 pollici a 150 PPI",
                blocks: [
                  { type: "math", lines: ["Larghezza: 8 × 150 = 1.200 px", "Altezza: 10 × 150 = 1.500 px"] },
                  {
                    type: "p",
                    text: "Il risultato è 1.200 × 1.500 px. Questo esempio usa 150 PPI come requisito indicato, non come raccomandazione per ogni lavoro di stampa.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Una misura decimale",
                blocks: [
                  { type: "p", text: "Per una larghezza di 2,125 pollici a 300 PPI:" },
                  { type: "math", lines: ["2,125 × 300 = 637,5 px"] },
                  {
                    type: "p",
                    text: "Il risultato matematico è esatto, ma un’immagine raster richiede una larghezza intera. Arrotondando al pixel più vicino, usa 638 px. A 300 PPI corrispondono a circa 2,127 pollici.",
                  },
                ],
              },
              {
                type: "note",
                text: "Arrotonda alla fine del calcolo. Se una specifica di produzione fissa un numero minimo di pixel, arrotonda per eccesso quando serve.",
              },
            ],
          },
          {
            heading: "Tabella di conversione rapida",
            blocks: [
              {
                type: "p",
                text: "Questi valori sono esatti per i PPI indicati. Le colonne sono esempi di calcolo, non impostazioni predefinite dei software.",
              },
              {
                type: "table",
                caption: "Pollici in pixel a 96, 150 e 300 PPI",
                table: softwareTable("it", {
                  corner: "Lunghezza (pollici)",
                  cols: ["A 96 PPI (px)", "A 150 PPI (px)", "A 300 PPI (px)"],
                }),
              },
            ],
          },
          {
            heading: "Applica il risultato nel tuo software",
            blocks: [
              {
                type: "sub",
                heading: "Photoshop: distingui ridimensionamento e ricampionamento",
                blocks: [
                  {
                    type: "p",
                    text: "Prima di modificare, confronta le dimensioni in pixel di destinazione con quelle dell’immagine attuale.",
                  },
                  {
                    type: "p",
                    text: "Con il ricampionamento disattivato, cambiare i PPI mantiene il numero di pixel e cambia la dimensione di stampa prevista. Con il ricampionamento attivo, cambiare dimensione o risoluzione può aggiungere o togliere pixel. Mantieni larghezza e altezza proporzionali quando ridimensioni. Adobe spiega queste relazioni nella sua guida su ridimensionamento e ricampionamento.",
                  },
                  {
                    type: "p",
                    text: "Aumentare solo i PPI non crea dettaglio aggiuntivo. Ingrandire tramite ricampionamento aggiunge pixel calcolati, ma non recupera il dettaglio assente nell’originale.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Illustrator: controlla la risoluzione di esportazione raster",
                blocks: [
                  {
                    type: "p",
                    text: "La grafica vettoriale non ha un numero fisso di pixel. Quando la esporti in un formato raster come PNG o JPEG, la dimensione fisica della grafica e la risoluzione di esportazione determinano le dimensioni di output.",
                  },
                  {
                    type: "p",
                    text: "Per esempio, un’area di esportazione larga 4 pollici a 300 PPI richiede 1.200 px di larghezza. Controlla le dimensioni del file esportato, soprattutto se l’esportazione include margini o limiti aggiuntivi. Le impostazioni disponibili in Illustrator dipendono dal formato di esportazione.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Figma: tieni conto della scala di esportazione",
                blocks: [
                  {
                    type: "p",
                    text: "Per una risorsa raster, calcola prima i pixel di output necessari, poi considera la scala di esportazione. Un frame largo 600 pixel esportato a 2× produce un’immagine larga 1.200 pixel. Non applicare un altro moltiplicatore se il frame ha già le dimensioni di output. Consulta i formati e le impostazioni di esportazione di Figma.",
                  },
                  {
                    type: "p",
                    text: "Per un’immagine larga 4 pollici destinata alla stampa a 300 PPI, l’obiettivo è 1.200 px di larghezza, qualunque sia la combinazione di frame e scala usata.",
                  },
                ],
              },
            ],
          },
          {
            heading: "Evita gli errori di conversione più comuni",
            blocks: [
              {
                type: "sub",
                heading: "PPI e DPI indicano cose diverse",
                blocks: [
                  {
                    type: "p",
                    text: "I PPI misurano i pixel d’immagine per pollice; i DPI in genere misurano i punti per pollice di una stampante. Se una specifica di stampa usa «DPI» per un’immagine, verifica se intende i PPI d’immagine richiesti. Non usare automaticamente la risoluzione hardware della stampante come valore del convertitore.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "I pixel CSS sono unità logiche",
                blocks: [
                  {
                    type: "p",
                    text: "Il CSS definisce 1 pollice come 96 pixel CSS. Ciò non significa che ogni immagine debba avere 96 PPI, né che un elemento di un pollice CSS misuri un pollice fisico su ogni schermo. Gli schermi ad alta densità possono usare più pixel del dispositivo per un pixel CSS. Consulta la spiegazione del W3C sulle unità CSS.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Controlla l’output finale, non solo la dimensione del documento",
                blocks: [
                  {
                    type: "p",
                    text: "Quando prepari un’immagine per Canva, Procreate, Paint, InDesign, Word, PowerPoint o Presentazioni Google, distingui tra le dimensioni in pixel dell’immagine e la sua dimensione una volta inserita. Verifica le dimensioni finali e la dimensione di stampa prevista invece di presumere che il nome del programma determini la conversione.",
                  },
                ],
              },
            ],
          },
        ],
        faq: [
          {
            question: "Quali PPI devo usare?",
            answer:
              "Usa la risoluzione richiesta dal tuo flusso di output. Per la stampa, chiedi allo stampatore. Per una risorsa a schermo indicata in pixel, usa direttamente quelle dimensioni; la conversione dai pollici può essere superflua.",
          },
          {
            question: "Perché la stessa immagine appare di dimensioni diverse in app diverse?",
            answer:
              "Un’app può adattare l’immagine alla pagina, mostrarla a un certo livello di zoom o usare i metadati di risoluzione per stabilirne la dimensione inserita. La dimensione apparente non indica da sola se sono cambiate le dimensioni in pixel.",
          },
          {
            question: "Posso calcolare pollici in pixel in Excel o Fogli Google?",
            answer:
              "Sì. Se la cella A2 contiene i pollici e B2 i PPI, usa:\n=A2*B2\nPer arrotondare una misura positiva al pixel intero più vicino, usa (in Excel in italiano):\n=ARROTONDA(A2*B2;0)\nQuesto calcola una dimensione in pixel; non ridimensiona un’immagine né cambia la larghezza di una colonna.",
          },
        ],
      } as HubText,
      print: printHub("it", {
        nav: "Stampa e foto",
        h1: "Da pollici a pixel per stampa, foto e immagini",
        description:
          "Quanti pixel servono per una stampa nitida: foto 4×6, 5×7, 8×10 e 11×14 pollici a 150 e 300 DPI, con calcolatore della dimensione di stampa.",
        answer: "Per una stampa nitida servono dimensione di stampa × 300 pixel per lato.",
        printing: {
          heading: "Stampa",
          body: "Pixel necessari = dimensione di stampa in pollici × DPI di stampa. La maggior parte degli stampatori punta a 300 DPI.",
          corner: "Dimensione di stampa",
          row: "{w} × {h} poll",
        },
        photos: {
          heading: "Foto e immagini",
          body: "Una foto con troppo pochi pixel appare morbida se stampata in grande. Confronta la dimensione in pixel della tua immagine con la tabella sopra prima di ordinare le stampe.",
        },
        faq: [
          {
            question: "Posso ingrandire una foto piccola?",
            answer: "L’ingrandimento aggiunge pixel ma non dettaglio, quindi i grandi ingrandimenti appaiono sfocati.",
          },
        ],
      }),
      sizes: sizesHub(
        "it",
        {
          nav: "Formati",
          h1: "Formati comuni di stampa e carta in pixel",
          description:
            "Letter, A4, 4×6, 5×7, 8×10, 18×24, 24×36 e formato biglietto in pixel a 72, 150 e 300 DPI. Scegli un formato e convertilo subito.",
          answer: "Il formato Letter (8,5 × 11 poll) misura 2.550 × 3.300 px a 300 DPI.",
          overview: {
            heading: "Tutti i formati comuni a colpo d’occhio",
            body: "Dimensione in pixel di ogni formato a 72, 150 e 300 DPI.",
            corner: "Formato",
          },
          sizeBody:
            "{label} misura {w} × {h} poll. A 300 DPI sono {w300} × {h300} px, e a 72 DPI {w72} × {h72} px.",
          faq: [
            {
              question: "Qual è il formato più comune per la stampa?",
              answer: "Letter e A4 per i documenti, 4 × 6 e 5 × 7 per le foto.",
            },
          ],
        },
        sizeLabels,
      ),
      chart: chartHub("it", {
        nav: "Tabella",
        h1: "Tabella da pollici a pixel (tutti i valori comuni)",
        description:
          "Tabella di conversione da pollici a pixel da 1/8 a 96 pollici a 72, 96, 150 e 300 DPI. Trova ogni valore comune a colpo d’occhio.",
        answer: "Trova qualsiasi misura da 1/8 a 96 pollici a 72, 96, 150 e 300 DPI.",
        chart: {
          heading: "Tabella di conversione",
          body: "La tabella di riferimento completa. Ogni riga è un valore a cui puoi collegarti.",
          corner: "Pollici",
        },
        items: ["1/8 di pollice", "2 pollici", "2,5 pollici", "3 pollici", "4 pollici", "5 pollici", "8,5 pollici"],
        itemBody:
          "{label}: {px72} px a 72 DPI, {px96} px a 96 DPI, {px150} px a 150 DPI e {px300} px a 300 DPI.",
        faq: [
          {
            question: "Dove sono gli altri valori?",
            answer: "Valori come 10, 12, 24 o 48 pollici sono righe della tabella sopra.",
          },
        ],
      }),
    },
  },
};
