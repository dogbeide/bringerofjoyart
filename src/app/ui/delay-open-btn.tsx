"use client"

import { delayOpen } from "../lib/utils";

export default function DelayOpenButton(props: any,
  { children } : Readonly<{ children: React.ReactNode }>
) {
  return (
    <a onClick={() => delayOpen(props.linkName, 500)}>
      {props.children}
    </a>
  )
}
