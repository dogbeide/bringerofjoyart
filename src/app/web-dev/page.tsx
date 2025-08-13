import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Social from './components/Social';

import './web-dev.css'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "David Ogbeide 🧙🏿‍♂️~",
  description: "Web Development & Software Engineering",
}

export default function Page() {
  return (
    <div id="web-dev">
      <Header />
      <Social />
      <Portfolio />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  )
}
