/** Portuguese (Português). Same shape as en.ts. */
import type { HubText } from "../../lib/hubs";
import { chartHub, dpiTable, homeTable, printHub, sizesHub, softwareTable } from "../build";
import type { Messages } from "./en";

const sizeLabels = [
  "8,5 × 11 polegadas (Carta)",
  "Formato A4",
  "5 × 7 polegadas",
  "4 × 6 polegadas",
  "8 × 10 polegadas",
  "18 × 24 polegadas",
  "24 × 36 polegadas",
  "2 × 2 polegadas",
  "Formato cartão (2,5 × 3,5)",
];

export const pt: Messages = {
  ui: {
    common: {
      pageNames: { home: "Início", dpi: "DPI", software: "Software", print: "Impressão e foto", sizes: "Tamanhos", chart: "Tabela" },
      quality: { archival: "Qualidade de impressão de arquivo", proof: "Qualidade de prova de impressão", screen: "Resolução de ecrã" },
      qualityInline: { archival: "qualidade de impressão de arquivo", proof: "qualidade de prova de impressão", screen: "resolução de ecrã" },
      copied: "Copiado!",
      copyFailed: "Falha ao copiar",
    },
    nav: {
      brandSub: "CONVERSOR DE DPI E PPI",
      homeAria: "Início do Inches to Pixel",
      topAria: "Inches to Pixel, voltar ao topo",
      pagesAria: "Páginas",
      pages: "Páginas",
      onThisPage: "Nesta página",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      share: "Partilhar",
      linkCopied: "Link copiado",
      sections: { converter: "Conversor", visual: "Escala visual", slides: "Diapositivos", presets: "Tamanhos", guide: "Guia de DPI", faq: "FAQ" },
      language: "Idioma",
      languageAria: "Escolher idioma",
    },
    theme: { toDark: "Mudar para modo escuro", toLight: "Mudar para modo claro", dark: "Modo escuro", light: "Modo claro" },
    footer: { languages: "Idiomas" },
    faq: { eyebrow: "Perguntas frequentes", title: "RESPOSTAS DE", highlight: "ESPECIALISTA" },
    hero: {
      badge: "A arte da escala digital",
      badgeRule: "1 POL = 96 PX",
      h1Before: "Calculadora de polegadas para ",
      h1Highlight: "píxeis",
      h1After: "",
      shelfTitle: "Escolha a resolução de destino (DPI / PPI)",
      tags: { standard: "Padrão", fineArt: "Belas-artes" },
      presets: [
        { label: "Padrão web", desc: "Web antiga e ecrãs" },
        { label: "Padrão CSS", desc: "W3C e Windows nativo" },
        { label: "Rascunho editorial", desc: "Jornais e provas" },
        { label: "Impressão artística", desc: "Giclée de museu e livros" },
        { label: "Ecrã Retina", desc: "OLED e telemóveis topo de gama" },
      ],
      equations: [
        { label: "Regra W3C", value: "1 in = 96 px", note: "padrão CSS" },
        { label: "Regra da impressão de museu", value: "1 in = 300 px", note: "a 300 DPI" },
        { label: "Correspondência métrica", value: "1 in = 2,54 cm", note: "= 25,4 mm" },
      ],
    },
    converter: {
      title: "Conversor de polegadas para píxeis",
      modeAria: "Modo do conversor",
      tabLengthShort: "Comprimento",
      tabLength: "Comprimento único (1D)",
      tabSizeShort: "L × A",
      tabSize: "Dimensões 2D (L × A)",
      resolution: "Resolução",
      dpiRange: "Use de 1 a {max}",
      enterAbove0: "Introduza um número maior que 0.",
      physicalSize: "Tamanho físico (polegadas)",
      swap: "Trocar",
      swapTitle: "Trocar largura e altura",
      ratioLocked: "Proporção bloqueada",
      lockRatio: "Bloquear proporção",
      width: "Largura",
      height: "Altura",
      lockHint: "A largura e a altura mudam em conjunto para manter {ratio}.",
      totalArea: "Área total",
      sqIn: "pol²",
      aspectRatio: "Proporção",
      digitalSize: "Tamanho digital (píxeis)",
      copySize: "Copiar tamanho",
      totalPixels: "Total de píxeis",
      megapixels: "Megapíxeis",
      ratioTitle: "Definir a altura a partir da largura pela proporção",
      ratios: ["1:1 Quadrado", "4:3 Clássico", "16:9 Panorâmico", "3:2 Foto 35 mm", "4:5 Galeria", "5:7 Impressão"],
      centimeters: "Centímetros",
      millimeters: "Milímetros",
      points: "Pontos (72 / pol)",
      surfaceArea: "Área",
      lengthInInches: "Comprimento em polegadas",
      lengthInPixels: "Comprimento em píxeis",
      pixelsAt: "Píxeis a {dpi} DPI",
      copyPixels: "Copiar píxeis",
      formulaTitle: "A fórmula",
      formula: "Píxeis = Polegadas × DPI",
      reverse: "Inverso: Polegadas = Píxeis ÷ DPI",
      copyCss: "Copiar CSS",
    },
    visual: {
      eyebrow: "Vista em tempo real",
      title: "A JANELA",
      highlight: "ARQUITETÓNICA",
      description:
        "Veja a escala física em polegadas transformar-se em estruturas de píxeis digitais em tempo real. Alterne entre o desenho de precisão, a lupa de joalheiro e a exposição em galeria.",
      modeAria: "Modo de pré-visualização",
      modes: { canvas: "Tela técnica", loupe: "Lupa de píxeis", gallery: "Salão de galeria" },
      zoomOut: "Diminuir zoom",
      zoomIn: "Aumentar zoom",
      resetZoom: "Repor zoom",
      summary: "{w} por {h} polegadas, {wpx} por {hpx} píxeis a {dpi} DPI",
      loupeTitle: "Uma polegada física à lupa",
      loupeDesc: "Como a densidade da grelha muda do ecrã (72 DPI) para o padrão CSS (96 DPI) e para a impressão artística (300 DPI).",
      loupe72: "72 DPI · Web antiga",
      loupe72Note: "Arestas de píxeis grosseiras visíveis a olho nu.",
      loupe96: "96 DPI · CSS do W3C",
      loupe96Note: "1 polegada corresponde exatamente a 96 píxeis CSS.",
      loupe300: "300 DPI · Arquivo",
      loupe300Note: "Tom contínuo sem quebras.",
      yourSetting: "A sua definição:",
    },
    slides: {
      eyebrow: "Masterclass visual e diapositivos",
      title: "POLEGADAS PARA PÍXEIS:",
      highlight: "VISUAIS E DIAPOSITIVOS",
      description:
        "Uma exploração visual interativa da passagem de polegadas para píxeis, dos padrões do W3C, da geometria de subpíxeis Retina e dos formatos de impressão de luxo.",
      carouselAria: "Diapositivos de polegadas para píxeis",
      slide: "Diapositivo",
      pauseAria: "Pausar a apresentação automática",
      playAria: "Iniciar a apresentação automática",
      pause: "Pausa",
      play: "Reproduzir",
      prev: "Diapositivo anterior",
      next: "Diapositivo seguinte",
      slideOf: "{n} de {total}: {title}",
      axiom: "Axioma matemático:",
      calibrate: "AJUSTAR O CONVERSOR COM ESTA ESPECIFICAÇÃO",
      chooseSlide: "Escolher diapositivo",
      slideLabel: "Diapositivo {n}: {title}",
      specsTitle: "Especificações do diapositivo:",
      items: [
        {
          badge: "OS FUNDAMENTOS",
          title: "A génese da polegada digital",
          subtitle: "Como a densidade transforma distância em imagem raster",
          quote: "Uma polegada física é constante no bronze; no mundo digital, a sua grandeza é ditada pela densidade.",
          keyFormula: "Píxeis = Polegadas × DPI (pontos por polegada)",
          description:
            "Ao contrário de uma régua de latão ou aço, uma polegada digital não tem um número fixo de píxeis. A sua contagem de píxeis cresce diretamente com o DPI (pontos por polegada) do meio.",
          specs: [
            { label: "72 DPI (Web 1.0)", value: "72 píxeis" },
            { label: "96 DPI (padrão CSS)", value: "96 píxeis" },
            { label: "150 DPI (editorial)", value: "150 píxeis" },
            { label: "300 DPI (belas-artes)", value: "300 píxeis" },
            { label: "600 DPI (ultrafino)", value: "600 píxeis" },
          ],
        },
        {
          badge: "O CÂNONE FORMAL DO W3C",
          title: "O padrão de 96 píxeis CSS",
          subtitle: "A âncora matemática da web global",
          quote: "1in = 96px não é uma aproximação: é uma constante imutável definida nas especificações CSS do W3C.",
          keyFormula: "1 polegada ≡ 96 px CSS ≡ 2,54 cm ≡ 72 pt ≡ 6 pc",
          description:
            "Em 1996, o World Wide Web Consortium fixou o píxel de referência a uma distância de visualização de 28 polegadas, com um ângulo de 0,0213 graus. Assim ficou estabelecido que 1 polegada CSS corresponde matematicamente a exatamente 96 píxeis CSS.",
          specs: [
            { label: "Distância de referência", value: "28 polegadas (71 cm)" },
            { label: "Ângulo subtendido", value: "0,0213 graus" },
            { label: "Carta EUA (8,5×11\")", value: "816 × 1056 px" },
            { label: "Pontos (pt) por polegada", value: "72 pt" },
            { label: "Paicas (pc) por polegada", value: "6 pc" },
          ],
        },
        {
          badge: "PADRÕES GICLÉE DE ARQUIVO",
          title: "Arte de museu e 300 DPI",
          subtitle: "O limiar impercetível da visão humana",
          quote: "A verdadeira impressão de luxo exige no mínimo 300 DPI: é aí que cada gota de tinta se funde num tom contínuo.",
          keyFormula: "Píxeis necessários = Polegadas de destino × 300 DPI",
          description:
            "Ao observar impressões de galeria a uma distância normal de leitura de 12 a 14 polegadas, a retina humana distingue até 300 pontos por polegada. Abaixo de 300 DPI, a pixelização em escada prejudica a nitidez das arestas.",
          specs: [
            { label: "Padrão de museu", value: "Giclée a 300 DPI" },
            { label: "Moldura 16×20\"", value: "4800 × 6000 px" },
            { label: "Carga total do sensor", value: "28,8 megapíxeis" },
            { label: "Densidade de gotas", value: "1200 - 2400 gotas" },
            { label: "Durabilidade de arquivo", value: "Mais de 100 anos" },
          ],
        },
        {
          badge: "ECRÃS RETINA E DE ALTA DENSIDADE",
          title: "A relação de píxeis do dispositivo (DPR)",
          subtitle: "Píxeis físicos de hardware vs. píxeis CSS abstratos",
          quote: "Num ecrã Super Retina 3x, 1 polegada CSS continua a valer 96 unidades CSS, mas ocupa 288 díodos físicos.",
          keyFormula: "Px físicos do dispositivo = Px CSS × DPR (1x, 2x, 3x)",
          description:
            "Os ecrãs Super Retina XDR da Apple e os modernos ecrãs 4K/8K separam os píxeis físicos do hardware dos píxeis lógicos CSS. Uma linha CSS de 96 px num iPhone 16 Pro é desenhada em quase 300 microsubpíxeis OLED físicos.",
          specs: [
            { label: "1 polegada CSS", value: "96 px CSS" },
            { label: "Fator DPR da Apple", value: "3,00x Super Retina" },
            { label: "Px físicos de hardware", value: "288 px de hardware" },
            { label: "PPI do hardware", value: "460 PPI" },
            { label: "Disposição dos subpíxeis", value: "OLED PenTile em diamante" },
          ],
        },
        {
          badge: "PROPORÇÕES SELECIONADAS",
          title: "A matriz de molduras de luxo",
          subtitle: "Tamanhos arquitetónicos e artísticos padrão a 300 DPI",
          quote: "As proporções áureas da moldura clássica, traduzidas em especificações digitais exatas.",
          keyFormula: "Qualidade de arquivo (300 DPI) = Exposição de galeria impecável",
          description:
            "Dos retratos clássicos de salão às grandes peças de museu, cada tamanho de moldura em polegadas corresponde a uma tela de píxeis exata para uma reprodução sem falhas.",
          specs: [
            { label: "Retrato de galeria 8 × 10\"", value: "2400 × 3000 px" },
            { label: "Impressão de salão 11 × 14\"", value: "3300 × 4200 px" },
            { label: "Moldura de colecionador 16 × 20\"", value: "4800 × 6000 px" },
            { label: "Grande formato 24 × 36\"", value: "7200 × 10 800 px" },
            { label: "Mural de museu 40 × 60\"", value: "12 000 × 18 000 px" },
          ],
        },
      ],
      spectrum: {
        title: "1 POLEGADA FÍSICA EM DIFERENTES DENSIDADES",
        bars: ["72 DPI (ecrã antigo)", "96 DPI (CSS do W3C)", "150 DPI (prova editorial)", "300 DPI (giclée artístico)"],
        note: "A 300 DPI, 1 polegada contém mais de 4 vezes os píxeis dos antigos padrões web.",
      },
      w3c: {
        title: "PÍXEL DE REFERÊNCIA E ÂNGULO DO W3C",
        observer: "Observador",
        distance: "Distância de visualização 28\" (0,0213°)",
        cssInch: "Polegada CSS",
        centimeters: "Centímetros",
        typographyPt: "Pontos tipográficos",
        picas: "Paicas",
      },
      fineart: {
        title: "PIXELIZAÇÃO RASTER VS. TOM GICLÉE CONTÍNUO",
        printed72: "Impresso a 72 DPI",
        jagged: "Arestas serrilhadas visíveis (aliasing)",
        archival300: "Arquivo a 300 DPI",
        smooth: "Curva contínua e nítida",
        summary: "16 × 20 polegadas a 300 DPI = 4800 × 6000 píxeis (28,8 MP)",
      },
      retina: {
        title: "GEOMETRIA DE SUBPÍXEIS E RELAÇÃO DE PÍXEIS",
        rows: [
          { name: "Ecrã 1x DPR", device: "Monitor padrão antigo", value: "1 px CSS = 1 px físico" },
          { name: "2x DPR (Retina)", device: "MacBook Pro e iPad Pro", value: "1 px CSS = 4 px físicos (2×2)" },
          { name: "3x DPR (Super Retina XDR)", device: "iPhone Pro OLED", value: "1 px CSS = 9 px físicos (3×3)" },
        ],
        summary: "1 polegada no iPhone 16 Pro = 96 px CSS = ",
        summaryStrong: "288 píxeis físicos",
      },
      framing: {
        title: "PROPORÇÕES DE PAREDE DE GALERIA A 300 DPI",
        sensor: "Sensor: {mp}",
        note: "Para grandes formatos (24×36\" ou mais), sensores de médio formato de alta resolução ou ampliação com IA eliminam o grão.",
      },
    },
    presets: {
      eyebrow: "Índice de dimensões selecionadas",
      title: "A MATRIZ DE",
      highlight: "DIMENSÕES",
      description:
        "Um compêndio de dimensões de referência para molduras de museu, papelaria editorial, ecrãs topo de gama e recursos digitais.",
      filterAria: "Filtrar tamanhos por categoria",
      categories: {
        all: "Todos os formatos",
        art: "Arte e molduras",
        editorial: "Editorial e livros",
        device: "Ecrãs de dispositivos",
        social: "Digital e redes",
      },
      showing: "A mostrar {shown} de {total} tamanhos",
      recommended: "{dpi} DPI recomendados",
      physicalSize: "Tamanho físico",
      web: "96 DPI (web)",
      print: "300 DPI (impressão)",
      use: "USAR ESTE TAMANHO",
      useAria: "Usar {name} a {dpi} DPI no conversor",
      items: [
        { name: "Retrato de galeria clássico 8 × 10\"", description: "Padrão icónico de retrato de museu e moldura artística." },
        { name: "Impressão de exposição 11 × 14\"", description: "Impressão de arquivo padrão para galerias de interiores." },
        { name: "Moldura de parede de colecionador 16 × 20\"", description: "Dimensão preferida para espaços de grande impacto." },
        { name: "Obra de grande formato 24 × 36\"", description: "Peça central para residências de luxo." },
        { name: "Mural arquitetónico 30 × 40\"", description: "Peça à escala de museu com toda a profundidade tonal." },
        { name: "Folha Carta EUA 8,5 × 11\"", description: "Papelaria padrão americana para documentos." },
        { name: "A4 internacional 8,27 × 11,69\"", description: "Papel padrão mundial (ISO 216) para impressão internacional." },
        { name: "Cartão de visita executivo 3,5 × 2,0\"", description: "Padrão de cartão de visita personalizado com estampagem dourada." },
        { name: "Livro de arte monográfico 12 × 12\"", description: "Página dupla quadrada de livro de mesa de luxo." },
        { name: "Ecrã do iPhone 16 Pro (físico)", description: "Dimensão física do ecrã Super Retina topo de gama." },
        { name: "Ecrã do MacBook Pro de 16,2\" (físico)", description: "Dimensão física do ecrã Liquid Retina XDR." },
        { name: "Televisor 4K de 55\" (físico)", description: "Dimensões físicas de um painel UHD de 3840×2160." },
        { name: "Tela quadrada de 1080 × 1080 px", description: "Recurso quadrado de 1080 px expresso em polegadas a 96 DPI." },
        { name: "Reel/Story vertical de 1080 × 1920 px", description: "Tela móvel em ecrã inteiro (proporção 9:16)." },
      ],
    },
    hubCalc: {
      titleIn: "Calculadora de polegadas para píxeis",
      titlePx: "Calculadora de píxeis para polegadas",
      size: "Tamanho",
      customSize: "Tamanho personalizado",
      width: "Largura",
      height: "Altura",
      dpi: "DPI",
      custom: "Outro",
      dpiError: "Use um valor de DPI entre 1 e {max}.",
      result: "Resultado",
      resultSub: "{w} × {h} {unit} a {dpi} DPI",
      enterBoth: "Introduza uma largura e uma altura maiores que 0.",
      needMore: "Precisa de bloquear a proporção, de outras unidades ou de uma pré-visualização?",
      openFull: "Abrir o conversor completo",
    },
    sizeLabels,
  },
  content: {
    meta: {
      siteTitle: "Calculadora de polegadas para píxeis | Converta com PPI",
      siteDescription:
        "Converta polegadas para píxeis com o PPI que escolher. Aprenda a fórmula, calcule largura e altura e consulte dimensões de exemplo para impressão e CSS.",
    },
    page: {
      skipToConverter: "Saltar para o conversor",
      skipToCalculator: "Saltar para a calculadora",
      breadcrumb: "Navegação estrutural",
      related: "Páginas relacionadas",
      relatedHome: "Conversor de polegadas para píxeis",
      hubFaqDescription: "Respostas curtas às perguntas mais frequentes sobre este tema.",
    },
    footer: {
      blurb:
        "Conversor gratuito de polegadas para píxeis para ecrã e impressão. Converta qualquer tamanho com qualquer DPI, verifique tamanhos de impressão e consulte valores comuns num só lugar.",
      openConverter: "Abrir o conversor",
      pages: "Páginas",
      copyright: "©2026 InchestoPixel.com",
      backToTop: "VOLTAR AO TOPO",
    },
    home: {
      intro:
        "Use esta calculadora para converter uma medida em polegadas para píxeis com a resolução de imagem que escolher, medida em píxeis por polegada (PPI). O resultado depende desta definição: a 300 PPI, 1 polegada equivale a 300 píxeis.",
      howTo: {
        heading: "Como converter polegadas em píxeis",
        steps: [
          "Introduza o comprimento que pretende converter, medido em polegadas.",
          "Escolha a resolução de imagem exigida pelo seu projeto. Para impressão, confirme com a sua gráfica.",
          "Calcule o número de píxeis. Para converter a largura e a altura, repita o cálculo para cada dimensão com a mesma definição.",
        ],
        note: "Guarde a resolução junto com o resultado para poder verificar mais tarde o tamanho de impressão pretendido.",
      },
      formula: {
        heading: "Fórmula e exemplos",
        main: "Píxeis = polegadas × PPI",
        explain: "Multiplique o comprimento físico em polegadas pelo número de píxeis por polegada para obter o número de píxeis ao longo dessa dimensão.",
        backwardLead: "Para fazer o cálculo inverso:",
        backward: "Polegadas = píxeis ÷ PPI",
        examples: [
          {
            heading: "Exemplo de um único comprimento",
            lead: "A 96 PPI, um comprimento de 2 polegadas converte-se em:",
            math: ["2 × 96 = 192 píxeis"],
            after: [
              "Este resultado é exato para a resolução escolhida. Não significa que todos os ecrãs mostrem 192 píxeis em duas polegadas físicas.",
            ],
          },
          {
            heading: "Exemplo de largura e altura para impressão",
            lead: "Para uma imagem de 8,5 × 11 polegadas a 300 PPI:",
            math: ["Largura: 8,5 × 300 = 2550 píxeis", "Altura: 11 × 300 = 3300 píxeis"],
            after: [
              "As dimensões de imagem necessárias são 2550 × 3300 píxeis, antes de qualquer sangria adicional exigida pela gráfica.",
            ],
          },
          {
            heading: "Exemplo de um resultado decimal",
            lead: "Para 2,33 polegadas a 150 PPI:",
            math: ["2,33 × 150 = 349,5 píxeis"],
            after: [
              "As imagens raster precisam de dimensões em píxeis inteiros. Arredondando 349,5 ao píxel inteiro mais próximo, com as metades para cima, obtêm-se 350 píxeis. Com a mesma resolução, isso corresponde a cerca de 2,333 polegadas.",
            ],
          },
        ],
        closing: "Arredonde apenas no último passo, de acordo com os requisitos do seu projeto.",
      },
      reference: {
        heading: "Tabela de referência de polegadas para píxeis",
        intro:
          "Os cabeçalhos das colunas mostram a resolução de imagem em PPI; os valores por baixo são números de píxeis. Estas definições são exemplos, não requisitos universais.",
        table: homeTable("pt", { corner: "Comprimento (polegadas)", col: "{ppi}" }),
        caption: "Polegadas para píxeis a 72, 96, 150 e 300 PPI",
        footnote: "Todos os valores da tabela são exatos para os dados indicados.",
      },
      guide: { eyebrow: "Fundamentos teóricos", title: "PÍXEIS, TAMANHO DE IMPRESSÃO E", highlight: "PPI" },
      explainers: [
        {
          heading: "Píxeis de imagem, tamanho de impressão e píxeis CSS",
          paragraphs: [
            "As dimensões em píxeis descrevem a largura e a altura de uma imagem em píxeis. As dimensões de impressão descrevem o seu tamanho físico em polegadas. A resolução de imagem liga as duas: as mesmas dimensões em píxeis podem dar tamanhos de impressão diferentes.",
            "O CSS usa uma relação fixa: 1in = 96px. São unidades de referência CSS, por isso um píxel CSS não é necessariamente um píxel físico do dispositivo, e uma polegada CSS no ecrã pode não medir uma polegada real. Use esta relação para dimensões CSS; não presuma que descreve a densidade física de píxeis de um ecrã.",
          ],
        },
        {
          heading: "Resolução de imagem e resolução da impressora",
          paragraphs: [
            "O PPI descreve os píxeis de imagem por polegada; o DPI descreve os pontos por polegada produzidos por uma impressora. Estão relacionados nos fluxos de impressão, mas não são intercambiáveis. Nesta calculadora, use a resolução de imagem exigida em vez da especificação do hardware da impressora.",
          ],
        },
        {
          heading: "Mudar a resolução não acrescenta detalhe à imagem",
          paragraphs: [
            "Alterar apenas os metadados de resolução de uma imagem mantém o número de píxeis e altera o tamanho de impressão pretendido. A reamostragem altera o número de píxeis. Atribuir simplesmente uma resolução mais alta não cria detalhe novo.",
          ],
        },
      ],
      browse: "Explorar por tema",
      faqDescription: "Respostas às perguntas mais comuns sobre a conversão de polegadas em píxeis.",
      faqs: [
        {
          question: "Que resolução devo usar?",
          answer:
            "Use o valor exigido pelo resultado final. Para imprimir, pergunte à gráfica qual a resolução de imagem necessária no tamanho final. Se um envio digital indicar dimensões em píxeis, siga essas dimensões diretamente.",
        },
        {
          question: "Converter para píxeis altera a proporção?",
          answer:
            "Usar a mesma resolução para a largura e a altura mantém a proporção antes do arredondamento. Por exemplo, uma imagem de 4 × 4 polegadas a 300 PPI passa a 1200 × 1200 píxeis. Ambas são quadradas: a proporção descreve a forma, não a resolução.",
        },
        {
          question: "Posso calcular o tamanho de impressão de uma imagem existente?",
          answer:
            "Sim. Divida cada dimensão em píxeis pela resolução de imagem pretendida. A 300 PPI, uma imagem de 1800 × 1200 píxeis corresponde a 6 × 4 polegadas. Recortar ou redimensionar na impressão pode alterar o tamanho final.",
        },
      ],
    },
    hubs: {
      dpi: {
        nav: "DPI",
        h1: "Conversor de polegadas para píxeis por DPI",
        seoTitle: "Conversor de polegadas para píxeis por DPI | Tamanho de impressão",
        description:
          "Converta polegadas para píxeis com o DPI do seu projeto. Use a fórmula, exemplos resolvidos e uma tabela de 72 a 600 DPI para verificar as dimensões de imagem para impressão.",
        answer:
          "Calcule as dimensões em píxeis a partir de uma medida física e da resolução escolhida. Multiplique as polegadas pelo DPI indicado: a 300 DPI, 4 polegadas equivalem a 1200 píxeis.",
        introNotes: [
          "Nesta conversão, DPI significa a densidade de píxeis pretendida para a imagem, tecnicamente chamada PPI. Use a resolução exigida pelo seu projeto; uma polegada não tem um valor único em píxeis.",
        ],
        sections: [
          {
            heading: "Como converter polegadas em píxeis",
            blocks: [
              {
                type: "steps",
                items: [
                  "Introduza o comprimento físico em polegadas.",
                  "Introduza a resolução de destino. Para impressão, use a resolução de imagem pedida pela gráfica.",
                  "Multiplique as polegadas por essa resolução para obter o comprimento em píxeis.",
                  "Para uma imagem, calcule a largura e a altura separadamente com a mesma resolução.",
                ],
              },
              {
                type: "note",
                text: "Mantenha a proporção original entre largura e altura ao converter um design existente. Alterar essa proporção obriga a recortar ou esticar.",
              },
            ],
          },
          {
            heading: "Fórmula e exemplos resolvidos",
            blocks: [
              { type: "math", lines: ["Píxeis = Polegadas × DPI"], large: true },
              { type: "p", text: "Em que:" },
              {
                type: "list",
                items: [
                  "Píxeis é o comprimento digital em píxeis, abreviado px.",
                  "Polegadas é o comprimento físico pretendido.",
                  "DPI é o valor de conversão escolhido, entendido como píxeis de imagem por polegada.",
                ],
              },
              { type: "p", text: "Para uma imagem retangular:" },
              {
                type: "math",
                lines: ["Largura em píxeis = Largura em polegadas × DPI", "Altura em píxeis = Altura em polegadas × DPI"],
              },
              {
                type: "sub",
                heading: "Uma imagem de 8 × 10 polegadas a 300 DPI",
                blocks: [
                  { type: "p", text: "Se o seu projeto exige 300 PPI:" },
                  { type: "math", lines: ["Largura: 8 × 300 = 2400 px", "Altura: 10 × 300 = 3000 px"] },
                  { type: "p", text: "As dimensões necessárias são 2400 × 3000 píxeis. Estes resultados são exatos." },
                ],
              },
              {
                type: "sub",
                heading: "Um comprimento de 2,5 polegadas a 96 DPI",
                blocks: [
                  { type: "math", lines: ["2,5 × 96 = 240 px"] },
                  {
                    type: "p",
                    text: "Com uma densidade de 96 píxeis por polegada, 2,5 polegadas correspondem exatamente a 240 píxeis. O mesmo comprimento com outra densidade dá outro resultado.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Um resultado decimal a 150 DPI",
                blocks: [
                  { type: "math", lines: ["1,23 × 150 = 184,5 px"] },
                  {
                    type: "p",
                    text: "Uma imagem raster precisa de dimensões em píxeis inteiros. Arredondando ao píxel inteiro mais próximo, com as metades para cima, obtêm-se 185 px.",
                  },
                ],
              },
              {
                type: "note",
                text: "Arredonde apenas o resultado final. Se uma especificação de produção fixar um mínimo de píxeis, arredonde para cima. Arredondar largura e altura separadamente pode alterar ligeiramente a proporção, por isso verifique as dimensões finais quando a proporção exata for importante.",
              },
            ],
          },
          {
            heading: "Tabela de referência de polegadas para píxeis",
            blocks: [
              {
                type: "p",
                text: "Todos os valores são exatos. A coluna DPI representa a densidade de imagem pretendida, em PPI, para este cálculo.",
              },
              {
                type: "table",
                caption: "Píxeis para 1, 4 e 6 polegadas de 72 a 600 DPI",
                table: dpiTable("pt", {
                  corner: "DPI indicado",
                  cols: ["1 polegada", "4 polegadas", "6 polegadas"],
                  row: "{dpi} DPI",
                  cell: "{px} px",
                }),
              },
              {
                type: "p",
                text: "Por exemplo, uma imagem de 4 × 6 polegadas a 300 DPI precisa de 1200 × 1800 píxeis. A 72 DPI, o mesmo tamanho físico corresponde a 288 × 432 píxeis.",
              },
            ],
          },
          {
            heading: "Escolha a resolução certa para cada trabalho",
            blocks: [
              {
                type: "sub",
                heading: "DPI e PPI descrevem coisas diferentes",
                blocks: [
                  {
                    type: "p",
                    text: "PPI significa píxeis por polegada: os píxeis de imagem atribuídos a cada polegada de saída. DPI significa pontos por polegada: os pontos que uma impressora consegue produzir. São medidas distintas.",
                  },
                  {
                    type: "p",
                    text: "Quando uma especificação de impressão indica «300 DPI» para pedir uma imagem de 300 PPI, use 300 no cálculo. Não substitua o PPI de imagem exigido pela resolução DPI do hardware da impressora.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Tamanho físico e dimensões em píxeis andam juntos",
                blocks: [
                  {
                    type: "p",
                    text: "As polegadas descrevem o tamanho físico; as dimensões em píxeis descrevem a largura e a altura digitais da imagem. Com um tamanho físico fixo, um PPI de destino mais alto exige mais píxeis.",
                  },
                  {
                    type: "p",
                    text: "Alterar a resolução de uma imagem existente sem reamostragem não acrescenta píxeis. Muda a relação entre o tamanho de impressão e a densidade de píxeis. A reamostragem altera o número de píxeis, por isso calcular um alvo maior não melhora, por si só, a imagem original.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "As medidas no ecrã precisam de contexto",
                blocks: [
                  {
                    type: "p",
                    text: "Não presuma que todos os ecrãs têm 72 ou 96 píxeis físicos por polegada. O CSS define 1 polegada como 96 píxeis CSS, mas os píxeis CSS não são necessariamente píxeis individuais do dispositivo nem uma medida física real no ecrã.",
                  },
                  {
                    type: "p",
                    text: "Para enviar uma imagem, siga as dimensões em píxeis exigidas pelo destino. Para imprimir, siga os requisitos de tamanho físico e de resolução de imagem.",
                  },
                ],
              },
            ],
          },
        ],
        faq: [
          {
            question: "Como uso isto como calculadora de 300 DPI?",
            answer:
              "Use 300 como resolução de destino e multiplique cada medida em polegadas por 300. Por exemplo, uma imagem de 5 × 7 polegadas precisa de 1500 × 2100 píxeis a 300 PPI.",
          },
          {
            question: "Posso converter polegadas em píxeis sem saber o DPI?",
            answer:
              "Sem uma densidade de píxeis de destino não há uma resposta única. Um comprimento de 2 polegadas corresponde a 144 píxeis a 72 PPI, 192 píxeis a 96 PPI ou 600 píxeis a 300 PPI.",
          },
          {
            question: "Devo incluir a sangria nas dimensões?",
            answer:
              "Se a gráfica exigir sangria, calcule a partir do tamanho total da arte, incluindo essa sangria. Por exemplo, um design de 4 × 6 polegadas com 0,125 polegadas de sangria em cada lado passa a 4,25 × 6,25 polegadas. A 300 PPI, isso dá 1275 × 1875 píxeis. Use a especificação de sangria real da sua gráfica.",
          },
        ],
      } as HubText,
      software: {
        nav: "Software",
        h1: "Polegadas para píxeis em software",
        seoTitle: "Polegadas para píxeis em software: guia de conversão PPI",
        description:
          "Converta polegadas para píxeis com o PPI do seu projeto. Veja exemplos resolvidos e saiba como as dimensões, a reamostragem e as definições de exportação afetam o resultado.",
        answer:
          "Para converter polegadas em píxeis, multiplique a medida em polegadas pelos píxeis por polegada (PPI) exigidos. Uma polegada equivale a 300 px a 300 PPI ou a 96 px a 96 PPI. Em software, use a resolução exigida pela sua saída, e não um valor predefinido supostamente universal.",
        sections: [
          {
            heading: "Como converter as suas dimensões",
            blocks: [
              {
                type: "steps",
                items: [
                  "Identifique a largura ou a altura de que precisa em polegadas.",
                  "Escolha o PPI exigido para essa saída. Para impressão, confirme a resolução de imagem especificada pela gráfica.",
                  "Calcule o número de píxeis com a medida em polegadas e o PPI.",
                  "Repita para a outra dimensão com o mesmo PPI.",
                ],
              },
              {
                type: "note",
                text: "Numa imagem existente, mantenha as proporções. Se a largura e a altura exigidas tiverem outra proporção, recorte a imagem ou acrescente espaço à volta em vez de a esticar.",
              },
            ],
          },
          {
            heading: "Fórmula e exemplos",
            blocks: [
              { type: "math", lines: ["Píxeis = Polegadas × PPI"], large: true },
              {
                type: "list",
                items: [
                  "Píxeis (px): o número de píxeis da imagem ao longo de uma dimensão.",
                  "Polegadas (in): o comprimento físico pretendido dessa dimensão.",
                  "PPI: o número de píxeis da imagem por polegada nesse tamanho.",
                ],
              },
              { type: "p", text: "O cálculo aplica-se separadamente à largura e à altura." },
              {
                type: "sub",
                heading: "Uma imagem de 4 × 6 polegadas a 300 PPI",
                blocks: [
                  { type: "math", lines: ["Largura: 4 × 300 = 1200 px", "Altura: 6 × 300 = 1800 px"] },
                  {
                    type: "p",
                    text: "As dimensões de destino são 1200 × 1800 px, sem sangria nem margem adicionais.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Uma imagem de 8 × 10 polegadas a 150 PPI",
                blocks: [
                  { type: "math", lines: ["Largura: 8 × 150 = 1200 px", "Altura: 10 × 150 = 1500 px"] },
                  {
                    type: "p",
                    text: "O resultado é 1200 × 1500 px. Este exemplo usa 150 PPI como requisito indicado, e não como recomendação para todos os trabalhos de impressão.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Uma medida decimal",
                blocks: [
                  { type: "p", text: "Para uma largura de 2,125 polegadas a 300 PPI:" },
                  { type: "math", lines: ["2,125 × 300 = 637,5 px"] },
                  {
                    type: "p",
                    text: "O resultado matemático é exato, mas uma imagem raster precisa de uma largura inteira. Arredondado ao píxel mais próximo, use 638 px. A 300 PPI, isso corresponde a cerca de 2,127 polegadas.",
                  },
                ],
              },
              {
                type: "note",
                text: "Arredonde no fim do cálculo. Se uma especificação de produção fixar um mínimo de píxeis, arredonde para cima quando necessário.",
              },
            ],
          },
          {
            heading: "Tabela de conversão rápida",
            blocks: [
              {
                type: "p",
                text: "Estes valores são exatos para o PPI indicado. As colunas são exemplos de cálculo, não predefinições de software.",
              },
              {
                type: "table",
                caption: "Polegadas para píxeis a 96, 150 e 300 PPI",
                table: softwareTable("pt", {
                  corner: "Comprimento (polegadas)",
                  cols: ["A 96 PPI (px)", "A 150 PPI (px)", "A 300 PPI (px)"],
                }),
              },
            ],
          },
          {
            heading: "Aplique o resultado no seu software",
            blocks: [
              {
                type: "sub",
                heading: "Photoshop: distinga redimensionar de reamostrar",
                blocks: [
                  {
                    type: "p",
                    text: "Compare as dimensões em píxeis de destino com as dimensões atuais da imagem antes de fazer alterações.",
                  },
                  {
                    type: "p",
                    text: "Com a reamostragem desativada, mudar o PPI mantém o número de píxeis e altera o tamanho de impressão pretendido. Com a reamostragem ativada, mudar o tamanho ou a resolução pode acrescentar ou remover píxeis. Mantenha largura e altura proporcionais ao redimensionar. A Adobe explica estas relações no seu guia sobre redimensionamento e reamostragem.",
                  },
                  {
                    type: "p",
                    text: "Aumentar apenas o PPI não cria detalhe adicional. Ampliar por reamostragem acrescenta píxeis calculados; não recupera detalhe que falta no original.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Illustrator: verifique a resolução de exportação raster",
                blocks: [
                  {
                    type: "p",
                    text: "Uma ilustração vetorial não tem um número fixo de píxeis. Ao exportá-la para um formato raster como PNG ou JPEG, o tamanho físico da ilustração e a resolução de exportação determinam as dimensões de saída.",
                  },
                  {
                    type: "p",
                    text: "Por exemplo, uma área de exportação com 4 polegadas de largura a 300 PPI precisa de 1200 px de largura. Verifique as dimensões do ficheiro exportado, sobretudo se a exportação incluir limites ou margens adicionais. As definições disponíveis no Illustrator dependem do formato de exportação.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Figma: tenha em conta a escala de exportação",
                blocks: [
                  {
                    type: "p",
                    text: "Para um recurso raster, calcule primeiro os píxeis de saída necessários e depois tenha em conta a escala de exportação. Um frame com 600 píxeis de largura exportado a 2× produz uma imagem com 1200 píxeis de largura. Não aplique outro multiplicador se o frame já tiver as dimensões de saída. Consulte os formatos e definições de exportação do Figma.",
                  },
                  {
                    type: "p",
                    text: "Para uma imagem com 4 polegadas de largura destinada a impressão a 300 PPI, o alvo é 1200 px de largura, seja qual for a combinação de frame e escala usada.",
                  },
                ],
              },
            ],
          },
          {
            heading: "Evite erros comuns de conversão",
            blocks: [
              {
                type: "sub",
                heading: "PPI e DPI descrevem coisas diferentes",
                blocks: [
                  {
                    type: "p",
                    text: "O PPI mede os píxeis de imagem por polegada; o DPI mede geralmente os pontos por polegada de uma impressora. Se uma especificação de impressão usar «DPI» para uma imagem, confirme se se refere ao PPI de imagem exigido. Não use automaticamente a resolução de pontos do hardware da impressora como valor do conversor.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Os píxeis CSS são unidades lógicas",
                blocks: [
                  {
                    type: "p",
                    text: "O CSS define 1 polegada como 96 píxeis CSS. Isso não significa que todas as imagens devam usar 96 PPI, nem que um elemento de uma polegada CSS meça uma polegada física em todos os ecrãs. Os ecrãs de alta densidade podem usar vários píxeis do dispositivo por cada píxel CSS. Consulte a explicação do W3C sobre as unidades CSS.",
                  },
                ],
              },
              {
                type: "sub",
                heading: "Verifique o resultado final, não apenas o tamanho do documento",
                blocks: [
                  {
                    type: "p",
                    text: "Ao preparar uma imagem para Canva, Procreate, Paint, InDesign, Word, PowerPoint ou Google Slides, distinga as dimensões em píxeis da imagem do seu tamanho colocado. Confirme as dimensões finais e o tamanho de impressão pretendido em vez de presumir que o nome do programa determina a conversão.",
                  },
                ],
              },
            ],
          },
        ],
        faq: [
          {
            question: "Que PPI devo usar?",
            answer:
              "Use a resolução exigida pelo seu fluxo de saída. Para impressão, pergunte à gráfica. Para um recurso de ecrã indicado em píxeis, use essas dimensões diretamente; a conversão de polegadas pode ser desnecessária.",
          },
          {
            question: "Porque é que a mesma imagem aparece com tamanhos diferentes em programas diferentes?",
            answer:
              "Um programa pode ajustar a imagem à página, mostrá-la com um determinado nível de zoom ou usar os metadados de resolução para definir o seu tamanho colocado. O tamanho aparente, por si só, não indica se as dimensões em píxeis mudaram.",
          },
          {
            question: "Posso calcular polegadas para píxeis no Excel ou no Google Sheets?",
            answer:
              "Sim. Se a célula A2 tiver as polegadas e B2 o PPI, use:\n=A2*B2\nPara arredondar uma medida positiva ao píxel inteiro mais próximo, use (no Excel em português):\n=ARRED(A2*B2;0)\nIsto calcula uma dimensão em píxeis; não redimensiona uma imagem nem altera a largura de uma coluna.",
          },
        ],
      } as HubText,
      print: printHub("pt", {
        nav: "Impressão e foto",
        h1: "Polegadas para píxeis para impressão, fotografias e imagens",
        description:
          "Quantos píxeis precisa para uma impressão nítida: fotos de 4×6, 5×7, 8×10 e 11×14 polegadas a 150 e 300 DPI, com calculadora de tamanho de impressão.",
        answer: "Para uma impressão nítida, precisa do tamanho de impressão × 300 píxeis em cada lado.",
        printing: {
          heading: "Impressão",
          body: "Píxeis necessários = tamanho de impressão em polegadas × DPI de impressão. A maioria das gráficas aponta para 300 DPI.",
          corner: "Tamanho de impressão",
          row: "{w} × {h} pol",
        },
        photos: {
          heading: "Fotografias e imagens",
          body: "Uma fotografia com poucos píxeis fica suave quando impressa em grande. Compare o tamanho em píxeis da sua imagem com a tabela acima antes de encomendar impressões.",
        },
        faq: [
          {
            question: "Posso ampliar uma fotografia pequena?",
            answer: "Ampliar acrescenta píxeis, mas não detalhe, por isso as grandes ampliações ficam desfocadas.",
          },
        ],
      }),
      sizes: sizesHub(
        "pt",
        {
          nav: "Tamanhos",
          h1: "Tamanhos comuns de impressão e papel em píxeis",
          description:
            "Carta, A4, 4×6, 5×7, 8×10, 18×24, 24×36 e formato cartão em píxeis a 72, 150 e 300 DPI. Escolha um tamanho e converta-o de imediato.",
          answer: "O papel Carta (8,5 × 11 pol) tem 2550 × 3300 px a 300 DPI.",
          overview: {
            heading: "Todos os tamanhos comuns num relance",
            body: "Tamanho em píxeis de cada formato a 72, 150 e 300 DPI.",
            corner: "Tamanho",
          },
          sizeBody:
            "{label} mede {w} × {h} pol. A 300 DPI são {w300} × {h300} px, e a 72 DPI são {w72} × {h72} px.",
          faq: [
            {
              question: "Qual é o tamanho mais comum para impressão?",
              answer: "Carta e A4 para documentos; 4 × 6 e 5 × 7 para fotografias.",
            },
          ],
        },
        sizeLabels,
      ),
      chart: chartHub("pt", {
        nav: "Tabela",
        h1: "Tabela de polegadas para píxeis (todos os valores comuns)",
        description:
          "Tabela de polegadas para píxeis de 1/8 a 96 polegadas a 72, 96, 150 e 300 DPI. Encontre qualquer valor comum num relance.",
        answer: "Encontre qualquer medida de 1/8 a 96 polegadas a 72, 96, 150 e 300 DPI.",
        chart: {
          heading: "Tabela de conversão",
          body: "A tabela de referência completa. Cada linha é um valor para o qual pode criar uma ligação.",
          corner: "Polegadas",
        },
        items: ["1/8 de polegada", "2 polegadas", "2,5 polegadas", "3 polegadas", "4 polegadas", "5 polegadas", "8,5 polegadas"],
        itemBody:
          "{label}: {px72} px a 72 DPI, {px96} px a 96 DPI, {px150} px a 150 DPI e {px300} px a 300 DPI.",
        faq: [
          {
            question: "Onde estão os outros valores?",
            answer: "Valores como 10, 12, 24 ou 48 polegadas são linhas da tabela acima.",
          },
        ],
      }),
    },
  },
};
