import { useNavigate } from "react-router-dom"
import "./index.css"



const Home =()=>{
   
    const navigate= useNavigate()

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
                  <h1 className="profilename">Y.Y.V.Ganesh</h1>
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
                    <p className="role">Aspiring Full Stack Developer</p>
                    <h1>Hello, my name is Y.Y.V.Ganesh</h1>
                    <p>Iam from Andhra Pradesh. I have done my graduation from Adarsh College of Engineering. I have hands on experinece with technologies Html, Css, Javascript, React.Js, Python etc..</p>
                    </div>
                    <div>
                    <img className="profile" src="https://res.cloudinary.com/dtni8yshm/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1700291562/profileimage_orpvwn.jpg" alt="myprofile"/>
            </div>
                    </div>
                    <div className="projectButtonSection">
                        <button className="projectButton"  onClick={toProjects}>Projects</button>
                        <button className="projectButton"><a className="anchorButton" target="_blank" href="https://www.linkedin.com/in/saiganesh-yadla/">Linkedin</a></button>
                        <button className="projectButton"><a className="anchorButton" target="_blank" href="https://github.com/yuvasaiganesh">GitHub</a></button>
                    </div>

                </div>
                
                
           

        </div>
    )
}

export default Home