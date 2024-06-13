import Image from "next/image";

import quantumHealing from '@/../public/images/quantum-healing_264x198.jpg';

import Connect from './ui/connect'
import VisualSlam from '@/app/ui/visual-slam'
import Music from '@/app/ui/music'
import WhoAmI from '@/app/ui/whoami'

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

      <WhoAmI />

      <Connect />
    </>
  );
}
