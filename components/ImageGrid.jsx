import React from 'react';
import Image from 'next/image';

import photo1 from '/public/images/photo_1.jpg';
import photo2 from '/public/images/photo_2.jpg';
import photo3 from '/public/images/photo_3.jpg';
import photo4 from '/public/images/photo_4.jpg';
import photo5 from '/public/images/photo_5.jpg';
import photo6 from '/public/images/photo_6.jpg';
import photo7 from '/public/images/photo_7.jpg';
import photo8 from '/public/images/photo_8.jpg';
import photo9 from '/public/images/photo_9.jpg';
import Card from './Card';

const cards = [
  {
    url: photo4,
    title: 'Some text',
    text: 'More text here',
  },
];

function ImageGrid() {
  const images = [
    photo4,
    photo2,
    photo3,
    photo8,
    photo9,
    photo6,
    photo7,
    photo1,
    photo5,
  ];

  return (
    <div className={'flex flex-wrap relative mt-6 max-w-[600px] w-full'}>
      {images.map((imageUrl, i) => (
        <Card key={i} imageUrl={imageUrl} />
      ))}
    </div>
  );
}

export default ImageGrid;
