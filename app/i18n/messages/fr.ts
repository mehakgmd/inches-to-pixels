/** French (Français). Same shape as en.ts. */
import type { HubText } from "../../lib/hubs";
import { chartHub, dpiTable, homeTable, printHub, sizesHub, softwareTable } from "../build";
import type { Messages } from "./en";

const sizeLabels = [
  "8,5 × 11 pouces (Letter)",
  "Format A4",
  "5 × 7 pouces",
  "4 × 6 pouces",
  "8 × 10 pouces",
  "18 × 24 pouces",
  "24 × 36 pouces",
  "2 × 2 pouces",
  "Format carte (2,5 × 3,5)",
];

export const fr: Messages = {
  ui: {
    common: {
      pageNames: { home: "Accueil", dpi: "DPI", software: "Logiciels", print: "Impression et photo", sizes: "Formats", chart: "Tableau" },
      quality: { archival: "Qualité d’impression archive", proof: "Qualité épreuve", screen: "Résolution écran" },
      qualityInline: { archival: "qualité d’impression archive", proof: "qualité épreuve", screen: "résolution écran" },
      copied: "Copié !",
      copyFailed: "Échec de la copie",
    },
    nav: {
      brandSub: "CONVERTISSEUR DPI ET PPI",
      homeAria: "Accueil Inches to Pixel",
      topAria: "Inches to Pixel, retour en haut",
      pagesAria: "Pages",
      pages: "Pages",
      onThisPage: "Sur cette page",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      share: "Partager",
      linkCopied: "Lien copié",
      sections: { converter: "Convertisseur", visual: "Échelle visuelle", slides: "Diapositives", presets: "Formats", guide: "Guide DPI", faq: "FAQ" },
      language: "Langue",
      languageAria: "Choisir la langue",
    },
    theme: { toDark: "Passer en mode sombre", toLight: "Passer en mode clair", dark: "Mode sombre", light: "Mode clair" },
    footer: { languages: "Langues" },
    faq: { eyebrow: "Questions fréquentes", title: "CONSEILS", highlight: "D’EXPERT" },
    hero: {
      badge: "L’art de l’échelle numérique",
      badgeRule: "1 PO = 96 PX",
      h1Before: "Calculateur de pouces en ",
      h1Highlight: "pixels",
      h1After: "",
      shelfTitle: "Choisissez la résolution cible (DPI / PPI)",
      tags: { standard: "Standard", fineArt: "Beaux-arts" },
      presets: [
        { label: "Standard web", desc: "Web ancien et écrans" },
        { label: "Standard CSS", desc: "W3C et Windows natif" },
        { label: "Brouillon éditorial", desc: "Journaux et épreuves" },
        { label: "Tirage d’art", desc: "Giclée de musée et livres" },
        { label: "Écran Retina", desc: "OLED et mobiles haut de gamme" },
      ],
      equations: [
        { label: "Règle W3C", value: "1 in = 96 px", note: "standard CSS" },
        { label: "Règle d’impression muséale", value: "1 in = 300 px", note: "à 300 DPI" },
        { label: "Correspondance métrique", value: "1 in = 2,54 cm", note: "= 25,4 mm" },
      ],
    },
    converter: {
      title: "Convertisseur de pouces en pixels",
      modeAria: "Mode du convertisseur",
      tabLengthShort: "Longueur",
      tabLength: "Longueur simple (1D)",
      tabSizeShort: "L × H",
      tabSize: "Dimensions 2D (L × H)",
      resolution: "Résolution",
      dpiRange: "Entre 1 et {max}",
      enterAbove0: "Saisissez un nombre supérieur à 0.",
      physicalSize: "Taille physique (pouces)",
      swap: "Inverser",
      swapTitle: "Inverser largeur et hauteur",
      ratioLocked: "Proportions verrouillées",
      lockRatio: "Verrouiller les proportions",
      width: "Largeur",
      height: "Hauteur",
      lockHint: "La largeur et la hauteur changent ensemble pour conserver {ratio}.",
      totalArea: "Surface totale",
      sqIn: "po²",
      aspectRatio: "Format d’image",
      digitalSize: "Taille numérique (pixels)",
      copySize: "Copier la taille",
      totalPixels: "Pixels au total",
      megapixels: "Mégapixels",
      ratioTitle: "Calculer la hauteur à partir de la largeur selon le format",
      ratios: ["1:1 Carré", "4:3 Classique", "16:9 Panoramique", "3:2 Photo 35 mm", "4:5 Galerie", "5:7 Tirage"],
      centimeters: "Centimètres",
      millimeters: "Millimètres",
      points: "Points (72 / po)",
      surfaceArea: "Surface",
      lengthInInches: "Longueur en pouces",
      lengthInPixels: "Longueur en pixels",
      pixelsAt: "Pixels à {dpi} DPI",
      copyPixels: "Copier les pixels",
      formulaTitle: "La formule",
      formula: "Pixels = Pouces × DPI",
      reverse: "Inverse : Pouces = Pixels ÷ DPI",
      copyCss: "Copier le CSS",
    },
    visual: {
      eyebrow: "Vue en temps réel",
      title: "LA FENÊTRE",
      highlight: "ARCHITECTURALE",
      description:
        "Voyez l’échelle physique en pouces se transformer en structures de pixels numériques en direct. Passez du dessin de précision à la loupe de joaillier, puis à l’exposition en galerie.",
      modeAria: "Mode d’aperçu",
      modes: { canvas: "Plan technique", loupe: "Loupe à pixels", gallery: "Salon de galerie" },
      zoomOut: "Zoom arrière",
      zoomIn: "Zoom avant",
      resetZoom: "Réinitialiser le zoom",
      summary: "{w} sur {h} pouces, {wpx} sur {hpx} pixels à {dpi} DPI",
      loupeTitle: "Un pouce physique sous la loupe",
      loupeDesc: "Comment la densité de la grille évolue de l’écran (72 DPI) au standard CSS (96 DPI) puis au tirage d’art (300 DPI).",
      loupe72: "72 DPI · Web ancien",
      loupe72Note: "Bords de pixels grossiers visibles à l’œil.",
      loupe96: "96 DPI · CSS du W3C",
      loupe96Note: "1 pouce vaut exactement 96 pixels CSS.",
      loupe300: "300 DPI · Archive",
      loupe300Note: "Ton continu sans rupture.",
      yourSetting: "Votre réglage :",
    },
    slides: {
      eyebrow: "Masterclass visuelle et diaporama",
      title: "POUCES EN PIXELS :",
      highlight: "VISUELS ET DIAPOS",
      description:
        "Une exploration visuelle interactive du passage des pouces aux pixels, des standards du W3C, de la géométrie des sous-pixels Retina et des formats d’impression haut de gamme.",
      carouselAria: "Diapositives pouces en pixels",
      slide: "Diapositive",
      pauseAria: "Mettre en pause le diaporama automatique",
      playAria: "Lancer le diaporama automatique",
      pause: "Pause",
      play: "Lecture",
      prev: "Diapositive précédente",
      next: "Diapositive suivante",
      slideOf: "{n} sur {total} : {title}",
      axiom: "Axiome mathématique :",
      calibrate: "RÉGLER LE CONVERTISSEUR SUR CETTE FICHE",
      chooseSlide: "Choisir une diapositive",
      slideLabel: "Diapositive {n} : {title}",
      specsTitle: "Caractéristiques de la diapositive :",
      items: [
        {
          badge: "LES FONDATIONS",
          title: "La naissance du pouce numérique",
          subtitle: "Comment la densité transforme la distance en image matricielle",
          quote: "Un pouce physique est constant dans le bronze ; dans le monde numérique, sa grandeur dépend de la densité.",
          keyFormula: "Pixels = Pouces × DPI (points par pouce)",
          description:
            "Contrairement à une règle en laiton ou en acier, un pouce numérique n’a pas de nombre fixe de pixels. Son nombre de pixels augmente directement avec le DPI (points par pouce) du support.",
          specs: [
            { label: "72 DPI (Web 1.0)", value: "72 pixels" },
            { label: "96 DPI (standard CSS)", value: "96 pixels" },
            { label: "150 DPI (édition)", value: "150 pixels" },
            { label: "300 DPI (beaux-arts)", value: "300 pixels" },
            { label: "600 DPI (ultra fin)", value: "600 pixels" },
          ],
        },
        {
          badge: "LE CANON OFFICIEL DU W3C",
          title: "Le standard des 96 pixels CSS",
          subtitle: "L’ancrage mathématique du Web mondial",
          quote: "1in = 96px n’est pas une approximation : c’est une constante immuable inscrite dans les spécifications CSS du W3C.",
          keyFormula: "1 pouce ≡ 96 px CSS ≡ 2,54 cm ≡ 72 pt ≡ 6 pc",
          description:
            "En 1996, le World Wide Web Consortium a défini le pixel de référence pour une distance de vision de 28 pouces et un angle de 0,0213 degré. Il en découle qu’un pouce CSS correspond mathématiquement à exactement 96 pixels CSS.",
          specs: [
            { label: "Distance de référence", value: "28 pouces (71 cm)" },
            { label: "Angle sous-tendu", value: "0,0213 degré" },
            { label: "US Letter (8,5×11\")", value: "816 × 1 056 px" },
            { label: "Points (pt) par pouce", value: "72 pt" },
            { label: "Picas (pc) par pouce", value: "6 pc" },
          ],
        },
        {
          badge: "NORMES GICLÉE D’ARCHIVE",
          title: "Art muséal et 300 DPI",
          subtitle: "Le seuil imperceptible de la vision humaine",
          quote: "Le tirage d’art haut de gamme exige au moins 300 DPI : chaque gouttelette d’encre se fond alors dans un ton continu.",
          keyFormula: "Pixels requis = Pouces visés × 300 DPI",
          description:
            "À une distance de lecture normale de 12 à 14 pouces, la rétine humaine distingue jusqu’à 300 points par pouce. En dessous de 300 DPI, la pixellisation en escalier nuit à la netteté des contours.",
          specs: [
            { label: "Standard muséal", value: "Giclée 300 DPI" },
            { label: "Cadre 16×20\"", value: "4 800 × 6 000 px" },
            { label: "Charge capteur totale", value: "28,8 mégapixels" },
            { label: "Densité de gouttelettes", value: "1 200 - 2 400 gouttelettes" },
            { label: "Longévité archive", value: "Plus de 100 ans" },
          ],
        },
        {
          badge: "ÉCRANS RETINA ET HAUTE DENSITÉ",
          title: "Le rapport de pixels de l’appareil (DPR)",
          subtitle: "Pixels matériels physiques contre pixels CSS abstraits",
          quote: "Sur un écran Super Retina 3x, 1 pouce CSS vaut toujours 96 unités CSS, mais mobilise 288 diodes physiques.",
          keyFormula: "Px physiques = Px CSS × DPR (1x, 2x, 3x)",
          description:
            "Les écrans Super Retina XDR d’Apple et les écrans 4K/8K modernes dissocient les pixels matériels des pixels logiques CSS. Une ligne CSS de 96 px sur un iPhone 16 Pro s’affiche sur près de 300 micro-sous-pixels OLED physiques.",
          specs: [
            { label: "1 pouce CSS", value: "96 px CSS" },
            { label: "Facteur DPR Apple", value: "3,00x Super Retina" },
            { label: "Px matériels", value: "288 px matériels" },
            { label: "PPI matériel", value: "460 PPI" },
            { label: "Disposition des sous-pixels", value: "OLED PenTile en diamant" },
          ],
        },
        {
          badge: "PROPORTIONS CHOISIES",
          title: "La matrice des cadres d’exception",
          subtitle: "Formats architecturaux et artistiques standard à 300 DPI",
          quote: "Les proportions d’or de l’encadrement classique, traduites en spécifications numériques exactes.",
          keyFormula: "Qualité archive (300 DPI) = Exposition en galerie sans défaut",
          description:
            "Du portrait de salon classique aux grandes pièces de musée, chaque format de cadre en pouces correspond à une toile de pixels précise pour une reproduction sans défaut.",
          specs: [
            { label: "Portrait de galerie 8 × 10\"", value: "2 400 × 3 000 px" },
            { label: "Tirage de salon 11 × 14\"", value: "3 300 × 4 200 px" },
            { label: "Cadre collection 16 × 20\"", value: "4 800 × 6 000 px" },
            { label: "Grand format 24 × 36\"", value: "7 200 × 10 800 px" },
            { label: "Fresque muséale 40 × 60\"", value: "12 000 × 18 000 px" },
          ],
        },
      ],
      spectrum: {
        title: "1 POUCE PHYSIQUE À DIFFÉRENTES DENSITÉS",
        bars: ["72 DPI (écran ancien)", "96 DPI (CSS du W3C)", "150 DPI (épreuve éditoriale)", "300 DPI (giclée d’art)"],
        note: "À 300 DPI, 1 pouce contient plus de 4 fois plus de pixels que les anciens standards du Web.",
      },
      w3c: {
        title: "PIXEL DE RÉFÉRENCE ET ANGLE DU W3C",
        observer: "Observateur",
        distance: "Distance de vision 28\" (0,0213°)",
        cssInch: "Pouce CSS",
        centimeters: "Centimètres",
        typographyPt: "Points typo",
        picas: "Picas",
      },
      fineart: {
        title: "PIXELLISATION MATRICIELLE CONTRE TON GICLÉE CONTINU",
        printed72: "Imprimé à 72 DPI",
        jagged: "Bords crénelés visibles (aliasing)",
        archival300: "Archive 300 DPI",
        smooth: "Courbe continue d’une grande netteté",
        summary: "16 × 20 pouces à 300 DPI = 4 800 × 6 000 pixels (28,8 MP)",
      },
      retina: {
        title: "GÉOMÉTRIE DES SOUS-PIXELS ET RAPPORT DE PIXELS",
        rows: [
          { name: "Écran 1x DPR", device: "Moniteur standard ancien", value: "1 px CSS = 1 px physique" },
          { name: "2x DPR (Retina)", device: "MacBook Pro et iPad Pro", value: "1 px CSS = 4 px physiques (2×2)" },
          { name: "3x DPR (Super Retina XDR)", device: "iPhone Pro OLED", value: "1 px CSS = 9 px physiques (3×3)" },
        ],
        summary: "1 pouce sur iPhone 16 Pro = 96 px CSS = ",
        summaryStrong: "288 pixels physiques",
      },
      framing: {
        title: "PROPORTIONS DE CIMAISE À 300 DPI",
        sensor: "Capteur : {mp}",
        note: "Pour les grands formats (24×36\" et plus), les capteurs moyen format haute résolution ou l’agrandissement par IA évitent le grain.",
      },
    },
    presets: {
      eyebrow: "Index de formats choisis",
      title: "LA MATRICE DES",
      highlight: "FORMATS",
      description:
        "Un recueil de formats de référence pour l’encadrement muséal, la papeterie éditoriale, les écrans phares et les supports numériques.",
      filterAria: "Filtrer les formats par catégorie",
      categories: {
        all: "Tous les formats",
        art: "Art et encadrement",
        editorial: "Édition et livres",
        device: "Écrans d’appareils",
        social: "Numérique et réseaux",
      },
      showing: "{shown} formats affichés sur {total}",
      recommended: "{dpi} DPI recommandés",
      physicalSize: "Taille physique",
      web: "96 DPI (web)",
      print: "300 DPI (impression)",
      use: "UTILISER CE FORMAT",
      useAria: "Utiliser {name} à {dpi} DPI dans le convertisseur",
      items: [
        { name: "Portrait de galerie classique 8 × 10\"", description: "Standard emblématique du portrait muséal et de l’encadrement d’art." },
        { name: "Tirage d’exposition 11 × 14\"", description: "Tirage d’archive standard pour galeries d’intérieur." },
        { name: "Cadre mural de collection 16 × 20\"", description: "Format privilégié pour les pièces à fort impact." },
        { name: "Œuvre grand format 24 × 36\"", description: "Pièce maîtresse pour résidences haut de gamme." },
        { name: "Fresque architecturale 30 × 40\"", description: "Pièce à l’échelle d’un musée, avec toute la profondeur tonale." },
        { name: "Feuille US Letter 8,5 × 11\"", description: "Papeterie standard américaine pour documents." },
        { name: "A4 international 8,27 × 11,69\"", description: "Papier standard mondial (ISO 216) pour l’impression internationale." },
        { name: "Carte de visite 3,5 × 2,0\"", description: "Standard de carte de visite sur mesure avec dorure à chaud." },
        { name: "Livre d’art monographique 12 × 12\"", description: "Double page carrée de beau livre." },
        { name: "Écran de l’iPhone 16 Pro (physique)", description: "Dimension physique de l’écran Super Retina haut de gamme." },
        { name: "Écran du MacBook Pro 16,2\" (physique)", description: "Dimension physique de l’écran Liquid Retina XDR." },
        { name: "Téléviseur 4K 55\" (physique)", description: "Dimensions physiques d’une dalle UHD 3840×2160." },
        { name: "Toile carrée 1080 × 1080 px", description: "Visuel carré de 1080 px exprimé en pouces à 96 DPI." },
        { name: "Reel/Story vertical 1080 × 1920 px", description: "Toile mobile plein écran (format 9:16)." },
      ],
    },
    hubCalc: {
      titleIn: "Calculateur de pouces en pixels",
      titlePx: "Calculateur de pixels en pouces",
      size: "Format",
      customSize: "Format personnalisé",
      width: "Largeur",
      height: "Hauteur",
      dpi: "DPI",
      custom: "Autre",
      dpiError: "Indiquez un DPI entre 1 et {max}.",
      result: "Résultat",
      resultSub: "{w} × {h} {unit} à {dpi} DPI",
      enterBoth: "Saisissez une largeur et une hauteur supérieures à 0.",
      needMore: "Besoin de verrouiller les proportions, d’autres unités ou d’un aperçu ?",
      openFull: "Ouvrir le convertisseur complet",
    },
    sizeLabels,
  },
  content: {
    meta: {
      siteTitle: "Calculateur de pouces en pixels | Conversion avec PPI",
      siteDescription:
        "Convertissez des pouces en pixels avec le PPI de votre choix. Découvrez la formule, calculez largeur et hauteur et consultez des exemples pour l’impression et le CSS.",
    },
    page: {
      skipToConverter: "Aller au convertisseur",
      skipToCalculator: "Aller au calculateur",
      breadcrumb: "Fil d’Ariane",
      related: "Pages associées",
      relatedHome: "Convertisseur de pouces en pixels",
      hubFaqDescription: "Des réponses courtes aux questions les plus fréquentes sur ce sujet.",
    },
    footer: {
      blurb:
        "Convertisseur gratuit de pouces en pixels pour l’écran et l’impression. Convertissez n’importe quelle taille à n’importe quel DPI, vérifiez les formats d’impression et retrouvez les valeurs courantes au même endroit.",
      openConverter: "Ouvrir le convertisseur",
      pages: "Pages",
      copyright: "©2026 InchestoPixel.com",
      backToTop: "RETOUR EN HAUT",
    },
    home: {
      intro:
        "Ce calculateur convertit une mesure en pouces en pixels selon la résolution d’image choisie, exprimée en pixels par pouce (PPI). Le résultat dépend de ce réglage : à 300 PPI, 1 pouce vaut 300 pixels.",
      howTo: {
        heading: "Comment convertir des pouces en pixels",
        steps: [
          "Saisissez la longueur à convertir, mesurée en pouces.",
          "Choisissez la résolution d’image requise par votre projet. Pour l’impression, renseignez-vous auprès de votre imprimeur.",
          "Calculez le nombre de pixels. Pour convertir la largeur et la hauteur, répétez le calcul pour chaque dimension avec le même réglage.",
        ],
        note: "Conservez la résolution avec votre résultat pour pouvoir vérifier plus tard la taille d’impression prévue.",
      },
      formula: {
        heading: "Formule et exemples",
        main: "Pixels = pouces × PPI",
        explain: "Multipliez la longueur physique en pouces par le nombre de pixels par pouce pour obtenir le nombre de pixels sur cette dimension.",
        backwardLead: "Pour le calcul inverse :",
        backward: "Pouces = pixels ÷ PPI",
        examples: [
          {
            heading: "Exemple d’une seule longueur",
            lead: "À 96 PPI, une longueur de 2 pouces donne :",
            math: ["2 × 96 = 192 pixels"],
            after: [
              "Ce résultat est exact pour la résolution choisie. Il ne signifie pas que chaque écran affiche 192 pixels sur deux pouces physiques.",
            ],
          },
          {
            heading: "Exemple de largeur et de hauteur pour un tirage",
            lead: "Pour une image de 8,5 × 11 pouces à 300 PPI :",
            math: ["Largeur : 8,5 × 300 = 2 550 pixels", "Hauteur : 11 × 300 = 3 300 pixels"],
            after: [
              "Les dimensions d’image requises sont de 2 550 × 3 300 pixels, avant tout fond perdu supplémentaire demandé par l’imprimeur.",
            ],
          },
          {
            heading: "Exemple d’un résultat décimal",
            lead: "Pour 2,33 pouces à 150 PPI :",
            math: ["2,33 × 150 = 349,5 pixels"],
            after: [
              "Les images matricielles exigent des dimensions en pixels entiers. En arrondissant 349,5 au pixel entier le plus proche, moitiés vers le haut, on obtient 350 pixels. À la même résolution, cela correspond à environ 2,333 pouces.",
            ],
          },
        ],
        closing: "N’arrondissez qu’à la dernière étape, selon les exigences de votre projet.",
      },
      reference: {
        heading: "Tableau de référence pouces-pixels",
        intro:
          "Les en-têtes de colonne indiquent la résolution d’image en PPI ; les valeurs en dessous sont des nombres de pixels. Ces réglages sont des exemples, pas des exigences universelles.",
        table: homeTable("fr", { corner: "Longueur (pouces)", col: "{ppi}" }),
        caption: "Pouces en pixels à 72, 96, 150 et 300 PPI",
        footnote: "Toutes les valeurs du tableau sont exactes pour les données indiquées.",
      },
      guide: { eyebrow: "Fondements théoriques", title: "PIXELS, TAILLE D’IMPRESSION ET", highlight: "PPI" },
      explainers: [
        {
          heading: "Pixels d’image, taille d’impression et pixels CSS",
          paragraphs: [
            "Les dimensions en pixels décrivent la largeur et la hauteur d’une image en pixels. Les dimensions d’impression décrivent sa taille physique en pouces. La résolution d’image relie les deux : les mêmes dimensions en pixels peuvent donner des tailles d’impression différentes.",
            "Le CSS utilise une relation fixe : 1in = 96px. Ce sont des unités de référence CSS : un pixel CSS n’est donc pas forcément un pixel physique de l’appareil, et un pouce CSS à l’écran peut ne pas mesurer un vrai pouce. Utilisez cette relation pour le dimensionnement CSS, sans supposer qu’elle décrit la densité physique de pixels d’un écran.",
          ],
        },
        {
          heading: "Résolution d’image et résolution d’imprimante",
          paragraphs: [
            "Le PPI décrit les pixels d’image par pouce ; le DPI décrit les points par pouce produits par une imprimante. Ils sont liés dans la chaîne d’impression, mais ne sont pas interchangeables. Pour ce calculateur, utilisez la résolution d’image exigée plutôt que les caractéristiques matérielles de l’imprimante.",
          ],
        },
        {
          heading: "Changer la résolution n’ajoute pas de détail",
          paragraphs: [
            "Modifier seulement les métadonnées de résolution d’une image laisse son nombre de pixels inchangé et modifie sa taille d’impression prévue. Le rééchantillonnage, lui, modifie le nombre de pixels. Attribuer une résolution plus élevée ne crée aucun détail nouveau.",
          ],
        },
      ],
      browse: "Parcourir par thème",
      faqDescription: "Réponses aux questions fréquentes sur la conversion de pouces en pixels.",
      faqs: [
        {
          question: "Quelle résolution utiliser ?",
          answer:
            "Utilisez la valeur exigée par le support final. Pour l’impression, demandez à l’imprimeur la résolution d’image nécessaire à la taille finale. Si un envoi numérique précise des dimensions en pixels, suivez directement ces dimensions.",
        },
        {
          question: "La conversion en pixels modifie-t-elle le format de l’image ?",
          answer:
            "Utiliser la même résolution pour la largeur et la hauteur conserve leur rapport avant arrondi. Par exemple, une image de 4 × 4 pouces à 300 PPI devient 1 200 × 1 200 pixels. Les deux sont carrées : le rapport décrit la forme, pas la résolution.",
        },
        {
          question: "Puis-je calculer la taille d’impression d’une image existante ?",
          answer:
            "Oui. Divisez chaque dimension en pixels par la résolution d’image prévue. À 300 PPI, une image de 1 800 × 1 200 pixels correspond à 6 × 4 pouces. Un recadrage ou une mise à l’échelle à l’impression peut modifier la taille finale.",
        },
      ],
    },
    hubs: {
      dpi: {
        nav: "DPI",
        h1: "Convertisseur de pouces en pixels selon le DPI",
        seoTitle: "Convertisseur pouces en pixels DPI | Taille d’impression",
        description:
          "Convertissez des pouces en pixels avec le DPI de votre projet. Formule, exemples détaillés et tableau de 72 à 600 DPI pour vérifier les dimensions d’image à imprimer.",
        answer:
          "Calculez les dimensions en pixels à partir d’une mesure physique et de la résolution choisie. Multipliez les pouces par le DPI indiqué : à 300 DPI, 4 pouces valent 1 200 pixels.",
        introNotes: [
          "Dans cette conversion, DPI désigne la densité de pixels visée pour l’image, techniquement appelée PPI. Utilisez la résolution requise par votre projet ; un pouce n’a pas de valeur unique en pixels.",
        ],
        sections: [
          {
            heading: "Comment convertir des pouces en pixels",
            blocks: [
              {
                type: "steps",
                items: [
                  "Saisissez la longueur physique en pouces.",
                  "Saisissez la résolution cible. Pour l’impression, utilisez la résolution d’image demandée par votre imprimeur.",
                  "Multipliez les pouces par cette résolution pour obtenir la longueur en pixels.",
                  "Pour une image, calculez la largeur et la hauteur séparément avec la même résolution.",
                ],
              },
              {
                type: "note",
                text: "Conservez le rapport largeur-hauteur d’origine lorsque vous convertissez une création existante. Modifier ce rapport oblige à recadrer ou à étirer.",
              },
            ],
          },
          {
            heading: "Formule et exemples détaillés",
            blocks: [
              { type: "math", lines: ["Pixels = Pouces × DPI"], large: true },
              { type: "p", text: "Où :" },
              {
                type: "list",
                items: [
                  "Pixels est la longueur numérique en pixels, abrégée px.",
                  "Pouces est la longueur physique prévue.",
                  "DPI est la valeur de conversion choisie, comprise comme pixels d’image par pouce.",
                ],
              },
              { type: "p", text: "Pour une image rectangulaire :" },
              {
                type: "math",
                lines: ["Largeur en pixels = Largeur en pouces × DPI", "Hauteur en pixels = Hauteur en pouces × DPI"],
              },
              {
                type: "sub",
                heading: "Une image de 8 × 10 pouces à 300 DPI",
                blocks: [
                  { type: "p", text: "Si votre projet exige 300 PPI :" },
                  { type: "math", lines: ["Largeur : 8 × 300 = 2 400 px", "Hauteur : 10 × 300 = 3 000 px"] },
                  { type: "p", text: "Les dimensions requises sont de 2 400 × 3 000 pixels. Ces résultats sont exacts." },
                ],
              },
              {
                type: "sub",
                heading: "Une longueur de 2,5 pouces à 96 DPI",
                blocks: [
                  { type: "math", lines: ["2,5 × 96 = 240 px"] },
                  {
                    type: "p",
                    text: "À une densité de 96 pixels par pouce, 2,5 pouces correspondent exactement à 240 pixels. La même longueur à une autre densité donne un autre résultat.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Un résultat décimal à 150 DPI",
                blocks: [
                  { type: "math", lines: ["1,23 × 150 = 184,5 px"] },
                  {
                    type: "p",
                    text: "Une image matricielle exige des dimensions en pixels entiers. En arrondissant au pixel entier le plus proche, moitiés vers le haut, on obtient 185 px.",
                  },
                ],
              },
              {
                type: "note",
                text: "N’arrondissez que le résultat final. Si un cahier des charges impose un minimum de pixels, arrondissez vers le haut. Arrondir largeur et hauteur séparément peut légèrement modifier les proportions : vérifiez les dimensions finales lorsque les proportions exactes comptent.",
              },
            ],
          },
          {
            heading: "Tableau de référence pouces-pixels",
            blocks: [
              {
                type: "p",
                text: "Toutes les valeurs sont exactes. La colonne DPI représente la densité d’image visée, en PPI, pour ce calcul.",
              },
              {
                type: "table",
                caption: "Pixels pour 1, 4 et 6 pouces de 72 à 600 DPI",
                table: dpiTable("fr", {
                  corner: "DPI indiqué",
                  cols: ["1 pouce", "4 pouces", "6 pouces"],
                  row: "{dpi} DPI",
                  cell: "{px} px",
                }),
              },
              {
                type: "p",
                text: "Par exemple, une image de 4 × 6 pouces à 300 DPI nécessite 1 200 × 1 800 pixels. À 72 DPI, la même taille physique correspond à 288 × 432 pixels.",
              },
            ],
          },
          {
            heading: "Choisir la bonne résolution pour chaque usage",
            blocks: [
              {
                type: "sub",
                heading: "DPI et PPI désignent des choses différentes",
                blocks: [
                  {
                    type: "p",
                    text: "PPI signifie pixels par pouce : les pixels d’image attribués à chaque pouce de sortie. DPI signifie points par pouce : les points qu’une imprimante peut produire. Ce sont deux mesures distinctes.",
                  },
                  {
                    type: "p",
                    text: "Lorsqu’un cahier des charges d’impression indique « 300 DPI » pour demander une image à 300 PPI, utilisez 300 dans le calcul. Ne remplacez pas le PPI d’image requis par la résolution DPI matérielle de l’imprimante.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Taille physique et dimensions en pixels vont de pair",
                blocks: [
                  {
                    type: "p",
                    text: "Les pouces décrivent la taille physique ; les dimensions en pixels décrivent la largeur et la hauteur numériques de l’image. À taille physique égale, un PPI cible plus élevé exige davantage de pixels.",
                  },
                  {
                    type: "p",
                    text: "Modifier la résolution d’une image existante sans rééchantillonnage n’ajoute aucun pixel. Cela change la relation entre sa taille d’impression et sa densité de pixels. Le rééchantillonnage modifie le nombre de pixels : calculer une cible plus grande n’améliore donc pas à lui seul l’image source.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Les mesures à l’écran ont besoin de contexte",
                blocks: [
                  {
                    type: "p",
                    text: "Ne supposez pas que chaque écran a 72 ou 96 pixels physiques par pouce. Le CSS définit 1 pouce comme 96 pixels CSS, mais les pixels CSS ne sont pas forcément des pixels de l’appareil ni une mesure physique réelle à l’écran.",
                  },
                  {
                    type: "p",
                    text: "Pour l’envoi d’une image, suivez les dimensions en pixels exigées par la destination. Pour l’impression, suivez ses exigences de taille physique et de résolution d’image.",
                  },
                ],
              },
            ],
          },
        ],
        faq: [
          {
            question: "Comment l’utiliser comme calculateur 300 DPI ?",
            answer:
              "Choisissez 300 comme résolution cible et multipliez chaque mesure en pouces par 300. Par exemple, une image de 5 × 7 pouces nécessite 1 500 × 2 100 pixels à 300 PPI.",
          },
          {
            question: "Peut-on convertir des pouces en pixels sans connaître le DPI ?",
            answer:
              "Sans densité de pixels cible, il n’y a pas de réponse unique. Une longueur de 2 pouces correspond à 144 pixels à 72 PPI, 192 pixels à 96 PPI ou 600 pixels à 300 PPI.",
          },
          {
            question: "Faut-il inclure le fond perdu dans les dimensions ?",
            answer:
              "Si votre imprimeur exige un fond perdu, calculez à partir de la taille totale de la création, fond perdu compris. Par exemple, une création de 4 × 6 pouces avec 0,125 pouce de fond perdu de chaque côté devient 4,25 × 6,25 pouces. À 300 PPI, cela fait 1 275 × 1 875 pixels. Utilisez la spécification réelle de votre imprimeur.",
          },
        ],
      } as HubText,
      software: {
        nav: "Logiciels",
        h1: "Pouces en pixels dans les logiciels",
        seoTitle: "Pouces en pixels dans les logiciels : guide PPI",
        description:
          "Convertissez des pouces en pixels avec le PPI de votre projet. Exemples détaillés et explications sur l’effet des dimensions, du rééchantillonnage et des réglages d’export.",
        answer:
          "Pour convertir des pouces en pixels, multipliez la mesure en pouces par le nombre de pixels par pouce (PPI) requis. Un pouce vaut 300 px à 300 PPI ou 96 px à 96 PPI. Dans un logiciel, utilisez la résolution exigée par votre sortie, et non une valeur par défaut supposée universelle.",
        sections: [
          {
            heading: "Comment convertir vos dimensions",
            blocks: [
              {
                type: "steps",
                items: [
                  "Identifiez la largeur ou la hauteur nécessaire en pouces.",
                  "Choisissez le PPI requis pour cette sortie. Pour l’impression, vérifiez la résolution d’image indiquée par l’imprimeur.",
                  "Calculez le nombre de pixels à partir de la mesure en pouces et du PPI.",
                  "Recommencez pour l’autre dimension avec le même PPI.",
                ],
              },
              {
                type: "note",
                text: "Pour une image existante, conservez ses proportions. Si la largeur et la hauteur requises ont un autre format, recadrez l’image ou ajoutez de l’espace autour plutôt que de l’étirer.",
              },
            ],
          },
          {
            heading: "Formule et exemples",
            blocks: [
              { type: "math", lines: ["Pixels = Pouces × PPI"], large: true },
              {
                type: "list",
                items: [
                  "Pixels (px) : le nombre de pixels d’image sur une dimension.",
                  "Pouces (in) : la longueur physique prévue de cette dimension.",
                  "PPI : le nombre de pixels d’image par pouce à cette taille.",
                ],
              },
              { type: "p", text: "Le calcul s’applique séparément à la largeur et à la hauteur." },
              {
                type: "sub",
                heading: "Une image de 4 × 6 pouces à 300 PPI",
                blocks: [
                  { type: "math", lines: ["Largeur : 4 × 300 = 1 200 px", "Hauteur : 6 × 300 = 1 800 px"] },
                  {
                    type: "p",
                    text: "Les dimensions cibles sont de 1 200 × 1 800 px, sans fond perdu ni bordure supplémentaires.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Une image de 8 × 10 pouces à 150 PPI",
                blocks: [
                  { type: "math", lines: ["Largeur : 8 × 150 = 1 200 px", "Hauteur : 10 × 150 = 1 500 px"] },
                  {
                    type: "p",
                    text: "Le résultat est de 1 200 × 1 500 px. Cet exemple utilise 150 PPI comme exigence donnée, pas comme recommandation pour toute impression.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Une mesure décimale",
                blocks: [
                  { type: "p", text: "Pour une largeur de 2,125 pouces à 300 PPI :" },
                  { type: "math", lines: ["2,125 × 300 = 637,5 px"] },
                  {
                    type: "p",
                    text: "Le résultat mathématique est exact, mais une image matricielle exige une largeur entière. Arrondi au pixel le plus proche, utilisez 638 px. À 300 PPI, cela correspond à environ 2,127 pouces.",
                  },
                ],
              },
              {
                type: "note",
                text: "Arrondissez à la fin du calcul. Si un cahier des charges impose un minimum de pixels, arrondissez vers le haut si nécessaire.",
              },
            ],
          },
          {
            heading: "Tableau de conversion rapide",
            blocks: [
              {
                type: "p",
                text: "Ces valeurs sont exactes pour le PPI indiqué. Les colonnes sont des exemples de calcul, pas des réglages par défaut de logiciels.",
              },
              {
                type: "table",
                caption: "Pouces en pixels à 96, 150 et 300 PPI",
                table: softwareTable("fr", {
                  corner: "Longueur (pouces)",
                  cols: ["À 96 PPI (px)", "À 150 PPI (px)", "À 300 PPI (px)"],
                }),
              },
            ],
          },
          {
            heading: "Appliquer le résultat dans votre logiciel",
            blocks: [
              {
                type: "sub",
                heading: "Photoshop : distinguer redimensionnement et rééchantillonnage",
                blocks: [
                  {
                    type: "p",
                    text: "Comparez les dimensions en pixels visées avec celles de l’image actuelle avant toute modification.",
                  },
                  {
                    type: "p",
                    text: "Rééchantillonnage désactivé, modifier le PPI conserve le nombre de pixels et change la taille d’impression prévue. Rééchantillonnage activé, modifier la taille ou la résolution peut ajouter ou supprimer des pixels. Gardez largeur et hauteur proportionnelles lors du redimensionnement. Adobe explique ces relations dans son guide sur le redimensionnement et le rééchantillonnage.",
                  },
                  {
                    type: "p",
                    text: "Augmenter seulement le PPI ne crée pas de détail supplémentaire. Agrandir par rééchantillonnage ajoute des pixels calculés ; cela ne restaure pas le détail absent de l’original.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Illustrator : vérifier la résolution d’export matriciel",
                blocks: [
                  {
                    type: "p",
                    text: "Une illustration vectorielle n’a pas de nombre fixe de pixels. Lors de l’export vers un format matriciel comme PNG ou JPEG, la taille physique de l’illustration et la résolution d’export déterminent les dimensions de sortie.",
                  },
                  {
                    type: "p",
                    text: "Par exemple, une zone d’export de 4 pouces de large à 300 PPI nécessite une largeur de 1 200 px. Vérifiez les dimensions du fichier exporté, surtout si l’export inclut des marges ou des limites supplémentaires. Les réglages disponibles dans Illustrator dépendent du format d’export.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Figma : tenir compte de l’échelle d’export",
                blocks: [
                  {
                    type: "p",
                    text: "Pour un visuel matriciel, calculez d’abord les pixels de sortie nécessaires, puis tenez compte de l’échelle d’export. Un cadre de 600 pixels de large exporté en 2× produit une image de 1 200 pixels de large. N’appliquez pas de multiplicateur supplémentaire si votre cadre a déjà les dimensions de sortie visées. Consultez les formats et réglages d’export de Figma.",
                  },
                  {
                    type: "p",
                    text: "Pour une image de 4 pouces de large destinée à une impression à 300 PPI, la cible est de 1 200 px de large, quelle que soit la combinaison cadre-échelle utilisée.",
                  },
                ],
              },
            ],
          },
          {
            heading: "Éviter les erreurs de conversion courantes",
            blocks: [
              {
                type: "sub",
                heading: "PPI et DPI désignent des choses différentes",
                blocks: [
                  {
                    type: "p",
                    text: "Le PPI mesure les pixels d’image par pouce ; le DPI mesure généralement les points par pouce d’une imprimante. Si un cahier des charges utilise « DPI » pour une image, vérifiez s’il s’agit du PPI d’image requis. N’utilisez pas automatiquement la résolution matérielle de l’imprimante comme valeur du convertisseur.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Les pixels CSS sont des unités logiques",
                blocks: [
                  {
                    type: "p",
                    text: "Le CSS définit 1 pouce comme 96 pixels CSS. Cela ne signifie pas que toute image doit être à 96 PPI, ni qu’un élément d’un pouce CSS mesurera un pouce physique sur tous les écrans. Les écrans haute densité peuvent utiliser plusieurs pixels d’appareil par pixel CSS. Consultez l’explication du W3C sur les unités CSS.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Vérifier le résultat final, pas seulement la taille du document",
                blocks: [
                  {
                    type: "p",
                    text: "Lorsque vous préparez une image pour Canva, Procreate, Paint, InDesign, Word, PowerPoint ou Google Slides, distinguez ses dimensions en pixels de sa taille une fois placée. Vérifiez les dimensions finales et la taille d’impression prévue au lieu de supposer que le nom du logiciel détermine la conversion.",
                  },
                ],
              },
            ],
          },
        ],
        faq: [
          {
            question: "Quel PPI utiliser ?",
            answer:
              "Utilisez la résolution exigée par votre chaîne de sortie. Pour l’impression, demandez à l’imprimeur. Pour un visuel écran défini en pixels, utilisez directement ces dimensions ; la conversion depuis les pouces peut être inutile.",
          },
          {
            question: "Pourquoi la même image apparaît-elle à des tailles différentes selon les applications ?",
            answer:
              "Une application peut ajuster l’image à la page, l’afficher à un certain niveau de zoom ou utiliser les métadonnées de résolution pour fixer sa taille placée. Sa taille apparente ne dit pas, à elle seule, si ses dimensions en pixels ont changé.",
          },
          {
            question: "Peut-on calculer des pouces en pixels dans Excel ou Google Sheets ?",
            answer:
              "Oui. Si la cellule A2 contient des pouces et B2 le PPI, utilisez :\n=A2*B2\nPour arrondir une mesure positive au pixel entier le plus proche, utilisez (dans Excel en français) :\n=ARRONDI(A2*B2;0)\nCela calcule une dimension en pixels ; cela ne redimensionne pas une image et ne change pas la largeur d’une colonne.",
          },
        ],
      } as HubText,
      print: printHub("fr", {
        nav: "Impression et photo",
        h1: "Pouces en pixels pour l’impression, les photos et les images",
        description:
          "Combien de pixels pour un tirage net : photos 4×6, 5×7, 8×10 et 11×14 pouces à 150 et 300 DPI, avec un calculateur de taille d’impression.",
        answer: "Pour un tirage net, il faut la taille d’impression × 300 pixels de chaque côté.",
        printing: {
          heading: "Impression",
          body: "Pixels nécessaires = taille d’impression en pouces × DPI d’impression. La plupart des imprimeurs visent 300 DPI.",
          corner: "Taille d’impression",
          row: "{w} × {h} po",
        },
        photos: {
          heading: "Photos et images",
          body: "Une photo avec trop peu de pixels paraît floue en grand format. Comparez la taille en pixels de votre image au tableau ci-dessus avant de commander des tirages.",
        },
        faq: [
          {
            question: "Peut-on agrandir une petite photo ?",
            answer: "L’agrandissement ajoute des pixels mais pas de détail, d’où un rendu flou pour les grands agrandissements.",
          },
        ],
      }),
      sizes: sizesHub(
        "fr",
        {
          nav: "Formats",
          h1: "Formats d’impression et de papier courants en pixels",
          description:
            "Letter, A4, 4×6, 5×7, 8×10, 18×24, 24×36 et format carte en pixels à 72, 150 et 300 DPI. Choisissez un format et convertissez-le instantanément.",
          answer: "Le papier Letter (8,5 × 11 po) fait 2 550 × 3 300 px à 300 DPI.",
          overview: {
            heading: "Tous les formats courants en un coup d’œil",
            body: "Taille en pixels de chaque format à 72, 150 et 300 DPI.",
            corner: "Format",
          },
          sizeBody:
            "{label} mesure {w} × {h} po. À 300 DPI, cela donne {w300} × {h300} px, et à 72 DPI {w72} × {h72} px.",
          faq: [
            {
              question: "Quel format est le plus courant pour l’impression ?",
              answer: "Letter et A4 pour les documents, 4 × 6 et 5 × 7 pour les photos.",
            },
          ],
        },
        sizeLabels,
      ),
      chart: chartHub("fr", {
        nav: "Tableau",
        h1: "Tableau pouces en pixels (toutes les valeurs courantes)",
        description:
          "Tableau de conversion des pouces en pixels de 1/8 à 96 pouces à 72, 96, 150 et 300 DPI. Trouvez toute valeur courante en un coup d’œil.",
        answer: "Trouvez toute taille de 1/8 à 96 pouces à 72, 96, 150 et 300 DPI.",
        chart: {
          heading: "Tableau de conversion",
          body: "Le tableau de référence complet. Chaque ligne est une valeur vers laquelle vous pouvez créer un lien.",
          corner: "Pouces",
        },
        items: ["1/8 de pouce", "2 pouces", "2,5 pouces", "3 pouces", "4 pouces", "5 pouces", "8,5 pouces"],
        itemBody:
          "{label} correspond à {px72} px à 72 DPI, {px96} px à 96 DPI, {px150} px à 150 DPI et {px300} px à 300 DPI.",
        faq: [
          {
            question: "Où sont les autres valeurs ?",
            answer: "Les valeurs comme 10, 12, 24 ou 48 pouces figurent dans les lignes du tableau ci-dessus.",
          },
        ],
      }),
    },
  },
};
