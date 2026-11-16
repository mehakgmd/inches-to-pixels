/** Spanish (Español). Same shape as en.ts. */
import type { HubText } from "../../lib/hubs";
import { chartHub, dpiTable, homeTable, printHub, sizesHub, softwareTable } from "../build";
import type { Messages } from "./en";

const sizeLabels = [
  "8,5 × 11 pulgadas (Carta)",
  "Tamaño A4",
  "5 × 7 pulgadas",
  "4 × 6 pulgadas",
  "8 × 10 pulgadas",
  "18 × 24 pulgadas",
  "24 × 36 pulgadas",
  "2 × 2 pulgadas",
  "Tamaño tarjeta (2,5 × 3,5)",
];

export const es: Messages = {
  ui: {
    common: {
      pageNames: { home: "Inicio", dpi: "DPI", software: "Software", print: "Impresión y foto", sizes: "Tamaños", chart: "Tabla" },
      quality: { archival: "Calidad de impresión de archivo", proof: "Calidad de prueba de impresión", screen: "Resolución de pantalla" },
      qualityInline: { archival: "calidad de impresión de archivo", proof: "calidad de prueba de impresión", screen: "resolución de pantalla" },
      copied: "¡Copiado!",
      copyFailed: "No se pudo copiar",
    },
    nav: {
      brandSub: "CONVERSOR DE DPI Y PPI",
      homeAria: "Inicio de Inches to Pixel",
      topAria: "Inches to Pixel, volver arriba",
      pagesAria: "Páginas",
      pages: "Páginas",
      onThisPage: "En esta página",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      share: "Compartir",
      linkCopied: "Enlace copiado",
      sections: { converter: "Conversor", visual: "Escala visual", slides: "Diapositivas", presets: "Tamaños", guide: "Guía de DPI", faq: "Preguntas" },
      language: "Idioma",
      languageAria: "Elegir idioma",
    },
    theme: { toDark: "Cambiar a modo oscuro", toLight: "Cambiar a modo claro", dark: "Modo oscuro", light: "Modo claro" },
    footer: { languages: "Idiomas" },
    faq: { eyebrow: "Preguntas frecuentes", title: "RESPUESTAS DE", highlight: "EXPERTOS" },
    hero: {
      badge: "La alta relojería de la escala digital",
      badgeRule: "1 PULG = 96 PX (W3C)",
      h1Before: "Calculadora de pulgadas a ",
      h1Highlight: "píxeles",
      h1After: "",
      shelfTitle: "Elige la resolución de destino (DPI / PPI)",
      tags: { standard: "Estándar", fineArt: "Bellas artes" },
      presets: [
        { label: "Estándar web", desc: "Web antigua y pantallas" },
        { label: "Estándar CSS", desc: "W3C y Windows nativo" },
        { label: "Borrador editorial", desc: "Periódicos y pruebas" },
        { label: "Impresión artística", desc: "Giclée de museo y libros" },
        { label: "Pantalla Retina", desc: "OLED y móviles insignia" },
      ],
      equations: [
        { label: "Regla W3C", value: "1 in = 96 px", note: "estándar CSS" },
        { label: "Regla de impresión de museo", value: "1 in = 300 px", note: "a 300 DPI" },
        { label: "Equivalencia métrica", value: "1 in = 2,54 cm", note: "= 25,4 mm" },
      ],
    },
    converter: {
      title: "Conversor de pulgadas a píxeles",
      modeAria: "Modo del conversor",
      tabLengthShort: "Longitud",
      tabLength: "Longitud simple (1D)",
      tabSizeShort: "An × Al",
      tabSize: "Dimensiones 2D (An × Al)",
      resolution: "Resolución",
      dpiRange: "Usa de 1 a {max}",
      enterAbove0: "Introduce un número mayor que 0.",
      physicalSize: "Tamaño físico (pulgadas)",
      swap: "Invertir",
      swapTitle: "Intercambiar ancho y alto",
      ratioLocked: "Proporción bloqueada",
      lockRatio: "Bloquear proporción",
      width: "Ancho",
      height: "Alto",
      lockHint: "El ancho y el alto cambian juntos para mantener {ratio}.",
      totalArea: "Área total",
      sqIn: "pulg²",
      aspectRatio: "Relación de aspecto",
      digitalSize: "Tamaño digital (píxeles)",
      copySize: "Copiar tamaño",
      totalPixels: "Píxeles totales",
      megapixels: "Megapíxeles",
      ratioTitle: "Calcular el alto a partir del ancho según la proporción",
      ratios: ["1:1 Cuadrado", "4:3 Clásico", "16:9 Panorámico", "3:2 Foto 35 mm", "4:5 Galería", "5:7 Impresión"],
      centimeters: "Centímetros",
      millimeters: "Milímetros",
      points: "Puntos (72 / pulg)",
      surfaceArea: "Superficie",
      lengthInInches: "Longitud en pulgadas",
      lengthInPixels: "Longitud en píxeles",
      pixelsAt: "Píxeles a {dpi} DPI",
      copyPixels: "Copiar píxeles",
      formulaTitle: "La fórmula",
      formula: "Píxeles = Pulgadas × DPI",
      reverse: "Inversa: Pulgadas = Píxeles ÷ DPI",
      copyCss: "Copiar CSS",
    },
    visual: {
      eyebrow: "Estudio visual en tiempo real",
      title: "EL VISOR",
      highlight: "ARQUITECTÓNICO",
      description:
        "Observa cómo la escala física en pulgadas se traduce en estructuras de píxeles digitales en vivo. Alterna entre el dibujo de precisión, la lupa de píxeles de joyero y la exposición de galería.",
      modeAria: "Modo de vista previa",
      modes: { canvas: "Lienzo técnico", loupe: "Lupa de píxeles", gallery: "Salón de galería" },
      zoomOut: "Alejar",
      zoomIn: "Acercar",
      resetZoom: "Restablecer zoom",
      summary: "{w} por {h} pulgadas, {wpx} por {hpx} píxeles a {dpi} DPI",
      loupeTitle: "Una pulgada física bajo la lupa",
      loupeDesc: "Cómo cambia la densidad de la cuadrícula de la pantalla (72 DPI) al estándar CSS (96 DPI) y a la impresión artística (300 DPI).",
      loupe72: "72 DPI · Web antigua",
      loupe72Note: "Bordes de píxel gruesos visibles a simple vista.",
      loupe96: "96 DPI · CSS del W3C",
      loupe96Note: "1 pulgada equivale exactamente a 96 píxeles CSS.",
      loupe300: "300 DPI · Archivo",
      loupe300Note: "Tono continuo sin cortes.",
      yourSetting: "Tu ajuste:",
    },
    slides: {
      eyebrow: "Clase magistral visual y diapositivas",
      title: "PULGADAS A PÍXELES",
      highlight: "VISUALES Y DIAPOSITIVAS",
      description:
        "Una exploración visual interactiva de la física de pulgadas a píxeles, los estándares del W3C, la geometría de subpíxeles Retina y las escalas de impresión de lujo.",
      carouselAria: "Diapositivas de pulgadas a píxeles",
      slide: "Diapositiva",
      pauseAria: "Pausar la presentación automática",
      playAria: "Iniciar la presentación automática",
      pause: "Pausa",
      play: "Reproducir",
      prev: "Diapositiva anterior",
      next: "Diapositiva siguiente",
      slideOf: "{n} de {total}: {title}",
      axiom: "Axioma matemático:",
      calibrate: "CALIBRAR EL CONVERSOR CON ESTA ESPECIFICACIÓN",
      chooseSlide: "Elegir diapositiva",
      slideLabel: "Diapositiva {n}: {title}",
      specsTitle: "Especificaciones de la diapositiva:",
      items: [
        {
          badge: "ARQUITECTURA FUNDAMENTAL",
          title: "El origen de la pulgada digital",
          subtitle: "Cómo la densidad convierte la distancia en realidad rasterizada",
          quote: "Una pulgada física es constante en bronce; en el mundo digital, su magnitud la dicta la densidad.",
          keyFormula: "Píxeles = Pulgadas × DPI (puntos por pulgada)",
          description:
            "A diferencia de una regla física de latón o acero, una pulgada digital no tiene un número fijo de píxeles. Su cantidad de píxeles crece directamente con los DPI (puntos por pulgada) del medio.",
          specs: [
            { label: "72 DPI (Web 1.0)", value: "72 píxeles" },
            { label: "96 DPI (estándar CSS)", value: "96 píxeles" },
            { label: "150 DPI (editorial)", value: "150 píxeles" },
            { label: "300 DPI (bellas artes)", value: "300 píxeles" },
            { label: "600 DPI (ultrafino)", value: "600 píxeles" },
          ],
        },
        {
          badge: "EL CANON FORMAL DEL W3C",
          title: "El estándar de 96 píxeles CSS",
          subtitle: "El ancla matemática de la web global",
          quote: "1in = 96px no es una aproximación: es una constante inmutable recogida en las especificaciones CSS del W3C.",
          keyFormula: "1 pulgada ≡ 96 px CSS ≡ 2,54 cm ≡ 72 pt ≡ 6 pc",
          description:
            "En 1996, el World Wide Web Consortium fijó el píxel de referencia a una distancia de visión de 28 pulgadas con un ángulo de 0,0213 grados. Así se estableció que 1 pulgada CSS corresponde exactamente a 96 píxeles CSS.",
          specs: [
            { label: "Distancia de referencia", value: "28 pulgadas (71 cm)" },
            { label: "Ángulo subtendido", value: "0,0213 grados" },
            { label: "Carta EE. UU. (8,5×11\")", value: "816 × 1056 px" },
            { label: "Puntos (pt) por pulgada", value: "72 pt" },
            { label: "Picas (pc) por pulgada", value: "6 pc" },
          ],
        },
        {
          badge: "ESTÁNDARES GICLÉE DE ARCHIVO",
          title: "Arte de museo y 300 DPI",
          subtitle: "El umbral imperceptible de la visión humana",
          quote: "La impresión de lujo exige un mínimo de 300 DPI: el punto en que cada gota de tinta se funde en un tono continuo.",
          keyFormula: "Píxeles necesarios = Pulgadas de destino × 300 DPI",
          description:
            "Al mirar copias de galería a una distancia normal de lectura de 12 a 14 pulgadas, la retina humana distingue hasta 300 puntos por pulgada. Por debajo de 300 DPI, el pixelado escalonado resta nitidez a los bordes.",
          specs: [
            { label: "Estándar de museo", value: "Giclée a 300 DPI" },
            { label: "Marco de lujo 16×20\"", value: "4800 × 6000 px" },
            { label: "Carga total del sensor", value: "28,8 megapíxeles" },
            { label: "Densidad de gotas de tinta", value: "1200 - 2400 gotas" },
            { label: "Durabilidad de archivo", value: "Más de 100 años" },
          ],
        },
        {
          badge: "PANTALLAS RETINA Y DE ALTA DENSIDAD",
          title: "La relación de píxeles del dispositivo (DPR)",
          subtitle: "Píxeles físicos frente a píxeles CSS abstractos",
          quote: "En una pantalla Super Retina 3x, 1 pulgada CSS sigue valiendo 96 unidades CSS, pero ocupa 288 diodos físicos.",
          keyFormula: "Px físicos del dispositivo = Px CSS × DPR (1x, 2x, 3x)",
          description:
            "Las pantallas Super Retina XDR de Apple y las modernas 4K/8K separan los píxeles físicos del hardware de los píxeles lógicos de CSS. Una línea CSS de 96 px en un iPhone 16 Pro se dibuja con casi 300 microsubpíxeles OLED físicos.",
          specs: [
            { label: "1 pulgada CSS", value: "96 px CSS" },
            { label: "Factor DPR de Apple", value: "3,00x Super Retina" },
            { label: "Px físicos de hardware", value: "288 px de hardware" },
            { label: "PPI del hardware", value: "460 PPI" },
            { label: "Disposición de subpíxeles", value: "OLED PenTile en diamante" },
          ],
        },
        {
          badge: "PROPORCIONES SELECCIONADAS",
          title: "La matriz de marcos de lujo",
          subtitle: "Tamaños arquitectónicos y artísticos estándar a 300 DPI",
          quote: "Las proporciones áureas del enmarcado clásico, traducidas a especificaciones digitales exactas.",
          keyFormula: "Calidad de archivo (300 DPI) = Exposición de galería impecable",
          description:
            "Desde los retratos clásicos de salón hasta las grandes piezas de museo, cada tamaño de marco en pulgadas corresponde a un lienzo de píxeles exacto para una reproducción sin defectos.",
          specs: [
            { label: "Retrato de galería 8 × 10\"", value: "2400 × 3000 px" },
            { label: "Copia de salón 11 × 14\"", value: "3300 × 4200 px" },
            { label: "Marco de coleccionista 16 × 20\"", value: "4800 × 6000 px" },
            { label: "Gran formato 24 × 36\"", value: "7200 × 10.800 px" },
            { label: "Mural de museo 40 × 60\"", value: "12.000 × 18.000 px" },
          ],
        },
      ],
      spectrum: {
        title: "1 PULGADA FÍSICA EN DISTINTAS DENSIDADES",
        bars: ["72 DPI (pantalla antigua)", "96 DPI (CSS del W3C)", "150 DPI (prueba editorial)", "300 DPI (giclée artístico)"],
        note: "A 300 DPI, 1 pulgada contiene más de 4 veces los píxeles de los antiguos estándares web.",
      },
      w3c: {
        title: "PÍXEL DE REFERENCIA Y ÁNGULO DEL W3C",
        observer: "Observador",
        distance: "Distancia de visión de 28\" (0,0213°)",
        cssInch: "Pulgada CSS",
        centimeters: "Centímetros",
        typographyPt: "Puntos tipográficos",
        picas: "Picas",
      },
      fineart: {
        title: "PIXELADO RASTER FRENTE A TONO GICLÉE CONTINUO",
        printed72: "Impreso a 72 DPI",
        jagged: "Bordes dentados visibles (aliasing)",
        archival300: "Archivo a 300 DPI",
        smooth: "Curva continua y nítida",
        summary: "16 × 20 pulgadas a 300 DPI = 4800 × 6000 píxeles (28,8 MP)",
      },
      retina: {
        title: "GEOMETRÍA DE SUBPÍXELES Y RELACIÓN DE PÍXELES",
        rows: [
          { name: "Pantalla 1x DPR", device: "Monitor estándar antiguo", value: "1 px CSS = 1 px físico" },
          { name: "2x DPR (Retina)", device: "MacBook Pro y iPad Pro", value: "1 px CSS = 4 px físicos (2×2)" },
          { name: "3x DPR (Super Retina XDR)", device: "iPhone Pro OLED", value: "1 px CSS = 9 px físicos (3×3)" },
        ],
        summary: "1 pulgada en iPhone 16 Pro = 96 px CSS = ",
        summaryStrong: "288 píxeles físicos",
      },
      framing: {
        title: "PROPORCIONES DE PARED DE GALERÍA A 300 DPI",
        sensor: "Sensor: {mp}",
        note: "Para grandes formatos (24×36\" o más), los sensores de formato medio de alta resolución o el escalado con IA evitan el grano.",
      },
    },
    presets: {
      eyebrow: "Índice de dimensiones seleccionadas",
      title: "LA MATRIZ DE",
      highlight: "DIMENSIONES",
      description:
        "Un compendio de dimensiones de referencia para enmarcado de museo, papelería editorial, pantallas insignia y recursos digitales.",
      filterAria: "Filtrar tamaños por categoría",
      categories: {
        all: "Todos los formatos",
        art: "Arte y enmarcado",
        editorial: "Editorial y libros",
        device: "Pantallas de dispositivos",
        social: "Digital y redes",
      },
      showing: "Mostrando {shown} de {total} tamaños",
      recommended: "{dpi} DPI recomendados",
      physicalSize: "Tamaño físico",
      web: "96 DPI (web)",
      print: "300 DPI (impresión)",
      use: "USAR ESTE TAMAÑO",
      useAria: "Usar {name} a {dpi} DPI en el conversor",
      items: [
        { name: "Retrato de galería clásico 8 × 10\"", description: "Estándar icónico de retrato de museo y enmarcado artístico." },
        { name: "Copia de exposición 11 × 14\"", description: "Copia de archivo estándar para galerías de interior." },
        { name: "Marco de pared de coleccionista 16 × 20\"", description: "Dimensión preferida para espacios con gran impacto visual." },
        { name: "Obra de gran formato 24 × 36\"", description: "Pieza central para residencias de lujo." },
        { name: "Mural arquitectónico 30 × 40\"", description: "Pieza a escala de museo con toda la profundidad tonal." },
        { name: "Hoja Carta EE. UU. 8,5 × 11\"", description: "Papelería estándar estadounidense para documentos." },
        { name: "A4 internacional 8,27 × 11,69\"", description: "Papel estándar mundial (ISO 216) para impresión internacional." },
        { name: "Tarjeta de visita ejecutiva 3,5 × 2,0\"", description: "Estándar de tarjeta de visita a medida con estampado dorado." },
        { name: "Libro de arte monográfico 12 × 12\"", description: "Doble página cuadrada de libro de mesa de lujo." },
        { name: "Pantalla del iPhone 16 Pro (física)", description: "Dimensión física de la pantalla Super Retina insignia." },
        { name: "Pantalla del MacBook Pro de 16,2\" (física)", description: "Dimensión física de la pantalla Liquid Retina XDR." },
        { name: "Televisor 4K de 55\" (físico)", description: "Dimensiones físicas de un panel UHD de 3840×2160." },
        { name: "Lienzo cuadrado de 1080 × 1080 px", description: "Recurso cuadrado de 1080 px expresado en pulgadas a 96 DPI." },
        { name: "Reel/Historia vertical de 1080 × 1920 px", description: "Lienzo móvil a pantalla completa (proporción 9:16)." },
      ],
    },
    hubCalc: {
      titleIn: "Calculadora de pulgadas a píxeles",
      titlePx: "Calculadora de píxeles a pulgadas",
      size: "Tamaño",
      customSize: "Tamaño personalizado",
      width: "Ancho",
      height: "Alto",
      dpi: "DPI",
      custom: "Otro",
      dpiError: "Usa un valor de DPI entre 1 y {max}.",
      result: "Resultado",
      resultSub: "{w} × {h} {unit} a {dpi} DPI",
      enterBoth: "Introduce un ancho y un alto mayores que 0.",
      needMore: "¿Necesitas bloquear la proporción, más unidades o una vista previa?",
      openFull: "Abrir el conversor completo",
    },
    sizeLabels,
  },
  content: {
    meta: {
      siteTitle: "Calculadora de pulgadas a píxeles | Convierte con PPI",
      siteDescription:
        "Convierte pulgadas a píxeles con el PPI que elijas. Aprende la fórmula, calcula ancho y alto y consulta dimensiones de ejemplo para impresión y CSS.",
    },
    page: {
      skipToConverter: "Saltar al conversor",
      skipToCalculator: "Saltar a la calculadora",
      breadcrumb: "Ruta de navegación",
      related: "Páginas relacionadas",
      relatedHome: "Conversor de pulgadas a píxeles",
      hubFaqDescription: "Respuestas breves a las preguntas más habituales sobre este tema.",
    },
    footer: {
      blurb:
        "Conversor gratuito de pulgadas a píxeles para pantalla e impresión. Convierte cualquier tamaño a cualquier DPI, comprueba tamaños de impresión y consulta valores habituales en un solo lugar.",
      openConverter: "Abrir el conversor",
      pages: "Páginas",
      copyright: "© 2026 Inches to Pixel.",
      backToTop: "VOLVER ARRIBA",
    },
    home: {
      intro:
        "Convierte pulgadas a píxeles multiplicando la medida por la resolución en píxeles por pulgada (PPI). A 300 PPI, 1 pulgada equivale a 300 píxeles. El resultado depende del PPI que uses: no existe un único factor de conversión válido para todas las imágenes.",
      howTo: {
        heading: "Cómo convertir pulgadas a píxeles",
        steps: [
          "Introduce la longitud que quieres convertir, medida en pulgadas.",
          "Usa el PPI que requiere tu proyecto. Para impresión, consulta la resolución de imagen que exige tu proveedor de impresión.",
          "Calcula el número de píxeles. Para el ancho y el alto de una imagen, convierte cada dimensión por separado con el mismo PPI.",
        ],
        note: "Indica siempre el PPI junto al resultado: «1200 píxeles a 300 PPI» dice mucho más sobre el tamaño de impresión previsto que «1200 píxeles» a secas.",
      },
      formula: {
        heading: "Fórmula y ejemplos",
        main: "Píxeles = pulgadas × PPI",
        explain:
          "Aquí, las pulgadas son la longitud física y el PPI es el número de píxeles de imagen por pulgada. Al multiplicarlos se obtiene el número de píxeles a lo largo de esa dimensión.",
        backwardLead: "Para hacer el cálculo inverso:",
        backward: "Pulgadas = píxeles ÷ PPI",
        examples: [
          {
            heading: "Ejemplo: una sola longitud",
            lead: "A 96 PPI, una longitud de 2 pulgadas se convierte en:",
            math: ["2 × 96 = 192 píxeles"],
            after: [
              "El resultado es exacto para el PPI indicado. No significa que todas las pantallas muestren 192 píxeles en dos pulgadas físicas.",
            ],
          },
          {
            heading: "Ejemplo: ancho y alto para una impresión",
            lead: "Para una imagen de 8,5 × 11 pulgadas a 300 PPI:",
            math: ["Ancho: 8,5 × 300 = 2550 píxeles", "Alto: 11 × 300 = 3300 píxeles"],
            after: [
              "Las dimensiones de imagen necesarias son 2550 × 3300 píxeles, sin contar el sangrado adicional que pueda pedir el proveedor de impresión.",
            ],
          },
          {
            heading: "Ejemplo: un resultado con decimales",
            lead: "Para 2,33 pulgadas a 150 PPI:",
            math: ["2,33 × 150 = 349,5 píxeles"],
            after: [
              "El resultado matemático es exacto, pero una imagen rasterizada necesita dimensiones en píxeles enteros. Redondeando al píxel entero más cercano, con las mitades hacia arriba, se obtienen 350 píxeles. A 150 PPI, eso equivale aproximadamente a 2,333 pulgadas.",
            ],
          },
        ],
        closing:
          "Los ejemplos muestran resultados exactos salvo que se indique un redondeo. Redondea solo en el último paso, según los requisitos de tu proyecto.",
      },
      reference: {
        heading: "Tabla de referencia de pulgadas a píxeles",
        intro:
          "Cada valor es una longitud en píxeles al PPI indicado. Son resoluciones de ejemplo, no requisitos universales.",
        table: homeTable("es", { corner: "Longitud (pulgadas)", col: "Píxeles a {ppi} PPI" }),
        caption: "Pulgadas a píxeles a 72, 96, 150 y 300 PPI",
        footnote: "Todos los valores de la tabla son exactos para los datos indicados.",
      },
      guide: { eyebrow: "Fundamentos teóricos", title: "PÍXELES, TAMAÑO DE IMPRESIÓN Y", highlight: "PPI" },
      explainers: [
        {
          heading: "Píxeles de imagen, tamaño de impresión y píxeles CSS",
          paragraphs: [
            "Las dimensiones de una imagen describen su ancho y alto en píxeles. Las dimensiones de impresión describen su tamaño físico en pulgadas. El PPI relaciona ambas: las mismas dimensiones en píxeles pueden dar distintos tamaños de impresión según la resolución.",
            "CSS usa una relación fija distinta: 1in = 96px. Son unidades de referencia de CSS. Un píxel CSS no es necesariamente un píxel físico del dispositivo, y una pulgada CSS en pantalla no mide necesariamente una pulgada real. Usa esta relación para medidas CSS, sin suponer que todas las pantallas tienen una densidad de 96 PPI.",
          ],
        },
        {
          heading: "PPI y DPI describen cosas distintas",
          paragraphs: [
            "PPI significa píxeles por pulgada en una imagen. DPI significa puntos por pulgada que produce una impresora. Están relacionados en los flujos de impresión, pero no son magnitudes intercambiables. Para calcular píxeles de imagen, usa el PPI requerido en lugar de la resolución DPI del hardware de la impresora.",
          ],
        },
        {
          heading: "Cambiar el PPI no añade detalle a la imagen",
          paragraphs: [
            "Cambiar solo los metadatos de PPI deja intacto el número de píxeles de la imagen; cambia la relación prevista entre esos píxeles y el tamaño de impresión. El remuestreo sí cambia el número de píxeles. Asignar un PPI más alto no crea detalle nuevo.",
          ],
        },
      ],
      browse: "Explorar por tema",
      faqDescription: "Respuestas a las preguntas más comunes sobre cómo convertir pulgadas a píxeles.",
      faqs: [
        {
          question: "¿Qué PPI debo usar?",
          answer:
            "Usa el valor que exija el resultado final. Para imprimir, pregunta a tu proveedor de impresión qué PPI de imagen necesita al tamaño final. Para una subida digital que indique dimensiones en píxeles, sigue esas dimensiones directamente. Valores como 72, 96, 150 y 300 PPI son ejemplos, no reglas para todos los proyectos.",
        },
        {
          question: "¿Convertir a píxeles cambia la relación de aspecto?",
          answer:
            "Usar el mismo PPI para el ancho y el alto mantiene su proporción antes de redondear. Una imagen 1:1 tiene el mismo ancho y alto: por ejemplo, 4 × 4 pulgadas a 300 PPI dan 1200 × 1200 píxeles. La proporción describe la forma, no la resolución.",
        },
        {
          question: "¿Puedo calcular el tamaño de impresión de una imagen existente?",
          answer:
            "Sí. Divide cada dimensión en píxeles entre el PPI previsto. Una imagen de 1800 × 1200 píxeles a 300 PPI corresponde a 6 × 4 pulgadas. Recortar o escalar al imprimir puede cambiar el tamaño final.",
        },
      ],
    },
    hubs: {
      dpi: {
        nav: "DPI",
        h1: "Conversor de pulgadas a píxeles por DPI",
        seoTitle: "Conversor de pulgadas a píxeles por DPI | Tamaño de impresión",
        description:
          "Convierte pulgadas a píxeles con el DPI de tu proyecto. Usa la fórmula, ejemplos resueltos y una tabla de 72 a 600 DPI para comprobar las dimensiones de imagen para impresión.",
        answer:
          "Calcula las dimensiones en píxeles a partir de una medida física y la resolución elegida. Multiplica las pulgadas por el DPI indicado: a 300 DPI, 4 pulgadas equivalen a 1200 píxeles.",
        introNotes: [
          "En esta conversión, DPI significa la densidad de píxeles de la imagen de destino, técnicamente llamada PPI. Usa la resolución que requiere tu proyecto; una pulgada no tiene un único valor en píxeles.",
        ],
        sections: [
          {
            heading: "Cómo convertir pulgadas a píxeles",
            blocks: [
              {
                type: "steps",
                items: [
                  "Introduce la longitud física en pulgadas.",
                  "Introduce la resolución de destino. Para impresión, usa la resolución de imagen que pide tu proveedor de impresión.",
                  "Multiplica las pulgadas por esa resolución para obtener la longitud en píxeles.",
                  "Para una imagen, calcula el ancho y el alto por separado con la misma resolución.",
                ],
              },
              {
                type: "note",
                text: "Mantén la proporción original entre ancho y alto al convertir un diseño existente. Cambiar esa proporción obliga a recortar o estirar.",
              },
            ],
          },
          {
            heading: "Fórmula y ejemplos resueltos",
            blocks: [
              { type: "math", lines: ["Píxeles = Pulgadas × DPI"], large: true },
              { type: "p", text: "Donde:" },
              {
                type: "list",
                items: [
                  "Píxeles es la longitud digital en píxeles, abreviada px.",
                  "Pulgadas es la longitud física prevista.",
                  "DPI es el valor de conversión elegido, entendido como píxeles de imagen por pulgada.",
                ],
              },
              { type: "p", text: "Para una imagen rectangular:" },
              {
                type: "math",
                lines: ["Ancho en píxeles = Ancho en pulgadas × DPI", "Alto en píxeles = Alto en pulgadas × DPI"],
              },
              {
                type: "sub",
                heading: "Una imagen de 8 × 10 pulgadas a 300 DPI",
                blocks: [
                  { type: "p", text: "Si tu proyecto requiere 300 PPI:" },
                  { type: "math", lines: ["Ancho: 8 × 300 = 2400 px", "Alto: 10 × 300 = 3000 px"] },
                  { type: "p", text: "Las dimensiones necesarias son 2400 × 3000 píxeles. Estos resultados son exactos." },
                ],
              },
              {
                type: "sub",
                heading: "Una longitud de 2,5 pulgadas a 96 DPI",
                blocks: [
                  { type: "math", lines: ["2,5 × 96 = 240 px"] },
                  {
                    type: "p",
                    text: "Con una densidad de 96 píxeles por pulgada, 2,5 pulgadas corresponden exactamente a 240 píxeles. La misma longitud con otra densidad da un resultado distinto.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Un resultado con decimales a 150 DPI",
                blocks: [
                  { type: "math", lines: ["1,23 × 150 = 184,5 px"] },
                  {
                    type: "p",
                    text: "Una imagen rasterizada necesita dimensiones en píxeles enteros. Redondeando al píxel entero más cercano, con las mitades hacia arriba, se obtienen 185 px.",
                  },
                ],
              },
              {
                type: "note",
                text: "Redondea solo el resultado final. Si una especificación de producción fija un mínimo de píxeles, redondea hacia arriba. Redondear el ancho y el alto por separado puede alterar ligeramente la proporción, así que revisa las dimensiones finales cuando la proporción exacta importe.",
              },
            ],
          },
          {
            heading: "Tabla de referencia de pulgadas a píxeles",
            blocks: [
              {
                type: "p",
                text: "Todos los valores son exactos. La columna DPI representa la densidad de imagen de destino en PPI para este cálculo.",
              },
              {
                type: "table",
                caption: "Píxeles para 1, 4 y 6 pulgadas de 72 a 600 DPI",
                table: dpiTable("es", {
                  corner: "DPI indicado",
                  cols: ["1 pulgada", "4 pulgadas", "6 pulgadas"],
                  row: "{dpi} DPI",
                  cell: "{px} px",
                }),
              },
              {
                type: "p",
                text: "Por ejemplo, una imagen de 4 × 6 pulgadas a 300 DPI necesita 1200 × 1800 píxeles. A 72 DPI, el mismo tamaño físico corresponde a 288 × 432 píxeles.",
              },
            ],
          },
          {
            heading: "Elige la resolución adecuada para cada trabajo",
            blocks: [
              {
                type: "sub",
                heading: "DPI y PPI describen cosas distintas",
                blocks: [
                  {
                    type: "p",
                    text: "PPI significa píxeles por pulgada: los píxeles de imagen asignados a cada pulgada de salida. DPI significa puntos por pulgada: los puntos que puede producir una impresora. Son medidas distintas.",
                  },
                  {
                    type: "p",
                    text: "Cuando una especificación de impresión dice «300 DPI» para pedir una imagen de 300 PPI, usa 300 en el cálculo. No sustituyas el PPI de imagen requerido por la resolución DPI del hardware de la impresora.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "El tamaño físico y las dimensiones en píxeles van de la mano",
                blocks: [
                  {
                    type: "p",
                    text: "Las pulgadas describen el tamaño físico; las dimensiones en píxeles describen el ancho y el alto digitales de la imagen. Con un tamaño físico fijo, un PPI de destino más alto exige más píxeles.",
                  },
                  {
                    type: "p",
                    text: "Cambiar la resolución de una imagen existente sin remuestrear no añade píxeles. Cambia la relación entre su tamaño de impresión y su densidad de píxeles. El remuestreo cambia el número de píxeles, así que calcular un objetivo mayor no mejora por sí solo la imagen original.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Las medidas en pantalla necesitan contexto",
                blocks: [
                  {
                    type: "p",
                    text: "No supongas que todas las pantallas tienen 72 o 96 píxeles físicos por pulgada. CSS define 1 pulgada como 96 píxeles CSS, pero los píxeles CSS no son necesariamente píxeles individuales del dispositivo ni una medida física real en pantalla.",
                  },
                  {
                    type: "p",
                    text: "Para subir una imagen, sigue las dimensiones en píxeles que exige el destino. Para imprimir, sigue sus requisitos de tamaño físico y de resolución de imagen.",
                  },
                ],
              },
            ],
          },
        ],
        faq: [
          {
            question: "¿Cómo lo uso como calculadora de 300 DPI?",
            answer:
              "Usa 300 como resolución de destino y multiplica cada medida en pulgadas por 300. Por ejemplo, una imagen de 5 × 7 pulgadas necesita 1500 × 2100 píxeles a 300 PPI.",
          },
          {
            question: "¿Puedo convertir pulgadas a píxeles sin conocer el DPI?",
            answer:
              "Sin una densidad de píxeles de destino no hay una respuesta única. Una longitud de 2 pulgadas corresponde a 144 píxeles a 72 PPI, 192 píxeles a 96 PPI o 600 píxeles a 300 PPI.",
          },
          {
            question: "¿Debo incluir el sangrado en las dimensiones?",
            answer:
              "Si tu proveedor de impresión exige sangrado, calcula a partir del tamaño total del arte incluido ese sangrado. Por ejemplo, un diseño de 4 × 6 pulgadas con 0,125 pulgadas de sangrado por cada lado pasa a 4,25 × 6,25 pulgadas. A 300 PPI, eso son 1275 × 1875 píxeles. Usa la especificación de sangrado real de tu proveedor.",
          },
        ],
      } as HubText,
      software: {
        nav: "Software",
        h1: "Pulgadas a píxeles en software",
        seoTitle: "Pulgadas a píxeles en software: guía de conversión PPI",
        description:
          "Convierte pulgadas a píxeles con el PPI de tu proyecto. Consulta ejemplos resueltos y descubre cómo las dimensiones, el remuestreo y los ajustes de exportación afectan al resultado.",
        answer:
          "Convierte pulgadas a píxeles multiplicando la medida en pulgadas por los píxeles por pulgada (PPI) requeridos. Una pulgada equivale a 300 px a 300 PPI o a 96 px a 96 PPI. Al convertir en un programa, usa la resolución que exige tu salida, no un valor predeterminado supuestamente universal.",
        sections: [
          {
            heading: "Cómo convertir tus dimensiones",
            blocks: [
              {
                type: "steps",
                items: [
                  "Identifica el ancho o el alto que necesitas en pulgadas.",
                  "Elige el PPI que requiere esa salida. Para imprimir, consulta la resolución de imagen que especifica la imprenta.",
                  "Calcula el número de píxeles con la medida en pulgadas y el PPI.",
                  "Repite el cálculo para la otra dimensión con el mismo PPI.",
                ],
              },
              {
                type: "note",
                text: "Si partes de una imagen existente, conserva sus proporciones. Si el ancho y el alto requeridos tienen otra relación de aspecto, recorta la imagen o añade espacio alrededor en lugar de estirarla.",
              },
            ],
          },
          {
            heading: "Fórmula y ejemplos",
            blocks: [
              { type: "math", lines: ["Píxeles = Pulgadas × PPI"], large: true },
              {
                type: "list",
                items: [
                  "Píxeles (px): el número de píxeles de imagen a lo largo de una dimensión.",
                  "Pulgadas (in): la longitud física prevista de esa dimensión.",
                  "PPI: el número de píxeles de imagen por pulgada a ese tamaño.",
                ],
              },
              { type: "p", text: "El cálculo se aplica por separado al ancho y al alto." },
              {
                type: "sub",
                heading: "Una imagen de 4 × 6 pulgadas a 300 PPI",
                blocks: [
                  { type: "math", lines: ["Ancho: 4 × 300 = 1200 px", "Alto: 6 × 300 = 1800 px"] },
                  {
                    type: "p",
                    text: "Las dimensiones de destino son 1200 × 1800 px, sin sangrado ni borde adicionales.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Una imagen de 8 × 10 pulgadas a 150 PPI",
                blocks: [
                  { type: "math", lines: ["Ancho: 8 × 150 = 1200 px", "Alto: 10 × 150 = 1500 px"] },
                  {
                    type: "p",
                    text: "El resultado es 1200 × 1500 px. Este ejemplo usa 150 PPI como requisito indicado, no como recomendación para cualquier trabajo de impresión.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Una medida con decimales",
                blocks: [
                  { type: "p", text: "Para un ancho de 2,125 pulgadas a 300 PPI:" },
                  { type: "math", lines: ["2,125 × 300 = 637,5 px"] },
                  {
                    type: "p",
                    text: "El resultado matemático es exacto, pero una imagen rasterizada necesita un ancho entero. Redondeando al píxel más cercano, usa 638 px. A 300 PPI, eso equivale aproximadamente a 2,127 pulgadas.",
                  },
                ],
              },
              {
                type: "note",
                text: "Redondea al final del cálculo. Si una especificación de producción fija un mínimo de píxeles, redondea hacia arriba cuando sea necesario para cumplirlo.",
              },
            ],
          },
          {
            heading: "Tabla de conversión rápida",
            blocks: [
              {
                type: "p",
                text: "Estos valores son exactos para el PPI indicado. Las columnas son ejemplos de cálculo, no valores predeterminados de ningún programa.",
              },
              {
                type: "table",
                caption: "Pulgadas a píxeles a 96, 150 y 300 PPI",
                table: softwareTable("es", {
                  corner: "Longitud (pulgadas)",
                  cols: ["A 96 PPI (px)", "A 150 PPI (px)", "A 300 PPI (px)"],
                }),
              },
            ],
          },
          {
            heading: "Aplica el resultado en tu software",
            blocks: [
              {
                type: "sub",
                heading: "Photoshop: distingue entre redimensionar y remuestrear",
                blocks: [
                  {
                    type: "p",
                    text: "Compara las dimensiones en píxeles de destino con las de la imagen actual antes de hacer cambios.",
                  },
                  {
                    type: "p",
                    text: "Con el remuestreo desactivado, cambiar el PPI mantiene el número de píxeles y cambia el tamaño de impresión previsto. Con el remuestreo activado, cambiar el tamaño o la resolución puede añadir o eliminar píxeles. Mantén el ancho y el alto proporcionales al redimensionar. Adobe explica estas relaciones en su guía sobre cambio de tamaño y remuestreo.",
                  },
                  {
                    type: "p",
                    text: "Aumentar solo el PPI no crea más detalle. Ampliar mediante remuestreo añade píxeles calculados; no recupera el detalle que falta en el original.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Illustrator: revisa la resolución de exportación raster",
                blocks: [
                  {
                    type: "p",
                    text: "Una ilustración vectorial no tiene un número fijo de píxeles. Al exportarla a un formato raster como PNG o JPEG, el tamaño físico de la ilustración y la resolución de exportación determinan las dimensiones de salida.",
                  },
                  {
                    type: "p",
                    text: "Por ejemplo, un área de exportación de 4 pulgadas de ancho a 300 PPI necesita 1200 px de ancho. Comprueba las dimensiones del archivo exportado, sobre todo si la exportación incluye márgenes o límites adicionales. Los ajustes disponibles en Illustrator dependen del formato de exportación.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Figma: ten en cuenta la escala de exportación",
                blocks: [
                  {
                    type: "p",
                    text: "Para un recurso raster, calcula primero los píxeles de salida necesarios y después ten en cuenta la escala de exportación. Un marco de 600 píxeles de ancho exportado a 2× produce una imagen de 1200 píxeles de ancho. No apliques otro multiplicador si tu marco ya tiene las dimensiones de salida. Consulta los formatos y ajustes de exportación de Figma.",
                  },
                  {
                    type: "p",
                    text: "Para una imagen de 4 pulgadas de ancho destinada a imprimirse a 300 PPI, el objetivo es 1200 px de ancho, sea cual sea la combinación de marco y escala que uses para obtenerla.",
                  },
                ],
              },
            ],
          },
          {
            heading: "Evita errores comunes de conversión",
            blocks: [
              {
                type: "sub",
                heading: "PPI y DPI describen cosas distintas",
                blocks: [
                  {
                    type: "p",
                    text: "El PPI mide los píxeles de imagen por pulgada; el DPI suele medir los puntos por pulgada de una impresora. Si una especificación de impresión usa «DPI» para una imagen, confirma si se refiere al PPI de imagen requerido. No uses automáticamente la resolución de puntos del hardware de la impresora como dato del conversor.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Los píxeles CSS son unidades lógicas",
                blocks: [
                  {
                    type: "p",
                    text: "CSS define 1 pulgada como 96 píxeles CSS. Eso no significa que toda imagen deba usar 96 PPI, ni que un elemento de una pulgada CSS mida una pulgada física en todas las pantallas. Las pantallas de alta densidad pueden usar varios píxeles del dispositivo por cada píxel CSS. Consulta la explicación del W3C sobre las unidades CSS.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Comprueba el resultado final, no solo el tamaño del documento",
                blocks: [
                  {
                    type: "p",
                    text: "Al preparar una imagen para Canva, Procreate, Paint, InDesign, Word, PowerPoint o Google Slides, distingue entre las dimensiones en píxeles de la imagen y su tamaño colocado. Verifica las dimensiones finales y el tamaño de impresión previsto en lugar de suponer que el nombre del programa determina la conversión.",
                  },
                ],
              },
            ],
          },
        ],
        faq: [
          {
            question: "¿Qué PPI debo usar?",
            answer:
              "Usa la resolución que exija tu flujo de salida. Para imprimir, pregunta a la imprenta. Para un recurso de pantalla indicado en píxeles, usa directamente esas dimensiones; puede que no necesites convertir pulgadas.",
          },
          {
            question: "¿Por qué la misma imagen se ve de distinto tamaño en cada programa?",
            answer:
              "Un programa puede ajustar la imagen a la página, mostrarla con un nivel de zoom concreto o usar los metadatos de resolución para decidir su tamaño colocado. Su tamaño aparente no indica por sí solo si cambiaron sus dimensiones en píxeles.",
          },
          {
            question: "¿Puedo calcular pulgadas a píxeles en Excel o Google Sheets?",
            answer:
              "Sí. Si la celda A2 contiene pulgadas y B2 contiene el PPI, usa:\n=A2*B2\nPara redondear una medida positiva al píxel entero más cercano, usa (en Excel en español):\n=REDONDEAR(A2*B2;0)\nEsto calcula una dimensión en píxeles; no cambia el tamaño de una imagen ni el ancho de una columna de la hoja.",
          },
        ],
      } as HubText,
      print: printHub("es", {
        nav: "Impresión y foto",
        h1: "Pulgadas a píxeles para impresión, fotos e imágenes",
        description:
          "Cuántos píxeles necesitas para una impresión nítida: fotos de 4×6, 5×7, 8×10 y 11×14 pulgadas a 150 y 300 DPI, con calculadora de tamaño de impresión.",
        answer: "Para una impresión nítida necesitas el tamaño de impresión × 300 píxeles en cada lado.",
        printing: {
          heading: "Impresión",
          body: "Píxeles necesarios = tamaño de impresión en pulgadas × DPI de impresión. La mayoría de las imprentas apuntan a 300 DPI.",
          corner: "Tamaño de impresión",
          row: "{w} × {h} pulg",
        },
        photos: {
          heading: "Fotos e imágenes",
          body: "Una foto con pocos píxeles se ve borrosa al imprimirla en grande. Compara el tamaño en píxeles de tu imagen con la tabla anterior antes de encargar copias.",
        },
        faq: [
          {
            question: "¿Puedo ampliar una foto pequeña?",
            answer: "Al ampliar se añaden píxeles, pero no detalle, por eso las ampliaciones grandes se ven borrosas.",
          },
        ],
      }),
      sizes: sizesHub(
        "es",
        {
          nav: "Tamaños",
          h1: "Tamaños comunes de impresión y papel en píxeles",
          description:
            "Carta, A4, 4×6, 5×7, 8×10, 18×24, 24×36 y tamaño tarjeta en píxeles a 72, 150 y 300 DPI. Elige un tamaño y conviértelo al instante.",
          answer: "El papel Carta (8,5 × 11 pulg) mide 2550 × 3300 px a 300 DPI.",
          overview: {
            heading: "Todos los tamaños comunes de un vistazo",
            body: "Tamaño en píxeles de cada formato a 72, 150 y 300 DPI.",
            corner: "Tamaño",
          },
          sizeBody:
            "{label} mide {w} × {h} pulg. A 300 DPI son {w300} × {h300} px, y a 72 DPI son {w72} × {h72} px.",
          faq: [
            {
              question: "¿Qué tamaño es el más habitual para imprimir?",
              answer: "Carta y A4 para documentos; 4 × 6 y 5 × 7 para fotos.",
            },
          ],
        },
        sizeLabels,
      ),
      chart: chartHub("es", {
        nav: "Tabla",
        h1: "Tabla de pulgadas a píxeles (todos los valores comunes)",
        description:
          "Tabla de pulgadas a píxeles de 1/8 a 96 pulgadas a 72, 96, 150 y 300 DPI. Encuentra cualquier valor común de un vistazo.",
        answer: "Encuentra cualquier medida de 1/8 a 96 pulgadas a 72, 96, 150 y 300 DPI.",
        chart: {
          heading: "Tabla de conversión",
          body: "La tabla de referencia completa. Cada fila es un valor al que puedes enlazar.",
          corner: "Pulgadas",
        },
        items: ["1/8 de pulgada", "2 pulgadas", "2,5 pulgadas", "3 pulgadas", "4 pulgadas", "5 pulgadas", "8,5 pulgadas"],
        itemBody:
          "{label} equivale a {px72} px a 72 DPI, {px96} px a 96 DPI, {px150} px a 150 DPI y {px300} px a 300 DPI.",
        faq: [
          {
            question: "¿Dónde están los demás valores?",
            answer: "Valores como 10, 12, 24 o 48 pulgadas son filas de la tabla de conversión anterior.",
          },
        ],
      }),
    },
  },
};
