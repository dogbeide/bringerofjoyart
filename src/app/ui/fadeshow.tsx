'use client';

import Image from "next/image";
import IMGS_WHOAMI from '@/app/lib/whoami-imgs'
import { useState, useEffect } from "react";

export default function FadeShow({ imgs =  IMGS_WHOAMI }) {

  const [slideNumber, setSlideNumber] = useState(0);

  const classNamesArr: Array<any> = [];
  imgs.map((img: any) => {
    const classNames = !img.classes ? 
      'boyowa' : 
      img.classes.reduce((className: string, acc: string) => (
        `${acc} ${className}`
      ) , '');
    classNamesArr.push(classNames);
  })

  useEffect(() => {
    
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setSlideNumber((prevSlideNumber: number) => ((prevSlideNumber + 1) % imgs.length));
    }, 3000)
  }, [slideNumber])

  return(
    <div className="slideshow">
      {imgs.map((img: any, idx: number) => (
        <div key={idx} className={`${classNamesArr[idx]} ${idx == slideNumber ? 'fadeIn' : 'fadeOut'}`}>
          <Image
            src={img.src}
            alt={img.alt}
            placeholder="blur"
            width={img.width ? img.width : 176}
            height={img.height ? img.height : 176}
          />
        </div>
      ))
      }
      {/* <Image
        className="boyowa"
        src={boyowaPainted}
        alt="boyowa_self-portrait-painted"
        height={176}
        width={176}
      />
      <Image
        className="boyowa hidden"
        src={boyowaGuitarStand}
        alt="boyowa_standing-on-stage-guitar"
        height={176}
        width={176}
      />
      <Image
        className="boyowa hidden"
        src={boyowaPaintingPalace}
        alt="boyowa_painting-palace-group_176x176"
        height={176}
        width={176}
      />
      <Image
        className="boyowa hidden"
        src={boyowaFandango}
        alt="boyowa_at-fandango"
        height={176}
        width={176}
      />
      <Image
        className="boyowa hidden"
        src={boyowaDeepFreeze}
        alt="boyowa_deep-freeze-festival"
        height={176}
        width={176}
      /> */}
    </div>
  );
}