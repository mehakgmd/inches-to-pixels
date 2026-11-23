/**
 * English: the source text of the site. Every other language file has exactly this shape
 * (TypeScript checks it), so a missing line shows up as a build error.
 *
 * `ui` is sent to the browser for the interactive parts; `content` stays on the server.
 * {name} marks a value filled in by the page.
 */
import type { HubText } from "../../lib/hubs";
import { chartHub, dpiTable, homeTable, printHub, sizesHub, softwareTable } from "../build";

const sizeLabels = [
  "8.5 × 11 inches (Letter)",
  "A4 size",
  "5 × 7 inches",
  "4 × 6 inches",
  "8 × 10 inches",
  "18 × 24 inches",
  "24 × 36 inches",
  "2 × 2 inches",
  "Card size (2.5 × 3.5)",
];

const ui = {
  common: {
    pageNames: {
      home: "Home",
      dpi: "DPI",
      software: "Software",
      print: "Print & photo",
      sizes: "Sizes",
      chart: "Chart",
    },
    quality: {
      archival: "Archival print quality",
      proof: "Proof print quality",
      screen: "Screen resolution",
    },
    /** The same labels inside a sentence ("Your setting: 300 DPI, archival print quality."). */
    qualityInline: {
      archival: "archival print quality",
      proof: "proof print quality",
      screen: "screen resolution",
    },
    copied: "Copied!",
    copyFailed: "Copy failed",
  },
  nav: {
    brandSub: "DPI & PPI CONVERTER",
    homeAria: "Inches to Pixel home",
    topAria: "Inches to Pixel, back to top",
    pagesAria: "Pages",
    pages: "Pages",
    onThisPage: "On this page",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    share: "Share",
    linkCopied: "Link copied",
    sections: {
      converter: "Converter",
      visual: "Visual Scale",
      slides: "Slides",
      presets: "Presets",
      guide: "DPI Guide",
      faq: "FAQ",
    },
    language: "Language",
    languageAria: "Choose language",
  },
  theme: {
    toDark: "Switch to dark mode",
    toLight: "Switch to light mode",
    dark: "Dark mode",
    light: "Light mode",
  },
  footer: {
    languages: "Languages",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    title: "EXPERT",
    highlight: "GUIDANCE",
  },
  hero: {
    badge: "The Fine Art of Digital Scale",
    badgeRule: "1 IN = 96 PX",
    h1Before: "Inches to ",
    h1Highlight: "Pixels",
    h1After: " Calculator",
    shelfTitle: "Select target resolution (DPI / PPI)",
    tags: { standard: "Standard", fineArt: "Fine Art" },
    /** One per DPI preset: 72, 96, 150, 300, 458. */
    presets: [
      { label: "Web Standard", desc: "Legacy web & screens" },
      { label: "CSS Standard", desc: "W3C & Windows native" },
      { label: "Editorial Draft", desc: "Newspapers & proofs" },
      { label: "Fine Art Print", desc: "Museum giclée & books" },
      { label: "Retina Display", desc: "OLED & mobile flagships" },
    ],
    equations: [
      { label: "W3C rule", value: "1 in = 96 px", note: "CSS standard" },
      { label: "Museum print rule", value: "1 in = 300 px", note: "@ 300 DPI" },
      { label: "Metric alignment", value: "1 in = 2.54 cm", note: "= 25.4 mm" },
    ],
  },
  converter: {
    title: "Inches to pixels converter",
    modeAria: "Converter mode",
    tabLengthShort: "Length",
    tabLength: "Single Length (1D)",
    tabSizeShort: "W × H",
    tabSize: "2D Dimensions (W × H)",
    resolution: "Resolution",
    dpiRange: "Use 1 to {max}",
    enterAbove0: "Enter a number above 0.",
    physicalSize: "Physical size (inches)",
    swap: "Swap",
    swapTitle: "Swap width and height",
    ratioLocked: "Ratio locked",
    lockRatio: "Lock ratio",
    width: "Width",
    height: "Height",
    lockHint: "Width and height change together to keep {ratio}.",
    totalArea: "Total area",
    sqIn: "sq in",
    aspectRatio: "Aspect ratio",
    digitalSize: "Digital size (pixels)",
    copySize: "Copy size",
    totalPixels: "Total pixels",
    megapixels: "Megapixels",
    ratioTitle: "Set height from width by aspect ratio",
    /** Same order as the ratios 1:1, 4:3, 16:9, 3:2, 4:5, 5:7. */
    ratios: ["1:1 Square", "4:3 Classic", "16:9 Widescreen", "3:2 35mm Photo", "4:5 Gallery", "5:7 Print"],
    centimeters: "Centimeters",
    millimeters: "Millimeters",
    points: "Points (72 / in)",
    surfaceArea: "Surface area",
    lengthInInches: "Length in inches",
    lengthInPixels: "Length in pixels",
    pixelsAt: "Pixels at {dpi} DPI",
    copyPixels: "Copy pixels",
    formulaTitle: "The formula",
    formula: "Pixels = Inches × DPI",
    reverse: "Reverse: Inches = Pixels ÷ DPI",
    copyCss: "Copy CSS",
  },
  visual: {
    eyebrow: "Real-Time View",
    title: "THE ARCHITECTURAL",
    highlight: "VIEWPORT",
    description:
      "Witness physical imperial scale translated into live digital raster structures. Switch between precision drafting, jeweler's pixel loupe, and luxury gallery exhibition.",
    modeAria: "Preview mode",
    modes: { canvas: "Drafting Canvas", loupe: "Pixel Loupe", gallery: "Gallery Salon" },
    zoomOut: "Zoom out",
    zoomIn: "Zoom in",
    resetZoom: "Reset zoom",
    summary: "{w} by {h} inches, {wpx} by {hpx} pixels at {dpi} DPI",
    loupeTitle: "One physical inch under the loupe",
    loupeDesc: "How grid density changes from screen (72 DPI) to CSS standard (96 DPI) to fine art print (300 DPI).",
    loupe72: "72 DPI · Legacy web",
    loupe72Note: "Coarse pixel edges visible to the eye.",
    loupe96: "96 DPI · W3C CSS",
    loupe96Note: "1 inch is exactly 96 CSS pixels.",
    loupe300: "300 DPI · Archival",
    loupe300Note: "Seamless continuous tone.",
    yourSetting: "Your setting:",
  },
  slides: {
    eyebrow: "Visual Masterclass & Slides Deck",
    title: "INCHES TO PIXELS",
    highlight: "VISUALS & SLIDES",
    description:
      "An interactive visual exploration of imperial-to-raster physics, W3C standards, subpixel Retina geometry, and luxury print scales.",
    carouselAria: "Inches to pixels slides",
    slide: "Slide",
    pauseAria: "Pause automatic slide show",
    playAria: "Start automatic slide show",
    pause: "Pause",
    play: "Play",
    prev: "Previous slide",
    next: "Next slide",
    slideOf: "{n} of {total}: {title}",
    axiom: "Mathematical Axiom:",
    calibrate: "CALIBRATE CONVERTER WITH THIS SPEC",
    chooseSlide: "Choose slide",
    slideLabel: "Slide {n}: {title}",
    specsTitle: "Slide Architectural Specifications:",
    items: [
      {
        badge: "FOUNDATIONAL ARCHITECTURE",
        title: "The Genesis of the Digital Inch",
        subtitle: "How Density Transforms Distance into Raster Reality",
        quote: "A single physical inch is constant in bronze; in the digital realm, its magnitude is dictated by density.",
        keyFormula: "Pixels = Inches × DPI (Dots Per Inch)",
        description:
          "Unlike a physical ruler made of brass or steel, a digital inch does not possess a fixed number of pixels. Its raster count expands directly with the DPI (Dots Per Inch) of the medium.",
        specs: [
          { label: "72 DPI (Web 1.0)", value: "72 Pixels" },
          { label: "96 DPI (CSS Standard)", value: "96 Pixels" },
          { label: "150 DPI (Editorial)", value: "150 Pixels" },
          { label: "300 DPI (Fine Art)", value: "300 Pixels" },
          { label: "600 DPI (Ultra Fine)", value: "600 Pixels" },
        ],
      },
      {
        badge: "THE W3C FORMAL CANON",
        title: "The 96 CSS Pixel Standard",
        subtitle: "The Mathematical Anchor of the Global Web",
        quote: "1in = 96px is not an approximation—it is an immutable constant codified in the W3C CSS specifications.",
        keyFormula: "1 inch ≡ 96 CSS px ≡ 2.54 cm ≡ 72 pt ≡ 6 pc",
        description:
          "In 1996, the World Wide Web Consortium anchored the reference pixel to a viewing distance of 28 inches at an angle of 0.0213 degrees. This established that 1 physical CSS inch corresponds mathematically to precisely 96 CSS pixels.",
        specs: [
          { label: "Reference Distance", value: "28 Inches (71 cm)" },
          { label: "Subtended Angle", value: "0.0213 Degrees" },
          { label: "US Letter (8.5×11\")", value: "816 × 1,056 px" },
          { label: "Points (pt) per Inch", value: "72 pt" },
          { label: "Picas (pc) per Inch", value: "6 pc" },
        ],
      },
      {
        badge: "ARCHIVAL GICLÉE STANDARDS",
        title: "Museum Fine Art & 300 DPI",
        subtitle: "The Imperceptible Threshold of Human Vision",
        quote: "True luxury printmaking requires 300 DPI minimum: where individual ink droplets dissolve into seamless pigment tone.",
        keyFormula: "Required Pixels = Target Inches × 300 DPI",
        description:
          "When viewing gallery prints at a normal reading distance of 12-14 inches, the human retina can distinguish up to 300 individual dots per inch. Below 300 DPI, staircased pixelation compromises edge clarity.",
        specs: [
          { label: "Museum Standard", value: "300 DPI Giclée" },
          { label: "16×20\" Luxury Frame", value: "4,800 × 6,000 px" },
          { label: "Total Sensor Load", value: "28.8 Megapixels" },
          { label: "Ink Droplet Density", value: "1,200 - 2,400 droplets" },
          { label: "Archival Longevity", value: "100+ Years" },
        ],
      },
      {
        badge: "RETINA & HIGH-DPI DISPLAYS",
        title: "The Device Pixel Ratio (DPR)",
        subtitle: "Physical Hardware Pixels vs CSS Abstract Pixels",
        quote: "On a 3x Super Retina display, 1 CSS inch still represents 96 CSS units, but commands 288 physical hardware diodes.",
        keyFormula: "Physical Device Px = CSS Px × DPR (1x, 2x, 3x)",
        description:
          "Apple's Super Retina XDR and modern 4K/8K displays decouple physical hardware pixels from CSS logic pixels. A 96px CSS line on an iPhone 16 Pro renders across nearly 300 physical OLED micro-subpixels.",
        specs: [
          { label: "CSS 1 Inch", value: "96 CSS px" },
          { label: "Apple DPR Factor", value: "3.00x Super Retina" },
          { label: "Physical Hardware Px", value: "288 Hardware px" },
          { label: "Hardware PPI", value: "460 PPI" },
          { label: "Subpixel Arrangement", value: "Diamond PenTile OLED" },
        ],
      },
      {
        badge: "CURATED PROPORTIONS",
        title: "The Luxury Framing Matrix",
        subtitle: "Standard Architectural & Fine Art Sizes at 300 DPI",
        quote: "The golden proportions of classical art framing, translated into exact digital asset specifications.",
        keyFormula: "Archival Quality (300 DPI) = Flawless Gallery Exhibition",
        description:
          "From classical salon portraits to grand museum statement pieces, every imperial frame size corresponds to an exact digital pixel canvas needed for flaw-free reproduction.",
        specs: [
          { label: "8 × 10\" Gallery Portrait", value: "2,400 × 3,000 px" },
          { label: "11 × 14\" Salon Print", value: "3,300 × 4,200 px" },
          { label: "16 × 20\" Collector Frame", value: "4,800 × 6,000 px" },
          { label: "24 × 36\" Grand Statement", value: "7,200 × 10,800 px" },
          { label: "40 × 60\" Museum Mural", value: "12,000 × 18,000 px" },
        ],
      },
    ],
    spectrum: {
      title: "1 PHYSICAL INCH ACROSS DENSITY ENVIRONMENTS",
      bars: ["72 DPI (Legacy Screen)", "96 DPI (W3C CSS Default)", "150 DPI (Editorial Proof)", "300 DPI (Fine Art Giclée)"],
      note: "At 300 DPI, 1 inch contains over 4× more raster pixels than legacy web standards.",
    },
    w3c: {
      title: "W3C REFERENCE PIXEL & ANGLE",
      observer: "Observer",
      distance: "28\" Viewing Distance (0.0213°)",
      cssInch: "CSS Inch",
      centimeters: "Centimeters",
      typographyPt: "Typography Pt",
      picas: "Picas",
    },
    fineart: {
      title: "RASTER PIXELATION VS CONTINUOUS GICLÉE TONE",
      printed72: "72 DPI Printed",
      jagged: "Visible jagged edges (aliasing)",
      archival300: "300 DPI Archival",
      smooth: "Razor-sharp continuous curve",
      summary: "16 × 20 Inches @ 300 DPI = 4,800 × 6,000 Pixels (28.8 MP)",
    },
    retina: {
      title: "SUBPIXEL GEOMETRY & DEVICE PIXEL RATIO",
      rows: [
        { name: "1x DPR Display", device: "Standard Legacy Monitor", value: "1 CSS px = 1 Physical px" },
        { name: "2x DPR (Retina)", device: "MacBook Pro & iPad Pro", value: "1 CSS px = 4 Physical px (2×2)" },
        { name: "3x DPR (Super Retina XDR)", device: "iPhone Pro OLED", value: "1 CSS px = 9 Physical px (3×3)" },
      ],
      summary: "1 Inch on iPhone 16 Pro = 96 CSS px = ",
      summaryStrong: "288 Physical Pixels",
    },
    framing: {
      title: "GALLERY WALL PROPORTIONS AT 300 DPI",
      sensor: "Sensor: {mp}",
      note: "For grand statements (24×36\"+), high-resolution medium-format sensors or AI upscaling ensures zero grain.",
    },
  },
  presets: {
    eyebrow: "Curated Dimensions Index",
    title: "THE LUXURY DIMENSION",
    highlight: "MATRIX",
    description:
      "A comprehensive compendium of gold-standard dimensions across museum art framing, editorial stationery, flagship displays, and digital assets.",
    filterAria: "Filter presets by category",
    categories: {
      all: "All Formats",
      art: "Fine Art & Framing",
      editorial: "Editorial & Books",
      device: "Device Displays",
      social: "Digital & Social",
    },
    showing: "Showing {shown} of {total} sizes",
    recommended: "{dpi} DPI recommended",
    physicalSize: "Physical size",
    web: "96 DPI (web)",
    print: "300 DPI (print)",
    use: "USE THIS SIZE",
    useAria: "Use {name} at {dpi} DPI in the converter",
    /** Same order as the presets in PresetDimensions.tsx. */
    items: [
      { name: "8 × 10\" Classic Gallery Portrait", description: "Iconic museum portrait & fine art framing standard." },
      { name: "11 × 14\" Salon Exhibition Print", description: "Standard archival print for luxury interior galleries." },
      { name: "16 × 20\" Collector's Wall Frame", description: "Preferred dimension for high-impact living spaces." },
      { name: "24 × 36\" Grand Statement Art", description: "Centerpiece masterwork print for luxury residences." },
      { name: "30 × 40\" Architectural Mural", description: "Museum-scale focal display with full tonal depth." },
      { name: "8.5 × 11\" US Letter Sheet", description: "Standard American legal and executive stationery." },
      { name: "8.27 × 11.69\" International A4", description: "Global standard paper (ISO 216) for international print." },
      { name: "3.5 × 2.0\" Executive Business Card", description: "Gold-foil stamped bespoke business card standard." },
      { name: "12 × 12\" Monograph Art Book", description: "Luxury square coffee table monograph spread." },
      { name: "iPhone 16 Pro Screen (Physical)", description: "Physical handheld dimension of flagship Super Retina display." },
      { name: "16.2\" MacBook Pro Display (Physical)", description: "Physical aluminum display dimension of Liquid Retina XDR." },
      { name: "55\" 4K Television Screen (Physical)", description: "Physical architectural dimensions of 3840×2160 UHD panel." },
      { name: "1080 × 1080 px Square Canvas", description: "Standard 1080px square asset translated into 96 DPI inches." },
      { name: "1080 × 1920 px Vertical Reel/Story", description: "Fullscreen mobile social canvas (9:16 aspect ratio)." },
    ],
  },
  hubCalc: {
    titleIn: "Inches to pixels calculator",
    titlePx: "Pixels to inches calculator",
    size: "Size",
    customSize: "Custom size",
    width: "Width",
    height: "Height",
    dpi: "DPI",
    custom: "Custom",
    dpiError: "Use a DPI from 1 to {max}.",
    result: "Result",
    resultSub: "{w} × {h} {unit} at {dpi} DPI",
    enterBoth: "Enter a width and height above 0.",
    needMore: "Need ratio lock, more units or a visual preview?",
    openFull: "Open the full converter",
  },
  sizeLabels,
};

