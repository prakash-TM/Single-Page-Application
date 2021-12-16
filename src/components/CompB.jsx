import Home from "./Home"
import Login from "./Login"
const CompB=()=>{
    const a=JSON.parse(localStorage.getItem("name"))
    if (a==="prakash"){
        return(
            <>
           
            <h2>Inside B</h2>
            
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

export default CompB