import Link from "next/link"
import Contact from "./Contact"

function Footer() {
  return (
    <footer className="bg-slate-200 mt-10">
      <div className="max-container p-3">
        <h6 className="p-2 text-sm flex justify-center gap-x-1">
          Copyright © {new Date().getFullYear()} - All right reserved by
          <Link className="underline hover:opacity-75" href={"/"}>
            AyubxonUz
          </Link>
        </h6>
        <Contact />
      </div>
    </footer>
  )
}
export default Footer
