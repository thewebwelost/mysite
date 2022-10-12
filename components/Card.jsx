import Image from 'next/image';
import React, { useState } from 'react';

function Card({ url, title, text, isOpen, handleClick = () => {} }) {
  const open = 'translate-x-[20%]';
  const closed = 'translate-x-[100%]';

  return (
    <div
      className={
        'relative w-4/12 h-40 overflow-hidden cursor-pointer border-2 border-white'
      }
      onClick={handleClick}
    >
      {/* content shim */}
      <div
        className={`absolute z-20 top-0 left-0 w-full h-full p-3 pr-10 bg-stone-900/50 text-white text-xs transition-transform ${
          isOpen ? open : closed
        }`}
      >
        <h3 className={'font-bold capitalize mb-1 text-sm'}>{title}</h3>
        <p>{text}</p>
      </div>

      {/* bg image */}
      <Image
        src={url}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        alt=""
      />
    </div>
  );
}

export default Card;
