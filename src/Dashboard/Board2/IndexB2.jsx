import Menu from "../MenuBar/IndexMenu"
import Index from "../LoginComponent/Index";
import "../dashboardStyle.css"

const B2=()=>{
    const a = JSON.parse(localStorage.getItem("name"));
    if (a === "prakash") {
      return (
        <>
          <div className="menu-textarea-align">
            <div className="menu-bg">
              <Menu />
            </div>
  
            <div>
              <h1>Index area</h1>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <Index />
        </>
      );
    }
}

export default B2