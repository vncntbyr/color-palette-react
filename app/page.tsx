"use client";
import Image from "next/image";
import { InputSlider } from "./components/InputSlider";
import { Card } from "./components/Card";
import { ColorPalette } from "./components/ColorPalette";
import {
  getColorFromColorElements,
  getColorRanges,
  getGradingProperties,
  getKeys,
} from "./utils/utils";
import { ColorGrade, CustomColor } from "./components/types/types";
import { useState } from "react";

const colorGrades: ColorGrade[] = [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

export default function Home() {
  const [hue, setHue] = useState(0);
  const colors: CustomColor[] = getColorFromColorElements(colorGrades, hue);
  const colorRanges = getColorRanges(colorGrades, colors);
  return (
    <main className='bg-white flex flex-1 justify-between h-screen p-8'>
      <div id='leftSide' className='flex flex-col justify-between w-6/12 gap-4'>
        <InputSlider hue={hue} setHue={setHue} />
        <div id='examples' className='flex gap-3 flex-col'>
          {getKeys(colorRanges).map((colorRange) => (
            <Card key={colorRange} {...colorRanges[colorRange]} />
          ))}
        </div>
      </div>
      <div id='rightSide' className='flex w-6/12'>
        <ColorPalette colors={colors} />
      </div>
    </main>
  );
}
