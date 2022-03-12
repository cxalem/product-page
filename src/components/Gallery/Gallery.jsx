import Image from "next/image";
import React, { useState, useRef } from "react";
import galleryStyles from "./Gallery.module.css";
import { v4 as uuidv4 } from 'uuid'

const Gallery = ({ images }) => {
  const [active, setActive] = useState(true)
  const thumb = useRef()
  const onClickActive = (e) => {
    const target = e.target
    if (target != thumb.current) {
      console.log(target)
    } else {
      return
    }
  }
  return (
    <div className={galleryStyles.galleryContainer}>
      <div className={galleryStyles.slider}>
        {images.map((image) => {
          return <img key={uuidv4()} src={`${image.full}`} alt="product" />;
        })}
      </div>
      <div ref={thumb} className={galleryStyles.thumb} onClick={onClickActive}>
        {images.map((image) => {
          return <img key={uuidv4()} src={`${image.thumb}`} alt="thumb" />;
        })}
      </div>
    </div>
  );
};

export { Gallery };
