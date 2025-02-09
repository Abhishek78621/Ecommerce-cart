
//import Products from "./Components/Products";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { Routes,Route} from "react-router-dom";
import Checkout from "./Components/Checkout";
import Homeproducts from "./Components/Homeproducts";

function App() {
  return (
    <div className="App">

    
      
        <Routes>
          <Route path='/' element={<><Header/><Home/></>}></Route>
          <Route path='/home' element={<><Header/><Home/></>}></Route>
          <Route path="/homeproducts" element={<><Header/><Homeproducts/></>}></Route>
          <Route path='/checkout' element={<><Header/><Checkout/></>}></Route>
          </Routes>
       
      
 
    </div>
  );
}

export default App;
