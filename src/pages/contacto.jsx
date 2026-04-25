import Form from "../components/Form";
import "./contacto.css";

const Contacto = () => {
  return (
    <div className="container contacto">
      <h2>CONTACTO</h2>
      <p>¿Tienes alguna pregunta? Nos encantará escucharte</p>

      <div className="contact-grid">

        {/* IZQUIERDA */}
        <div>
          <div className="info-item">
            <div className="icon">📍</div>
            <div>
              <strong>Dirección</strong>
              <p>Calle Urban Style 123
28001 Madrid, España3</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">📞</div>
            <div>
              <strong>Teléfono</strong>
              <p>+34 91 123 45 67</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">✉️</div>
            <div>
              <strong>Email</strong>
              <p>info@urbanthreads.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="icon">⏰</div>
            <div>
              <strong>Horario</strong>
              <p>Lun - Vie: 9:00 - 18:00
Sáb: 10:00 - 14:00</p>
            </div>
          </div>
        </div>

        {/* DERECHA */}
        <Form />

      </div>
    </div>
  );
};

export default Contacto;