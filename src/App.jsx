import Home from "./components/Home";
import CompA from "./components/CompA";
import CompB from "./components/CompB";
import CompC from "./components/CompC";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/LogOut";
import Index from "./Dashboard/LoginComponent/Index";

import Menu from "./Dashboard/MenuBar/IndexMenu";
import B1 from "./Dashboard/Board1/IndexB1";
import B2 from "./Dashboard/Board2/IndexB2";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
    {/* <Route  path="/" element={<Index />} /> */}
    {/* <Route  path="/" element={<Login />} /> */}
      {/* <Route  path="/Home" element={<Home />} />
      <Route  path="/CompA" element={<CompA />} />
      <Route  path="/CompB" element={<CompB />} />
      <Route  path="/CompC" element={<CompC />} />
      <Route path ="/logout" element={<Logout/>} /> */}

      <Route path="/" element={<Index />}/>
      <Route path="Menu" element={<Menu />}/>
      <Route path="/B1" element={<B1 />}/>
      <Route path="/B2" element={<B2 />}/>
      
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App