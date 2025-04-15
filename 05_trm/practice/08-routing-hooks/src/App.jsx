//Rus
// 01. Настройте router согласно этой структуре
// src/
// ├── components/
// │   ├── Header.jsx            // Навигационное меню с Link/NavLink
// │   ├── Footer.jsx            // Футер страницы
// ├── pages/
// │   ├── HomePage.jsx          // Главная страница
// │   ├── AboutPage.jsx         // Статическая страница "О нас"
// │   ├── ProductsPage.jsx      // Страница со списком продуктов
// │   ├── ProductDetails.jsx    // Страница с подробной информацией о продукте
// │   ├── SearchPage.jsx        // Страница поиска с использованием query string
// │   ├── LoginPage.jsx         // Пример редиректа при логине
// │   └── NotFoundPage.jsx      // Страница 404
// ├── App.jsx                   // Корневой компонент с <Router> и маршрутизацией

// 02. Создайте ссылки на страницы в компоненте Header и разместите его на всех страницах любым удобным способом.
// 03. Настройте путь на страницу ProductDetails динамически. Отобразите на странице параметр из пути текущей страницы.
// 04. Посмотрите задание по query string в компоненте searchPage.jsx.
// 05. В компоненте LoginPage настройте кнопку "Log in" с использованием <Link></Link>, чтобы она перенаправляла пользователя на главную страницу и передавала объект state {login: "You are logged in"}.
// 06. В компоненте LoginPage программно настройте кнопку "Forgot login", чтобы она перенаправляла пользователя на главную страницу и передавала объект state {login: "You are not logged in"}.
// 07. На главной странице отобразите значение state login внутри тега <p></p>.
// 08. Настройте редирект со всех несуществующих страниц на главную страницу.

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetails from "./pages/ProductDetails";
import ProductsPage from "./pages/ProductsPage";
import SearchPage from "./pages/SearchPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <AboutPage /> },
        { path: "products", element: <ProductsPage /> },
        { path: "product/:productId", element: <ProductDetails /> },
        { path: "search", element: <SearchPage /> },
        { path: "login", element: <LoginPage /> },
        { path: "*", element: <Navigate to={"/"} /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
