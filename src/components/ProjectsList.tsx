import {projects} from "@/utils/utils"
import ButtonLink from "./ButtonLink"

function ProjectsList() {
  return (
    <div className="mt-10">
      {projects.map((prod) => (
        <div key={prod.id} className="bg-white p-5 mb-3 shadow-md rounded-md">
          <img
            src={prod.image}
            className="object-cover rounded-md"
            alt="Project image"
          />
          <h4 className="font-bold text-xl mt-4">{prod.title}</h4>
          <p className="font-bold mt-2">
            Info: <span className="font-normal">{prod.info}</span>
          </p>
          <p className="font-bold mt-2">
            Technology: <span className="font-normal">{prod.technology}</span>
          </p>
          <div className="flex gap-x-3 mt-6">
            <ButtonLink link={prod.githubLink} text="Github" />
            <ButtonLink link={prod.siteLink} text="Site" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsList
