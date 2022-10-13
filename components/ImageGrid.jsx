import React, { useState } from 'react';
import Card from './Card';

import photo1 from '/public/images/photo_1.jpg';
import photo2 from '/public/images/photo_2.jpg';
import photo3 from '/public/images/photo_3.jpg';
import photo4 from '/public/images/photo_4.jpg';
import photo5 from '/public/images/photo_5.jpg';
import photo6 from '/public/images/photo_6.jpg';
import photo7 from '/public/images/photo_7.jpg';
import photo8 from '/public/images/photo_8.jpg';
import photo9 from '/public/images/photo_9.jpg';

function ImageGrid() {
  const [images, setImages] = useState([
    {
      id: 'photo4',
      isOpen: false,
      url: photo4,
      title: 'Sri Lanka',
      text: 'New Year eve on Sri Lankan beach',
    },
    {
      id: 'photo2',
      isOpen: false,
      url: photo2,
      title: 'San Diego',
      text: 'Oh, that winter in Southern California',
    },
    {
      id: 'photo3',
      isOpen: false,
      url: photo3,
      title: 'Istanbul',
      text: 'LV makes their storefronts really memorable',
    },
    {
      id: 'photo8',
      isOpen: false,
      url: photo8,
      title: 'San Diego',
      text: 'Another winter moment',
    },
    {
      id: 'photo9',
      isOpen: false,
      url: photo9,
      title: 'San Diego',
      text: 'Never tried hair pomade before 😂',
    },
    {
      id: 'photo6',
      isOpen: false,
      url: photo6,
      title: 'Sri Lanka',
      text: 'Nice tunnel indeed',
    },
    {
      id: 'photo7',
      isOpen: false,
      url: photo7,
      title: 'New York',
      text: 'The Big Apple fella',
    },
    {
      id: 'photo1',
      isOpen: false,
      url: photo1,
      title: 'Minsk',
      text: 'Still polishing my jutsu',
    },
    {
      id: 'photo5',
      isOpen: false,
      url: photo5,
      title: 'Sri Lanka',
      text: 'Mountains everywhere',
    },
  ]);

  const handleClick = (id) => {
    const updatedImages = images.map((image) => {
      if (image.isOpen && image.id !== id) {
        image.isOpen = false;
      }
      if (image.id === id) {
        image.isOpen = !image.isOpen;
      }
      return image;
    });

    setImages(updatedImages);
  };

  return (
    <div className={'flex flex-wrap relative mt-6 max-w-[600px] w-full'}>
      {images.map((image, i) => (
        <Card
          key={i}
          {...{
            ...image,
            handleClick: () => handleClick(image.id),
          }}
        />
      ))}
    </div>
  );
}

export default ImageGrid;
