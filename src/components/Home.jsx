import { useState } from "react"
import { Link } from "react-router-dom"
const Home=()=>{

   

    return(
        <>
        <h2> I am in Home component</h2>
        <div>
       
        <Link  to ="/" style={{paddingLeft:"10px"}}>login</Link>
        {/* <Link  to ="/" style={{paddingLeft:"10px"}}>login</Link> */}
        <Link  to="/home" style={{paddingLeft:"10px"}} >Home</Link>
        <Link to="/CompA" style={{paddingLeft:"10px"}} >A</Link>
        <Link to="/CompB" style={{paddingLeft:"10px"}} >B</Link>
        <Link to="/CompC" style={{paddingLeft:"10px"}} >C</Link>

        <Link to="/logout" style={{paddingLeft:"10px"}} >Logout</Link>
        </div>
       

       
        
        </>
    )
}

export default Home