import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import faviconPNG from '../../../public/images/favicon.png'
import NavDropdown from "./nav-dropdown";

export default function Nav() {
  return (
    <nav className={`navbar navbar-expand-md`}>
      <div className="navbar-brand logo sun-container">
        <a href="/">
          <Image src={faviconPNG} alt="IAMBOYOWA Logo" />
        </a>
        <div className="sun" />
      </div>
      <div id="nav-horizontal" className="links">
        <div>
          <a href="/#visual-slam" className="text-shadow">
            VISUAL
          </a>
        </div>
        <div>
          <a href="/#whoami" className="text-shadow">
            WHOAMI
          </a>
        </div>
        {/* <div><a href="">BLOG</a></div> */}
        <div>
          <a href="/#connect" className="text-shadow">
            CONNECT
          </a>
        </div>
        <div>
          <a href="/#music" className="text-shadow">
            MUSIC
          </a>
        </div>
        
        <div>
          <a href="/web-dev" className="text-shadow">
            WEB-DEV
          </a>
        </div>
      </div>
      <NavDropdown />
    </nav>
  )
}