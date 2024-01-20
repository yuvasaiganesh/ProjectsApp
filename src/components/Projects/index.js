import "./index.css"
 
const projectslist=[
    {
        name:"Nxt Trendz ( ECommerce Clone - Amazon,Flipkart)",
        desc:"Created a modern e-commerce experience with a design inspired by Amazon and Flipkart. Implemented pages for Login, Products, and Product details with React Router, React components, and form inputs. Secured user data with JWT tokens, REST API calls, and local storage.___Credentials: rahul, rahul@2021",
        link:"https://yvnxttrendsapp.ccbp.tech/login",
        image:"https://tse3.mm.bing.net/th/id/OIP.q3hLfrsbGbsjpNccEOvi3wHaEr?w=240&h=180&c=7&r=0&o=5&pid=1.7"
    },

    {
        name:"Movies App (Netflix/Amazon Prime Clone)",
        desc:"Built a dynamic, feature-rich OTT platform for movie enthusiasts. Utilized React Router for seamless navigation, React Slick for horizontal scrolling, and Figma for UI design. Integrated TMDb APIs for movie database and authentication, and used client storage to persist login state.",
        link:"https://yvprimevidepapp.ccbp.tech/",
        image:"https://images.creativemarket.com/0.1.0/ps/980710/1160/861/m1/fpnw/wm0/y1-.jpg?1455175522&s=06fd5e7ba52c34e8f0fe45a39e5c17bb"
    },
    {
        name:"Emoji Game",
        desc:"Designed a fun, challenging memory game with randomized emoji clicks. Utilized React components, props, conditional rendering, and state updates to create dynamic gameplay. Enhanced with CSS for a visually appealing design.",
        link:"https://yvemojigame.ccbp.tech/",
        image:"https://tse4.mm.bing.net/th/id/OIP.BOavM_FvwFyCNGfuupfkEwHaHa?w=207&h=207&c=7&r=0&o=5&pid=1.7"
    },
]

const Projects=()=>{

return(
    <div className="projectSection">
        <h1 className="projectHeading">Projects</h1>
        <ul  className="ulSection">
        {projectslist.map(each=>{
            return(
                <li key={each.name} className="liSection">
                    <div className="nameSection">
                       <h1>{each.name}</h1>
                       <p>{each.desc}</p>
                       <a target="_blank" href={each.link}>view Project</a>
                    </div>
                    <div  className="imageSection">
                      <img  className="image" src={each.image}/>
                    </div>
                </li>
            )
        })}
        </ul>
    </div>
)
}
export default Projects