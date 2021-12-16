import Index from "../LoginComponent/Index";
import Menu from "../MenuBar/IndexMenu";
import "../dashboardStyle.css"
const B1 = () => {
  const a = JSON.parse(localStorage.getItem("name"));
  if (a === "prakash") {
    return (
      <>
        <div className="menu-textarea-align">
          <div className="menu-bg">
            <Menu />
          </div>

          <div>
            <h1>Dashboard area</h1>
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
};

export default B1;
