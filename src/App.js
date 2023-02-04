import './App.css';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import ShoppingMall from './Pages/ShoppingMall/ShoppingMall';
import Shop from './Pages/Shop/Shop';
import ShopHomePage from './Pages/Shop/ShopHomePage/ShopHomePage';
import AllProducts from './Pages/Shop/AllProducts/AllProducts';
import Profile from './Pages/Shop/Profile/Profile';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='mall' element={<ShoppingMall></ShoppingMall>}></Route>
        <Route path='shop' element={<Shop></Shop>}>
          <Route index element={<ShopHomePage></ShopHomePage>}></Route>
          <Route path='products' element={<AllProducts></AllProducts>}></Route>
          <Route path='profile' element={<Profile></Profile>}></Route>
        </Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
