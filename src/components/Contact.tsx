import Image from "next/image"
import Link from "next/link"

function Contact() {
  return (
    <div className="flex justify-center gap-x-3">
      <Link className="hover:opacity-60 transition" href="tel:+998947307006">
        <Image
          width={30}
          height={30}
          src="/telephone.png"
          alt="Telephone logo"
        />
      </Link>
      <Link
        className="hover:opacity-60 transition"
        target="_blank"
        href="https://t.me/yuldoshevv7"
      >
        <Image width={30} height={30} src="/telegram.png" alt="Telegram logo" />
      </Link>
      <Link
        className="hover:opacity-60 transition"
        href="mailto:yuldoshevv7@gmail.com"
      >
        <Image width={30} height={30} src="/gmail.png" alt="Gmail logo" />
      </Link>
      <Link
        target="_blank"
        className="hover:opacity-60 transition"
        href="https://github.com/ayubxonuz"
      >
        <Image width={30} height={30} src="/github.png" alt="Github logo" />
      </Link>
    </div>
  )
}
export default Contact
