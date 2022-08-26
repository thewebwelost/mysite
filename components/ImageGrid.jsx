import React from 'react'
import Image from 'next/image'

import photo1 from '/public/images/photo_1.jpg';
import photo2 from '/public/images/photo_2.jpg';
import photo3 from '/public/images/photo_3.jpg';
import photo4 from '/public/images/photo_4.jpg';
import photo5 from '/public/images/photo_5.jpg';
import photo6 from '/public/images/photo_6.jpg';
import photo7 from '/public/images/photo_7.jpg';
import photo8 from '/public/images/photo_8.jpg';
import photo9 from '/public/images/photo_10.jpg';

function ImageGrid() {
  const renderItems = (items) => {
    return items.map((imageUrl, i) => 
      <div key={i} className={'w-24 h-24 relative transition-transform hover:scale-125 hover:z-50'}>
        <Image
          src={imageUrl}
          layout={'fill'}
          objectFit={'cover'}
          alt={''}
        />
      </div>
    )
  }

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
  ]

  return (
    <div className={'grid grid-cols-3 gap-1 mr-10'}>
      {renderItems(images)}
    </div>
  )
}

export default ImageGrid