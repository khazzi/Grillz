import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';
import {ShopContextProvider} from './context/shop-context'
import Payment from './pages/payment/payment';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </Router>
      </ShopContextProvider>

    </div>
  );
}

export default App;
