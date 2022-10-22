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
const RouterComponent = () => {
  const {
    user: { token, tipo },
  } = useContext(UserContext);

  const clientRoutes = [
    { path: "/", element: <PeliculasPage columns={6} />, titulo: "Home" },
    { path: "/about", element: <AboutPage />, titulo: "Acerca de..." },
    { path: "/cart", element: <CartPage />, titulo: "Carrito" },
  ];

  const adminRoutes = [
    { path: "/", element: <h1>Admin</h1>, titulo: "Dashboard" },
  ];

  const loginRoutes = tipo === "cliente" ? clientRoutes : adminRoutes;

  const privateRoutes = [
    ...loginRoutes,
    { path: "/profile", element: <ProfilePage />, titulo: "Mi perfil" },
    { path: "/logout", element: <Logout />, titulo: "Cerrar sesión" },
  ];

  const publicRoutes = [
    { path: "/", element: <HomePage />, titulo: "Inicio" },
    { path: "/login", element: <LoginPage />, titulo: "Iniciar sesión" },
    { path: "/registro", element: <RegistroPage />, titulo: "Registrarse" },
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
