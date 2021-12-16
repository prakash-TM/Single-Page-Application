import Home from "./Home";
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");
  const [pass,setPass]=useState("")
  const navigate = useNavigate();

  const _handleinput = (e) => {
    setName(e.target.value);
  };
  const _handlepass=(e)=>{
    setPass(e.target.value)
  }


  const _handlebtn = () => {


    localStorage.setItem("name", JSON.stringify(name));
    const a = JSON.parse(localStorage.getItem("name"));

    if (a === "prakash") {

      
      navigate("/Home");

    } else {
        navigate("/");
    }
  };

  const _handleHiding=()=>{
      const passhide=document.getElementById("passhide")
      console.log(typeof passhide.type)
      if(passhide.type === "password"){
        passhide.type="text";
      }
      else{
        passhide.type="password"
      }
     
  }

  return (
    <>
      <div>
          <div>
           <input type="text" onChange={_handleinput} placeholder="User Name" />
          </div>
          <div>
           <input type="password" onChange={_handlepass} placeholder="Password" id="passhide"/>
           <svg xmlns="http://www.w3.org/2000/svg" style={{width:"30px"}} onClick={_handleHiding} viewBox="0 0 30 30">   
            <path d="M 15 5 C 6.081703 5 0.32098813 14.21118 0.21679688 14.378906 A 1 1 0 0 0 0 15 A 1 1 0 0 0 0.16210938 15.544922 A 1 1 0 0 0 0.16601562 15.550781 C 0.18320928 15.586261 5.0188313 25 15 25 C 24.938822 25 29.767326 15.678741 29.826172 15.564453 A 1 1 0 0 0 29.837891 15.544922 A 1 1 0 0 0 30 15 A 1 1 0 0 0 29.785156 14.380859 A 1 1 0 0 0 29.783203 14.378906 C 29.679012 14.21118 23.918297 5 15 5 z M 15 8 C 18.866 8 22 11.134 22 15 C 22 18.866 18.866 22 15 22 C 11.134 22 8 18.866 8 15 C 8 11.134 11.134 8 15 8 z M 15 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 18 A 3 3 0 0 0 18 15 A 3 3 0 0 0 15 12 z"/>
            </svg>
          </div>
      
    
        <button onClick={_handlebtn}>Submit</button>
        <Link to="/home" style={{paddingLeft:"10px"}}>Home</Link>
      </div>
    </>
  );
};
export default Login;
