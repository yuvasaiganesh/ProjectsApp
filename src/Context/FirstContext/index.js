import React from "react"

const data={
    projects:[{id:1,name:"Nxt Trends Shopping App",desc:"Created a modern e-commerce experience with a design inspired by Amazon and Flipkart.", link:"https://yvnxttrendsapp.ccbp.tech/login",imageLink:"https://appsamurai.com/wp-content/uploads/2017/12/shutterstock_1206570103.jpg"},
    {id:2,name:"MoviesApp",desc:"Built a dynamic, feature-rich OTT platform for movie enthusiasts.", link:"https://yvprimevidepapp.ccbp.tech/",imageLink:"https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/a3/9a/82/a39a8210-f9f1-7cba-6760-557d142beb02/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x600wa.png"},
],
    updateprojects:(item)=>{
        
        const newData=[...data.projects,item];
        data.projects=newData;
        console.log(data.projects)
        
        
       
    }
   
}

export const Contextdata=React.createContext()

export const WrappedContext=({children})=>{
    return(<Contextdata.Provider value={data}>{children}</Contextdata.Provider>)
}