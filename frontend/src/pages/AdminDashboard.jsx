import { useEffect, useState } from "react";
import API from "../services/api";

function AdminDashboard() {
  const [eventet, setEventet] = useState([]);
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

  const shtoEvent = async (e) => {
    e.preventDefault();

    await API.post("/evente", form);

    alert("Eventi u shtua");
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

    merrEventet();
  };

  const fshiEvent = async (id) => {
    await API.delete(`/evente/${id}`);
    alert("Eventi u fshi");
    merrEventet();
  };

  return (
    <div className="container">
      <h1>Paneli i Administratorit</h1>

      <form className="form-box" onSubmit={shtoEvent}>
        <input name="titulli" placeholder="Titulli" value={form.titulli} onChange={handleChange} />
        <textarea name="pershkrimi" placeholder="Përshkrimi" value={form.pershkrimi} onChange={handleChange} />
        <input name="kategoria" placeholder="Kategoria" value={form.kategoria} onChange={handleChange} />
        <input name="vendndodhja" placeholder="Vendndodhja" value={form.vendndodhja} onChange={handleChange} />
        <input name="data" type="date" value={form.data} onChange={handleChange} />
        <input name="cmimi" type="number" placeholder="Çmimi" value={form.cmimi} onChange={handleChange} />
        <input name="vendeDisponueshme" type="number" placeholder="Vende të disponueshme" value={form.vendeDisponueshme} onChange={handleChange} />
        <input name="foto" placeholder="URL e fotos" value={form.foto} onChange={handleChange} />

        <button className="btn" type="submit">
          Shto Event
        </button>
      </form>

      <div className="grid">
        {eventet.map((event) => (
          <div className="admin-card" key={event._id}>
            <h3>{event.titulli}</h3>
            <p>{event.vendndodhja}</p>
            <p>{event.cmimi} €</p>

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