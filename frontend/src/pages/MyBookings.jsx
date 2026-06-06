import { useEffect, useState } from "react";
import API from "../services/api";

function MyBookings() {
  const [rezervimet, setRezervimet] = useState([]);

  useEffect(() => {
    const merrRezervimet = async () => {
      try {
        const res = await API.get("/rezervime/mirezervimet");
        setRezervimet(res.data);
      } catch {
        alert("Duhet të jesh i/e loguar për të parë rezervimet.");
      }
    };

    merrRezervimet();
  }, []);

  return (
    <div className="container">
      <h1>Rezervimet e Mia</h1>

      <div className="grid">
        {rezervimet.map((rezervim) => (
          <div className="event-card" key={rezervim._id}>
            <h3>{rezervim.event?.titulli}</h3>
            <p>Vendndodhja: {rezervim.event?.vendndodhja}</p>
            <p>Nr. biletash: {rezervim.nrBiletash}</p>
            <p>
              Data e eventit:{" "}
              {rezervim.event?.data
                ? new Date(rezervim.event.data).toLocaleDateString()
                : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBookings;