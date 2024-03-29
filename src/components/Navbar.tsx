import {ChatBubbleBottomCenterIcon} from "@heroicons/react/16/solid"
import Link from "next/link"

function Navbar() {
  return (
    <header className="flex sm:justify-start shadow-md rounded-lg z-50 w-full bg-white text-sm py-4">
      <nav
        className="max-w-[85rem] justify-between flex w-full mx-auto px-4 items-center"
        aria-label="Global"
      >
        <Link
          className="flex-none text-black hover:opacity-65 text-xl font-semibold"
          href="/"
        >
          AyubxonUz
        </Link>
        <div className="flex items-center gap-5">
          <Link
            className="font-medium text-gray-600 hover:text-gray-400"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
export default Navbar
