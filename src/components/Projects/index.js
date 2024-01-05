import { useContext } from "react"
import { Contextdata } from "../../Context/FirstContext"
import "./index.css"

const Projects=()=>{
const projectslist=useContext(Contextdata)
return(
    <div className="projectSection">
        <h1 className="projectHeading">Projects</h1>
        <ul  className="ulSection">
        {projectslist.projects.map(each=>{
            return(
                <li key={each.name} className="liSection">
                    <div className="nameSection">
                       <h1>{each.name}</h1>
                       <p>{each.desc}</p>
                       <a href={each.link}>view Project</a>
                    </div>
                    <div  className="imageSection">
                      <img  className="image" src={each.imageLink}/>
                    </div>
                </li>
            )
        })}
        </ul>
    </div>
)
}
export default Projects