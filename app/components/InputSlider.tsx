import { Dispatch, SetStateAction } from "react";

type InputSliderProps = {
  hue: number;
  setHue: Dispatch<SetStateAction<number>>;
};

export const InputSlider = ({ hue, setHue }: InputSliderProps) => {
  return (
    <div id='input' className='flex flex-col gap-2'>
      <input
        type='range'
        min='0'
        max='360'
        value={hue}
        onInput={(e: any) => setHue(e.target.value)}
      />
      <div className='flex justify-between items-center gap-4'>
        <span className='text-black'>hue: {hue}</span>
        <div className='flex gap-2'>
          <button
            className='px-2 py-1 bg-gray-200 text-black rounded-md'
            onClick={() => setHue(150)}
          >
            grün
          </button>
          <button
            className='px-2 py-1 bg-gray-200 text-black rounded-md'
            onClick={() => setHue(270)}
          >
            blau
          </button>
          <button
            className='px-2 py-1 bg-gray-200 text-black rounded-md'
            onClick={() => setHue(30)}
          >
            rot
          </button>
        </div>
      </div>
    </div>
  );
};
