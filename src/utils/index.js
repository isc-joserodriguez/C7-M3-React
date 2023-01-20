import LoginPage from "../pages/LoginPage";
import RegistroPage from "../pages/RegistroPage";
import AboutPage from "../pages/AboutPage";
import PeliculasPage from "../pages/PeliculasPage";
import HomePage from "../pages/HomePage";
import Logout from "../components/Logout";
import ProfilePage from "../pages/ProfilePage";
import CartPage from "../pages/CartPage";
import NuevaPeliculaPage from "../pages/NuevaPeliculaPage";
import UsuariosPage from "../pages/UsuariosPage";
import MisPeliculasPage from "../pages/MisPeliculasPage";

export const clientRoutes = [
  { path: "/", element: <PeliculasPage columns={6} /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/cart", element: <CartPage /> },
];

export const adminRoutes = [
  { path: "/", element: <h1>Admin</h1> },
  { path: "/nueva-pelicula", element: <NuevaPeliculaPage /> },
  { path: "/mis-peliculas", element: <MisPeliculasPage /> },
  { path: "/usuarios", element: <UsuariosPage /> },
  { path: "/usuarios/:id", element: <ProfilePage /> },
];

export const privateRoutes = [
  { path: "/profile", element: <ProfilePage /> },
  { path: "/logout", element: <Logout /> },
];

export const publicRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/registro", element: <RegistroPage /> },
];