const content = {
  meta: {
    siteTitle: "Inches to Pixels Calculator | Convert Size With PPI",
    siteDescription:
      "Convert inches to pixels using your chosen PPI. Learn the formula, calculate width and height, and check example dimensions for print and CSS sizing.",
  },
  page: {
    skipToConverter: "Skip to converter",
    skipToCalculator: "Skip to calculator",
    breadcrumb: "Breadcrumb",
    related: "Related pages",
    relatedHome: "Inches to pixels converter",
    hubFaqDescription: "Short answers to the questions people ask most on this topic.",
  },
  footer: {
    blurb:
      "Free inches to pixels converter for screens and print. Convert any size at any DPI, check print sizes and look up common values in one place.",
    openConverter: "Open the converter",
    pages: "Pages",
    copyright: "©2026 InchestoPixel.com",
    backToTop: "BACK TO TOP",
  },
  home: {
    intro:
      "Use this calculator to convert a measurement in inches to pixels at your chosen image resolution, measured in pixels per inch (PPI). The result depends on this setting: at 300 PPI, 1 inch equals 300 pixels.",
    howTo: {
      heading: "How to convert inches to pixels",
      steps: [
        "Enter the length you want to convert, measured in inches.",
        "Choose the image resolution required for your project. For printing, check with your print provider.",
        "Calculate the pixel count. To convert both width and height, repeat the calculation for each dimension using the same setting.",
      ],
      note: "Save the resolution with your result so you can check the intended print size later.",
    },
    formula: {
      heading: "Formula and examples",
      main: "Pixels = inches × PPI",
      explain: "Multiply the physical length in inches by the number of pixels per inch to find the pixel count along that dimension.",
      backwardLead: "To work backward:",
      backward: "Inches = pixels ÷ PPI",
      examples: [
        {
          heading: "Example of a single length",
          lead: "At 96 PPI, a 2-inch length converts to:",
          math: ["2 × 96 = 192 pixels"],
          after: [
            "This result is exact for the chosen resolution. It does not mean every screen displays 192 pixels across two physical inches.",
          ],
        },
        {
          heading: "Example of width and height for a print",
          lead: "For an 8.5 × 11-inch image at 300 PPI:",
          math: ["Width: 8.5 × 300 = 2,550 pixels", "Height: 11 × 300 = 3,300 pixels"],
          after: [
            "The required image dimensions are 2,550 × 3,300 pixels, before any additional bleed specified by the print provider.",
          ],
        },
        {
          heading: "Example of a fractional pixel result",
          lead: "For 2.33 inches at 150 PPI:",
          math: ["2.33 × 150 = 349.5 pixels"],
          after: [
            "Raster images need whole-pixel dimensions. Rounding 349.5 to the nearest whole pixel, with halves rounded up, gives 350 pixels. At the same resolution, that corresponds to approximately 2.333 inches.",
          ],
        },
      ],
      closing: "Round only at the final step, following your project’s requirements.",
    },
    reference: {
      heading: "Inches to pixels reference table",
      intro:
        "The column headings show image resolution in PPI; the values below them are pixel counts. These settings are examples, not universal requirements.",
      table: homeTable("en", { corner: "Length (inches)", col: "{ppi}" }),
      caption: "Inches to pixels at 72, 96, 150 and 300 PPI",
      footnote: "All table values are exact for the listed inputs.",
    },
    guide: { eyebrow: "Theoretical Foundations", title: "PIXELS, PRINT SIZE AND", highlight: "PPI" },
    explainers: [
      {
        heading: "Image pixels print size and CSS pixels",
        paragraphs: [
          "Pixel dimensions describe an image’s width and height in pixels. Print dimensions describe its physical size in inches. Image resolution connects the two: the same pixel dimensions can produce different print sizes.",
          "CSS uses a fixed relationship: 1in = 96px. These are CSS reference units, so a CSS pixel is not necessarily one physical device pixel, and an on-screen CSS inch may not measure a literal inch. Use this relationship for CSS sizing; do not assume it describes a display’s physical pixel density.",
        ],
      },
      {
        heading: "Image resolution and printer resolution",
        paragraphs: [
          "PPI describes image pixels per inch; DPI describes dots per inch produced by a printer. They are related in printing workflows but are not interchangeable. Use the image-resolution requirement for this calculator, rather than the printer’s hardware rating.",
        ],
      },
      {
        heading: "Changing resolution does not add image detail",
        paragraphs: [
          "Changing an image’s resolution metadata alone leaves its pixel count unchanged and changes its intended print size. Resampling changes the number of pixels. Simply assigning a higher resolution does not create new detail.",
        ],
      },
    ],
    browse: "Browse by topic",
    faqDescription: "Answers to common questions about converting inches to pixels.",
    faqs: [
      {
        question: "Which resolution should I use",
        answer:
          "Use the value required for your intended output. For printing, ask the print provider for the image resolution needed at the final size. If a digital upload specifies pixel dimensions, follow those dimensions directly.",
      },
      {
        question: "Does converting to pixels change the aspect ratio",
        answer:
          "Using the same resolution for width and height preserves their ratio before rounding. For example, a 4 × 4-inch image at 300 PPI becomes 1,200 × 1,200 pixels. Both are square: the ratio describes the shape, not the resolution.",
      },
      {
        question: "Can I calculate print size from an existing image",
        answer:
          "Yes. Divide each pixel dimension by the intended image resolution. At 300 PPI, a 1,800 × 1,200-pixel image corresponds to 6 × 4 inches. Cropping or scaling during printing can change the final output size.",
      },
    ],
  },
  hubs: {
    // Content: Content/Inches to Pixels by DPI Content.docx
    dpi: {
      nav: "DPI",
      h1: "Inches to Pixels DPI Converter",
      seoTitle: "Inches to Pixels DPI Converter | Calculate Print Size",
      description:
        "Convert inches to pixels with DPI for your project. Use the formula, worked examples, and a 72–600 DPI reference table to check image dimensions for print.",
      answer:
        "Calculate pixel dimensions from a physical measurement and your chosen resolution. Multiply inches by the specified DPI: at 300 DPI, 4 inches equals 1,200 pixels.",
      introNotes: [
        "For this conversion, DPI means the target image pixel density, technically called PPI. Use the resolution required for your project; there is no single pixel value for an inch.",
      ],
      sections: [
        {
          heading: "How to convert inches to pixels",
          blocks: [
            {
              type: "steps",
              items: [
                "Enter the physical length in inches.",
                "Enter the target resolution. For print work, use the image resolution requested by your print provider.",
                "Multiply the inches by that resolution to find the pixel length.",
                "For an image, calculate width and height separately using the same resolution.",
              ],
            },
            {
              type: "note",
              text: "Keep the original width-to-height ratio when converting an existing design. Changing that ratio requires cropping or stretching.",
            },
          ],
        },
        {
          heading: "Formula and worked examples",
          blocks: [
            { type: "math", lines: ["Pixels = Inches × DPI"], large: true },
            { type: "p", text: "Here:" },
            {
              type: "list",
              items: [
                "Pixels is the digital length in pixels, abbreviated px.",
                "Inches is the intended physical length.",
                "DPI is the chosen conversion value, interpreted as image pixels per inch.",
              ],
            },
            { type: "p", text: "For a rectangular image:" },
            {
              type: "math",
              lines: ["Width in pixels = Width in inches × DPI", "Height in pixels = Height in inches × DPI"],
            },
            {
              type: "sub",
              heading: "An 8 × 10-inch image at 300 DPI",
              blocks: [
                { type: "p", text: "If your project requires 300 PPI:" },
                { type: "math", lines: ["Width: 8 × 300 = 2,400 px", "Height: 10 × 300 = 3,000 px"] },
                { type: "p", text: "The required dimensions are 2,400 × 3,000 pixels. These results are exact." },
              ],
            },
            {
              type: "sub",
              heading: "A 2.5-inch length at 96 DPI",
              blocks: [
                { type: "math", lines: ["2.5 × 96 = 240 px"] },
                {
                  type: "p",
                  text: "At a specified density of 96 pixels per inch, 2.5 inches corresponds to exactly 240 pixels. The same length at another density produces a different result.",
                },
              ],
            },
            {
              type: "sub",
              heading: "A fractional result at 150 DPI",
              blocks: [
                { type: "math", lines: ["1.23 × 150 = 184.5 px"] },
                {
                  type: "p",
                  text: "A raster image needs whole-pixel dimensions. Rounding to the nearest whole pixel, with half values rounded up, gives 185 px.",
                },
              ],
            },
            {
              type: "note",
              text: "Round only the final result. If a production specification sets a minimum pixel count, round upward. Rounding width and height independently can slightly alter the aspect ratio, so check the final dimensions when precise proportions matter.",
            },
          ],
        },
        {
          heading: "Inches-to-pixels reference table",
          blocks: [
            {
              type: "p",
              text: "All values below are exact. The DPI column represents the target image density in PPI for this calculation.",
            },
            {
              type: "table",
              caption: "Pixels for 1, 4 and 6 inches at 72 to 600 DPI",
              table: dpiTable("en", {
                corner: "Specified DPI",
                cols: ["1 inch", "4 inches", "6 inches"],
                row: "{dpi} DPI",
                cell: "{px} px",
              }),
            },
            {
              type: "p",
              text: "For example, a 4 × 6-inch image at 300 DPI requires 1,200 × 1,800 pixels. At 72 DPI, the same physical size corresponds to 288 × 432 pixels.",
            },
          ],
        },
        {
          heading: "Choose the right resolution for the job",
          blocks: [
            {
              type: "sub",
              heading: "DPI and PPI describe different things",
              blocks: [
                {
                  type: "p",
                  text: "PPI means pixels per inch: the image pixels assigned to each inch of output. DPI means dots per inch: the dots a printer can produce. These are distinct measurements.",
                },
                {
                  type: "p",
                  text: "When a print specification uses “300 DPI” to request a 300 PPI image, use 300 in the calculation. Do not substitute a printer’s hardware DPI rating for the required image PPI.",
                },
              ],
            },
            {
              type: "sub",
              heading: "Physical size and pixel dimensions work together",
              blocks: [
                {
                  type: "p",
                  text: "Inches describe physical size; pixel dimensions describe the image’s digital width and height. At a fixed physical size, a higher target PPI requires more pixels.",
                },
                {
                  type: "p",
                  text: "Changing an existing image’s resolution setting without resampling does not add pixels. It changes the relationship between its print size and pixel density. Resampling changes the pixel count, so calculating a larger target alone does not improve the source image.",
                },
              ],
            },
            {
              type: "sub",
              heading: "Screen measurements need context",
              blocks: [
                {
                  type: "p",
                  text: "Do not assume every screen has 72 or 96 physical pixels per inch. CSS defines 1 inch as 96 CSS pixels, but CSS pixels are not necessarily individual device pixels or a literal physical measurement on a screen.",
                },
                {
                  type: "p",
                  text: "For an image upload, follow the destination’s required pixel dimensions. For printing, follow its physical-size and image-resolution requirements.",
                },
              ],
            },
          ],
        },
      ],
      faq: [
        {
          question: "How do I use this as a 300 DPI calculator?",
          answer:
            "Use 300 as the target resolution and multiply each inch measurement by 300. For example, a 5 × 7-inch image requires 1,500 × 2,100 pixels at 300 PPI.",
        },
        {
          question: "Can I convert inches to pixels without knowing the DPI?",
          answer:
            "There is no unique answer without a target pixel density. A 2-inch length corresponds to 144 pixels at 72 PPI, 192 pixels at 96 PPI, or 600 pixels at 300 PPI.",
        },
        {
          question: "Should I include bleed in the dimensions?",
          answer:
            "If your print provider requires bleed, calculate from the full artwork size including that bleed. For example, a 4 × 6-inch design with 0.125-inch bleed on every side becomes 4.25 × 6.25 inches. At 300 PPI, that is 1,275 × 1,875 pixels. Use your provider’s actual bleed specification.",
        },
      ],
    } as HubText,
    // Content: Content/Inches to Pixels in Software.docx
    software: {
      nav: "Software",
      h1: "Inches to Pixels in Software",
      seoTitle: "Inches to Pixels in Software: PPI Conversion Guide",
      description:
        "Convert inches to pixels using your project's PPI. See worked examples and learn how image dimensions, resampling, and export settings affect your results.",
      answer:
        "Convert inches to pixels by multiplying the measurement in inches by the required pixels per inch (PPI). One inch equals 300 px at 300 PPI, or 96 px at 96 PPI. When converting inches to pixels in software, use the resolution required for your output—not an assumed universal default.",
      sections: [
        {
          heading: "How to convert your dimensions",
          blocks: [
            {
              type: "steps",
              items: [
                "Identify the width or height you need in inches.",
                "Choose the PPI required for that output. For print, check the printer’s image-resolution specification.",
                "Calculate the pixel count using the inch measurement and PPI.",
                "Repeat for the other dimension, using the same PPI.",
              ],
            },
            {
              type: "note",
              text: "For an existing image, preserve its proportions. If your required width and height have a different aspect ratio, crop the image or add space around it rather than stretching it.",
            },
          ],
        },
        {
          heading: "Formula and examples",
          blocks: [
            { type: "math", lines: ["Pixels = Inches × PPI"], large: true },
            {
              type: "list",
              items: [
                "Pixels (px): the number of image pixels along one dimension.",
                "Inches (in): the intended physical length of that dimension.",
                "PPI: the number of image pixels per inch at that size.",
              ],
            },
            { type: "p", text: "The calculation applies separately to width and height." },
            {
              type: "sub",
              heading: "A 4 × 6-inch image at 300 PPI",
              blocks: [
                { type: "math", lines: ["Width: 4 × 300 = 1,200 px", "Height: 6 × 300 = 1,800 px"] },
                {
                  type: "p",
                  text: "The target image dimensions are 1,200 × 1,800 px, assuming no additional bleed or border.",
                },
              ],
            },
            {
              type: "sub",
              heading: "An 8 × 10-inch image at 150 PPI",
              blocks: [
                { type: "math", lines: ["Width: 8 × 150 = 1,200 px", "Height: 10 × 150 = 1,500 px"] },
                {
                  type: "p",
                  text: "The result is 1,200 × 1,500 px. This example uses 150 PPI as a specified requirement, not as a recommendation for every print job.",
                },
              ],
            },
            {
              type: "sub",
              heading: "A fractional measurement",
              blocks: [
                { type: "p", text: "For a width of 2.125 inches at 300 PPI:" },
                { type: "math", lines: ["2.125 × 300 = 637.5 px"] },
                {
                  type: "p",
                  text: "The mathematical result is exact, but a raster image needs a whole-number width. Rounded to the nearest pixel, use 638 px. At 300 PPI, that corresponds to approximately 2.127 inches.",
                },
              ],
            },
            {
              type: "note",
              text: "Round at the end of the calculation. If a production specification sets a minimum pixel count, round up when necessary to meet it.",
            },
          ],
        },
        {
          heading: "Quick conversion table",
          blocks: [
            {
              type: "p",
              text: "These values are exact for the stated PPI. The columns are calculation examples, not software defaults.",
            },
            {
              type: "table",
              caption: "Inches to pixels at 96, 150 and 300 PPI",
              table: softwareTable("en", {
                corner: "Length (inches)",
                cols: ["At 96 PPI (px)", "At 150 PPI (px)", "At 300 PPI (px)"],
              }),
            },
          ],
        },
        {
          heading: "Apply the result in your software",
          blocks: [
            {
              type: "sub",
              heading: "Photoshop: distinguish resizing from resampling",
              blocks: [
                {
                  type: "p",
                  text: "Compare your target pixel dimensions with the existing image dimensions before making a change.",
                },
                {
                  type: "p",
                  text: "With resampling disabled, changing PPI keeps the pixel count unchanged and changes the intended print size. With resampling enabled, changing size or resolution can add or remove pixels. Keep width and height proportional when resizing. Adobe explains these relationships in its resizing and resampling guide.",
                },
                {
                  type: "p",
                  text: "Increasing PPI alone does not create additional image detail. Enlarging through resampling adds calculated pixels; it does not recover detail missing from the original.",
                },
              ],
            },
            {
              type: "sub",
              heading: "Illustrator: check the raster export resolution",
              blocks: [
                {
                  type: "p",
                  text: "Vector artwork does not have a single fixed image pixel count. When you export it to a raster format such as PNG or JPEG, the artwork’s physical size and export resolution determine the output dimensions.",
                },
                {
                  type: "p",
                  text: "For example, a 4-inch-wide export area at 300 PPI needs a width of 1,200 px. Check the exported file’s dimensions, especially if the export includes extra bounds or padding. Illustrator’s available settings depend on the export format.",
                },
              ],
            },
            {
              type: "sub",
              heading: "Figma: account for export scale",
              blocks: [
                {
                  type: "p",
                  text: "For a raster asset, calculate the required output pixels first, then account for the export scale. A 600-pixel-wide frame exported at 2× produces an image 1,200 pixels wide. Avoid applying a multiplier again if your frame already uses the target output dimensions. See Figma’s export formats and settings.",
                },
                {
                  type: "p",
                  text: "For a 4-inch-wide image intended for 300 PPI printing, the target is 1,200 px wide, regardless of the frame-and-scale combination used to produce it.",
                },
              ],
            },
          ],
        },
        {
          heading: "Avoid common conversion mistakes",
          blocks: [
            {
              type: "sub",
              heading: "PPI and DPI describe different things",
              blocks: [
                {
                  type: "p",
                  text: "PPI measures image pixels per inch; DPI generally measures printer dots per inch. If a print specification uses “DPI” for an image, confirm whether it means the required image PPI. Do not automatically use a printer’s hardware dot resolution as the converter input.",
                },
              ],
            },
            {
              type: "sub",
              heading: "CSS pixels are logical units",
              blocks: [
                {
                  type: "p",
                  text: "CSS defines 1 inch as 96 CSS pixels. That does not mean every image should use 96 PPI, or that an element measuring one CSS inch will measure one physical inch on every screen. High-density displays can use multiple device pixels for one CSS pixel. See the W3C explanation of CSS units.",
                },
              ],
            },
            {
              type: "sub",
              heading: "Check the final output, not just the document size",
              blocks: [
                {
                  type: "p",
                  text: "When preparing an image for Canva, Procreate, Paint, InDesign, Word, PowerPoint, or Google Slides, distinguish the image’s pixel dimensions from its placed size. Verify the final image dimensions and intended print size rather than assuming an application name determines the conversion.",
                },
              ],
            },
          ],
        },
      ],
      faq: [
        {
          question: "Which PPI should I use?",
          answer:
            "Use the resolution required by your output workflow. For print, ask the print provider. For a screen asset specified in pixels, use those pixel dimensions directly; an inch conversion may be unnecessary.",
        },
        {
          question: "Why does the same image appear at different sizes in different apps?",
          answer:
            "An app may fit the image to a page, display it at a particular zoom level, or use resolution metadata to determine its placed size. Its apparent size alone does not tell you whether its pixel dimensions changed.",
        },
        {
          question: "Can I calculate inches to pixels in Excel or Google Sheets?",
          answer:
            "Yes. If cell A2 contains inches and B2 contains PPI, use:\n=A2*B2\nTo round a positive measurement to the nearest whole pixel, use:\n=ROUND(A2*B2,0)\nThis calculates a pixel dimension; it does not resize an image or set a spreadsheet column’s width.",
        },
      ],
    } as HubText,
    print: printHub("en", {
      nav: "Print & photo",
      h1: "Inches to Pixels for Printing, Photos and Images",
      description:
        "How many pixels you need for a sharp print: 4×6, 5×7, 8×10 and 11×14 inch photos at 150 and 300 DPI, with a print size calculator.",
      answer: "For a sharp print, you need print size × 300 pixels on each side.",
      printing: {
        heading: "Printing",
        body: "Pixels needed = print size in inches × print DPI. Most printers aim for 300 DPI.",
        corner: "Print size",
        row: "{w} × {h} in",
      },
      photos: {
        heading: "Photos and images",
        body: "A photo with too few pixels looks soft when printed large. Check your image’s pixel size against the table above before ordering prints.",
      },
      faq: [
        {
          question: "Can I enlarge a small photo?",
          answer: "Upscaling adds pixels but not detail, so large enlargements look blurry.",
        },
      ],
    }),
    sizes: sizesHub(
      "en",
      {
        nav: "Sizes",
        h1: "Common Print and Paper Sizes in Pixels",
        description:
          "Letter, A4, 4×6, 5×7, 8×10, 18×24, 24×36 and card sizes in pixels at 72, 150 and 300 DPI. Pick a size and convert it instantly.",
        answer: "Letter paper (8.5 × 11 in) is 2,550 × 3,300 px at 300 DPI.",
        overview: {
          heading: "All common sizes at a glance",
          body: "Pixel size of each format at 72, 150 and 300 DPI.",
          corner: "Size",
        },
        sizeBody:
          "{label} is {w} × {h} in. At 300 DPI that is {w300} × {h300} px, and at 72 DPI it is {w72} × {h72} px.",
        faq: [
          {
            question: "Which size is most common for print?",
            answer: "Letter and A4 for documents, 4 × 6 and 5 × 7 for photos.",
          },
        ],
      },
      sizeLabels,
    ),
    chart: chartHub("en", {
      nav: "Chart",
      h1: "Inches to Pixels Chart (All Common Values)",
      description:
        "Inches to pixels chart from 1/8 inch to 96 inches at 72, 96, 150 and 300 DPI. Find any common value at a glance.",
      answer: "Find any size from 1/8 inch to 96 inches at 72, 96, 150 and 300 DPI.",
      chart: {
        heading: "Conversion chart",
        body: "The full reference table. Each row is a value you can link to.",
        corner: "Inches",
      },
      items: ["1/8 inch", "2 inches", "2.5 inches", "3 inches", "4 inches", "5 inches", "8.5 inches"],
      itemBody:
        "{label} equals {px72} px at 72 DPI, {px96} px at 96 DPI, {px150} px at 150 DPI and {px300} px at 300 DPI.",
      faq: [
        {
          question: "Where are the other values?",
          answer: "Values such as 10, 12, 24 or 48 inches are rows in the chart table above.",
        },
      ],
    }),
  },
};

export const en = { ui, content };

export type Messages = typeof en;
export type UiMessages = Messages["ui"];
