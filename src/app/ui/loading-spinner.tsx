import Image from "next/image"
import spinnerSVG from '@/../public/images/spinner-pink_50x50.svg'

export default function LoadingSpinner() {

  return(
    <Image
      src={spinnerSVG}
      alt='Sending...'
      width={24}
      height={24}
    />
  )
}