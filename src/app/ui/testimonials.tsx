import Image from "next/image"

export default function Testimonials() {

  return (
    <>
      <div className="title mb-4">
        <span className="inf">♾️</span> <a>TESTIMONIALS</a>{" "}
        <span className="inf">♾️</span>
      </div>
      <Image
        className="mb-4"
        src="/images/Testimonial - Haukur Steinn_638x800.png"
        alt="Testimonial - Haukur Steinn"
        width={319}
        height={400}
      />
    </>
  )
}