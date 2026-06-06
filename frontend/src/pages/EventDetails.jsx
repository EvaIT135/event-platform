import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

function EventDetails() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    const merrEventin = async () => {
      try {
        const res = await API.get(`/evente/${id}`);

        setEvent(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    merrEventin();
  }, [id]);

  if (!event) {
    return <h2>Duke u ngarkuar...</h2>;
  }

  return (
    <div>
      <h1>{event.titulli}</h1>

      <img
        src={event.foto}
        alt={event.titulli}
        width="400"
      />

      <p>{event.pershkrimi}</p>

      <p>Vendndodhja: {event.vendndodhja}</p>

      <p>Çmimi: {event.cmimi} €</p>
    </div>
  );
}

export default EventDetails;
