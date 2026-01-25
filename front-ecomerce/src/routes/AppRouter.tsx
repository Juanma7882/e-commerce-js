import { Routes, Route } from 'react-router-dom'
import MainLayout from "../layout/MainLayout";
import Home from '../pages/Home';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />} >
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/productDetail' element={<ProductDetail />} />
        <Route path='/products/:id' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/notfound' element={<NotFound ></NotFound>} />
      </Route>
    </Routes>
  )
}
