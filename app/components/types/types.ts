export type ColorGrade = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

export type CustomColor = {
    grade: ColorGrade;
    lAxis: number;
    chroma: number;
    hue: number
    }