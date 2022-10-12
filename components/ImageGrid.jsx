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
      title: 'Some text',
      text: 'More text here',
    },
    {
      id: 'photo2',
      isOpen: false,
      url: photo2,
      title: 'Some text',
      text: 'More text here',
    },
    {
      id: 'photo3',
      isOpen: false,
      url: photo3,
      title: 'Some text',
      text: 'More text here',
    },
    {
      id: 'photo8',
      isOpen: false,
      url: photo8,
      title: 'Some text',
      text: 'More text here',
    },
    {
      id: 'photo9',
      isOpen: false,
      url: photo9,
      title: 'Some text',
      text: 'More text here',
    },
    {
      id: 'photo6',
      isOpen: false,
      url: photo6,
      title: 'Some text',
      text: 'More text here',
    },
    {
      id: 'photo7',
      isOpen: false,
      url: photo7,
      title: 'Some text',
      text: 'More text here',
    },
    {
      id: 'photo1',
      isOpen: false,
      url: photo1,
      title: 'Some text',
      text: 'More text here',
    },
    {
      id: 'photo5',
      isOpen: false,
      url: photo5,
      title: 'Some text',
      text: 'More text here',
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
