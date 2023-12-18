import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSingup from './Pages/LoginSingup';
import Cart from './Pages/Cart';
import Nopages from './Pages/Nopages';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shoes" element={<ShopCategory category="shoes" />} />
          <Route path="/pants" element={<ShopCategory category="pants" />} />
          <Route path="/shirt" element={<ShopCategory category="shirt" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSingup />} />
          <Route path="*" element={<Nopages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
