import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import Arrivals from "./pages/Arrivals.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Cart from "./pages/Cart.jsx";
import User from "./pages/User.jsx"
import Login from "./pages/Login.jsx";
import Orders from "./pages/Orders.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Navbar from "./components/Navbar.jsx";


function App() {

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/d-vice/new-arrival" element={<Arrivals />} />
        <Route path="/d-vice/shop/:shopId" element={<Shop />} />
        <Route path="/d-vice/about" element={<About />} />
        <Route path="/d-vice/wishlist" element={<Wishlist />} />
        <Route path="/d-vice/cart" element={<Cart />} />
        <Route path="/d-vice/user" element={<User />} />
        <Route path="/d-vice/login" element={<Login />} />
        <Route path="/d-vice/orders" element={<Orders />} />
        <Route path="/d-vice/place-order" element={<PlaceOrder />} />
      </Routes>
    </main>
  )
}

export default App
