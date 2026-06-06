import { useEffect, useState } from "react";
import API from "../services/api";

function AdminDashboard() {
  const [eventet, setEventet] = useState([]);
  const [editId, setEditId] = useState(null);

  const [form, setForm] = useState({
    titulli: "",
    pershkrimi: "",
    kategoria: "",
    vendndodhja: "",
    data: "",
    cmimi: "",
    vendeDisponueshme: "",
    foto: "",
  });

  const merrEventet = async () => {
    const res = await API.get("/evente");
    setEventet(res.data);
  };

  useEffect(() => {
    merrEventet();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const pastroFormen = () => {
    setForm({
      titulli: "",
      pershkrimi: "",
      kategoria: "",
      vendndodhja: "",
      data: "",
      cmimi: "",
      vendeDisponueshme: "",
      foto: "",
    });

    setEditId(null);
  };

  const ruajEvent = async (e) => {
    e.preventDefault();

    if (editId) {
      await API.put(`/evente/${editId}`, form);
      alert("Eventi u përditësua me sukses");
    } else {
      await API.post("/evente", form);
      alert("Eventi u shtua me sukses");
    }

    pastroFormen();
    merrEventet();
  };

  const editoEvent = (event) => {
    setEditId(event._id);

    setForm({
      titulli: event.titulli,
      pershkrimi: event.pershkrimi,
      kategoria: event.kategoria,
      vendndodhja: event.vendndodhja,
      data: event.data?.substring(0, 10),
      cmimi: event.cmimi,
      vendeDisponueshme: event.vendeDisponueshme,
      foto: event.foto,
    });

    window.scrollTo(0, 0);
  };

  const fshiEvent = async (id) => {
    await API.delete(`/evente/${id}`);
    alert("Eventi u fshi me sukses");
    merrEventet();
  };

  return (
    <div className="container">
      <h1>Paneli i Administratorit</h1>

      <form className="form-box" onSubmit={ruajEvent}>
        <h2>{editId ? "Përditëso Event" : "Shto Event"}</h2>

        <input
          name="titulli"
          placeholder="Titulli"
          value={form.titulli}
          onChange={handleChange}
          required
        />

        <textarea
          name="pershkrimi"
          placeholder="Përshkrimi"
          value={form.pershkrimi}
          onChange={handleChange}
          required
        />

        <input
          name="kategoria"
          placeholder="Kategoria"
          value={form.kategoria}
          onChange={handleChange}
          required
        />

        <input
          name="vendndodhja"
          placeholder="Vendndodhja"
          value={form.vendndodhja}
          onChange={handleChange}
          required
        />

        <input
          name="data"
          type="date"
          value={form.data}
          onChange={handleChange}
          required
        />

        <input
          name="cmimi"
          type="number"
          placeholder="Çmimi"
          value={form.cmimi}
          onChange={handleChange}
          required
        />

        <input
          name="vendeDisponueshme"
          type="number"
          placeholder="Vende të disponueshme"
          value={form.vendeDisponueshme}
          onChange={handleChange}
          required
        />

        <input
          name="foto"
          placeholder="URL e fotos"
          value={form.foto}
          onChange={handleChange}
        />

        <button className="btn" type="submit">
          {editId ? "Përditëso Event" : "Shto Event"}
        </button>

        {editId && (
          <button type="button" className="btn danger" onClick={pastroFormen}>
            Anulo Editimin
          </button>
        )}
      </form>

      <h2>Lista e Eventeve</h2>

      <div className="grid">
        {eventet.map((event) => (
          <div className="admin-card" key={event._id}>
            <h3>{event.titulli}</h3>
            <p>{event.vendndodhja}</p>
            <p>{event.cmimi} €</p>

            <button className="btn" onClick={() => editoEvent(event)}>
              Edito
            </button>

            <button className="btn danger" onClick={() => fshiEvent(event._id)}>
              Fshi
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;