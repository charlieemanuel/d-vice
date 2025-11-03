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
        <Route path="/d-vice" element={<Home />} />
        <Route path="/new-arrival" element={<Arrivals />} />
        <Route path="/shop/:shopId" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
      </Routes>
    </main>
  )
}

export default App
