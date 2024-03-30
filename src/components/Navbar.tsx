import Link from "next/link"

function Navbar() {
  return (
    <header className="flex sm:justify-start shadow-md rounded-lg z-50 w-full bg-white text-sm py-4">
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
        <Link
          className="font-medium flex items-center gap-2 transition select-none text-slate-700 hover:opacity-65"
          href="/contact"
        >
          Contact
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
        </Link>
      </nav>
    </header>
  )
}
export default Navbar
