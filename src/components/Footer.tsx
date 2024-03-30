import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-slate-200 mt-10">
      <h6 className="max-container p-2 text-sm flex justify-center gap-x-1">
        Copyright © {new Date().getFullYear()} - All right reserved by
        <Link className="underline hover:opacity-75" href={"/"}>
          AyubxonUz
        </Link>
      </h6>
    </footer>
  )
}
export default Footer
