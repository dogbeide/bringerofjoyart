import Image from "next/image";
import { headers } from "next/headers";
import "bootstrap/dist/css/bootstrap.min.css";
import faviconPNG from '../../../public/images/favicon.png'
import NavDropdown from "./nav-dropdown";

export default async function Nav() {
  const headerList = await headers();
  const currentPath = headerList.get("x-current-path") || "";

  return (
    <nav className={`navbar navbar-expand-md ${currentPath === "/web-dev" ? "hidden" : ""}`}>
      <div className="navbar-brand logo sun-container">
        <a href="/">
          <Image src={faviconPNG} alt="IAMBOYOWA Logo" />
        </a>
        <div className="sun" />
      </div>
      <div id="nav-horizontal" className="links">
        
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
          <a href="/#books" className="text-shadow">
            BOOKS
          </a>
        </div>
        <div>
          <a href="/music" className="text-shadow" target="_blank">
            MUSIC
          </a>
        </div>
    
      </div>
      <NavDropdown />
    </nav>
  )
}