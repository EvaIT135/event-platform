import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/hyr", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Hyrja u krye me sukses");
      navigate("/eventet");
      window.location.reload();
    } catch (error) {
      console.log("LOGIN ERROR:", error);

      alert(
        error.response?.data?.message ||
          "Gabim gjatë hyrjes. Kontrollo email-in dhe fjalëkalimin."
      );
    }
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Hyr</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Fjalëkalimi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="btn" type="submit">
          Hyr
        </button>
      </form>
    </div>
  );
}

export default Login;
