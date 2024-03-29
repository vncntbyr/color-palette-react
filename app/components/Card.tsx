import { Color } from "chroma-js";

type CardProps = {
  textColor: Color | null;
  backgroundColor: Color | null;
  ctaBackgroundColor: Color | null;
  ctaTextColor: Color | null;
};

export const Card = ({
  textColor,
  backgroundColor,
  ctaBackgroundColor,
  ctaTextColor,
}: CardProps) => {
  return (
    <div
      className='rounded-md p-2 h-48 flex flex-col justify-between'
      style={{ backgroundColor: backgroundColor?.hex() }}
    >
      <div style={{ color: textColor?.hex() }}>
        <h2>Card Title</h2>
        <span>This is a card</span>
      </div>
      <div className='flex justify-end '>
        <button
          className='px-2 py-1 rounded-md'
          style={{
            backgroundColor: ctaBackgroundColor?.hex(),
            color: ctaTextColor?.hex(),
          }}
        >
          Buy now
        </button>
      </div>
    </div>
  );
};
