import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './Pages/About.jsx';
// import About from './Pages/About'
import Cart from './Pages/Cart.jsx';
import Contact from './Pages/Contact.jsx';
import Product from './Pages/Product.jsx';
import Products from './Pages/Products.jsx';
import { ShopProvider } from './ShopContext.jsx';
// import ProductDetails from './Components/ProductDetails.jsx'
const routerProvider = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Products />,
      },

      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product-details/:id',
        element: <Product />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopProvider>
      <RouterProvider router={routerProvider} />
    </ShopProvider>
  </React.StrictMode>
);
