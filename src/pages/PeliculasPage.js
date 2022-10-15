import { useEffect, useContext } from "react";
import { PeliculaContext } from "../context/PeliculaContext";
import { verPeliculas } from "../services";
import { Card, Button, Row } from "react-bootstrap";
const PeliculasPage = ({ columns }) => {
  const { peliculas, guardarPeliculas } = useContext(PeliculaContext);

  const getPeliculas = async () => {
    const { detalles } = await verPeliculas();
    guardarPeliculas(detalles);
  };

  useEffect(() => {
    getPeliculas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Row>
      {peliculas.map((pelicula, index) => (
        <Card
          style={{ margin: "15px" }}
          key={index}
          className={`col-${12 / columns}`}
        >
          <Card.Img variant="top" src={pelicula.img} />
          <Card.Body>
            <Card.Title>{pelicula.nombre}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <h5>${pelicula.price}</h5>
            <Button
              onClick={() => {
                alert(pelicula._id);
              }}
            >
              Add to cart
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </Row>
  );
};

export default PeliculasPage;
