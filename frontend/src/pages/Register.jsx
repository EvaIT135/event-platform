import { useState } from "react";
import API from "../services/api";

function Register() {
  const [emri, setEmri] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/regjistrohu", {
        emri,
        email,
        password,
      });

      alert(res.data.message);
    } catch (error) {
      alert("Gabim gjatë regjistrimit");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Regjistrohu</h2>

      <input
        type="text"
        placeholder="Emri"
        value={emri}
        onChange={(e) => setEmri(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Fjalëkalimi"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        Regjistrohu
      </button>
    </form>
  );
}

export default Register;
