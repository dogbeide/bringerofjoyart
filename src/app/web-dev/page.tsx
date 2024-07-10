import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Social from './components/Social';

import './web-dev.css'

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
