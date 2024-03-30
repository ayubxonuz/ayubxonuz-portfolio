import Link from "next/link"
type TButton = {
  text: string
  link: string
}

function ButtonLink({text, link}: TButton) {
  return (
    <Link
      href={link}
      target="_blank"
      className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none"
    >
      {text}
    </Link>
  )
}
export default ButtonLink
