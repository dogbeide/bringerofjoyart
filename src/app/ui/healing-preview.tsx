import Image from "next/image"
import ButtonCTA from "./button-cta"
import quantumHealing from '@/../public/images/quantum-healing_264x198.jpg';

export default function HealingPreview() {

  return (
    <div id="healing" className="desc mt-2 px-1">
      <div className="title">
        <span className="inf">♾️</span> <a>HEALING</a>{" "}
        <span className="inf">♾️</span>
      </div>
      <div className="subtitle">
        <span>REIKI • SOUND • MULTIDIMENSIONAL</span>
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
            Shifting the metaphysical and subconscious layers to heal yourself from within.<br />
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
        <p>
          <strong>Whatever is ready 💚</strong>
        </p>
        <p>
          <ButtonCTA 
            href="/healing"
            target="_self"
          >
            See More...
          </ButtonCTA>
        </p>
      </div>
      
    </div>
  )
}