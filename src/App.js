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
import SingleProductDetails from './Pages/Homepage/ProductsForYou/SingleProductDetails/SingleProductDetails';
import ScrollToTop from './Pages/ScrollToTop/ScrollToTop';
import { createContext } from 'react';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './Pages/Shared/Navbar/Nav';
import Seller from './Pages/Shop/ShopHome/Home/Seller';

// export const SIDENAV_CONTEXT = createContext();


function App() {

  // const [sideNav, setSideNav] = useState(false);

  // const value = { sideNav, setSideNav }

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div >
      <Provider store={store}>
        {/* <SIDENAV_CONTEXT.Provider value={value}> */}
        <ScrollToTop />
        <Navbar modalOpen={modalOpen} setModalOpen={setModalOpen}></Navbar>
        {/* <Header modalOpen={modalOpen} setModalOpen={setModalOpen}></Header> */}
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}>
            <Route path='login' ></Route>
          </Route>
          <Route path='mall/:mallName' element={<ShoppingMall></ShoppingMall>}></Route>
          <Route path='details/:id' element={<SingleProductDetails></SingleProductDetails>}></Route>
          <Route path='shop' element={<Shop></Shop>}>
            {/* <Route path='home' element={<ShopHomePage></ShopHomePage>}></Route> */}
            <Route path='home/:id' element={<Seller></Seller>}></Route>
            <Route path='products' element={<AllProducts></AllProducts>}></Route>
            <Route path='profile' element={<Profile></Profile>}></Route>
          </Route>

        </Routes>
        <Footer></Footer>
        {/* </SIDENAV_CONTEXT.Provider> */}
      </Provider>


    </div>
  );
}

export default App;
