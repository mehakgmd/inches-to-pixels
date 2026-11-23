/** German (Deutsch). Same shape as en.ts. */
import type { HubText } from "../../lib/hubs";
import { chartHub, dpiTable, homeTable, printHub, sizesHub, softwareTable } from "../build";
import type { Messages } from "./en";

const sizeLabels = [
  "8,5 × 11 Zoll (Letter)",
  "A4-Format",
  "5 × 7 Zoll",
  "4 × 6 Zoll",
  "8 × 10 Zoll",
  "18 × 24 Zoll",
  "24 × 36 Zoll",
  "2 × 2 Zoll",
  "Kartenformat (2,5 × 3,5)",
];

export const de: Messages = {
  ui: {
    common: {
      pageNames: { home: "Start", dpi: "DPI", software: "Software", print: "Druck & Foto", sizes: "Formate", chart: "Tabelle" },
      quality: { archival: "Archivdruckqualität", proof: "Proofdruckqualität", screen: "Bildschirmauflösung" },
      qualityInline: { archival: "Archivdruckqualität", proof: "Proofdruckqualität", screen: "Bildschirmauflösung" },
      copied: "Kopiert!",
      copyFailed: "Kopieren fehlgeschlagen",
    },
    nav: {
      brandSub: "DPI- & PPI-RECHNER",
      homeAria: "Inches to Pixel Startseite",
      topAria: "Inches to Pixel, nach oben",
      pagesAria: "Seiten",
      pages: "Seiten",
      onThisPage: "Auf dieser Seite",
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
      share: "Teilen",
      linkCopied: "Link kopiert",
      sections: { converter: "Rechner", visual: "Visueller Maßstab", slides: "Folien", presets: "Formate", guide: "DPI-Ratgeber", faq: "FAQ" },
      language: "Sprache",
      languageAria: "Sprache wählen",
    },
    theme: { toDark: "Zum dunklen Modus wechseln", toLight: "Zum hellen Modus wechseln", dark: "Dunkler Modus", light: "Heller Modus" },
    footer: { languages: "Sprachen" },
    faq: { eyebrow: "Häufige Fragen", title: "EXPERTEN-", highlight: "ANTWORTEN" },
    hero: {
      badge: "Die Kunst des digitalen Maßstabs",
      badgeRule: "1 ZOLL = 96 PX",
      h1Before: "Zoll-in-",
      h1Highlight: "Pixel",
      h1After: "-Rechner",
      shelfTitle: "Zielauflösung wählen (DPI / PPI)",
      tags: { standard: "Standard", fineArt: "Kunstdruck" },
      presets: [
        { label: "Web-Standard", desc: "Altes Web & Bildschirme" },
        { label: "CSS-Standard", desc: "W3C & Windows nativ" },
        { label: "Redaktionsentwurf", desc: "Zeitungen & Proofs" },
        { label: "Kunstdruck", desc: "Museums-Giclée & Bücher" },
        { label: "Retina-Display", desc: "OLED & Flaggschiff-Handys" },
      ],
      equations: [
        { label: "W3C-Regel", value: "1 in = 96 px", note: "CSS-Standard" },
        { label: "Museumsdruck-Regel", value: "1 in = 300 px", note: "bei 300 DPI" },
        { label: "Metrische Entsprechung", value: "1 in = 2,54 cm", note: "= 25,4 mm" },
      ],
    },
    converter: {
      title: "Zoll-in-Pixel-Rechner",
      modeAria: "Rechnermodus",
      tabLengthShort: "Länge",
      tabLength: "Einzelne Länge (1D)",
      tabSizeShort: "B × H",
      tabSize: "2D-Maße (B × H)",
      resolution: "Auflösung",
      dpiRange: "1 bis {max} verwenden",
      enterAbove0: "Geben Sie eine Zahl größer als 0 ein.",
      physicalSize: "Physische Größe (Zoll)",
      swap: "Tauschen",
      swapTitle: "Breite und Höhe tauschen",
      ratioLocked: "Verhältnis gesperrt",
      lockRatio: "Verhältnis sperren",
      width: "Breite",
      height: "Höhe",
      lockHint: "Breite und Höhe ändern sich gemeinsam, damit {ratio} erhalten bleibt.",
      totalArea: "Gesamtfläche",
      sqIn: "Quadratzoll",
      aspectRatio: "Seitenverhältnis",
      digitalSize: "Digitale Größe (Pixel)",
      copySize: "Größe kopieren",
      totalPixels: "Pixel gesamt",
      megapixels: "Megapixel",
      ratioTitle: "Höhe aus der Breite per Seitenverhältnis setzen",
      ratios: ["1:1 Quadrat", "4:3 Klassisch", "16:9 Breitbild", "3:2 35-mm-Foto", "4:5 Galerie", "5:7 Druck"],
      centimeters: "Zentimeter",
      millimeters: "Millimeter",
      points: "Punkt (72 / Zoll)",
      surfaceArea: "Fläche",
      lengthInInches: "Länge in Zoll",
      lengthInPixels: "Länge in Pixeln",
      pixelsAt: "Pixel bei {dpi} DPI",
      copyPixels: "Pixel kopieren",
      formulaTitle: "Die Formel",
      formula: "Pixel = Zoll × DPI",
      reverse: "Umgekehrt: Zoll = Pixel ÷ DPI",
      copyCss: "CSS kopieren",
    },
    visual: {
      eyebrow: "Echtzeitansicht",
      title: "DER ARCHITEKTONISCHE",
      highlight: "VIEWPORT",
      description:
        "Sehen Sie, wie physische Zollmaße live zu digitalen Pixelstrukturen werden. Wechseln Sie zwischen Präzisionszeichnung, Juwelierlupe für Pixel und Galerieansicht.",
      modeAria: "Vorschaumodus",
      modes: { canvas: "Zeichenfläche", loupe: "Pixel-Lupe", gallery: "Galerie-Salon" },
      zoomOut: "Verkleinern",
      zoomIn: "Vergrößern",
      resetZoom: "Zoom zurücksetzen",
      summary: "{w} mal {h} Zoll, {wpx} mal {hpx} Pixel bei {dpi} DPI",
      loupeTitle: "Ein physischer Zoll unter der Lupe",
      loupeDesc: "Wie sich die Rasterdichte vom Bildschirm (72 DPI) über den CSS-Standard (96 DPI) bis zum Kunstdruck (300 DPI) verändert.",
      loupe72: "72 DPI · Altes Web",
      loupe72Note: "Grobe Pixelkanten mit bloßem Auge sichtbar.",
      loupe96: "96 DPI · W3C-CSS",
      loupe96Note: "1 Zoll entspricht genau 96 CSS-Pixeln.",
      loupe300: "300 DPI · Archiv",
      loupe300Note: "Nahtloser Halbton ohne Stufen.",
      yourSetting: "Ihre Einstellung:",
    },
    slides: {
      eyebrow: "Visuelle Masterclass & Foliensatz",
      title: "ZOLL IN PIXEL:",
      highlight: "VISUALS & FOLIEN",
      description:
        "Eine interaktive visuelle Reise durch die Umrechnung von Zoll in Raster, W3C-Standards, Retina-Subpixel-Geometrie und hochwertige Druckformate.",
      carouselAria: "Folien zu Zoll in Pixel",
      slide: "Folie",
      pauseAria: "Automatische Diashow anhalten",
      playAria: "Automatische Diashow starten",
      pause: "Pause",
      play: "Start",
      prev: "Vorherige Folie",
      next: "Nächste Folie",
      slideOf: "{n} von {total}: {title}",
      axiom: "Mathematisches Axiom:",
      calibrate: "RECHNER AUF DIESE WERTE EINSTELLEN",
      chooseSlide: "Folie wählen",
      slideLabel: "Folie {n}: {title}",
      specsTitle: "Technische Daten der Folie:",
      items: [
        {
          badge: "GRUNDLAGEN",
          title: "Die Entstehung des digitalen Zolls",
          subtitle: "Wie Dichte aus Strecke ein Rasterbild macht",
          quote: "Ein physischer Zoll ist in Bronze konstant; in der digitalen Welt bestimmt die Dichte seine Größe.",
          keyFormula: "Pixel = Zoll × DPI (Punkte pro Zoll)",
          description:
            "Anders als ein Lineal aus Messing oder Stahl hat ein digitaler Zoll keine feste Pixelzahl. Seine Pixelanzahl wächst direkt mit den DPI (Punkten pro Zoll) des Mediums.",
          specs: [
            { label: "72 DPI (Web 1.0)", value: "72 Pixel" },
            { label: "96 DPI (CSS-Standard)", value: "96 Pixel" },
            { label: "150 DPI (Redaktion)", value: "150 Pixel" },
            { label: "300 DPI (Kunstdruck)", value: "300 Pixel" },
            { label: "600 DPI (Ultrafein)", value: "600 Pixel" },
          ],
        },
        {
          badge: "DER FORMALE W3C-KANON",
          title: "Der 96-CSS-Pixel-Standard",
          subtitle: "Der mathematische Anker des weltweiten Webs",
          quote: "1in = 96px ist keine Näherung, sondern eine feste Konstante, die in den CSS-Spezifikationen des W3C verankert ist.",
          keyFormula: "1 Zoll ≡ 96 CSS-px ≡ 2,54 cm ≡ 72 pt ≡ 6 pc",
          description:
            "1996 legte das World Wide Web Consortium den Referenzpixel auf einen Betrachtungsabstand von 28 Zoll und einen Winkel von 0,0213 Grad fest. Damit entspricht 1 CSS-Zoll mathematisch genau 96 CSS-Pixeln.",
          specs: [
            { label: "Referenzabstand", value: "28 Zoll (71 cm)" },
            { label: "Sehwinkel", value: "0,0213 Grad" },
            { label: "US Letter (8,5×11\")", value: "816 × 1.056 px" },
            { label: "Punkt (pt) pro Zoll", value: "72 pt" },
            { label: "Pica (pc) pro Zoll", value: "6 pc" },
          ],
        },
        {
          badge: "GICLÉE-ARCHIVSTANDARDS",
          title: "Museums-Kunstdruck & 300 DPI",
          subtitle: "Die unmerkliche Schwelle des menschlichen Sehens",
          quote: "Echter Premium-Druck braucht mindestens 300 DPI: Dort verschmelzen einzelne Tintentröpfchen zu einem nahtlosen Farbton.",
          keyFormula: "Benötigte Pixel = Zielgröße in Zoll × 300 DPI",
          description:
            "Bei normalem Leseabstand von 12–14 Zoll kann die menschliche Netzhaut bis zu 300 Punkte pro Zoll unterscheiden. Unter 300 DPI beeinträchtigt treppenförmige Pixelbildung die Kantenschärfe.",
          specs: [
            { label: "Museumsstandard", value: "300-DPI-Giclée" },
            { label: "Rahmen 16×20\"", value: "4.800 × 6.000 px" },
            { label: "Sensorauflösung gesamt", value: "28,8 Megapixel" },
            { label: "Tröpfchendichte", value: "1.200–2.400 Tröpfchen" },
            { label: "Archivbeständigkeit", value: "Über 100 Jahre" },
          ],
        },
        {
          badge: "RETINA- & HIGH-DPI-DISPLAYS",
          title: "Das Device Pixel Ratio (DPR)",
          subtitle: "Physische Hardwarepixel vs. abstrakte CSS-Pixel",
          quote: "Auf einem 3x-Super-Retina-Display steht 1 CSS-Zoll weiter für 96 CSS-Einheiten, belegt aber 288 physische Dioden.",
          keyFormula: "Physische Gerätepixel = CSS-px × DPR (1x, 2x, 3x)",
          description:
            "Apples Super Retina XDR und moderne 4K/8K-Displays trennen physische Hardwarepixel von logischen CSS-Pixeln. Eine 96 px lange CSS-Linie wird auf einem iPhone 16 Pro mit fast 300 physischen OLED-Subpixeln dargestellt.",
          specs: [
            { label: "1 CSS-Zoll", value: "96 CSS-px" },
            { label: "Apple-DPR-Faktor", value: "3,00x Super Retina" },
            { label: "Physische Hardwarepixel", value: "288 Hardware-px" },
            { label: "Hardware-PPI", value: "460 PPI" },
            { label: "Subpixel-Anordnung", value: "Diamond-PenTile-OLED" },
          ],
        },
        {
          badge: "AUSGEWÄHLTE PROPORTIONEN",
          title: "Die Premium-Rahmenmatrix",
          subtitle: "Standardformate für Architektur und Kunst bei 300 DPI",
          quote: "Die goldenen Proportionen klassischer Bildrahmung, übersetzt in exakte digitale Vorgaben.",
          keyFormula: "Archivqualität (300 DPI) = makellose Galerieausstellung",
          description:
            "Vom klassischen Salonporträt bis zum großen Museumsstück entspricht jedes Rahmenformat in Zoll einer exakten Pixelfläche für eine fehlerfreie Reproduktion.",
          specs: [
            { label: "Galerieporträt 8 × 10\"", value: "2.400 × 3.000 px" },
            { label: "Salondruck 11 × 14\"", value: "3.300 × 4.200 px" },
            { label: "Sammlerrahmen 16 × 20\"", value: "4.800 × 6.000 px" },
            { label: "Großformat 24 × 36\"", value: "7.200 × 10.800 px" },
            { label: "Museumswandbild 40 × 60\"", value: "12.000 × 18.000 px" },
          ],
        },
      ],
      spectrum: {
        title: "1 PHYSISCHER ZOLL BEI VERSCHIEDENEN DICHTEN",
        bars: ["72 DPI (alter Bildschirm)", "96 DPI (W3C-CSS)", "150 DPI (Redaktionsproof)", "300 DPI (Kunst-Giclée)"],
        note: "Bei 300 DPI enthält 1 Zoll mehr als viermal so viele Pixel wie bei alten Web-Standards.",
      },
      w3c: {
        title: "W3C-REFERENZPIXEL & WINKEL",
        observer: "Betrachter",
        distance: "28\" Betrachtungsabstand (0,0213°)",
        cssInch: "CSS-Zoll",
        centimeters: "Zentimeter",
        typographyPt: "Typo-Punkt",
        picas: "Pica",
      },
      fineart: {
        title: "RASTER-PIXELUNG VS. DURCHGEHENDER GICLÉE-TON",
        printed72: "Mit 72 DPI gedruckt",
        jagged: "Sichtbare Treppenkanten (Aliasing)",
        archival300: "300 DPI Archiv",
        smooth: "Gestochen scharfe, glatte Kurve",
        summary: "16 × 20 Zoll bei 300 DPI = 4.800 × 6.000 Pixel (28,8 MP)",
      },
      retina: {
        title: "SUBPIXEL-GEOMETRIE & DEVICE PIXEL RATIO",
        rows: [
          { name: "1x-DPR-Display", device: "Älterer Standardmonitor", value: "1 CSS-px = 1 physisches px" },
          { name: "2x DPR (Retina)", device: "MacBook Pro & iPad Pro", value: "1 CSS-px = 4 physische px (2×2)" },
          { name: "3x DPR (Super Retina XDR)", device: "iPhone Pro OLED", value: "1 CSS-px = 9 physische px (3×3)" },
        ],
        summary: "1 Zoll auf dem iPhone 16 Pro = 96 CSS-px = ",
        summaryStrong: "288 physische Pixel",
      },
      framing: {
        title: "GALERIEWAND-PROPORTIONEN BEI 300 DPI",
        sensor: "Sensor: {mp}",
        note: "Für Großformate (ab 24×36\") sorgen hochauflösende Mittelformatsensoren oder KI-Hochskalierung für kornfreie Ergebnisse.",
      },
    },
    presets: {
      eyebrow: "Ausgewählter Formatindex",
      title: "DIE FORMAT-",
      highlight: "MATRIX",
      description:
        "Eine Sammlung von Referenzformaten für Museumsrahmung, Geschäftsdrucksachen, Flaggschiff-Displays und digitale Inhalte.",
      filterAria: "Formate nach Kategorie filtern",
      categories: {
        all: "Alle Formate",
        art: "Kunst & Rahmung",
        editorial: "Drucksachen & Bücher",
        device: "Geräte-Displays",
        social: "Digital & Social",
      },
      showing: "{shown} von {total} Formaten",
      recommended: "{dpi} DPI empfohlen",
      physicalSize: "Physische Größe",
      web: "96 DPI (Web)",
      print: "300 DPI (Druck)",
      use: "FORMAT ÜBERNEHMEN",
      useAria: "{name} mit {dpi} DPI im Rechner verwenden",
      items: [
        { name: "Klassisches Galerieporträt 8 × 10\"", description: "Ikonischer Standard für Museumsporträts und Kunstrahmung." },
        { name: "Ausstellungsdruck 11 × 14\"", description: "Standard-Archivdruck für Innenraumgalerien." },
        { name: "Sammler-Wandrahmen 16 × 20\"", description: "Beliebtes Format für Räume mit starker Wirkung." },
        { name: "Großformatiges Kunstwerk 24 × 36\"", description: "Zentrales Meisterwerk für hochwertige Wohnräume." },
        { name: "Architektonisches Wandbild 30 × 40\"", description: "Werk im Museumsmaßstab mit voller Tonwerttiefe." },
        { name: "US-Letter-Blatt 8,5 × 11\"", description: "Amerikanischer Standard für Geschäftsdokumente." },
        { name: "Internationales A4 8,27 × 11,69\"", description: "Weltweiter Papierstandard (ISO 216)." },
        { name: "Visitenkarte 3,5 × 2,0\"", description: "Standard für Visitenkarten mit Goldprägung." },
        { name: "Kunstbildband 12 × 12\"", description: "Quadratische Doppelseite eines Premium-Bildbands." },
        { name: "iPhone-16-Pro-Bildschirm (physisch)", description: "Physische Größe des Super-Retina-Flaggschiffdisplays." },
        { name: "16,2\"-MacBook-Pro-Display (physisch)", description: "Physische Größe des Liquid Retina XDR-Displays." },
        { name: "55\"-4K-Fernseher (physisch)", description: "Physische Maße eines UHD-Panels mit 3840×2160." },
        { name: "Quadratische Fläche 1080 × 1080 px", description: "Quadratisches 1080-px-Motiv in Zoll bei 96 DPI." },
        { name: "Hochformat-Reel/Story 1080 × 1920 px", description: "Mobile Vollbildfläche (Seitenverhältnis 9:16)." },
      ],
    },
    hubCalc: {
      titleIn: "Zoll-in-Pixel-Rechner",
      titlePx: "Pixel-in-Zoll-Rechner",
      size: "Format",
      customSize: "Eigenes Format",
      width: "Breite",
      height: "Höhe",
      dpi: "DPI",
      custom: "Eigene",
      dpiError: "Verwenden Sie einen DPI-Wert von 1 bis {max}.",
      result: "Ergebnis",
      resultSub: "{w} × {h} {unit} bei {dpi} DPI",
      enterBoth: "Geben Sie Breite und Höhe größer als 0 ein.",
      needMore: "Brauchen Sie Seitenverhältnis-Sperre, weitere Einheiten oder eine Vorschau?",
      openFull: "Vollständigen Rechner öffnen",
    },
    sizeLabels,
  },
  content: {
    meta: {
      siteTitle: "Zoll in Pixel umrechnen | Rechner mit PPI",
      siteDescription:
        "Rechnen Sie Zoll mit dem gewünschten PPI in Pixel um. Lernen Sie die Formel, berechnen Sie Breite und Höhe und prüfen Sie Beispielmaße für Druck und CSS.",
    },
    page: {
      skipToConverter: "Zum Rechner springen",
      skipToCalculator: "Zum Rechner springen",
      breadcrumb: "Brotkrumennavigation",
      related: "Verwandte Seiten",
      relatedHome: "Zoll-in-Pixel-Rechner",
      hubFaqDescription: "Kurze Antworten auf die häufigsten Fragen zu diesem Thema.",
    },
    footer: {
      blurb:
        "Kostenloser Zoll-in-Pixel-Rechner für Bildschirm und Druck. Rechnen Sie jede Größe mit jeder DPI um, prüfen Sie Druckformate und finden Sie gängige Werte an einem Ort.",
      openConverter: "Rechner öffnen",
      pages: "Seiten",
      copyright: "©2026 InchestoPixel.com",
      backToTop: "NACH OBEN",
    },
    home: {
      intro:
        "Mit diesem Rechner wandeln Sie ein Maß in Zoll bei der gewählten Bildauflösung in Pixel um, gemessen in Pixeln pro Zoll (PPI). Das Ergebnis hängt von dieser Einstellung ab: Bei 300 PPI entspricht 1 Zoll 300 Pixeln.",
      howTo: {
        heading: "So rechnen Sie Zoll in Pixel um",
        steps: [
          "Geben Sie die umzurechnende Länge in Zoll ein.",
          "Wählen Sie die Bildauflösung, die Ihr Projekt verlangt. Für den Druck fragen Sie Ihre Druckerei.",
          "Berechnen Sie die Pixelanzahl. Um Breite und Höhe umzurechnen, wiederholen Sie die Berechnung für jede Abmessung mit derselben Einstellung.",
        ],
        note: "Speichern Sie die Auflösung zusammen mit dem Ergebnis, damit Sie die geplante Druckgröße später prüfen können.",
      },
      formula: {
        heading: "Formel und Beispiele",
        main: "Pixel = Zoll × PPI",
        explain: "Multiplizieren Sie die physische Länge in Zoll mit der Zahl der Pixel pro Zoll, um die Pixelanzahl entlang dieser Abmessung zu erhalten.",
        backwardLead: "Für die Rückrechnung:",
        backward: "Zoll = Pixel ÷ PPI",
        examples: [
          {
            heading: "Beispiel für eine einzelne Länge",
            lead: "Bei 96 PPI ergibt eine Länge von 2 Zoll:",
            math: ["2 × 96 = 192 Pixel"],
            after: [
              "Dieses Ergebnis ist für die gewählte Auflösung exakt. Es bedeutet nicht, dass jeder Bildschirm 192 Pixel auf zwei physischen Zoll anzeigt.",
            ],
          },
          {
            heading: "Beispiel für Breite und Höhe eines Drucks",
            lead: "Für ein Bild mit 8,5 × 11 Zoll bei 300 PPI:",
            math: ["Breite: 8,5 × 300 = 2.550 Pixel", "Höhe: 11 × 300 = 3.300 Pixel"],
            after: [
              "Die benötigten Bildmaße sind 2.550 × 3.300 Pixel, vor einem eventuell von der Druckerei geforderten Beschnitt.",
            ],
          },
          {
            heading: "Beispiel für ein Ergebnis mit Nachkommastellen",
            lead: "Für 2,33 Zoll bei 150 PPI:",
            math: ["2,33 × 150 = 349,5 Pixel"],
            after: [
              "Rasterbilder brauchen ganze Pixel. Rundet man 349,5 auf den nächsten ganzen Pixel (Hälften aufgerundet), ergeben sich 350 Pixel. Bei derselben Auflösung entspricht das etwa 2,333 Zoll.",
            ],
          },
        ],
        closing: "Runden Sie erst im letzten Schritt und nach den Vorgaben Ihres Projekts.",
      },
      reference: {
        heading: "Referenztabelle Zoll in Pixel",
        intro:
          "Die Spaltenüberschriften zeigen die Bildauflösung in PPI; die Werte darunter sind Pixelanzahlen. Diese Einstellungen sind Beispiele, keine allgemeingültigen Vorgaben.",
        table: homeTable("de", { corner: "Länge (Zoll)", col: "{ppi}" }),
        caption: "Zoll in Pixel bei 72, 96, 150 und 300 PPI",
        footnote: "Alle Tabellenwerte sind für die angegebenen Eingaben exakt.",
      },
      guide: { eyebrow: "Theoretische Grundlagen", title: "PIXEL, DRUCKGRÖSSE UND", highlight: "PPI" },
      explainers: [
        {
          heading: "Bildpixel, Druckgröße und CSS-Pixel",
          paragraphs: [
            "Pixelmaße beschreiben Breite und Höhe eines Bildes in Pixeln. Druckmaße beschreiben seine physische Größe in Zoll. Die Bildauflösung verbindet beides: Dieselben Pixelmaße können unterschiedliche Druckgrößen ergeben.",
            "CSS nutzt ein festes Verhältnis: 1in = 96px. Das sind CSS-Referenzeinheiten – ein CSS-Pixel ist also nicht unbedingt ein physischer Gerätepixel, und ein CSS-Zoll auf dem Bildschirm misst nicht unbedingt einen echten Zoll. Nutzen Sie dieses Verhältnis für CSS-Größen, aber gehen Sie nicht davon aus, dass es die physische Pixeldichte eines Displays beschreibt.",
          ],
        },
        {
          heading: "Bildauflösung und Druckerauflösung",
          paragraphs: [
            "PPI beschreibt Bildpixel pro Zoll; DPI beschreibt Punkte pro Zoll, die ein Drucker erzeugt. Im Druckablauf hängen sie zusammen, sind aber nicht austauschbar. Verwenden Sie für diesen Rechner die geforderte Bildauflösung statt der Hardwareangabe des Druckers.",
          ],
        },
        {
          heading: "Eine andere Auflösung fügt keine Bilddetails hinzu",
          paragraphs: [
            "Ändern Sie nur die Auflösungs-Metadaten eines Bildes, bleibt seine Pixelzahl gleich und nur die geplante Druckgröße ändert sich. Neuberechnung (Resampling) ändert die Pixelzahl. Eine höhere Auflösung allein erzeugt keine neuen Details.",
          ],
        },
      ],
      browse: "Nach Thema stöbern",
      faqDescription: "Antworten auf häufige Fragen zur Umrechnung von Zoll in Pixel.",
      faqs: [
        {
          question: "Welche Auflösung soll ich verwenden?",
          answer:
            "Verwenden Sie den Wert, den Ihre Ausgabe verlangt. Für den Druck fragen Sie die Druckerei nach der benötigten Bildauflösung in der Endgröße. Gibt ein digitaler Upload Pixelmaße vor, verwenden Sie diese direkt.",
        },
        {
          question: "Ändert die Umrechnung in Pixel das Seitenverhältnis?",
          answer:
            "Mit derselben Auflösung für Breite und Höhe bleibt das Verhältnis vor dem Runden erhalten. Ein Bild mit 4 × 4 Zoll bei 300 PPI wird zum Beispiel zu 1.200 × 1.200 Pixeln. Beide sind quadratisch: Das Verhältnis beschreibt die Form, nicht die Auflösung.",
        },
        {
          question: "Kann ich die Druckgröße eines vorhandenen Bildes berechnen?",
          answer:
            "Ja. Teilen Sie jede Pixelabmessung durch die vorgesehene Bildauflösung. Bei 300 PPI entspricht ein Bild mit 1.800 × 1.200 Pixeln 6 × 4 Zoll. Beschneiden oder Skalieren beim Drucken kann die Endgröße verändern.",
        },
      ],
    },
    hubs: {
      dpi: {
        nav: "DPI",
        h1: "Zoll-in-Pixel-Rechner nach DPI",
        seoTitle: "Zoll in Pixel nach DPI umrechnen | Druckgröße berechnen",
        description:
          "Rechnen Sie Zoll mit der DPI Ihres Projekts in Pixel um. Mit Formel, Rechenbeispielen und einer Tabelle von 72 bis 600 DPI zur Prüfung der Bildmaße für den Druck.",
        answer:
          "Berechnen Sie Pixelmaße aus einem physischen Maß und der gewählten Auflösung. Multiplizieren Sie Zoll mit der angegebenen DPI: Bei 300 DPI entsprechen 4 Zoll 1.200 Pixeln.",
        introNotes: [
          "Bei dieser Umrechnung bezeichnet DPI die Ziel-Pixeldichte des Bildes, technisch PPI genannt. Verwenden Sie die Auflösung, die Ihr Projekt verlangt; einen festen Pixelwert pro Zoll gibt es nicht.",
        ],
        sections: [
          {
            heading: "So rechnen Sie Zoll in Pixel um",
            blocks: [
              {
                type: "steps",
                items: [
                  "Geben Sie die physische Länge in Zoll ein.",
                  "Geben Sie die Zielauflösung ein. Für Druckaufträge verwenden Sie die Bildauflösung, die Ihre Druckerei verlangt.",
                  "Multiplizieren Sie die Zoll mit dieser Auflösung, um die Länge in Pixeln zu erhalten.",
                  "Berechnen Sie bei einem Bild Breite und Höhe getrennt mit derselben Auflösung.",
                ],
              },
              {
                type: "note",
                text: "Behalten Sie bei der Umrechnung eines bestehenden Entwurfs das ursprüngliche Seitenverhältnis bei. Ein anderes Verhältnis erfordert Beschneiden oder Verzerren.",
              },
            ],
          },
          {
            heading: "Formel und Rechenbeispiele",
            blocks: [
              { type: "math", lines: ["Pixel = Zoll × DPI"], large: true },
              { type: "p", text: "Dabei gilt:" },
              {
                type: "list",
                items: [
                  "Pixel ist die digitale Länge in Pixeln, abgekürzt px.",
                  "Zoll ist die vorgesehene physische Länge.",
                  "DPI ist der gewählte Umrechnungswert, verstanden als Bildpixel pro Zoll.",
                ],
              },
              { type: "p", text: "Für ein rechteckiges Bild:" },
              {
                type: "math",
                lines: ["Breite in Pixeln = Breite in Zoll × DPI", "Höhe in Pixeln = Höhe in Zoll × DPI"],
              },
              {
                type: "sub",
                heading: "Ein Bild mit 8 × 10 Zoll bei 300 DPI",
                blocks: [
                  { type: "p", text: "Wenn Ihr Projekt 300 PPI verlangt:" },
                  { type: "math", lines: ["Breite: 8 × 300 = 2.400 px", "Höhe: 10 × 300 = 3.000 px"] },
                  { type: "p", text: "Die benötigten Maße sind 2.400 × 3.000 Pixel. Diese Ergebnisse sind exakt." },
                ],
              },
              {
                type: "sub",
                heading: "Eine Länge von 2,5 Zoll bei 96 DPI",
                blocks: [
                  { type: "math", lines: ["2,5 × 96 = 240 px"] },
                  {
                    type: "p",
                    text: "Bei einer Dichte von 96 Pixeln pro Zoll entsprechen 2,5 Zoll genau 240 Pixeln. Dieselbe Länge ergibt bei einer anderen Dichte ein anderes Ergebnis.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Ein Ergebnis mit Nachkommastellen bei 150 DPI",
                blocks: [
                  { type: "math", lines: ["1,23 × 150 = 184,5 px"] },
                  {
                    type: "p",
                    text: "Ein Rasterbild braucht ganze Pixel. Auf den nächsten ganzen Pixel gerundet (Hälften aufgerundet) ergeben sich 185 px.",
                  },
                ],
              },
              {
                type: "note",
                text: "Runden Sie nur das Endergebnis. Schreibt eine Produktionsvorgabe eine Mindestpixelzahl vor, runden Sie auf. Getrenntes Runden von Breite und Höhe kann das Seitenverhältnis leicht verändern – prüfen Sie daher die Endmaße, wenn exakte Proportionen wichtig sind.",
              },
            ],
          },
          {
            heading: "Referenztabelle Zoll in Pixel",
            blocks: [
              {
                type: "p",
                text: "Alle Werte sind exakt. Die DPI-Spalte steht für die Ziel-Bilddichte in PPI für diese Berechnung.",
              },
              {
                type: "table",
                caption: "Pixel für 1, 4 und 6 Zoll bei 72 bis 600 DPI",
                table: dpiTable("de", {
                  corner: "Angegebene DPI",
                  cols: ["1 Zoll", "4 Zoll", "6 Zoll"],
                  row: "{dpi} DPI",
                  cell: "{px} px",
                }),
              },
              {
                type: "p",
                text: "Ein Bild mit 4 × 6 Zoll bei 300 DPI braucht zum Beispiel 1.200 × 1.800 Pixel. Bei 72 DPI entspricht dieselbe physische Größe 288 × 432 Pixeln.",
              },
            ],
          },
          {
            heading: "Die richtige Auflösung für den Zweck wählen",
            blocks: [
              {
                type: "sub",
                heading: "DPI und PPI beschreiben Unterschiedliches",
                blocks: [
                  {
                    type: "p",
                    text: "PPI bedeutet Pixel pro Zoll: die Bildpixel, die auf jeden Zoll der Ausgabe kommen. DPI bedeutet Punkte pro Zoll: die Punkte, die ein Drucker erzeugen kann. Das sind unterschiedliche Größen.",
                  },
                  {
                    type: "p",
                    text: "Wenn eine Druckvorgabe „300 DPI“ schreibt und damit ein Bild mit 300 PPI meint, rechnen Sie mit 300. Ersetzen Sie den geforderten Bild-PPI nicht durch die Hardware-DPI des Druckers.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Physische Größe und Pixelmaße gehören zusammen",
                blocks: [
                  {
                    type: "p",
                    text: "Zoll beschreiben die physische Größe; Pixelmaße beschreiben digitale Breite und Höhe des Bildes. Bei gleicher physischer Größe braucht ein höherer Ziel-PPI mehr Pixel.",
                  },
                  {
                    type: "p",
                    text: "Die Auflösung eines vorhandenen Bildes ohne Neuberechnung zu ändern, fügt keine Pixel hinzu. Es ändert nur das Verhältnis zwischen Druckgröße und Pixeldichte. Resampling ändert die Pixelzahl – eine größere Zielgröße zu berechnen, verbessert das Ausgangsbild also nicht.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Bildschirmmaße brauchen Kontext",
                blocks: [
                  {
                    type: "p",
                    text: "Gehen Sie nicht davon aus, dass jeder Bildschirm 72 oder 96 physische Pixel pro Zoll hat. CSS definiert 1 Zoll als 96 CSS-Pixel, doch CSS-Pixel sind nicht unbedingt einzelne Gerätepixel oder ein echtes physisches Maß auf dem Bildschirm.",
                  },
                  {
                    type: "p",
                    text: "Für einen Bild-Upload halten Sie sich an die geforderten Pixelmaße des Ziels. Für den Druck an dessen Vorgaben zu physischer Größe und Bildauflösung.",
                  },
                ],
              },
            ],
          },
        ],
        faq: [
          {
            question: "Wie nutze ich das als 300-DPI-Rechner?",
            answer:
              "Wählen Sie 300 als Zielauflösung und multiplizieren Sie jedes Zollmaß mit 300. Ein Bild mit 5 × 7 Zoll braucht zum Beispiel 1.500 × 2.100 Pixel bei 300 PPI.",
          },
          {
            question: "Kann ich Zoll ohne DPI-Angabe in Pixel umrechnen?",
            answer:
              "Ohne Ziel-Pixeldichte gibt es keine eindeutige Antwort. Eine Länge von 2 Zoll entspricht 144 Pixeln bei 72 PPI, 192 Pixeln bei 96 PPI oder 600 Pixeln bei 300 PPI.",
          },
          {
            question: "Soll ich den Beschnitt in die Maße einrechnen?",
            answer:
              "Verlangt Ihre Druckerei Beschnitt, rechnen Sie mit der vollen Motivgröße einschließlich Beschnitt. Ein Entwurf mit 4 × 6 Zoll und 0,125 Zoll Beschnitt an jeder Seite wird zum Beispiel zu 4,25 × 6,25 Zoll. Bei 300 PPI sind das 1.275 × 1.875 Pixel. Verwenden Sie die tatsächliche Beschnittvorgabe Ihrer Druckerei.",
          },
        ],
      } as HubText,
      software: {
        nav: "Software",
        h1: "Zoll in Pixel in Software",
        seoTitle: "Zoll in Pixel in Software: PPI-Umrechnungsleitfaden",
        description:
          "Rechnen Sie Zoll mit dem PPI Ihres Projekts in Pixel um. Mit Rechenbeispielen und Erklärungen, wie Bildmaße, Resampling und Exporteinstellungen das Ergebnis beeinflussen.",
        answer:
          "Zoll rechnen Sie in Pixel um, indem Sie das Maß in Zoll mit den geforderten Pixeln pro Zoll (PPI) multiplizieren. Ein Zoll entspricht 300 px bei 300 PPI oder 96 px bei 96 PPI. Verwenden Sie in Software die Auflösung, die Ihre Ausgabe verlangt – nicht einen vermeintlich allgemeingültigen Standardwert.",
        sections: [
          {
            heading: "So rechnen Sie Ihre Maße um",
            blocks: [
              {
                type: "steps",
                items: [
                  "Bestimmen Sie die benötigte Breite oder Höhe in Zoll.",
                  "Wählen Sie den PPI-Wert für diese Ausgabe. Für den Druck prüfen Sie die Bildauflösungsvorgabe der Druckerei.",
                  "Berechnen Sie die Pixelanzahl aus Zollmaß und PPI.",
                  "Wiederholen Sie das für die andere Abmessung mit demselben PPI.",
                ],
              },
              {
                type: "note",
                text: "Behalten Sie bei einem vorhandenen Bild die Proportionen bei. Haben die geforderte Breite und Höhe ein anderes Seitenverhältnis, beschneiden Sie das Bild oder fügen Rand hinzu, statt es zu verzerren.",
              },
            ],
          },
          {
            heading: "Formel und Beispiele",
            blocks: [
              { type: "math", lines: ["Pixel = Zoll × PPI"], large: true },
              {
                type: "list",
                items: [
                  "Pixel (px): die Anzahl der Bildpixel entlang einer Abmessung.",
                  "Zoll (in): die vorgesehene physische Länge dieser Abmessung.",
                  "PPI: die Anzahl der Bildpixel pro Zoll bei dieser Größe.",
                ],
              },
              { type: "p", text: "Die Berechnung gilt getrennt für Breite und Höhe." },
              {
                type: "sub",
                heading: "Ein Bild mit 4 × 6 Zoll bei 300 PPI",
                blocks: [
                  { type: "math", lines: ["Breite: 4 × 300 = 1.200 px", "Höhe: 6 × 300 = 1.800 px"] },
                  {
                    type: "p",
                    text: "Die Ziel-Bildmaße sind 1.200 × 1.800 px, ohne zusätzlichen Beschnitt oder Rand.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Ein Bild mit 8 × 10 Zoll bei 150 PPI",
                blocks: [
                  { type: "math", lines: ["Breite: 8 × 150 = 1.200 px", "Höhe: 10 × 150 = 1.500 px"] },
                  {
                    type: "p",
                    text: "Das Ergebnis ist 1.200 × 1.500 px. Dieses Beispiel nutzt 150 PPI als vorgegebene Anforderung, nicht als Empfehlung für jeden Druckauftrag.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Ein Maß mit Nachkommastellen",
                blocks: [
                  { type: "p", text: "Für eine Breite von 2,125 Zoll bei 300 PPI:" },
                  { type: "math", lines: ["2,125 × 300 = 637,5 px"] },
                  {
                    type: "p",
                    text: "Das mathematische Ergebnis ist exakt, aber ein Rasterbild braucht eine ganzzahlige Breite. Auf den nächsten Pixel gerundet verwenden Sie 638 px. Bei 300 PPI entspricht das etwa 2,127 Zoll.",
                  },
                ],
              },
              {
                type: "note",
                text: "Runden Sie am Ende der Berechnung. Schreibt eine Produktionsvorgabe eine Mindestpixelzahl vor, runden Sie bei Bedarf auf.",
              },
            ],
          },
          {
            heading: "Schnelle Umrechnungstabelle",
            blocks: [
              {
                type: "p",
                text: "Diese Werte sind für den angegebenen PPI exakt. Die Spalten sind Rechenbeispiele, keine Standardeinstellungen von Programmen.",
              },
              {
                type: "table",
                caption: "Zoll in Pixel bei 96, 150 und 300 PPI",
                table: softwareTable("de", {
                  corner: "Länge (Zoll)",
                  cols: ["Bei 96 PPI (px)", "Bei 150 PPI (px)", "Bei 300 PPI (px)"],
                }),
              },
            ],
          },
          {
            heading: "Das Ergebnis in Ihrer Software anwenden",
            blocks: [
              {
                type: "sub",
                heading: "Photoshop: Größe ändern und Neuberechnen unterscheiden",
                blocks: [
                  {
                    type: "p",
                    text: "Vergleichen Sie vor jeder Änderung die Ziel-Pixelmaße mit den aktuellen Bildmaßen.",
                  },
                  {
                    type: "p",
                    text: "Ist „Neu berechnen“ deaktiviert, bleibt die Pixelzahl bei einer PPI-Änderung gleich und die vorgesehene Druckgröße ändert sich. Ist es aktiviert, kann eine Größen- oder Auflösungsänderung Pixel hinzufügen oder entfernen. Halten Sie Breite und Höhe beim Skalieren proportional. Adobe erklärt diese Zusammenhänge in seinem Leitfaden zu Bildgröße und Neuberechnung.",
                  },
                  {
                    type: "p",
                    text: "Ein höherer PPI-Wert allein erzeugt keine zusätzlichen Details. Vergrößern per Resampling fügt berechnete Pixel hinzu, stellt aber keine im Original fehlenden Details wieder her.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Illustrator: die Raster-Exportauflösung prüfen",
                blocks: [
                  {
                    type: "p",
                    text: "Vektorgrafiken haben keine feste Pixelzahl. Beim Export in ein Rasterformat wie PNG oder JPEG bestimmen die physische Größe der Grafik und die Exportauflösung die Ausgabemaße.",
                  },
                  {
                    type: "p",
                    text: "Ein 4 Zoll breiter Exportbereich bei 300 PPI braucht zum Beispiel 1.200 px Breite. Prüfen Sie die Maße der exportierten Datei, besonders wenn der Export zusätzliche Begrenzungen oder Ränder enthält. Die verfügbaren Einstellungen in Illustrator hängen vom Exportformat ab.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Figma: den Exportmaßstab berücksichtigen",
                blocks: [
                  {
                    type: "p",
                    text: "Berechnen Sie für ein Raster-Asset zuerst die benötigten Ausgabepixel und berücksichtigen Sie dann den Exportmaßstab. Ein 600 Pixel breiter Frame, mit 2× exportiert, ergibt ein 1.200 Pixel breites Bild. Wenden Sie keinen weiteren Multiplikator an, wenn Ihr Frame bereits die Zielmaße hat. Siehe die Exportformate und -einstellungen von Figma.",
                  },
                  {
                    type: "p",
                    text: "Für ein 4 Zoll breites Bild, das mit 300 PPI gedruckt werden soll, beträgt das Ziel 1.200 px Breite – unabhängig davon, mit welcher Kombination aus Frame und Maßstab Sie es erzeugen.",
                  },
                ],
              },
            ],
          },
          {
            heading: "Häufige Umrechnungsfehler vermeiden",
            blocks: [
              {
                type: "sub",
                heading: "PPI und DPI beschreiben Unterschiedliches",
                blocks: [
                  {
                    type: "p",
                    text: "PPI misst Bildpixel pro Zoll; DPI misst in der Regel Druckerpunkte pro Zoll. Verwendet eine Druckvorgabe „DPI“ für ein Bild, klären Sie, ob damit der geforderte Bild-PPI gemeint ist. Verwenden Sie nicht automatisch die Hardware-Punktauflösung des Druckers als Eingabe für den Rechner.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "CSS-Pixel sind logische Einheiten",
                blocks: [
                  {
                    type: "p",
                    text: "CSS definiert 1 Zoll als 96 CSS-Pixel. Das heißt weder, dass jedes Bild 96 PPI haben sollte, noch dass ein Element mit einem CSS-Zoll auf jedem Bildschirm einen physischen Zoll misst. Displays mit hoher Dichte können mehrere Gerätepixel pro CSS-Pixel verwenden. Siehe die W3C-Erklärung zu CSS-Einheiten.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Die fertige Ausgabe prüfen, nicht nur die Dokumentgröße",
                blocks: [
                  {
                    type: "p",
                    text: "Wenn Sie ein Bild für Canva, Procreate, Paint, InDesign, Word, PowerPoint oder Google Präsentationen vorbereiten, unterscheiden Sie zwischen den Pixelmaßen des Bildes und seiner platzierten Größe. Prüfen Sie die endgültigen Bildmaße und die vorgesehene Druckgröße, statt anzunehmen, dass der Programmname die Umrechnung bestimmt.",
                  },
                ],
              },
            ],
          },
        ],
        faq: [
          {
            question: "Welchen PPI-Wert soll ich verwenden?",
            answer:
              "Verwenden Sie die Auflösung, die Ihr Ausgabeprozess verlangt. Für den Druck fragen Sie die Druckerei. Für ein in Pixeln angegebenes Bildschirm-Asset verwenden Sie diese Pixelmaße direkt; eine Umrechnung aus Zoll ist dann oft unnötig.",
          },
          {
            question: "Warum erscheint dasselbe Bild in verschiedenen Programmen unterschiedlich groß?",
            answer:
              "Ein Programm kann das Bild an die Seite anpassen, mit einer bestimmten Zoomstufe anzeigen oder die Auflösungs-Metadaten für die platzierte Größe nutzen. Die sichtbare Größe allein verrät nicht, ob sich die Pixelmaße geändert haben.",
          },
          {
            question: "Kann ich Zoll in Pixel in Excel oder Google Tabellen berechnen?",
            answer:
              "Ja. Steht in Zelle A2 der Zollwert und in B2 der PPI-Wert, verwenden Sie:\n=A2*B2\nUm einen positiven Wert auf den nächsten ganzen Pixel zu runden, verwenden Sie (im deutschen Excel):\n=RUNDEN(A2*B2;0)\nDas berechnet ein Pixelmaß; es ändert weder die Bildgröße noch die Spaltenbreite der Tabelle.",
          },
        ],
      } as HubText,
      print: printHub("de", {
        nav: "Druck & Foto",
        h1: "Zoll in Pixel für Druck, Fotos und Bilder",
        description:
          "Wie viele Pixel Sie für einen scharfen Druck brauchen: Fotos in 4×6, 5×7, 8×10 und 11×14 Zoll bei 150 und 300 DPI, mit Druckgrößenrechner.",
        answer: "Für einen scharfen Druck brauchen Sie Druckgröße × 300 Pixel auf jeder Seite.",
        printing: {
          heading: "Drucken",
          body: "Benötigte Pixel = Druckgröße in Zoll × Druck-DPI. Die meisten Druckereien zielen auf 300 DPI.",
          corner: "Druckgröße",
          row: "{w} × {h} Zoll",
        },
        photos: {
          heading: "Fotos und Bilder",
          body: "Ein Foto mit zu wenigen Pixeln wirkt im Großdruck weich. Vergleichen Sie die Pixelgröße Ihres Bildes vor der Bestellung mit der Tabelle oben.",
        },
        faq: [
          {
            question: "Kann ich ein kleines Foto vergrößern?",
            answer: "Hochskalieren fügt Pixel hinzu, aber keine Details – starke Vergrößerungen wirken deshalb unscharf.",
          },
        ],
      }),
      sizes: sizesHub(
        "de",
        {
          nav: "Formate",
          h1: "Gängige Druck- und Papierformate in Pixeln",
          description:
            "Letter, A4, 4×6, 5×7, 8×10, 18×24, 24×36 und Kartenformat in Pixeln bei 72, 150 und 300 DPI. Format wählen und sofort umrechnen.",
          answer: "Letter-Papier (8,5 × 11 Zoll) hat bei 300 DPI 2.550 × 3.300 px.",
          overview: {
            heading: "Alle gängigen Formate auf einen Blick",
            body: "Pixelgröße jedes Formats bei 72, 150 und 300 DPI.",
            corner: "Format",
          },
          sizeBody:
            "{label} misst {w} × {h} Zoll. Bei 300 DPI sind das {w300} × {h300} px, bei 72 DPI {w72} × {h72} px.",
          faq: [
            {
              question: "Welches Format ist für den Druck am gängigsten?",
              answer: "Letter und A4 für Dokumente, 4 × 6 und 5 × 7 für Fotos.",
            },
          ],
        },
        sizeLabels,
      ),
      chart: chartHub("de", {
        nav: "Tabelle",
        h1: "Zoll-in-Pixel-Tabelle (alle gängigen Werte)",
        description:
          "Umrechnungstabelle Zoll in Pixel von 1/8 bis 96 Zoll bei 72, 96, 150 und 300 DPI. Jeden gängigen Wert auf einen Blick finden.",
        answer: "Finden Sie jede Größe von 1/8 bis 96 Zoll bei 72, 96, 150 und 300 DPI.",
        chart: {
          heading: "Umrechnungstabelle",
          body: "Die vollständige Referenztabelle. Jede Zeile ist ein Wert, auf den Sie verlinken können.",
          corner: "Zoll",
        },
        items: ["1/8 Zoll", "2 Zoll", "2,5 Zoll", "3 Zoll", "4 Zoll", "5 Zoll", "8,5 Zoll"],
        itemBody:
          "{label} entspricht {px72} px bei 72 DPI, {px96} px bei 96 DPI, {px150} px bei 150 DPI und {px300} px bei 300 DPI.",
        faq: [
          {
            question: "Wo finde ich die anderen Werte?",
            answer: "Werte wie 10, 12, 24 oder 48 Zoll stehen als Zeilen in der Tabelle oben.",
          },
        ],
      }),
    },
  },
};
