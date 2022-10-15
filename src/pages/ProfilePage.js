import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Loader from "../components/Loader";
import { getUserInfo } from "../services/User";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMyInfo = async () => {
    setLoading(true);
    const { detalles } = await getUserInfo();
    setUser(detalles);
    setLoading(false);
  };

  useEffect(() => {
    getMyInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //! Operador ternario
  return loading ? (
    <Loader />
  ) : (
    <Card style={{ width: "40rem" }}>
      <Card.Img variant="top" src={user?.img} style={{ height: "500px" }} />
      <Card.Body>
        <Card.Title>
          {user?.nombre} {user?.apellido}
        </Card.Title>
        <Card.Text>
          Tipo de usuario: {user?.tipo}
          <br />
          Edad: {user?.edad}
          <br />
          Correo: {user?.correo}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProfilePage;
