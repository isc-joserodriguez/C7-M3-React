import { useState, useEffect } from "react";
import PublicRoutesComponent from "./routes/PublicRoutesComponent";
import NavComponent from "./components/Nav";
import { Container } from "react-bootstrap";

function App() {
  const [token, setToken] = useState(null);

  const guardarToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };

  const borrarToken = () => {
    setToken(null);
    localStorage.clear();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      guardarToken(token);
    }
  }, []);
  return (
    <>
      <NavComponent token={token} />
      <Container>
        <PublicRoutesComponent
          guardarToken={guardarToken}
          borrarToken={borrarToken}
          token={token}
        />
      </Container>
    </>
  );
}

export default App;
