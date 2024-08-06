

import "./root.css"
import Home from './pages/Home';
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import ProductDetail from './pages/ProductDetail';
import CheckOut from './pages/CheckOut';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function App() {
  return (
    <div className="App">
     <Home/>
     {/* <Shop/> */}
     {/* <Cart/> */}
     {/* <ProductDetail/> */}
     {/* <CheckOut/> */}
     {/* <AboutUs/> */}
     {/* <ContactUs/> */}
    </div>
  );
}

export default App;
