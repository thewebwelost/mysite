import Image from 'next/image';
import React, { useState } from 'react';

function Card({ imageUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = 'translate-x-[0%]';
  const closed = 'translate-x-[100%]';

  return (
    <div
      className={'relative w-4/12 h-40 overflow-hidden'}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`absolute z-10 top-0 left-0 w-full h-full p-3 pr-5 bg-black text-white text-xs transition-transform ${
          isOpen ? open : closed
        }`}
      >
        <h3 className="font-bold capitalize mb-1 text-sm">content</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nam
          excepturi natus saepe nihil
        </p>
      </div>

      <Image
        src={imageUrl}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        alt=""
      />
    </div>
  );
}

export default Card;
