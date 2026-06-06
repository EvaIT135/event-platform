import { useEffect, useState } from "react";
import API from "../services/api";
import EventCard from "../components/EventCard";

function Events() {
  const [eventet, setEventet] = useState([]);

  useEffect(() => {
    const merrEventet = async () => {
      try {
        const res = await API.get("/evente");

        setEventet(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    merrEventet();
  }, []);

  return (
    <div>
      <h1>Eventet</h1>

      {eventet.map((event) => (
        <EventCard
          key={event._id}
          event={event}
        />
      ))}
    </div>
  );
}

export default Events;
