import { useState, createContext } from "react";

// ! 1.- Crear el contexto para el usuario
const PeliculaContext = createContext();

//! 2.- Vamos a obtener al Provider del PeliculaContext
const { Provider } = PeliculaContext;

//! 3.- Crear componente
const PeliculaProvider = ({ children }) => {
  //! 4.- Creamos nuestro estado global
  const [peliculas, setPeliculas] = useState([]);

  //! 5.- Manejar el estado
  const guardarPeliculas = (newPeliculas) => setPeliculas(newPeliculas);

  //! 6.- Retornamos el componente
  return (
    <Provider
      value={{
        peliculas,
        guardarPeliculas,
      }}
    >
      {children}
    </Provider>
  );
};

//! 7.- Exportamos provider & context
export { PeliculaProvider, PeliculaContext };
