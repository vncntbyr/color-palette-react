import { getKeys } from "../utils/utils";
import { GradedCell } from "./GradedCell";
import { ColorGrade, CustomColor } from "./types/types";

type ColorPaletteProps = {
  colors: Record<ColorGrade, CustomColor>;
};

export const ColorPalette = ({ colors }: ColorPaletteProps) => {
  return (
    <div className='flex flex-col px-4 items-center flex-1'>
      {getKeys(colors).map((grade) => (
        <GradedCell key={grade} grade={grade} {...colors[grade]} />
      ))}
    </div>
  );
};
