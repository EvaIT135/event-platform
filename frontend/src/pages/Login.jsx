import { useState } from "react";
import API from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/hyr", {
        email,
        password,
      });

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Hyrja u krye me sukses");
    } catch (error) {
      alert("Gabim gjatë hyrjes");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Hyr</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Fjalëkalimi"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        Hyr
      </button>
    </form>
  );
}

export default Login;
