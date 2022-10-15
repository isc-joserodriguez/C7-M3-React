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
const PublicRoutesComponent = () => {
  const {
    user: { token },
  } = useContext(UserContext);
  return (
    <Routes>
      {token && <Route path="/" element={<PeliculasPage columns={4} />} />}
      {!token && <Route path="/" element={<HomePage />} />}
      {!token && <Route path="/login" element={<LoginPage />} />}
      {!token && <Route path="/registro" element={<RegistroPage />} />}
      {token && <Route path="/about" element={<AboutPage />} />}
      {token && <Route path="/logout" element={<Logout />} />}
      {token && <Route path="/profile" element={<ProfilePage />} />}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default PublicRoutesComponent;
