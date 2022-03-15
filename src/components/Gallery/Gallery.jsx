import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import galleryStyles from "./Gallery.module.css";
import { v4 as uuidv4 } from "uuid";

const Gallery = ({ images, firstImg }) => {
  const [active, setActive] = useState(firstImg);
  const thumb = useRef();

  useEffect(() => {
    setTimeout(() => {
      thumb.current.firstChild.classList.add(`${galleryStyles.active}`);
    });
  }, []);

  const onClickActive = (e) => {
    e.target.classList.add(`${galleryStyles.active}`);
    if (e.target.src) { 
      setActive(e.target.src);
    } else {
      return;
    }
  };

  return (
    <div className={galleryStyles.galleryContainer}>
      <div className={galleryStyles.slider}>
        <img key={uuidv4()} src={`${active}`} alt="product" />
      </div>
      <div ref={thumb} className={galleryStyles.thumbContainer}>
        {images.map((image) => {
          return (
            <img
              key={uuidv4()}
              onClick={onClickActive}
              src={`${image.full}`}
              className={`${galleryStyles.thumb}`}
              alt="thumb"
            />
          );
        })}
      </div>
    </div>
  );
};

export { Gallery };
