import Image from 'next/image'
import React from 'react'
import galleryStyles from './Gallery.module.css'

const Gallery = () => {
  return (
    <div className={galleryStyles.galleryContainer}>
      {/* <Image 
        src='/'
        width={10}
        height={10}
        alt='Foto'
      /> */}
    </div>
  )
}

export { Gallery }
