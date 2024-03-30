import chromaJS from "chroma-js";
import { ColorGrade, CustomColor } from "../components/types/types";

type ColorSubset = {
  lAxis: number;
  chroma: number;
};

const gradingProperties: Record<ColorGrade, ColorSubset> = {
  "100": { lAxis: 0.98, chroma: 0.03 },
  "200": { lAxis: 0.85, chroma: 0.07 },
  "300": { lAxis: 0.78, chroma: 0.13 },
  "400": { lAxis: 0.62, chroma: 0.18 },
  "500": { lAxis: 0.5, chroma: 0.2 },
  "600": { lAxis: 0.42, chroma: 0.18 },
  "700": { lAxis: 0.31, chroma: 0.14 },
  "800": { lAxis: 0.2, chroma: 0.1 },
  "900": { lAxis: 0.12, chroma: 0.05 },
};

export const getColor = (
  colorGrades: ColorGrade[],
  hue: number
): Record<ColorGrade, CustomColor> => {
  let retObj = {} as Record<ColorGrade, CustomColor>;
  colorGrades.forEach((colorGrade: ColorGrade) => {
    retObj[colorGrade] = { ...gradingProperties[colorGrade], hue };
  });
  return retObj;
};

export const getColorRanges = (colors: Record<ColorGrade, CustomColor>) => {
  return {
    light: {
      textColor: getChromaColor(colors["800"]),
      backgroundColor: getChromaColor(colors["300"]),
      ctaBackgroundColor: getChromaColor(colors["500"]),
      ctaTextColor: getChromaColor(colors["100"]),
    },
    medium: {
      textColor: getChromaColor(colors["200"]),
      backgroundColor: getChromaColor(colors["600"]),
      ctaBackgroundColor: getChromaColor(colors["300"]),
      ctaTextColor: getChromaColor(colors["800"]),
    },
    dark: {
      textColor: getChromaColor(colors["100"]),
      backgroundColor: getChromaColor(colors["800"]),
      ctaBackgroundColor: getChromaColor(colors["100"]),
      ctaTextColor: getChromaColor(colors["900"]),
    },
  };
};

export const getChromaColor = (color: CustomColor | undefined) => {
  if (!color) return null;
  return chromaJS.oklch(color.lAxis, color.chroma, color.hue);
};

export const getKeys = Object.keys as <T extends object>(
  obj: T
) => Array<keyof T>;
