import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import Thanks from "./pages/Thanks";

// Router usage without <Outlet>

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Header />
//         <Home />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "about",
//     element: (
//       <>
//         <Header />
//         <About />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "cart",
//     element: (
//       <>
//         <Header />
//         <Cart />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "categories",
//     element: (
//       <>
//         <Header />
//         <Categories />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "product",
//     element: (
//       <>
//         <Header />
//         <ProductDetails />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "*",
//     element: (
//       <>
//         <Header />
//         <NotFound />
//         <Footer />
//       </>
//     ),
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "old-home", element: <Navigate to={"/"} /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "thanks", element: <Thanks /> },
      { path: "category/:categoryId", element: <Category /> },
      { path: "product/:productId", element: <ProductDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
