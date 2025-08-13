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
      <span className="desc font-bold mb-3">David Ogbeide</span>
      <FadeShow />
      <span className="text-break">~</span>
      <div className="desc" style={{ display: role == 'overall' ? 'block' : 'none'}}> 
        Who I am is a work in progress..
        
      </div>
      <span className="text-break">~</span>
      <div className="grain" />
    </div>
  )
}