import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import OurCustomer from './Components/OurCustomerComponents/OurCustomer';
import Resources from './Components/Resources/Resources';
import {Routes,Route} from "react-router-dom"
import Contact from './Components/contactUs/Contact';
import Demo from './Components/Demo/Demo';
import Pricing from './Components/pricing/Pricing';
import SignUp from './Components/signUp/SignUp';

function App() {
  return (
    <div id="mega-header" style={{height:'auto'}} >
   <Navbar />
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/ourCustomer" element={<OurCustomer/>}/>
      <Route path="/resources" element={<Resources/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/demo" element={<Demo/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/signup" element={<SignUp/>}/>
     </Routes>
     
  <Footer />
    </div>
  );
}

export default App;
