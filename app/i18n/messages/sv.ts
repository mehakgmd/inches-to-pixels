/** Swedish (Svenska). Same shape as en.ts. */
import type { HubText, InfoText } from "../../lib/hubs";
import { chartHub, dpiTable, homeTable, printTable, sizesHub, softwareTable } from "../build";
import type { Messages } from "./en";

const sizeLabels = [
  "8,5 × 11 tum (Letter)",
  "A4-format",
  "5 × 7 tum",
  "4 × 6 tum",
  "8 × 10 tum",
  "18 × 24 tum",
  "24 × 36 tum",
  "2 × 2 tum",
  "Kortformat (2,5 × 3,5)",
];

export const sv: Messages = {
  ui: {
    common: {
      pageNames: { home: "Start", dpi: "DPI", software: "Program", print: "Tryck & foto", sizes: "Format", chart: "Tabell" },
      quality: { archival: "Arkivkvalitet för tryck", proof: "Provtryckskvalitet", screen: "Skärmupplösning" },
      qualityInline: { archival: "arkivkvalitet för tryck", proof: "provtryckskvalitet", screen: "skärmupplösning" },
      copied: "Kopierat!",
      copyFailed: "Kunde inte kopiera",
    },
    nav: {
      brandSub: "DPI- OCH PPI-OMVANDLARE",
      homeAria: "Inches to Pixel startsida",
      topAria: "Inches to Pixel, tillbaka till toppen",
      pagesAria: "Sidor",
      pages: "Sidor",
      onThisPage: "På den här sidan",
      openMenu: "Öppna menyn",
      closeMenu: "Stäng menyn",
      share: "Dela",
      linkCopied: "Länken kopierad",
      sections: { converter: "Omvandlare", visual: "Visuell skala", slides: "Bilder", presets: "Format", guide: "DPI-guide", faq: "Vanliga frågor" },
      language: "Språk",
      languageAria: "Välj språk",
      more: "Mer",
      info: { about: "Om oss", contact: "Kontakta oss", privacy: "Integritetspolicy" },
    },
    theme: { toDark: "Byt till mörkt läge", toLight: "Byt till ljust läge", dark: "Mörkt läge", light: "Ljust läge" },
    footer: { languages: "Språk" },
    contact: {
      formTitle: "Skicka ett meddelande",
      directTitle: "Mejla oss",
      directText: "Vill du hellre använda din egen e-postapp? Skriv till oss på",
      name: "Ditt namn",
      email: "Din e-postadress",
      message: "Meddelande",
      send: "Skicka meddelande",
      sending: "Skickar…",
      sent: "Tack! Ditt meddelande har skickats. Vi svarar till {email}.",
      failed: "Tyvärr kunde ditt meddelande inte skickas just nu. Mejla oss direkt på",
      invalidName: "Ange ditt namn.",
      invalidEmail: "Ange en giltig e-postadress.",
      invalidMessage: "Skriv ett meddelande på minst 10 tecken.",
      privacyNote: "Vi använder ditt namn och din e-post bara för att svara dig. Läs vår",
    },
    faq: { eyebrow: "Vanliga frågor", title: "EXPERT-", highlight: "SVAR" },
    hero: {
      badge: "Konsten att skala digitalt",
      badgeRule: "1 TUM = 96 PX",
      h1Before: "Räknare för tum till ",
      h1Highlight: "pixlar",
      h1After: "",
      shelfTitle: "Välj målupplösning (DPI / PPI)",
      tags: { standard: "Standard", fineArt: "Konsttryck" },
      presets: [
        { label: "Webbstandard", desc: "Äldre webb & skärmar" },
        { label: "CSS-standard", desc: "W3C & Windows" },
        { label: "Redaktionellt utkast", desc: "Tidningar & korrektur" },
        { label: "Konsttryck", desc: "Museigiclée & böcker" },
        { label: "Retina-skärm", desc: "OLED & toppmobiler" },
      ],
      equations: [
        { label: "W3C-regeln", value: "1 in = 96 px", note: "CSS-standard" },
        { label: "Museitryckets regel", value: "1 in = 300 px", note: "vid 300 DPI" },
        { label: "Metrisk motsvarighet", value: "1 in = 2,54 cm", note: "= 25,4 mm" },
      ],
    },
    converter: {
      title: "Omvandlare från tum till pixlar",
      modeAria: "Omvandlarläge",
      tabLengthShort: "Längd",
      tabLength: "En längd (1D)",
      tabSizeShort: "B × H",
      tabSize: "2D-mått (B × H)",
      resolution: "Upplösning",
      dpiRange: "Använd 1 till {max}",
      enterAbove0: "Ange ett tal större än 0.",
      physicalSize: "Fysisk storlek (tum)",
      swap: "Byt",
      swapTitle: "Byt plats på bredd och höjd",
      ratioLocked: "Proportioner låsta",
      lockRatio: "Lås proportioner",
      width: "Bredd",
      height: "Höjd",
      lockHint: "Bredd och höjd ändras tillsammans för att behålla {ratio}.",
      totalArea: "Total yta",
      sqIn: "kvadrattum",
      aspectRatio: "Bildförhållande",
      digitalSize: "Digital storlek (pixlar)",
      copySize: "Kopiera storlek",
      totalPixels: "Antal pixlar",
      megapixels: "Megapixlar",
      ratioTitle: "Sätt höjden utifrån bredden med bildförhållande",
      ratios: ["1:1 Kvadrat", "4:3 Klassisk", "16:9 Bredbild", "3:2 35 mm-foto", "4:5 Galleri", "5:7 Tryck"],
      centimeters: "Centimeter",
      millimeters: "Millimeter",
      points: "Punkter (72 / tum)",
      surfaceArea: "Yta",
      lengthInInches: "Längd i tum",
      lengthInPixels: "Längd i pixlar",
      pixelsAt: "Pixlar vid {dpi} DPI",
      copyPixels: "Kopiera pixlar",
      formulaTitle: "Formeln",
      formula: "Pixlar = Tum × DPI",
      reverse: "Omvänt: Tum = Pixlar ÷ DPI",
      copyCss: "Kopiera CSS",
    },
    visual: {
      eyebrow: "Realtidsvy",
      title: "DEN ARKITEKTONISKA",
      highlight: "VYPORTEN",
      description:
        "Se hur fysisk skala i tum blir till levande digitala pixelstrukturer. Växla mellan precisionsritning, juvelerarens pixellupp och galleriutställning.",
      modeAria: "Förhandsvisningsläge",
      modes: { canvas: "Ritduk", loupe: "Pixellupp", gallery: "Gallerisalong" },
      zoomOut: "Zooma ut",
      zoomIn: "Zooma in",
      resetZoom: "Återställ zoom",
      summary: "{w} gånger {h} tum, {wpx} gånger {hpx} pixlar vid {dpi} DPI",
      loupeTitle: "En fysisk tum under luppen",
      loupeDesc: "Hur rutnätets täthet ändras från skärm (72 DPI) till CSS-standard (96 DPI) och konsttryck (300 DPI).",
      loupe72: "72 DPI · Äldre webb",
      loupe72Note: "Grova pixelkanter syns för ögat.",
      loupe96: "96 DPI · W3C CSS",
      loupe96Note: "1 tum är exakt 96 CSS-pixlar.",
      loupe300: "300 DPI · Arkiv",
      loupe300Note: "Sömlös kontinuerlig ton.",
      yourSetting: "Din inställning:",
    },
    slides: {
      eyebrow: "Visuell mästarklass & bildspel",
      title: "TUM TILL PIXLAR:",
      highlight: "VISUELLT & BILDSPEL",
      description:
        "En interaktiv visuell genomgång av hur tum blir raster, W3C-standarder, subpixelgeometri i Retina och exklusiva tryckformat.",
      carouselAria: "Bildspel om tum till pixlar",
      slide: "Bild",
      pauseAria: "Pausa det automatiska bildspelet",
      playAria: "Starta det automatiska bildspelet",
      pause: "Paus",
      play: "Spela",
      prev: "Föregående bild",
      next: "Nästa bild",
      slideOf: "{n} av {total}: {title}",
      axiom: "Matematiskt axiom:",
      calibrate: "STÄLL IN OMVANDLAREN EFTER DEN HÄR SPECIFIKATIONEN",
      chooseSlide: "Välj bild",
      slideLabel: "Bild {n}: {title}",
      specsTitle: "Bildens specifikationer:",
      items: [
        {
          badge: "GRUNDERNA",
          title: "Den digitala tummens ursprung",
          subtitle: "Hur täthet förvandlar avstånd till rasterbild",
          quote: "En fysisk tum är konstant i brons; i den digitala världen avgörs dess storlek av tätheten.",
          keyFormula: "Pixlar = Tum × DPI (punkter per tum)",
          description:
            "Till skillnad från en linjal av mässing eller stål har en digital tum inget fast antal pixlar. Pixelantalet växer i direkt proportion till mediets DPI (punkter per tum).",
          specs: [
            { label: "72 DPI (Webb 1.0)", value: "72 pixlar" },
            { label: "96 DPI (CSS-standard)", value: "96 pixlar" },
            { label: "150 DPI (redaktionellt)", value: "150 pixlar" },
            { label: "300 DPI (konsttryck)", value: "300 pixlar" },
            { label: "600 DPI (ultrafin)", value: "600 pixlar" },
          ],
        },
        {
          badge: "W3C:S FORMELLA KANON",
          title: "Standarden med 96 CSS-pixlar",
          subtitle: "Den globala webbens matematiska ankare",
          quote: "1in = 96px är ingen uppskattning – det är en orubblig konstant fastslagen i W3C:s CSS-specifikationer.",
          keyFormula: "1 tum ≡ 96 CSS-px ≡ 2,54 cm ≡ 72 pt ≡ 6 pc",
          description:
            "1996 förankrade World Wide Web Consortium referenspixeln vid ett betraktningsavstånd på 28 tum och en vinkel på 0,0213 grader. Därmed fastställdes att 1 CSS-tum matematiskt motsvarar exakt 96 CSS-pixlar.",
          specs: [
            { label: "Referensavstånd", value: "28 tum (71 cm)" },
            { label: "Synvinkel", value: "0,0213 grader" },
            { label: "US Letter (8,5×11\")", value: "816 × 1 056 px" },
            { label: "Punkter (pt) per tum", value: "72 pt" },
            { label: "Pica (pc) per tum", value: "6 pc" },
          ],
        },
        {
          badge: "GICLÉE-STANDARDER FÖR ARKIV",
          title: "Museikonst & 300 DPI",
          subtitle: "Den omärkliga gränsen för mänsklig syn",
          quote: "Riktigt exklusivt tryck kräver minst 300 DPI: där smälter enskilda bläckdroppar samman till en sömlös ton.",
          keyFormula: "Pixlar som krävs = Måltum × 300 DPI",
          description:
            "Vid normalt läsavstånd på 12–14 tum kan näthinnan urskilja upp till 300 punkter per tum. Under 300 DPI försämrar trappstegsliknande pixlar kantskärpan.",
          specs: [
            { label: "Museistandard", value: "Giclée i 300 DPI" },
            { label: "Ram 16×20\"", value: "4 800 × 6 000 px" },
            { label: "Total sensorbelastning", value: "28,8 megapixlar" },
            { label: "Bläckdroppstäthet", value: "1 200–2 400 droppar" },
            { label: "Arkivhållbarhet", value: "Över 100 år" },
          ],
        },
        {
          badge: "RETINA- OCH HÖGUPPLÖSTA SKÄRMAR",
          title: "Enhetens pixelförhållande (DPR)",
          subtitle: "Fysiska hårdvarupixlar kontra abstrakta CSS-pixlar",
          quote: "På en 3x Super Retina-skärm motsvarar 1 CSS-tum fortfarande 96 CSS-enheter, men tar 288 fysiska dioder i anspråk.",
          keyFormula: "Fysiska enhetspx = CSS-px × DPR (1x, 2x, 3x)",
          description:
            "Apples Super Retina XDR och moderna 4K/8K-skärmar skiljer fysiska hårdvarupixlar från logiska CSS-pixlar. En 96 px lång CSS-linje på en iPhone 16 Pro ritas med nästan 300 fysiska OLED-mikrosubpixlar.",
          specs: [
            { label: "1 CSS-tum", value: "96 CSS-px" },
            { label: "Apples DPR-faktor", value: "3,00x Super Retina" },
            { label: "Fysiska hårdvarupixlar", value: "288 hårdvaru-px" },
            { label: "Hårdvarans PPI", value: "460 PPI" },
            { label: "Subpixelmönster", value: "Diamond PenTile OLED" },
          ],
        },
        {
          badge: "UTVALDA PROPORTIONER",
          title: "Den exklusiva ramtabellen",
          subtitle: "Standardformat för arkitektur och konst vid 300 DPI",
          quote: "Den klassiska inramningens gyllene proportioner, översatta till exakta digitala specifikationer.",
          keyFormula: "Arkivkvalitet (300 DPI) = Felfri galleriutställning",
          description:
            "Från klassiska salongsporträtt till stora museiverk motsvarar varje ramformat i tum en exakt pixelduk som krävs för en felfri återgivning.",
          specs: [
            { label: "Galleriporträtt 8 × 10\"", value: "2 400 × 3 000 px" },
            { label: "Salongstryck 11 × 14\"", value: "3 300 × 4 200 px" },
            { label: "Samlarram 16 × 20\"", value: "4 800 × 6 000 px" },
            { label: "Storformat 24 × 36\"", value: "7 200 × 10 800 px" },
            { label: "Museimålning 40 × 60\"", value: "12 000 × 18 000 px" },
          ],
        },
      ],
      spectrum: {
        title: "1 FYSISK TUM VID OLIKA TÄTHETER",
        bars: ["72 DPI (äldre skärm)", "96 DPI (W3C CSS)", "150 DPI (redaktionellt korrektur)", "300 DPI (konstgiclée)"],
        note: "Vid 300 DPI innehåller 1 tum över 4 gånger fler pixlar än äldre webbstandarder.",
      },
      w3c: {
        title: "W3C:S REFERENSPIXEL & VINKEL",
        observer: "Betraktare",
        distance: "28\" betraktningsavstånd (0,0213°)",
        cssInch: "CSS-tum",
        centimeters: "Centimeter",
        typographyPt: "Typografiska punkter",
        picas: "Pica",
      },
      fineart: {
        title: "RASTERPIXLAR KONTRA KONTINUERLIG GICLÉE-TON",
        printed72: "Tryckt i 72 DPI",
        jagged: "Synliga hackiga kanter (aliasing)",
        archival300: "Arkiv 300 DPI",
        smooth: "Knivskarp kontinuerlig kurva",
        summary: "16 × 20 tum vid 300 DPI = 4 800 × 6 000 pixlar (28,8 MP)",
      },
      retina: {
        title: "SUBPIXELGEOMETRI & ENHETENS PIXELFÖRHÅLLANDE",
        rows: [
          { name: "1x DPR-skärm", device: "Äldre standardskärm", value: "1 CSS-px = 1 fysisk px" },
          { name: "2x DPR (Retina)", device: "MacBook Pro & iPad Pro", value: "1 CSS-px = 4 fysiska px (2×2)" },
          { name: "3x DPR (Super Retina XDR)", device: "iPhone Pro OLED", value: "1 CSS-px = 9 fysiska px (3×3)" },
        ],
        summary: "1 tum på iPhone 16 Pro = 96 CSS-px = ",
        summaryStrong: "288 fysiska pixlar",
      },
      framing: {
        title: "GALLERIVÄGGENS PROPORTIONER VID 300 DPI",
        sensor: "Sensor: {mp}",
        note: "För stora format (24×36\" och uppåt) ger högupplösta mellanformatssensorer eller AI-uppskalning en kornfri bild.",
      },
    },
    presets: {
      eyebrow: "Utvalt formatindex",
      title: "FORMAT-",
      highlight: "MATRISEN",
      description:
        "En samling referensformat för museiinramning, trycksaker, toppskärmar och digitala material.",
      filterAria: "Filtrera format efter kategori",
      categories: {
        all: "Alla format",
        art: "Konst & inramning",
        editorial: "Trycksaker & böcker",
        device: "Enhetsskärmar",
        social: "Digitalt & sociala medier",
      },
      showing: "Visar {shown} av {total} format",
      recommended: "{dpi} DPI rekommenderas",
      physicalSize: "Fysisk storlek",
      web: "96 DPI (webb)",
      print: "300 DPI (tryck)",
      use: "ANVÄND DET HÄR FORMATET",
      useAria: "Använd {name} vid {dpi} DPI i omvandlaren",
      items: [
        { name: "Klassiskt galleriporträtt 8 × 10\"", description: "Ikonisk standard för museiporträtt och konstinramning." },
        { name: "Utställningstryck 11 × 14\"", description: "Standardtryck i arkivkvalitet för inredningsgallerier." },
        { name: "Samlarram för vägg 16 × 20\"", description: "Populärt format för rum med stark visuell effekt." },
        { name: "Storformatigt konstverk 24 × 36\"", description: "Ett mittpunktsverk för exklusiva hem." },
        { name: "Arkitektonisk väggmålning 30 × 40\"", description: "Verk i museiskala med fullt tonomfång." },
        { name: "US Letter-ark 8,5 × 11\"", description: "Amerikansk standard för dokument." },
        { name: "Internationellt A4 8,27 × 11,69\"", description: "Global pappersstandard (ISO 216)." },
        { name: "Visitkort 3,5 × 2,0\"", description: "Standard för skräddarsydda visitkort med guldfolie." },
        { name: "Konstbok 12 × 12\"", description: "Kvadratiskt uppslag i en exklusiv bildbok." },
        { name: "iPhone 16 Pro-skärm (fysisk)", description: "Fysisk storlek på flaggskeppets Super Retina-skärm." },
        { name: "16,2\" MacBook Pro-skärm (fysisk)", description: "Fysisk storlek på Liquid Retina XDR-skärmen." },
        { name: "55\" 4K-tv (fysisk)", description: "Fysiska mått för en UHD-panel med 3840×2160." },
        { name: "Kvadratisk duk 1080 × 1080 px", description: "Kvadratiskt material på 1080 px uttryckt i tum vid 96 DPI." },
        { name: "Stående Reel/Story 1080 × 1920 px", description: "Mobilduk i helskärm (bildförhållande 9:16)." },
      ],
    },
    hubCalc: {
      titleIn: "Räknare för tum till pixlar",
      titlePx: "Räknare för pixlar till tum",
      size: "Format",
      customSize: "Eget format",
      width: "Bredd",
      height: "Höjd",
      dpi: "DPI",
      custom: "Eget",
      dpiError: "Använd en DPI mellan 1 och {max}.",
      result: "Resultat",
      resultSub: "{w} × {h} {unit} vid {dpi} DPI",
      enterBoth: "Ange bredd och höjd större än 0.",
      needMore: "Behöver du proportionslås, fler enheter eller en förhandsvisning?",
      openFull: "Öppna hela omvandlaren",
    },
    sizeLabels,
  },
  content: {
    meta: {
      siteTitle: "Räknare för tum till pixlar | Omvandla med PPI",
      siteDescription:
        "Omvandla tum till pixlar med valfri PPI. Lär dig formeln, räkna ut bredd och höjd och se exempelmått för tryck och CSS.",
    },
    page: {
      skipToConverter: "Hoppa till omvandlaren",
      skipToCalculator: "Hoppa till räknaren",
      breadcrumb: "Brödsmulor",
      related: "Relaterade sidor",
      relatedHome: "Omvandlare från tum till pixlar",
      hubFaqDescription: "Korta svar på de vanligaste frågorna om ämnet.",
      lastUpdated: "Senast uppdaterad: {date}",
    },
    footer: {
      blurb:
        "Kostnadsfri omvandlare från tum till pixlar för skärm och tryck. Omvandla valfri storlek vid valfri DPI, kontrollera tryckformat och hitta vanliga värden på ett ställe.",
      openConverter: "Öppna omvandlaren",
      pages: "Sidor",
      copyright: "©2026 InchestoPixel.com",
      backToTop: "TILL TOPPEN",
    },
    home: {
      intro:
        "Använd räknaren för att omvandla ett mått i tum till pixlar vid den bildupplösning du väljer, mätt i pixlar per tum (PPI). Resultatet beror på inställningen: vid 300 PPI motsvarar 1 tum 300 pixlar.",
      howTo: {
        heading: "Så omvandlar du tum till pixlar",
        steps: [
          "Ange längden du vill omvandla, mätt i tum.",
          "Välj den bildupplösning ditt projekt kräver. För tryck, fråga ditt tryckeri.",
          "Räkna ut antalet pixlar. För att omvandla både bredd och höjd upprepar du beräkningen för varje mått med samma inställning.",
        ],
        note: "Spara upplösningen tillsammans med resultatet så att du senare kan kontrollera den tänkta tryckstorleken.",
      },
      formula: {
        heading: "Formel och exempel",
        main: "Pixlar = tum × PPI",
        explain: "Multiplicera den fysiska längden i tum med antalet pixlar per tum för att få antalet pixlar längs det måttet.",
        backwardLead: "För att räkna baklänges:",
        backward: "Tum = pixlar ÷ PPI",
        examples: [
          {
            heading: "Exempel med en enskild längd",
            lead: "Vid 96 PPI blir en längd på 2 tum:",
            math: ["2 × 96 = 192 pixlar"],
            after: [
              "Resultatet är exakt för den valda upplösningen. Det betyder inte att varje skärm visar 192 pixlar över två fysiska tum.",
            ],
          },
          {
            heading: "Exempel med bredd och höjd för ett tryck",
            lead: "För en bild på 8,5 × 11 tum vid 300 PPI:",
            math: ["Bredd: 8,5 × 300 = 2 550 pixlar", "Höjd: 11 × 300 = 3 300 pixlar"],
            after: [
              "De bildmått som krävs är 2 550 × 3 300 pixlar, före eventuell extra utfallande kant som tryckeriet anger.",
            ],
          },
          {
            heading: "Exempel med ett resultat med decimaler",
            lead: "För 2,33 tum vid 150 PPI:",
            math: ["2,33 × 150 = 349,5 pixlar"],
            after: [
              "Rasterbilder kräver hela pixlar. Avrundar man 349,5 till närmaste hela pixel, med halvor uppåt, blir det 350 pixlar. Vid samma upplösning motsvarar det ungefär 2,333 tum.",
            ],
          },
        ],
        closing: "Avrunda först i sista steget, enligt projektets krav.",
      },
      reference: {
        heading: "Referenstabell för tum till pixlar",
        intro:
          "Kolumnrubrikerna visar [bildupplösning i PPI](print); värdena under dem är antal pixlar. Inställningarna är exempel, inte allmänna krav.",
        table: homeTable("sv", { corner: "Längd (tum)", col: "{ppi}" }),
        caption: "Tum till pixlar vid 72, 96, 150 och 300 PPI",
        footnote: "Alla tabellvärden är exakta för de angivna värdena.",
      },
      guide: { eyebrow: "Teoretisk grund", title: "PIXLAR, TRYCKSTORLEK OCH", highlight: "PPI" },
      explainers: [
        {
          heading: "Bildpixlar, tryckstorlek och CSS-pixlar",
          paragraphs: [
            "Pixelmått beskriver en bilds bredd och höjd i pixlar. Tryckmått beskriver dess fysiska storlek i tum. Bildupplösningen kopplar ihop dem: samma pixelmått kan ge olika tryckstorlekar.",
            "CSS använder ett fast förhållande: 1in = 96px. Det är CSS-referensenheter, så en CSS-pixel är inte nödvändigtvis en fysisk pixel i enheten, och en CSS-tum på skärmen mäter kanske inte en verklig tum. Använd förhållandet för storlekar i CSS, men anta inte att det beskriver en skärms fysiska pixeltäthet.",
          ],
        },
        {
          heading: "Bildupplösning och skrivarupplösning",
          paragraphs: [
            "PPI beskriver bildpixlar per tum; DPI beskriver punkter per tum som en skrivare producerar. De hänger ihop i tryckflödet men är inte utbytbara. Använd kravet på bildupplösning i den här räknaren, inte skrivarens hårdvaruspecifikation.",
          ],
        },
        {
          heading: "Att ändra upplösningen ger inga fler bilddetaljer",
          paragraphs: [
            "Om du bara ändrar en bilds upplösningsmetadata är pixelantalet oförändrat och den tänkta tryckstorleken ändras. Omsampling ändrar antalet pixlar. Att bara ange en högre upplösning skapar inga nya detaljer.",
          ],
        },
      ],
      browse: "Bläddra efter ämne",
      faqDescription: "Svar på vanliga frågor om att omvandla tum till pixlar.",
      faqs: [
        {
          question: "Vilken upplösning ska jag använda?",
          answer:
            "Använd det värde som slutresultatet kräver. För tryck, fråga tryckeriet vilken bildupplösning som behövs i slutstorleken. Om en digital uppladdning anger pixelmått, följ de måtten direkt.",
        },
        {
          question: "Ändrar omvandlingen till pixlar bildförhållandet?",
          answer:
            "Samma upplösning för bredd och höjd behåller förhållandet före avrundning. En bild på 4 × 4 tum vid 300 PPI blir till exempel 1 200 × 1 200 pixlar. Båda är kvadratiska: förhållandet beskriver formen, inte upplösningen.",
        },
        {
          question: "Kan jag räkna ut tryckstorleken för en befintlig bild?",
          answer:
            "Ja. Dela varje pixelmått med den avsedda bildupplösningen. Vid 300 PPI motsvarar en bild på 1 800 × 1 200 pixlar 6 × 4 tum. Beskärning eller skalning vid tryck kan ändra slutstorleken.",
        },
      ],
    },
    sitemap: {
      label: "Webbplatskarta",
      h1: "Webbplatskarta",
      description: "En lista över alla sidor på Inches to Pixel: omvandlare, guider, referenstabeller och information om webbplatsen.",
      intro: "Alla sidor på Inches to Pixel på ett ställe. Välj en sida för att öppna den eller byt språk nedan.",
      tools: "Omvandlare och guider",
      info: "Om webbplatsen",
      languages: "Andra språk",
    },
    info: {
      about: {
        h1: "Om oss",
        description:
          "Inches to Pixel är ett kostnadsfritt verktyg för att omvandla tum till pixlar vid valfri PPI, med räknare, referenstabeller och tydliga förklaringar för tryck och skärm.",
        intro:
          "Inches to Pixel (InchestoPixel.com) är ett kostnadsfritt onlineverktyg som omvandlar fysiska mått till pixelmått. Det hjälper designers, fotografer, utvecklare och alla som förbereder bilder för tryck eller skärm att veta exakt hur många pixlar som behövs.",
        sections: [
          {
            heading: "Vad vi erbjuder",
            blocks: [
              {
                type: "list",
                items: [
                  "En omvandlare från tum till pixlar för enskilda längder och hela mått i bredd × höjd.",
                  "Räknare för DPI och PPI, program, tryck och foton samt vanliga pappersformat.",
                  "Referenstabeller och en fullständig omräkningstabell från 1/8 tum till 96 tum.",
                  "Tydliga förklaringar av PPI, DPI och CSS-pixlar, med räkneexempel.",
                ],
              },
            ],
          },
          {
            heading: "Så räknar vi",
            blocks: [
              {
                type: "p",
                text: "Varje resultat bygger på en enda formel: pixlar = tum × PPI. Våra tabeller räknas fram med samma formel, så siffrorna stämmer överens på alla sidor. Exemplen visar exakta resultat och anger tydligt när ett värde har avrundats.",
              },
            ],
          },
          {
            heading: "Vårt förhållningssätt",
            blocks: [
              {
                type: "p",
                text: "Pixelmått beror på den upplösning du väljer, så vi presenterar aldrig ett enda värde som universellt. Vi förklarar skillnaden mellan bildupplösning (PPI) och skrivarupplösning (DPI) och rekommenderar att du följer de exakta kraven från ditt tryckeri eller den tjänst där du laddar upp bilden.",
              },
            ],
          },
          {
            heading: "Kostnadsfritt och på många språk",
            blocks: [
              {
                type: "p",
                text: "Webbplatsen är kostnadsfri, kräver inget konto och fungerar på mobiler, surfplattor och datorer. Den finns på engelska, spanska, ryska, franska, tyska, italienska, portugisiska, indonesiska, arabiska och svenska, med ljust och mörkt läge.",
              },
            ],
          },
          {
            heading: "Din integritet",
            blocks: [
              {
                type: "p",
                text: "Omvandlaren körs i din webbläsare, och värdena du anger skickas inte till oss och sparas inte. Vår integritetspolicy förklarar detaljerna.",
              },
            ],
          },
        ],
      } as InfoText,
      contact: {
        h1: "Kontakta oss",
        description:
          "Kontakta Inches to Pixel med frågor, rättelser eller idéer. Skicka ett meddelande via formuläret eller mejla contact@inchestopixel.com.",
        intro:
          "Har du en fråga om att omvandla tum till pixlar, hittat ett fel eller har en idé till webbplatsen? Skicka ett meddelande via formuläret nedan så svarar vi via e-post.",
        sections: [],
      } as InfoText,
      privacy: {
        h1: "Integritetspolicy",
        description:
          "Så hanterar Inches to Pixel information: omvandlaren körs i din webbläsare, det finns inga konton och de enda personuppgifter vi får är dem du skickar via kontaktformuläret.",
        intro:
          "Den här integritetspolicyn förklarar vilken information Inches to Pixel (InchestoPixel.com) hanterar när du använder webbplatsen. Kort sagt: omvandlaren körs i din webbläsare, det finns inga konton och de enda personuppgifter vi får är dem du själv väljer att skicka via kontaktformuläret.",
        sections: [
          {
            heading: "Information du anger",
            blocks: [
              {
                type: "p",
                text: "Värdena du skriver i omvandlarna, till exempel tum, pixlar och DPI, räknas ut i din webbläsare. De skickas inte till oss och lagras inte på våra servrar.",
              },
            ],
          },
          {
            heading: "Meddelanden du skickar till oss",
            blocks: [
              {
                type: "p",
                text: "Om du använder kontaktformuläret får vi ditt namn, din e-postadress och ditt meddelande. Vi använder dem bara för att läsa och svara på meddelandet och sparar dem bara så länge som behövs för den konversationen.",
              },
              {
                type: "p",
                text: "Meddelandena levereras till vår inkorg av vår e-posttjänst, Resend, som behandlar dem för vår räkning enbart för att leverera dem. Om du mejlar oss direkt hanteras ditt meddelande på samma sätt av vår e-postleverantör.",
              },
            ],
          },
          {
            heading: "Information som sparas på din enhet",
            blocks: [
              {
                type: "p",
                text: "Om du växlar mellan ljust och mörkt läge sparar webbplatsen ditt val i webbläsarens lokala lagring så att samma tema används nästa gång du besöker oss. Inställningen stannar på din enhet, skickas inte till oss och används inte för att identifiera dig. Du kan ta bort den när som helst genom att rensa webbplatsdata i webbläsaren.",
              },
              { type: "p", text: "Webbplatsen använder inte kakor för annonsering eller spårning." },
            ],
          },
          {
            heading: "Information som samlas in automatiskt",
            blocks: [
              {
                type: "p",
                text: "Som på de flesta webbplatser kan servrarna som levererar våra sidor registrera teknisk standardinformation i serverloggar, till exempel din IP-adress, webbläsartyp, begärd sida och tidpunkt för begäran. Informationen används för att leverera webbplatsen, hålla den säker och åtgärda fel. Vi använder den inte för att skapa profiler över besökare.",
              },
            ],
          },
          {
            heading: "Analys, annonsering och tredje parter",
            blocks: [
              {
                type: "p",
                text: "Webbplatsen använder för närvarande inga analysverktyg, annonsnätverk eller spårning från sociala medier. Typsnitt levereras från vår egen webbplats, så när en sida laddas skickas ingen information om dig till en typsnittsleverantör. Vi säljer eller delar inte personuppgifter. Om detta ändras uppdaterar vi policyn innan ändringen träder i kraft.",
              },
            ],
          },
          {
            heading: "Barns integritet",
            blocks: [
              {
                type: "p",
                text: "Webbplatsen är ett allmänt verktyg. Den samlar inte medvetet in personuppgifter från barn.",
              },
            ],
          },
          {
            heading: "Dina val",
            blocks: [
              {
                type: "p",
                text: "Om du har kontaktat oss och vill att vi raderar ditt meddelande, mejla contact@inchestopixel.com så tar vi bort det. Utöver kontaktmeddelanden samlar vi inte in personuppgifter via webbplatsen, så det finns normalt inget att ge tillgång till, rätta eller radera. Du kan när som helst ta bort temainställningen som sparats i din webbläsare.",
              },
            ],
          },
          {
            heading: "Ändringar i policyn",
            blocks: [
              {
                type: "p",
                text: "Vi kan uppdatera integritetspolicyn när webbplatsen ändras. Datumet högst upp på sidan visar när den senast uppdaterades.",
              },
            ],
          },
        ],
      } as InfoText,
    },
    hubs: {
      dpi: {
        nav: "DPI",
        h1: "Omvandlare från tum till pixlar efter DPI",
        seoTitle: "Tum till pixlar efter DPI | Räkna ut tryckstorlek",
        description:
          "Omvandla tum till pixlar med ditt projekts DPI. Använd formeln, räkneexempel och en referenstabell för 72–600 DPI för att kontrollera bildmått för tryck.",
        answer:
          "Räkna ut pixelmått utifrån ett fysiskt mått och vald upplösning. Multiplicera tum med angiven DPI: vid 300 DPI motsvarar 4 tum 1 200 pixlar.",
        introNotes: [
          "I den här omvandlingen betyder DPI bildens målpixeltäthet, tekniskt kallad PPI. Använd den upplösning ditt projekt kräver; en tum har inget enskilt pixelvärde.",
        ],
        sections: [
          {
            heading: "Så omvandlar du tum till pixlar",
            blocks: [
              {
                type: "steps",
                items: [
                  "Ange den fysiska längden i tum.",
                  "Ange målupplösningen. För tryckjobb, använd den bildupplösning som tryckeriet begär.",
                  "Multiplicera tum med den upplösningen för att få längden i pixlar.",
                  "För en bild räknar du ut bredd och höjd var för sig med samma upplösning.",
                ],
              },
              {
                type: "note",
                text: "Behåll det ursprungliga förhållandet mellan bredd och höjd när du omvandlar en befintlig design. Att ändra förhållandet kräver beskärning eller utsträckning.",
              },
            ],
          },
          {
            heading: "Formel och räkneexempel",
            blocks: [
              { type: "math", lines: ["Pixlar = Tum × DPI"], large: true },
              { type: "p", text: "Där:" },
              {
                type: "list",
                items: [
                  "Pixlar är den digitala längden i pixlar, förkortat px.",
                  "Tum är den avsedda fysiska längden.",
                  "DPI är det valda omräkningsvärdet, tolkat som bildpixlar per tum.",
                ],
              },
              { type: "p", text: "För en rektangulär bild:" },
              {
                type: "math",
                lines: ["Bredd i pixlar = Bredd i tum × DPI", "Höjd i pixlar = Höjd i tum × DPI"],
              },
              {
                type: "sub",
                heading: "En bild på 8 × 10 tum vid 300 DPI",
                blocks: [
                  { type: "p", text: "Om ditt projekt kräver 300 PPI:" },
                  { type: "math", lines: ["Bredd: 8 × 300 = 2 400 px", "Höjd: 10 × 300 = 3 000 px"] },
                  { type: "p", text: "De mått som krävs är 2 400 × 3 000 pixlar. Resultaten är exakta." },
                ],
              },
              {
                type: "sub",
                heading: "En längd på 2,5 tum vid 96 DPI",
                blocks: [
                  { type: "math", lines: ["2,5 × 96 = 240 px"] },
                  {
                    type: "p",
                    text: "Vid en täthet på 96 pixlar per tum motsvarar 2,5 tum exakt 240 pixlar. Samma längd vid en annan täthet ger ett annat resultat.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Ett resultat med decimaler vid 150 DPI",
                blocks: [
                  { type: "math", lines: ["1,23 × 150 = 184,5 px"] },
                  {
                    type: "p",
                    text: "En rasterbild kräver hela pixlar. Avrundat till närmaste hela pixel, med halvor uppåt, blir det 185 px.",
                  },
                ],
              },
              {
                type: "note",
                text: "Avrunda bara slutresultatet. Om en produktionsspecifikation anger ett minsta antal pixlar, avrunda uppåt. Att avrunda bredd och höjd var för sig kan ändra bildförhållandet något, så kontrollera slutmåtten när exakta proportioner är viktiga.",
              },
            ],
          },
          {
            heading: "Referenstabell för tum till pixlar",
            blocks: [
              {
                type: "p",
                text: "Alla värden nedan är exakta. DPI-kolumnen anger bildens måltäthet i PPI för den här beräkningen.",
              },
              {
                type: "table",
                caption: "Pixlar för 1, 4 och 6 tum vid 72 till 600 DPI",
                table: dpiTable("sv", {
                  corner: "Angiven DPI",
                  cols: ["1 tum", "4 tum", "6 tum"],
                  row: "{dpi} DPI",
                  cell: "{px} px",
                }),
              },
              {
                type: "p",
                text: "En bild på 4 × 6 tum vid 300 DPI kräver till exempel 1 200 × 1 800 pixlar. Vid 72 DPI motsvarar samma fysiska storlek 288 × 432 pixlar.",
              },
            ],
          },
          {
            heading: "Välj rätt upplösning för jobbet",
            blocks: [
              {
                type: "sub",
                heading: "PPI och DPI beskriver olika saker",
                blocks: [
                  {
                    type: "p",
                    text: "PPI betyder pixlar per tum: de bildpixlar som tilldelas varje tum av utskriften. DPI betyder punkter per tum: de punkter en skrivare kan producera. Det är olika mått.",
                  },
                  {
                    type: "p",
                    text: "När en tryckspecifikation skriver ”300 DPI” och menar en bild i 300 PPI, använd 300 i beräkningen. Ersätt inte den bild-PPI som krävs med skrivarens hårdvaru-DPI.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Fysisk storlek och pixelmått hör ihop",
                blocks: [
                  {
                    type: "p",
                    text: "Tum beskriver den fysiska storleken; pixelmått beskriver bildens digitala bredd och höjd. Vid en fast fysisk storlek kräver en högre mål-PPI fler pixlar.",
                  },
                  {
                    type: "p",
                    text: "Att ändra upplösningen på en befintlig bild utan omsampling ger inga fler pixlar. Det ändrar förhållandet mellan tryckstorlek och pixeltäthet. Omsampling ändrar pixelantalet, så att räkna fram ett större mål förbättrar inte i sig originalbilden.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Skärmmått behöver sammanhang",
                blocks: [
                  {
                    type: "p",
                    text: "Anta inte att varje skärm har 72 eller 96 fysiska pixlar per tum. CSS definierar 1 tum som 96 CSS-pixlar, men CSS-pixlar är inte nödvändigtvis enskilda enhetspixlar eller ett bokstavligt fysiskt mått på skärmen.",
                  },
                  {
                    type: "p",
                    text: "Vid uppladdning av en bild, följ mottagarens krav på pixelmått. Vid tryck, följ kraven på fysisk storlek och bildupplösning.",
                  },
                ],
              },
            ],
          },
        ],
        faq: [
          {
            question: "Hur använder jag den som 300 DPI-räknare?",
            answer:
              "Ange 300 som målupplösning och multiplicera varje mått i tum med 300. En bild på 5 × 7 tum kräver till exempel 1 500 × 2 100 pixlar vid 300 PPI.",
          },
          {
            question: "Kan jag omvandla tum till pixlar utan att veta DPI?",
            answer:
              "Utan en målpixeltäthet finns inget entydigt svar. En längd på 2 tum motsvarar 144 pixlar vid 72 PPI, 192 pixlar vid 96 PPI eller 600 pixlar vid 300 PPI.",
          },
          {
            question: "Ska jag räkna med utfallande kant i måtten?",
            answer:
              "Om tryckeriet kräver utfallande kant, räkna från originalets fulla storlek inklusive den kanten. En design på 4 × 6 tum med 0,125 tum utfall på varje sida blir till exempel 4,25 × 6,25 tum. Vid 300 PPI blir det 1 275 × 1 875 pixlar. Använd tryckeriets faktiska specifikation för utfall.",
          },
        ],
      } as HubText,
      software: {
        nav: "Program",
        h1: "Tum till pixlar i program",
        seoTitle: "Tum till pixlar i program: guide till PPI-omvandling",
        description:
          "Omvandla tum till pixlar med ditt projekts PPI. Se räkneexempel och lär dig hur bildmått, omsampling och exportinställningar påverkar resultatet.",
        answer:
          "Omvandla tum till pixlar genom att multiplicera måttet i tum med det antal pixlar per tum (PPI) som krävs. En tum motsvarar 300 px vid 300 PPI eller 96 px vid 96 PPI. När du omvandlar i ett program ska du använda den upplösning utdata kräver – inte ett förmodat universellt standardvärde.",
        sections: [
          {
            heading: "Så omvandlar du dina mått",
            blocks: [
              {
                type: "steps",
                items: [
                  "Ta reda på vilken bredd eller höjd du behöver i tum.",
                  "Välj den PPI som krävs för utdata. För tryck, kontrollera tryckeriets specifikation för bildupplösning.",
                  "Räkna ut antalet pixlar med måttet i tum och PPI.",
                  "Upprepa för det andra måttet med samma PPI.",
                ],
              },
              {
                type: "note",
                text: "Behåll proportionerna för en befintlig bild. Om bredden och höjden som krävs har ett annat bildförhållande, beskär bilden eller lägg till utrymme runt den i stället för att sträcka ut den.",
              },
            ],
          },
          {
            heading: "Formel och exempel",
            blocks: [
              { type: "math", lines: ["Pixlar = Tum × PPI"], large: true },
              {
                type: "list",
                items: [
                  "Pixlar (px): antalet bildpixlar längs ett mått.",
                  "Tum (in): den avsedda fysiska längden för det måttet.",
                  "PPI: antalet bildpixlar per tum i den storleken.",
                ],
              },
              { type: "p", text: "Beräkningen görs separat för bredd och höjd." },
              {
                type: "sub",
                heading: "En bild på 4 × 6 tum vid 300 PPI",
                blocks: [
                  { type: "math", lines: ["Bredd: 4 × 300 = 1 200 px", "Höjd: 6 × 300 = 1 800 px"] },
                  {
                    type: "p",
                    text: "Målmåtten är 1 200 × 1 800 px, förutsatt att ingen extra utfallande kant eller ram tillkommer.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "En bild på 8 × 10 tum vid 150 PPI",
                blocks: [
                  { type: "math", lines: ["Bredd: 8 × 150 = 1 200 px", "Höjd: 10 × 150 = 1 500 px"] },
                  {
                    type: "p",
                    text: "Resultatet blir 1 200 × 1 500 px. Exemplet använder 150 PPI som ett angivet krav, inte som en rekommendation för alla tryckjobb.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Ett mått med decimaler",
                blocks: [
                  { type: "p", text: "För en bredd på 2,125 tum vid 300 PPI:" },
                  { type: "math", lines: ["2,125 × 300 = 637,5 px"] },
                  {
                    type: "p",
                    text: "Det matematiska resultatet är exakt, men en rasterbild kräver en bredd i heltal. Avrundat till närmaste pixel använder du 638 px. Vid 300 PPI motsvarar det ungefär 2,127 tum.",
                  },
                ],
              },
              {
                type: "note",
                text: "Avrunda i slutet av beräkningen. Om en produktionsspecifikation anger ett minsta antal pixlar, avrunda uppåt vid behov.",
              },
            ],
          },
          {
            heading: "Snabb omräkningstabell",
            blocks: [
              {
                type: "p",
                text: "Värdena är exakta för angiven PPI. Kolumnerna är räkneexempel, inte standardinställningar i program.",
              },
              {
                type: "table",
                caption: "Tum till pixlar vid 96, 150 och 300 PPI",
                table: softwareTable("sv", {
                  corner: "Längd (tum)",
                  cols: ["Vid 96 PPI (px)", "Vid 150 PPI (px)", "Vid 300 PPI (px)"],
                }),
              },
            ],
          },
          {
            heading: "Använd resultatet i ditt program",
            blocks: [
              {
                type: "sub",
                heading: "Photoshop: skilj på storleksändring och omsampling",
                blocks: [
                  {
                    type: "p",
                    text: "Jämför dina målmått i pixlar med bildens nuvarande mått innan du ändrar något.",
                  },
                  {
                    type: "p",
                    text: "Med omsampling avstängd behåller en ändrad PPI pixelantalet och ändrar den tänkta tryckstorleken. Med omsampling påslagen kan en ändrad storlek eller upplösning lägga till eller ta bort pixlar. Behåll proportionerna mellan bredd och höjd när du ändrar storlek. Adobe förklarar sambanden i sin guide om storleksändring och omsampling.",
                  },
                  {
                    type: "p",
                    text: "Att bara höja PPI skapar inga fler detaljer. Förstoring med omsampling lägger till beräknade pixlar; den återskapar inte detaljer som saknas i originalet.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Illustrator: kontrollera upplösningen vid rasterexport",
                blocks: [
                  {
                    type: "p",
                    text: "Vektorgrafik har inget fast antal pixlar. När du exporterar till ett rasterformat som PNG eller JPEG avgör grafikens fysiska storlek och exportupplösningen utdatamåtten.",
                  },
                  {
                    type: "p",
                    text: "Ett exportområde som är 4 tum brett vid 300 PPI behöver till exempel en bredd på 1 200 px. Kontrollera måtten på den exporterade filen, särskilt om exporten innehåller extra gränser eller marginaler. Vilka inställningar som finns i Illustrator beror på exportformatet.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Figma: ta hänsyn till exportskalan",
                blocks: [
                  {
                    type: "p",
                    text: "För rastermaterial räknar du först ut hur många utdatapixlar som krävs och tar sedan hänsyn till exportskalan. En 600 pixlar bred ram som exporteras i 2× ger en bild som är 1 200 pixlar bred. Använd ingen extra multiplikator om ramen redan har målmåtten. Se Figmas exportformat och exportinställningar.",
                  },
                  {
                    type: "p",
                    text: "För en 4 tum bred bild som ska tryckas i 300 PPI är målet 1 200 px i bredd, oavsett vilken kombination av ram och skala som används.",
                  },
                ],
              },
            ],
          },
          {
            heading: "Undvik vanliga omvandlingsfel",
            blocks: [
              {
                type: "sub",
                heading: "PPI och DPI beskriver olika saker",
                blocks: [
                  {
                    type: "p",
                    text: "PPI mäter bildpixlar per tum; DPI mäter i regel skrivarpunkter per tum. Om en tryckspecifikation använder ”DPI” för en bild, kontrollera om den avser den bild-PPI som krävs. Använd inte automatiskt skrivarens hårdvaruupplösning som värde i omvandlaren.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "CSS-pixlar är logiska enheter",
                blocks: [
                  {
                    type: "p",
                    text: "CSS definierar 1 tum som 96 CSS-pixlar. Det betyder inte att alla bilder ska ha 96 PPI, eller att ett element på en CSS-tum mäter en fysisk tum på varje skärm. Skärmar med hög täthet kan använda flera enhetspixlar per CSS-pixel. Se W3C:s förklaring av CSS-enheter.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Kontrollera slutresultatet, inte bara dokumentstorleken",
                blocks: [
                  {
                    type: "p",
                    text: "När du förbereder en bild för Canva, Procreate, Paint, InDesign, Word, PowerPoint eller Google Presentationer, skilj på bildens pixelmått och dess placerade storlek. Kontrollera de slutliga bildmåtten och den tänkta tryckstorleken i stället för att anta att programmets namn avgör omvandlingen.",
                  },
                ],
              },
            ],
          },
        ],
        faq: [
          {
            question: "Vilken PPI ska jag använda?",
            answer:
              "Använd den upplösning ditt utdataflöde kräver. För tryck, fråga tryckeriet. För skärmmaterial som anges i pixlar använder du de pixelmåtten direkt; en omvandling från tum kan vara onödig.",
          },
          {
            question: "Varför visas samma bild i olika storlek i olika appar?",
            answer:
              "En app kan anpassa bilden till sidan, visa den med en viss zoomnivå eller använda upplösningsmetadata för att bestämma den placerade storleken. Den synliga storleken säger inte ensam om pixelmåtten har ändrats.",
          },
          {
            question: "Kan jag räkna tum till pixlar i Excel eller Google Kalkylark?",
            answer:
              "Ja. Om cell A2 innehåller tum och B2 innehåller PPI, använd:\n=A2*B2\nFör att avrunda ett positivt mått till närmaste hela pixel, använd (i svenska Excel):\n=AVRUNDA(A2*B2;0)\nDet räknar ut ett pixelmått; det ändrar inte bildens storlek eller en kolumns bredd i kalkylbladet.",
          },
        ],
      } as HubText,
      // Content: Content/Inches to Pixels for Images.docx
      print: {
        nav: "Tryck & foto",
        h1: "Omvandlare från tum till pixlar för tryck och foton",
        description:
          "Omvandla tum till pixlar för tryck och foton med den PPI som krävs. Se formeln, räkneexempel och formaten 4×6, 5×7, 8×10 och 8,5×11 i pixlar.",
        answer:
          "Omvandla tum till pixlar för bilder och foton med den upplösning som krävs i pixlar per tum (PPI). Pixlar = tum × PPI, så 1 tum motsvarar 300 pixlar vid 300 PPI eller 150 pixlar vid 150 PPI. Utan angiven upplösning har en tum inget fast pixelvärde.",
        sections: [
          {
            heading: "Så omvandlar du tum till pixlar",
            blocks: [
              {
                type: "steps",
                items: [
                  "Bestäm den tänkta tryckbredden och tryckhöjden i tum.",
                  "Välj den bildupplösning som tryckeriet eller projektet kräver.",
                  "Räkna ut varje mått med samma PPI-värde.",
                  "Använd den bredd och höjd i pixlar du får fram när du förbereder bilden.",
                ],
              },
              {
                type: "note",
                text: "Håll bredd och höjd i rätt ordning: ett liggande foto är bredare än det är högt, medan ett stående foto är högre än det är brett.",
              },
            ],
          },
          {
            heading: "Formel och räkneexempel",
            blocks: [
              { type: "math", lines: ["Pixlar = tum × PPI"], large: true },
              { type: "p", text: "För en hel bild:" },
              {
                type: "math",
                lines: ["Bredd i pixlar = bredd i tum × PPI", "Höjd i pixlar = höjd i tum × PPI"],
              },
              {
                type: "p",
                text: "”Tum” beskriver det tänkta fysiska måttet. ”PPI” betyder pixlar per tum. Resultatet är antalet pixlar längs varje kant, förutsatt samma pixeltäthet vågrätt och lodrätt.",
              },
              {
                type: "sub",
                heading: "Ett foto på 6 × 4 tum vid 300 PPI",
                blocks: [
                  { type: "math", lines: ["Bredd: 6 × 300 = 1 800 pixlar", "Höjd: 4 × 300 = 1 200 pixlar"] },
                  { type: "p", text: "De bildmått som krävs är 1 800 × 1 200 pixlar." },
                ],
              },
              {
                type: "sub",
                heading: "En bild på 8 × 10 tum vid 150 PPI",
                blocks: [
                  { type: "math", lines: ["Bredd: 8 × 150 = 1 200 pixlar", "Höjd: 10 × 150 = 1 500 pixlar"] },
                  {
                    type: "p",
                    text: "Resultatet blir 1 200 × 1 500 pixlar. Vid 300 PPI kräver samma tryckstorlek 2 400 × 3 000 pixlar – dubbelt så många pixlar längs varje kant.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Ett mått med bråkdelar av en tum",
                blocks: [
                  { type: "p", text: "För en kant på 2,125 tum vid 300 PPI:" },
                  { type: "math", lines: ["2,125 × 300 = 637,5 pixlar"] },
                  {
                    type: "p",
                    text: "En bild består av hela pixlar, så avrundat till närmaste hela pixel blir det 638 pixlar. Vid 300 PPI motsvarar det ungefär 2,1267 tum.",
                  },
                ],
              },
              {
                type: "note",
                text: "Avrunda först efter multiplikationen. Om en tryckspecifikation anger ett minsta antal pixlar, avrunda uppåt vid behov. Följ alla exakta pixelmått som tryckeriet anger.",
              },
            ],
          },
          {
            heading: "Vanliga tryckformat i pixlar",
            blocks: [
              {
                type: "p",
                text: "Alla värden nedan är exakta för angivna mått och PPI. Måtten anges som bredd × höjd och omfattar inte ramar eller utfall.",
              },
              {
                type: "table",
                caption: "Vanliga tryckformat i pixlar vid 150, 300 och 600 PPI",
                table: printTable("sv", {
                  corner: "Tryckformat (tum)",
                  cols: ["Vid 150 PPI (pixlar)", "Vid 300 PPI (pixlar)", "Vid 600 PPI (pixlar)"],
                  row: "{w} × {h}",
                }),
              },
              { type: "p", text: "För liggande format byter du plats på bredd och höjd." },
            ],
          },
          {
            heading: "Förbereda bilder för tryck",
            blocks: [
              {
                type: "sub",
                heading: "Använd bildens PPI, inte skrivarens DPI",
                blocks: [
                  {
                    type: "p",
                    text: "PPI anger hur många bildpixlar som hamnar på varje tryckt tum. DPI anger hur många punkter per tum skrivaren producerar. En skrivare kan använda flera punkter för att återge en enda bildpixel, så skrivarens hårdvaru-DPI är inte det värde du automatiskt ska ange när du räknar ut bildmått.",
                  },
                  {
                    type: "p",
                    text: "Använd det krav på bildupplösning som gäller för ditt jobb. Värden som 72, 96, 150, 300 eller 600 PPI ger olika resultat; inget av dem är en universell omräkningsfaktor.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Behåll fotots proportioner",
                blocks: [
                  {
                    type: "p",
                    text: "Behåll det ursprungliga förhållandet mellan bredd och höjd när du ändrar storlek på ett foto. Om du ändrar bredd och höjd var för sig kan ansikten och andra motiv dras ut.",
                  },
                  {
                    type: "p",
                    text: "Om fotots proportioner skiljer sig från tryckformatet kan du beskära det så att det passar, eller behålla hela fotot med marginaler. Ett foto på 6 × 4 har till exempel förhållandet 3:2, medan ett liggande tryck på 10 × 8 har 5:4. För att fylla det trycket och samtidigt behålla bildens proportioner måste du beskära.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Kontrollera originalbilden innan du förstorar den",
                blocks: [
                  {
                    type: "p",
                    text: "De uträknade måtten beskriver ett mål. De visar inte om ett befintligt foto innehåller tillräckligt med detaljer.",
                  },
                  {
                    type: "p",
                    text: "Att ändra PPI-metadata utan omsampling lämnar de faktiska pixelmåtten oförändrade. Omsampling lägger till eller tar bort pixlar, men fler pixlar återskapar inte automatiskt detaljer som saknas.",
                  },
                  { type: "p", text: "Tryckets skärpa beror också på fokus, komprimering och källbildens kvalitet." },
                ],
              },
            ],
          },
        ],
        faq: [
          {
            question: "Hur stort kan jag skriva ut ett befintligt foto?",
            answer:
              "Dela varje pixelmått med den avsedda PPI:n:\nTryckmått i tum = pixlar ÷ PPI\nEn bild på 3 000 × 2 400 pixlar motsvarar 10 × 8 tum vid 300 PPI, eller 20 × 16 tum vid 150 PPI, före beskärning eller skalning vid tryck. En lägre PPI sprider samma pixlar över en större yta.",
          },
          {
            question: "Skrivs bilden ut i den storlek den har på skärmen?",
            answer:
              "Inte nödvändigtvis. Storleken på skärmen beror på bildskärmen och visningsskalan. Tryckstorleken beror på pixelmåtten, den valda tryckupplösningen och eventuell skalning vid utskrift. Kontrollera de tänkta fysiska måtten i utskriftsinställningarna.",
          },
          {
            question: "Visar pixelmåtten filstorleken?",
            answer:
              "Nej. Pixelmått beskriver bildens bredd och höjd, medan filstorleken mäter lagringsutrymme i byte, kB eller MB. Filstorleken beror också på format, komprimering, bildinnehåll och färgdjup.\nJPEG-, PNG-, TIFF- och WebP-bilder har alla pixelmått. Måtten i sig anger ingen fast fysisk tryckstorlek.",
          },
        ],
      } as HubText,
      sizes: sizesHub(
        "sv",
        {
          nav: "Format",
          h1: "Vanliga tryck- och pappersformat i pixlar",
          description:
            "Letter, A4, 4×6, 5×7, 8×10, 18×24, 24×36 och kortformat i pixlar vid 72, 150 och 300 DPI. Välj ett format och omvandla direkt.",
          answer: "Letter-papper (8,5 × 11 tum) är 2 550 × 3 300 px vid 300 DPI.",
          overview: {
            heading: "Alla vanliga format i en överblick",
            body: "Pixelstorlek för varje format vid 72, 150 och 300 DPI.",
            corner: "Format",
          },
          sizeBody:
            "{label} är {w} × {h} tum. Vid 300 DPI blir det {w300} × {h300} px och vid 72 DPI {w72} × {h72} px.",
          faq: [
            {
              question: "Vilket format är vanligast för tryck?",
              answer: "Letter och A4 för dokument, 4 × 6 och 5 × 7 för foton.",
            },
          ],
        },
        sizeLabels,
      ),
      chart: chartHub("sv", {
        nav: "Tabell",
        h1: "Tabell för tum till pixlar (alla vanliga värden)",
        description:
          "Omräkningstabell för tum till pixlar från 1/8 tum till 96 tum vid 72, 96, 150 och 300 DPI. Hitta alla vanliga värden på ett ögonblick.",
        answer: "Hitta valfri storlek från 1/8 tum till 96 tum vid 72, 96, 150 och 300 DPI.",
        chart: {
          heading: "Omräkningstabell",
          body: "Den fullständiga referenstabellen. Varje rad är ett värde du kan länka till.",
          corner: "Tum",
        },
        items: ["1/8 tum", "2 tum", "2,5 tum", "3 tum", "4 tum", "5 tum", "8,5 tum"],
        itemBody:
          "{label} motsvarar {px72} px vid 72 DPI, {px96} px vid 96 DPI, {px150} px vid 150 DPI och {px300} px vid 300 DPI.",
        faq: [
          {
            question: "Var finns de andra värdena?",
            answer: "Värden som 10, 12, 24 eller 48 tum finns som rader i tabellen ovan.",
          },
        ],
      }),
    },
  },
};
