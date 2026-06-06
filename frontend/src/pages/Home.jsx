import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <h1>Gjej dhe Rezervo Eventet më të Mira</h1>

          <p>
            Platformë moderne për regjistrim dhe prenotim eventesh si
            konferenca, koncerte, trajnime, seminare dhe aktivitete kulturore.
          </p>

          <Link className="btn" to="/eventet">
            Shiko Eventet
          </Link>
        </div>

        <img src={hero} alt="Platformë Eventesh" />
      </section>

      <section className="container">
        <h2>Eventet më të Fundit</h2>

        <p>
          Zbuloni eventet më të reja dhe rezervoni vendin tuaj me vetëm disa
          klikime.
        </p>

        <div className="grid">
          <div className="event-card">
            <h3>Konferenca e Teknologjisë</h3>
            <p>
              Event dedikuar inovacionit, inteligjencës artificiale dhe
              zhvillimit të softuerëve.
            </p>
          </div>

          <div className="event-card">
            <h3>Trajnim për Zhvillim Web</h3>
            <p>
              Mëso teknologjitë moderne React, Node.js dhe MongoDB nga
              ekspertët.
            </p>
          </div>

          <div className="event-card">
            <h3>Festival Kulturor</h3>
            <p>
              Një aktivitet që bashkon muzikën, artin dhe kulturën në një
              eksperiencë unike.
            </p>
          </div>
        </div>
      </section>

      <section className="container">
        <h2>Pse të Zgjidhni EventHub?</h2>

        <div className="grid">
          <div className="event-card">
            <h3>Rezervim i Shpejtë</h3>
            <p>Rezervo biletat online në pak sekonda.</p>
          </div>

          <div className="event-card">
            <h3>Evente të Verifikuara</h3>
            <p>Të gjitha eventet publikohen nga organizatorë të besueshëm.</p>
          </div>

          <div className="event-card">
            <h3>Menaxhim i Lehtë</h3>
            <p>Kontrollo rezervimet dhe eventet nga llogaria jote.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;