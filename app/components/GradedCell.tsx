import chromaJS from "chroma-js";
import { ColorGrade } from "./types/types";
import { getGradingProperties } from "../utils/utils";

type ColorGradeProps = {
  grade: ColorGrade;
  lAxis: number;
  chroma: number;
  hue: number;
};

export const GradedCell = ({
  grade,
  lAxis,
  chroma,
  hue,
}: ColorGradeProps): JSX.Element => {
  const color = chromaJS.oklch(lAxis, chroma, hue);
  const hexColor = color.hex();

  return (
    <div
      className={"flex flex-1 flex-col w-10/12 px-1"}
      style={{ backgroundColor: hexColor }}
    >
      <div
        className={`${
          lAxis > 0.5 ? "text-black" : "text-white"
        } flex flex-1 justify-between`}
      >
        <div className='flex items-end'>
          <span>.{grade}</span>
        </div>
        <div className='flex flex-col justify-end gap-1'>
          <span>{hexColor}</span>
          <span>
            oklch({lAxis}, {chroma}, {hue})
          </span>
        </div>
      </div>
    </div>
  );
};
