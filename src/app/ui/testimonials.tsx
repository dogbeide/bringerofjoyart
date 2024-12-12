import Image from "next/image"

export default function Testimonials() {

  return (
    <>
      <div className="title mb-4 text-center">
        <span className="inf">♾️</span> <a>TESTIMONIALS</a>{" "}
        <span className="inf">♾️</span>
      </div>
      <div className="flex flex-row max-md:flex-col items-center justify-center">
        <div>
          <Image
            className="mb-4 mx-2"
            src="/images/Testimonial - Haukur Steinn_638x800.png"
            alt="Testimonial - Haukur Steinn"
            width={319}
            height={400}
          />
        </div>
        <div>
          <Image
            className="mb-4 mx-2"
            src="/images/Testimonial - Carolina Pereira_638x800.png"
            alt="Testimonial - Carolina Pereira"
            width={319}
            height={400}
          />
        </div>
      </div>
    </>
  )
}