import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import faviconPNG from '../../../public/images/favicon.png'

export default function Nav() {
  return (
    <nav className={`navbar navbar-expand-md`}>
      <div className="navbar-brand logo sun-container">
        <a href="">
          <Image src={faviconPNG} alt="IAMBOYOWA Logo" />
        </a>
        <div className="sun" />
      </div>
      <div id="nav-horizontal" className="links">
        <div>
          <a href="#visual-slam" className="text-shadow">
            VISUAL
          </a>
        </div>
        <div>
          <a href="#whoami" className="text-shadow">
            WHOAMI
          </a>
        </div>
        {/* <div><a href="">BLOG</a></div> */}
        <div>
          <a href="#connect" className="text-shadow">
            CONNECT
          </a>
        </div>
        <div>
          <a href="#healing" className="text-shadow">
            HEALING
          </a>
        </div>
        <div>
          <a href="#music" className="text-shadow">
            MUSIC
          </a>
        </div>
      </div>
      <div className="dropdown" id="nav-dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Menu
        </a>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="navbarDropdown"
        >
          <a className="dropdown-item_my text-shadow" href="#visual-slam">
            VISUAL
          </a>
          <a className="dropdown-item_my text-shadow" href="#whoami">
            WHOAMI
          </a>
          <a className="dropdown-item_my text-shadow" href="#connect">
            CONNECT
          </a>
          <a className="dropdown-item_my text-shadow" href="#healing">
            HEALING
          </a>
          <div className="dropdown-divider" />
          <a className="dropdown-item_my text-shadow" href="#music">
            MUSIC
          </a>
        </div>
      </div>
    </nav>
  )
}