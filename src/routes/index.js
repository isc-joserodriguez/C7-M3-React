import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegistroPage from "../pages/RegistroPage";
import AboutPage from "../pages/AboutPage";
import PeliculasPage from "../pages/PeliculasPage";
import HomePage from "../pages/HomePage";
import { UserContext } from "../context/UserContext";
import Logout from "../components/Logout";
import ProfilePage from "../pages/ProfilePage";
import CartPage from "../pages/CartPage";
import NuevaPeliculaPage from "../pages/NuevaPeliculaPage";
const RouterComponent = () => {
  const {
    user: { token, tipo },
  } = useContext(UserContext);

  const clientRoutes = [
    { path: "/", element: <PeliculasPage columns={6} />},
    { path: "/about", element: <AboutPage />},
    { path: "/cart", element: <CartPage />},
  ];

  const adminRoutes = [
    { path: "/", element: <h1>Admin</h1>},
    { path: "/nueva-pelicula", element: <NuevaPeliculaPage /> },
  ];

  const loginRoutes = tipo === "cliente" ? clientRoutes : adminRoutes;

  const privateRoutes = [
    ...loginRoutes,
    { path: "/profile", element: <ProfilePage />},
    { path: "/logout", element: <Logout />},
  ];

  const publicRoutes = [
    { path: "/", element: <HomePage />},
    { path: "/login", element: <LoginPage />},
    { path: "/registro", element: <RegistroPage />},
  ];

  return (
    <Routes>
      {token
        ? privateRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))
        : publicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default RouterComponent;
