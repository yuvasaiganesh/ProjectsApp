import { useNavigate } from "react-router-dom"
import "./index.css"
import { useState ,useContext,useEffect,useRef} from "react"
import { Contextdata } from "../../Context/FirstContext";


const Home =()=>{
    const [name,setName]=useState("")
    const [link,setLink]=useState("")
    const [desc,setDesc]=useState("")
    const [data]= useState({data:useContext(Contextdata)})
    console.log(data)



    const navigate= useNavigate()

 const toChangeName=(event)=>{
    setName(event.target.value,[])
 }

 const toChangelink=(event)=>{
    setLink(event.target.value,[])
 }

 const toChangeDesc=(event)=>{
    setDesc(event.target.value,[])
 }

 
const projectName=useRef()
const projectLink=useRef()
const projectDesc=useRef()
 const toaddItems=(event)=>{
    event.preventDefault()
    
    
   let  item={
        id:name,
        name:name,
        link:link,
        desc:desc,
        imageLink:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpviH2_Hwum8DNjhhh5avHYTUlUwmYLem1mg&usqp=CAU"
    }
   
   

    data.data.updateprojects(item)
    projectName.current.value="";
    projectLink.current.value=""
    projectDesc.current.value=""
   
 }



   

    const toAbout=()=>{
      navigate("/about")
    }

    const toProjects=()=>{
        navigate("/projects")
      }

      const toContacts=()=>{
        navigate("/contacts")
      }

    return(
        <div className="home">
            <div className="header">
                <div>
                  <h1 className="profilename">Y.V.Ganesh</h1>
                </div>
                <div className="headerButtonSection">
                <button onClick={toAbout} className="headerButtton">About</button>
                <button onClick={toProjects} className="headerButtton">Projects</button>
                <button onClick={toContacts} className="headerButtton">Contacts</button>
                </div>
                </div>


                <div className="body">
                    <div className="content">
                        <div>
                    <p className="role">UI/UX DESIGNER</p>
                    <h1>Hello, my name is Y.V.Ganesh</h1>
                    <p>Iam from Kakinada. I have done my graduation from Adarsh College of Engineering. Ihave hands on experinece with technologies Html,Css,Javascript,React.Js,Python etc..</p>
                    </div>
                    <div>
                    <img className="profile" src="https://res.cloudinary.com/dtni8yshm/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1700291562/profileimage_orpvwn.jpg" alt="myprofile"/>
            </div>
                    </div>
                    <div className="projectButtonSection">
                        <button className="projectButton"  onClick={toProjects}>Projects</button>
                        <button>Linkedin</button>
                    </div>

                </div>
                
                <form className="form" onSubmit={toaddItems}>
                    <h1 className="formHeading">Add Project</h1>
                    <label htmlFor="Project Name">Project Name</label>
                    <input ref={projectName} onChange={toChangeName} name="Project Name" type="text"/>

                    <label htmlFor="Project link">Project link</label>
                    <input ref={projectLink}  onChange={toChangelink} name="Project link" type="text"/>

                    <label htmlFor="Project Description">Project Description</label>
                    <input ref={projectDesc}  onChange={toChangeDesc} className="inputDescription" name="Project Description" type="text"/>

                    <button type="submit" className="addButton">Add</button>

                </form>
           

        </div>
    )
}

export default Home