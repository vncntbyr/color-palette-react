import chromaJS from "chroma-js";
import { ColorGrade, CustomColor } from "../components/types/types";

type ColorSubset = {
    lAxis: number;
    chroma: number;
}

export const getGradingProperties = (
  grade: ColorGrade
): ColorSubset => {
  let colorInfo: ColorSubset = {
    lAxis: 0,
    chroma: 0,
  };
  switch (grade) {
    case "100":
      colorInfo.lAxis = 0.98;
      colorInfo.chroma = 0.03;
      break;
    case "200":
      colorInfo.lAxis = 0.85;
      colorInfo.chroma = 0.07;
      break;
    case "300":
      colorInfo.lAxis = 0.78;
      colorInfo.chroma = 0.13;
      break;
    case "400":
      colorInfo.lAxis = 0.62;
      colorInfo.chroma = 0.18;
      break;
    case "500":
      colorInfo.lAxis = 0.5;
      colorInfo.chroma = 0.2;
      break;
    case "600":
      colorInfo.lAxis = 0.42;
      colorInfo.chroma = 0.18;
      break;
    case "700":
      colorInfo.lAxis = 0.31;
      colorInfo.chroma = 0.14;
      break;
    case "800":
      colorInfo.lAxis = 0.2;
      colorInfo.chroma = 0.1;
      break;
    case "900":
      colorInfo.lAxis = 0.12;
      colorInfo.chroma = 0.05;
      break;
  }
  return colorInfo;
};

export const getColorFromColorElements = (colorGrades: ColorGrade[], hue: number) => {
return colorGrades.map((colorGrade: ColorGrade) => {
    const colorInfo = getGradingProperties(colorGrade);
    return { grade: colorGrade, ...colorInfo, hue };
  })
}

export const getColorRanges = (colorGrades:ColorGrade[], colors: CustomColor[]) => {
    const gradeColors: Record<number, CustomColor | undefined> = {};
    colorGrades.forEach(grade => {
        gradeColors[grade] = colors.find(color => color.grade === grade);
    });

    return {
        light: {
            textColor: getChromaColor(gradeColors[800]),
            backgroundColor: getChromaColor(gradeColors[300]),
            ctaBackgroundColor: getChromaColor(gradeColors[500]),
            ctaTextColor: getChromaColor(gradeColors[100])
        },
        medium: {
            textColor: getChromaColor(gradeColors[200]),
            backgroundColor: getChromaColor(gradeColors[600]),
            ctaBackgroundColor: getChromaColor(gradeColors[300]),
            ctaTextColor: getChromaColor(gradeColors[800])
        },
        dark: {
            textColor: getChromaColor(gradeColors[100]),
            backgroundColor: getChromaColor(gradeColors[800]),
            ctaBackgroundColor: getChromaColor(gradeColors[100]),
            ctaTextColor: getChromaColor(gradeColors[900])
        }
    };
};

const getChromaColor = (color: CustomColor | undefined) => {
    if (!color) return null;
    return chromaJS.oklch(color.lAxis, color.chroma, color.hue);
};
export const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>
