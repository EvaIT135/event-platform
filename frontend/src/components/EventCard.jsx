import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div className="event-card">
      <img src={event.foto} alt={event.titulli} />

      <h3>{event.titulli}</h3>
      <p>{event.pershkrimi}</p>
      <p>{event.vendndodhja}</p>
      <p>{event.cmimi} €</p>

      <Link className="btn" to={`/event/${event._id}`}>
        Shiko Detajet
      </Link>
    </div>
  );
}

export default EventCard;
