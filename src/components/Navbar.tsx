import Link from "next/link"
import CloudIcon from "./CloudIcon"

function Navbar() {
  return (
    <header className="flex shadow-md rounded-lg z-50 w-full bg-white text-sm py-4">
      <nav
        className="max-w-[85rem] justify-between flex w-full mx-auto px-4 items-center"
        aria-label="Global"
      >
        <Link
          className="flex-none select-none text-black hover:opacity-65 text-xl font-semibold"
          href="/"
        >
          AyubxonUz
        </Link>
        <a
          download={"AyubxonsResume"}
          target="_blank"
          className="font-medium flex items-center gap-2 transition select-none text-slate-700 hover:opacity-65"
          href={"/myresume.pdf"}
        >
          Resume
          <CloudIcon />
        </a>
      </nav>
    </header>
  )
}
export default Navbar
