
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import OurCustomer from './Components/OurCustomerComponents/OurCustomer';
import Resources from './Components/Resources/Resources';
import {Routes,Route} from "react-router-dom"

    /* background-color: #f6f9fc; */
    /* background-color: transparent; */

function App() {
  return (
    <div id="mega-header" style={{height:'auto'}} >
     <Navbar />
 
     {/* <Home /> */}
    
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/ourCustomer" element={<OurCustomer/>}/>
      <Route path="/resources" element={<Resources/>}/>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;

