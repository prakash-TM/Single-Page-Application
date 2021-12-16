import { Link } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
const CompA=()=>{

    const a=JSON.parse(localStorage.getItem("name"))
    if (a==="prakash"){
        return(
            <>
            
            <h2>Inside A</h2>
            
            <Home/>
            </>
        )
    }
    else {
        return(
            <>
            <h2> please login</h2>
            <Login />
            </>
        )
    }
    
  
}

export default CompA