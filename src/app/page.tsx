'use client';

import Image from "next/image";

import quantumHealing from '@/../public/images/quantum-healing_264x198.jpg';
import boyowaPainted from '@/../public/images/boyowa_painted.jpg';
import boyowaGuitarStand from '@/../public/images/boyowa_guitar-stand-stage_176x176.jpg';
import boyowaFandango from '@/../public/images/boyowa_fandango.jpg';
import boyowaPaintingPalace from '@/../public/images/boyowa_painting-palace-group_176x176.jpg';
import boyowaDeepFreeze from '@/../public/images/boyowa_deep-freeze_132x176px.jpg'

import Connect from './ui/connect'
import VisualSlam from '@/app/ui/visual-slam'
import Music from '@/app/ui/music'

import './ui/book.scss'

export default function Home() {
  
  return (
    <>
      <VisualSlam />
      <div id="healing" className="my-container anchor">
        <div className="title">
          <span className="inf">♾️</span> <a>QUANTUM HEALING</a>{" "}
          <span className="inf">♾️</span>
        </div>
        <div className="photo-container">
          <Image
            className="photo"
            src={quantumHealing}
            height={132}
            width={176}
            alt="boyowa_self-portrait-painted"
          />
        </div>
        <div className="desc">
          <p>
            <i>
              Shifting the subconscious to heal yourself from within. <br />
              <strong>
                Your own Source connection already knows what to do, organically.
              </strong>
            </i>
          </p>
          <p>
            <span className="we-can-address">
              We can address inner wounds,
              <br />
              We can address psychological problems, <br />
              We can address patterns in your life, <br />
              We can address physical issues. <br />
            </span>
            <span className="anything-really">
              (anything really... get creative, Lol!)
            </span>
          </p>
          <p>Whatever is ready 💚</p>
          <p>
            <a
              href="https://www.linktr.ee/iamboyowa_healing"
              className="text-shadow"
              target="_blank"
            >
              ~ Heal Yourself ~
            </a>
          </p>
        </div>
      </div>

      <Music />

      <div id="whoami" className="my-container anchor">
        <div className="slideshow">
          <Image
            className="boyowa"
            src={boyowaPainted}
            alt="boyowa_self-portrait-painted"
            fill
          />
          <Image
            className="boyowa hidden"
            src={boyowaGuitarStand}
            alt="boyowa_standing-on-stage-guitar"
            fill
          />
          <Image
            className="boyowa hidden"
            src={boyowaPaintingPalace}
            alt="boyowa_painting-palace-group_176x176"
            fill
          />
          <Image
            className="boyowa hidden"
            src={boyowaFandango}
            alt="boyowa_at-fandango"
            fill
          />
          <Image
            className="boyowa hidden"
            src={boyowaDeepFreeze}
            alt="boyowa_deep-freeze-festival"
            fill
          />
        </div>
        <span className="text-break">~</span>
        <div className="desc">
          Boyowa means 'Bringer of Joy' in the Itsekiri language of Nigeria. 🌍
          <br />
          He was born in the UK👨🏿‍🏭, raised in Canada🍁, and has been a nomad his
          whole life.
          <br />
          <br />
          He started writing poetry📖, comics😆, art🎨, and music🎵 from a little
          boy, and discovered music production🎧 in his early teens. Since then,
          he has been exploring a variety of genres and art-styles such as
          <span className="ellipsis">...</span>
          <span className="show-more" onClick={() => console.log("showMore(1)")}>
            (show more)
          </span>
          <span className="more-to-show">
            singing🎤, songwriting🎼, freestyle rapping🔥, and both visual and
            media🎭 art design.
            <br />
            <br />
            Healing💚 has been a huge component of his life and has been the main
            focus ever since he started meditating🙏🏿 at age 22. <br />
            He is very well experienced with breathwork😮‍💨 practices,
            transformational psychology🪢, and is a certified Reiki Master☯️
            practitioner with years under his belt. <br />
            <br />
            He has explored Shamanism🧙🏿, has been on an integrative journey with
            nature🌳 to realizing this, and is highly experienced with various
            forms of<span className="ellipsis">...</span>
            <span className="show-more" onClick={() => console.log("showMore(2)")}>
              (show more)
            </span>
          </span>
          <span className="more-to-show">
            subconscious integration with the zero point field♾️, sound healing🌀,
            and quantum energy work🧬, all using his hands and voice.
            <br />
            <br />
            Boyowa loves to laugh, live, and joke around.😎 Life is fun! Life is
            candid, life is a joke (above all, lol!). <br />
            Joy is his fuel, Love is his sustenance, and connection to Source is
            at the heart of all creation. 😊
            <span className="show-less" onClick={() => console.log("showLess()")}>
              (show less)
            </span>
          </span>
          <span className="text-break">~</span>
        </div>
        <div className="grain" />
      </div>
      <Connect />
    </>
  );
}
