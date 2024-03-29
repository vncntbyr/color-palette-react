import { GradedCell } from "./GradedCell";
import { CustomColor } from "./types/types";

type ColorPaletteProps = {
  colors: CustomColor[];
};

export const ColorPalette = ({ colors }: ColorPaletteProps) => {
  return (
    <div className='flex flex-col px-4 items-center flex-1'>
      {colors.map((color) => (
        <GradedCell key={color.grade} {...color} />
      ))}
    </div>
  );
};
