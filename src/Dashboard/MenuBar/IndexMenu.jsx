import { Link } from "react-router-dom"
import { useNavigate } from "react-router";
import "./MenuStyle.css"
const Menu=()=>{
    const navigate = useNavigate();

    const _handlelogout=()=>{
        localStorage.setItem("name", JSON.stringify(""));
        navigate("/")
    }
    return(
        <>
        <div>
            <h3 className="menu-style">Menu</h3>
        </div>
        <div>
            <Link className="link-style" to="/B1">DashBoard</Link>
        </div>
        <div>
            <Link className="link-style" to="/B2">Index</Link>
        </div>
        <div>
            <button className="logout-btn" onClick={_handlelogout}>Logout</button>
        </div>
        </>
    )
}

export default Menu