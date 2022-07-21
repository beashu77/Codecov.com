
import './App.css';
import CodeCovHomeMid from './Components/CodeCovHomeMid';
import Footer from './Components/Footer';
import GetStartBox from './Components/GetStartBox';
import Navbar from './Components/Navbar';
import OurCustomer from './Components/OurCustomerComponents/OurCustomer';



function App() {
  return (
    <div id="mega-header" style={{height:'auto'}} >
     <Navbar />
     {/* <GetStartBox />
     <CodeCovHomeMid /> */}
     <OurCustomer />
     <Footer />
     
    </div>
  );
}

export default App;
