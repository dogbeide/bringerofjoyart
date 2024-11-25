import Image from "next/image"
import ButtonCTA from "@/app/ui/button-cta";
import quantumHealing from '@/../public/images/quantum-healing_264x198.jpg';
import WhoAmI from "./whoami";
import Script from "next/script";
import Testimonials from "./testimonials";

export default function Healing() {
  const linktreeHealing = 'https://linktr.ee/bringerofjoyhealing'

  return (
    <div id="healing" className="my-container anchor">

      {/* <QuantumShamanicHealing /> */}

      <div id="book-session" className="tidycal-embed" data-path="bringerofjoyhealing" />

      <hr />

      <Testimonials />

      <div className="title mb-4">
        <span className="inf">♾️</span> <a>WHO IS THE PRACTITIONER?</a>{" "}
        <span className="inf">♾️</span>
      </div>
      <div className="desc">
        {/* <p><strong>Who Is The Practitioner?</strong></p> */}
        <WhoAmI role='healer' />
      </div>

      <div style={{ margin: '23px 0' }}>
        <ButtonCTA 
          href='https://tidycal.com/bringerofjoyhealing'
          target="_blank"
        >
          ~ Book Session ~
        </ButtonCTA>
      </div>

      <Script src="https://asset-tidycal.b-cdn.net/js/embed.js" />

    </div>
  )
}

const QuantumShamanicHealing = () => {
  const linktreeHealing = 'https://linktr.ee/bringerofjoyhealing'

  return (
    <>
      <div className="title">
        <span className="inf">♾️</span> <a>SHAMANIC/MULTIDIMENSIONAL HEALING</a>{" "}
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
        <div className="mt-2 px-1">
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
          <p>Whatever is ready 💚</p>

          <p>
            <ButtonCTA 
              href="#book-session"
              target="_self"
            >
              ~ Heal Yourself ~
            </ButtonCTA>
          </p>

          <hr /> {/*---------------------------------------------------------------------*/}

          <p className="we-can-address">
            Every session will be structured for maximum safety, <br />
            with room to explore organically within our lovingly-held space.
          </p>
          <p>
            <strong>
              Every session is unique ❄️
            </strong>
          </p>
          <p className="we-can-address">
            I will sing, tone, bring forth &apos;light language&apos;, and issue voice commands.<br />
            You sit/lay back & relax 😊
          </p>
          <p className="we-can-address">
            <i>I ONLY work with Natural Laws of Creation.</i><br />
            ✅
          </p>

          <hr />

          <div style={{justifyContent: 'center'}}>
            <div style={{display: 'inline-block', textAlign: "left", width: '320px'}}>
              <strong>Session Structure:</strong>
              <p> </p>
              <ol>
                <li style={{ color: 'red'}}>Heart Meditation</li>
                <li style={{ color: 'orange'}}>Calling-In</li>
                <li style={{ color: '#FFC300'}}>Setup/Open Session</li>
                <li style={{ color: 'green'}}>Healing & Clearing</li>
                <li style={{ color: 'blue'}}>Restart Organic</li>
                <li style={{ color: 'violet'}}>Finalize and Closing</li>
              </ol>

              <p></p>

              <strong>Integration:</strong>
              <p></p>
              <ul>
                <li className="we-can-address">Takes time to fully &apos;lock-in&apos; to physical</li>
                <li className="we-can-address">Usually 3 days for first 90%</li>
                <li className="we-can-address">Drink water, breathe, rest, LISTEN to your body!</li>
                <li className="we-can-address">Surrender... :)</li>
              </ul>
            </div>

            <p>
              <ButtonCTA 
                href="#book-session"
                target="_self"
              >
                ~ Book Session ~
              </ButtonCTA>
            </p>

            <p><i>Look forward to seeing you!~</i></p>
            
          </div>
        </div>

        <br />
        <hr />

        <div>
          <p><strong>Who Is This For?</strong></p>
          <div style={{display: 'inline-block', textAlign: "center", width: '320px'}}>

            <p className="we-can-address">Those who feel called,</p>
            <p className="we-can-address">Those who are ready,</p>
            <p className="we-can-address">Those who are willing,</p>
            <p className="we-can-address">Those who are curious,</p>
            <p className="we-can-address">Those who want to heal...</p>

          </div>
        </div>
      </div>
    </>
  )
}