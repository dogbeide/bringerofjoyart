import Healing from "@/app/ui/healing"
import Testimonials from "../ui/testimonials"

export default function Page() {
  return (
    <div>
      <Healing preview={false} />
      <Testimonials />
    </div>
  )
}