import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="event-card">
      <img src={event.foto} alt={event.titulli} />

      <h3>{event.titulli}</h3>

      <p>{event.vendndodhja}</p>

      <p>{event.kategoria}</p>

      <Link to={`/event/${event._id}`}>
        Shiko Detajet
      </Link>
    </div>
  );
}

export default EventCard;
