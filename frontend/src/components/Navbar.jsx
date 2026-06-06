import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const dil = () => {
    localStorage.removeItem("token");
    navigate("/hyr");
    window.location.reload();
  };

  return (
    <nav>
      <h2>EventHub</h2>

      <div>
        <Link to="/">Kreu</Link>
        <Link to="/eventet">Eventet</Link>

        {token && <Link to="/rezervimet">Rezervimet</Link>}
        {token && <Link to="/admin">Admin</Link>}

        {!token ? (
          <>
            <Link to="/hyr">Hyr</Link>
            <Link to="/regjistrohu">Regjistrohu</Link>
          </>
        ) : (
          <button className="btn" onClick={dil}>
            Dil
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
