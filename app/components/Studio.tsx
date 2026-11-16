"use client";

import { useState, type ReactNode } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import InchesConverter from "./InchesConverter";
import VisualScalePreview from "./VisualScalePreview";
import InchesToPixelsSlides from "./InchesToPixelsSlides";
import PresetDimensions from "./PresetDimensions";
import { clampDpi } from "../lib/units";
import { HOME } from "../lib/hubs";

/** Owns the shared DPI and size state for every interactive section. */
export default function Studio({
  children,
  afterHero,
  intro,
}: {
  children: ReactNode;
  afterHero?: ReactNode;
  /** Short answer under the headline. */
  intro: string;
}) {
  const [dpi, setDpi] = useState(HOME.calc.dpi);
  const [size, setSize] = useState({ w: HOME.calc.w, h: HOME.calc.h });

  const changeDpi = (next: number) => setDpi(clampDpi(next));
  const changeSize = (w: number, h: number) => setSize({ w, h });

  const loadSpec = (w: number, h: number, nextDpi: number) => {
    setSize({ w, h });
    setDpi(clampDpi(nextDpi));
    // Smoothness comes from CSS scroll-behavior, which honours reduced motion.
    document.getElementById("converter")?.scrollIntoView({ block: "start" });
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero currentDpi={dpi} onDpiSelect={changeDpi} intro={intro}>
          <InchesConverter
            currentDpi={dpi}
            onDpiChange={changeDpi}
            widthInches={size.w}
            heightInches={size.h}
            onDimensionsChange={changeSize}
          />
        </Hero>
        {/* The live scale preview sits right under the converter, so changes show immediately */}
        <VisualScalePreview currentDpi={dpi} widthInches={size.w} heightInches={size.h} />
        {afterHero}
        <InchesToPixelsSlides onLoadSlideDimensions={loadSpec} />
        <PresetDimensions onSelectPreset={loadSpec} />
        {children}
      </main>
    </>
  );
}
