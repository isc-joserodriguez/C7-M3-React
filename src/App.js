import { useState } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [form, setForm] = useState({
    correo: "",
    password: "",
  });

  const onChanged = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const login = async () => {
    const { data } = await axios.post(
      "https://c7-m3-api-pjmi.vercel.app/v1/user/login",
      form
    );
    console.log(data);
  };
  return (
    <div className="App">
      <input
        type="correo"
        placeholder="correo"
        name="correo"
        onChange={onChanged}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={onChanged}
      />
      <button onClick={login}>Guardar</button>
    </div>
  );
}

export default App;
