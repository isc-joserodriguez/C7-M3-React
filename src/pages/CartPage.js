import { Col, Row } from "react-bootstrap";
import PaypalButtons from "../components/PaypalButtons";
import ProductList from "../components/ProductList";
import { useContext } from "react";
import { PeliculaContext } from "../context/PeliculaContext";

const CartPage = () => {
  const { peliculas } = useContext(PeliculaContext);
  /* const total = peliculas
    .map((pelicula) => pelicula.price)
    .reduce((valorActual, siguienteValor) => {
      return valorActual + siguienteValor;
    }, 0); */
  const total = peliculas.reduce((valorActual, siguienteValor) => {
    return (
      (typeof valorActual === "number" ? valorActual : valorActual.price) +
      siguienteValor.price
    );
  }, 0);
  return (
    <Row>
      <Col>
        <ProductList peliculas={peliculas} total={total} />
      </Col>
      <Col>
        <PaypalButtons peliculas={peliculas} currency="USD" amount={total} />
      </Col>
    </Row>
  );
};

export default CartPage;
