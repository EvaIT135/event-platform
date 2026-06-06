import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [nrBiletash, setNrBiletash] = useState(1);

  useEffect(() => {
    const merrEventin = async () => {
      try {
        const res = await API.get(`/evente/${id}`);
        setEvent(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    merrEventin();
  }, [id]);

  const rezervo = async () => {
    try {
      await API.post("/rezervime", {
        eventId: id,
        nrBiletash,
      });

      alert("Rezervimi u krye me sukses!");
    } catch (error) {
      alert("Duhet të jesh i/e loguar për të bërë rezervim.");
    }
  };

  if (!event) return <h2 className="container">Duke u ngarkuar...</h2>;

  return (
    <div className="container">
      <div className="form-box">
        <img src={event.foto} alt={event.titulli} width="100%" />

        <h1>{event.titulli}</h1>

        <p>{event.pershkrimi}</p>
        <p><strong>Kategoria:</strong> {event.kategoria}</p>
        <p><strong>Vendndodhja:</strong> {event.vendndodhja}</p>
        <p><strong>Data:</strong> {new Date(event.data).toLocaleDateString()}</p>
        <p><strong>Çmimi:</strong> {event.cmimi} €</p>
        <p><strong>Vende të disponueshme:</strong> {event.vendeDisponueshme}</p>

        <label>Numri i biletave</label>
        <input
          type="number"
          min="1"
          value={nrBiletash}
          onChange={(e) => setNrBiletash(e.target.value)}
        />

        <button className="btn" onClick={rezervo}>
          Rezervo
        </button>
      </div>
    </div>
  );
}

export default EventDetails;
