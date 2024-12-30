import Image from "next/image"
import { year } from "../lib/utils"

import logo from '@/../public/images/favicon.png'

export default async function Footer() {
  return (
    <footer className="footer flex flex-col items-center text-center py-3">
      <Image
        src={logo}
        height={30}
        width={30}
        style={{ marginRight: 5 }}
        alt="BRINGER OF JOY Logo"
      />
      <span>
        Copyright © <span id="year">{year} </span>Bringer Of Joy
      </span>
      <div>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </footer>
  )
}