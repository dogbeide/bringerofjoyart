'use client'

import { useState } from "react";
import FadeShow from "./fadeshow";

export default function WhoAmI() {

  const [expanded, setExpanded] = useState(0);

  const handleExpand = () => {
    setExpanded((expandedState) => (expandedState + 1) % 3);
  }

  return (
    <div id="whoami" className="my-container anchor">
      <FadeShow />
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
        {expanded >= 1 && <span className="more-to-show">
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
        </span>}
        {expanded >= 2 && <span className="more-to-show">
          subconscious integration with the zero point field♾️, sound healing🌀,
          and quantum energy work🧬, all using his hands and voice.
          <br />
          <br />
          Boyowa loves to laugh, live, and joke around.😎 Life is fun! Life is
          candid, life is a joke (above all, lol!). <br />
          Joy is his fuel, Love is his sustenance, and connection to Source is
          at the heart of all creation. 😊
          {/* <span className="show-less" onClick={() => handleExpand()}>
            (show less)
          </span> */}
        </span>}
        <span className="show-more" onClick={() => handleExpand()}>
          { expanded == 2 ? '(show less)' : '(show more)'}
        </span>
        <span className="text-break">~</span>
      </div>
      <div className="grain" />
    </div>
  )
}