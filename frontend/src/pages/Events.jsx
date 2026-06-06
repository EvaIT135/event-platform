import { useEffect, useState } from "react";
import API from "../services/api";
import EventCard from "../components/EventCard";

function Events() {
  const [eventet, setEventet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gabim, setGabim] = useState("");

  useEffect(() => {
    const merrEventet = async () => {
      try {
        const res = await API.get("/evente");

        console.log("Eventet nga backend:", res.data);

        setEventet(res.data);
      } catch (error) {
        

        if (error.response) {
          console.log("STATUS:", error.response.status);
          console.log("DATA:", error.response.data);
        }

        if (error.request) {
          console.log("REQUEST:", error.request);
        }

        setGabim("Nuk u ngarkuan eventet.");
      } finally {
        setLoading(false);
      }
    };

    merrEventet();
  }, []);

  if (loading) {
    return <h2 className="container">Duke u ngarkuar...</h2>;
  }

  if (gabim) {
    return <h2 className="container">{gabim}</h2>;
  }

  return (
    <div className="container">
      <h1>Eventet</h1>

      {eventet.length === 0 ? (
        <p>Nuk ka evente për momentin.</p>
      ) : (
        <div className="grid">
          {eventet.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Events;