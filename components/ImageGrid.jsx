import React from 'react'
import Image from 'next/image'

function ImageGrid() {
  const renderItems = (items) => items.map((imageUrl, i) => <Image key={i} src={imageUrl} alt={''} />)

  const images = [
    '../public/images/photo_1.jpg',
    '../public/images/photo_2.jpg',
    '../public/images/photo_3.jpg',
    '../public/images/photo_4.jpg',
    '../public/images/photo_5.jpg',
    '../public/images/photo_6.jpg',
    '../public/images/photo_7.jpg',
    '../public/images/photo_8.jpg',
    '../public/images/photo_9.jpg',
  ]

  return (
    <div className={'grid-rows-3'}>
      {renderItems(images)}
    </div>
  )
}

export default ImageGrid