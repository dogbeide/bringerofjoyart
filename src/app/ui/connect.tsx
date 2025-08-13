"use client";

import Image from "next/image"
import DelayOpenButton from "./delay-open-btn"
import instagramImg from '@/../public/images/instagram.png'
import telegramImg from '@/../public/images/telegram_32x32.png'
import whatsappImg from '@/../public/images/whatsapp.png'

import ConnectForm from '@/app/ui/connect-form';

import { delayOpen } from "@/app/lib/utils";

export default function Connect() {

  return (
    <div id="connect" className="my-container anchor">
      <div className="connect">
        <div className={`title`}>- CONNECT -</div>
        <ConnectForm />
        <div className="socials">
          <DelayOpenButton linkName="instagram">
            <Image
              className="icon"
              src={instagramImg}
              alt="instagram-icon"
              width={40}
              height={40}
            />
          </DelayOpenButton>

          <a onClick={() => delayOpen('telegram', 500)}>
            <Image
              className="icon"
              src={telegramImg}
              alt="whatsapp-icon"
              width={40}
              height={40}
            />
          </a>
          <a onClick={() => delayOpen('whatsapp', 500)}>
            <Image
              className="icon"
              src={whatsappImg}
              alt="whatsapp-icon"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </div>
  )
}