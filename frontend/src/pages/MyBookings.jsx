import { useEffect, useState } from "react";
import API from "../services/api";

function MyBookings() {
  const [rezervimet, setRezervimet] = useState([]);
  const [loading, setLoading] = useState(true);

  const merrRezervimet = async () => {
    try {
      const res = await API.get("/rezervime/mirezervimet");
      setRezervimet(res.data);
    } catch (error) {
      alert("Duhet të jesh i/e loguar për të parë rezervimet.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    merrRezervimet();
  }, []);

  const anuloRezervim = async (id) => {
    const konfirmo = window.confirm(
      "A je i/e sigurt që dëshiron ta anulosh këtë rezervim?"
    );

    if (!konfirmo) return;

    try {
      await API.delete(`/rezervime/${id}`);

      alert("Rezervimi u anulua me sukses");
      merrRezervimet();
    } catch (error) {
      alert("Gabim gjatë anulimit të rezervimit.");
    }
  };

  if (loading) {
    return <h2 className="container">Duke u ngarkuar...</h2>;
  }

  return (
    <div className="container">
      <h1>Rezervimet e Mia</h1>

      {rezervimet.length === 0 ? (
        <p>Nuk keni asnjë rezervim për momentin.</p>
      ) : (
        <div className="grid">
          {rezervimet.map((rezervim) => (
            <div className="event-card" key={rezervim._id}>
              <h3>{rezervim.event?.titulli}</h3>

              <p>
                <strong>Vendndodhja:</strong>{" "}
                {rezervim.event?.vendndodhja}
              </p>

              <p>
                <strong>Nr. biletash:</strong> {rezervim.nrBiletash}
              </p>

              <p>
                <strong>Data e eventit:</strong>{" "}
                {rezervim.event?.data
                  ? new Date(rezervim.event.data).toLocaleDateString()
                  : ""}
              </p>

              <button
                className="btn danger"
                onClick={() => anuloRezervim(rezervim._id)}
              >
                Anulo Rezervimin
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;