'use client'

import { useState } from "react";
import FadeShow from "./fadeshow";

type WhoAmIRole = {
  role?: 'overall' | 'healer' | 'musician'
};

export default function WhoAmI({ role='overall' } : WhoAmIRole ) {

  const [expanded, setExpanded] = useState(0);

  const handleExpand = () => {
    setExpanded((expandedState) => (expandedState + 1) % 3);
  }

  return (
    <div id="whoami" className="my-container anchor">
      <FadeShow />
      <span className="text-break">~</span>
      <div className="desc" style={{ display: role == 'overall' ? 'block' : 'none'}}> 
        Boyowa means &apos;Bringer of Joy&apos; in the Itsekiri language of Nigeria.

        <br />
        <br />

        He was born in the UK👨🏿‍🏭, <br/>
        raised in Canada🍁, <br/>
        and has been nomadic his whole life.🌍

        <br />
        <br />

        He started writing poetry📖, <br />
        comics😆, art🎨, and music🎵 as a boy, <br />
        then discovered music production🎧 in his early teens. 
        
        <br />
        <br />

        Ever since, he has explored a variety of genres and art-styles such as

        <span className="ellipsis">...</span>
        {expanded >= 1 && <span className="more-to-show">
          <br />
          <br />

          singing🎤,<br /> 
          songwriting🎼, <br />
          freestyle rapping🔥, <br />
          and both visual/media art design.🎭

          <br />
          <br />

          Healing💚 has been a huge component of his life and has been the main
          focus ever since he started meditating🙏🏿 at age 22.
          
          <br />
          <br />

          He has been fully initiated into Shamanism🧙🏿, <br />
          has been on an integrative journey with nature🌳, <br />
          and is highly experienced with: 

          <br />
          <br />

          - Subconscious Integration🔮,<br />
          - the Zero Point field♾️, <br />
          - Sound Healing🌀,<br />
          - Quantum Energy Work🧬, 
        
          
          <span className="ellipsis">...</span>
        </span>}
        {expanded >= 2 && <span className="more-to-show">
          <br />
          <br />

          Boyowa has already helped dozens of participants for over 5 years in 6 different countries.🌟

          <br />
          <br />

          He is a certified Reiki Master☯️ practitioner with years under his belt 
          and is very well experienced with transformational psychology🪢 
          and breathwork😮‍💨. 

          <br />
          <br />

          Boyowa loves to laugh, live, and joke around.😎 Life is fun! Life is
          candid, life is a joke (above all, lol!). <br />
          Joy is his fuel, Love is his sustenance, and connection to Source is
          at the heart of all creation. 😊
        </span>}
        <span className="show-more" onClick={() => handleExpand()}>
          { expanded == 2 ? '(show less)' : <>
            <span className="ellipsis">...</span><br />
            (show more)
          </>}
        </span>
        <span className="text-break">~</span>
      </div>
      <div className="desc" style={{ display: role == 'healer' ? 'block' : 'none'}}> 
          Boyowa means &apos;Bringer of Joy&apos; in the Itsekiri language of Nigeria.

          <br />
          <br />

          He was born in the UK👨🏿‍🏭, <br/>
          raised in Canada🍁, <br/>
          and has been nomadic his whole life.🌍

          <br />
          <br />
          
          🌟<br />
          Boyowa has already helped dozens of participants for over 5 years in 6 different countries.
          
          <br />
          <br />
          Healing💚 has been a huge component of his life and has been the main
          focus ever since he started meditating🙏🏿 at age 22. 
          
          <br />
          <br />

          He has been fully initiated into Shamanism🧙🏿, <br />
          has been on an integrative journey with nature🌳, <br />
          and is highly experienced with: 
          
          <br />
          <br />

          - Subconscious Integration🔮, <br />
          - the Zero Point field♾️, <br />
          - Sound Healing🌀,<br />
          - Quantum Energy Work🧬, 
          
          <br />
          <br />
          
          all using his hands and voice.
          
          {expanded >= 1 && <span className="more-to-show">
            <br />
            <br />
            He is a certified Reiki Master☯️ practitioner with years under his belt 
            and is very well experienced with transformational psychology🪢 
            and breathwork😮‍💨.  
          </span>}

          {expanded >= 2 && <span className="more-to-show">
            <br />
            <br />
            Boyowa loves to laugh, live, and joke around.😎 Life is fun! Life is
            candid, life is a joke (above all, lol!). <br />
            Joy is his fuel, Love is his sustenance, and connection to Source is
            at the heart of all creation. 😊
          </span>}
          <span className="show-more" onClick={() => handleExpand()}>
            { expanded == 2 ? '(show less)' : <>
              <span className="ellipsis">...</span><br />
              (show more)
            </>}
          </span>
        <span className="text-break">~</span>
      </div>
      <div className="grain" />
    </div>
  )
}