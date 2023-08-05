import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Products from './Components/Products/Products'
import Categories from './Components/Categories/Categories'
import Cart from './Components/Cart/Cart'
import Brands from './Components/Brands/Brands'
import NotFound from './Components/NotFound/NotFound'




function App() {

  let routes = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'productDetails', element: <ProductDetails /> },
        { path: 'products', element: <Products /> },
        { path: 'categories', element: <Categories /> },
        { path: 'cart', element: <Cart /> },
        { path: 'brands', element: <Brands /> },
        { path: '*', element: <NotFound /> },
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
