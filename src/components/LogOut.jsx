import { useNavigate } from "react-router";
const Logout=()=>{
    const navigate = useNavigate();

    const _handlelogout=()=>{
        localStorage.setItem("name", JSON.stringify(""));
        navigate("/")
    }


    return(
        <>
        <button onClick={_handlelogout}>Logout</button>
        </>
    )
    
}

export default Logout