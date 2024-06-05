import Image from "next/image"
import { year } from "../lib/utils"

import logo from '@/../public/images/favicon.png'

export default async function Footer() {
  return (
    <footer className="footer">
      <Image
        src={logo}
        height={30}
        width={30}
        style={{ marginRight: 5 }}
        alt="IAMBOYOWA Logo"
      />
      Copyright © <span id="year">{year}</span> iamboyowa
    </footer>
  )
}