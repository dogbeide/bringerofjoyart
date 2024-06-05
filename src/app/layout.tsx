import type { Metadata } from "next";
import { amatic_sc } from "./ui/fonts";

import Image from "next/image";
import faviconPNG from '../../public/images/favicon.png'
import "./index.scss";
import "./ui/sun.scss";
// import "./ui/book.scss";

export const metadata: Metadata = {
  title: "iamboyowa - Home",
  description: "~ART 🎭 | HEALING 💚 | MAGIC 🧙🏿‍♂️~",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
          crossOrigin="anonymous"
          async
        ></script>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" async></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        />
      </head>
      <body className="">
      <nav className={`navbar navbar-expand-md ${amatic_sc.className}`}>
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
          {/* <div>
        <a href="javascript:void(0)" onclick="delayOpen('linktree_all', 500)"
          >MUSIC</a
        >
      </div> */}
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
            {/* <a
          class="dropdown-item_my text-shadow"
          onclick="delayOpen('music', 400)"
          >MUSIC</a
        > */}
          </div>
        </div>
      </nav>
        {children}
      </body>
    </html>
  );
}
