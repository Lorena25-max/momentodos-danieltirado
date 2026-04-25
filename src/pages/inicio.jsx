import { useNavigate } from "react-router-dom";
import "./inicio.css";

const Inicio = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            ESTILO URBANO <br />
            <span>REDEFINIDO</span>
          </h1>

          <p>
            Descubre nuestra colección exclusiva de ropa urbana minimalista
          </p>

          <button onClick={() => navigate("/productos")}>
            EXPLORAR COLECCIÓN
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container features">
        <div className="feature">
          <div className="icon">✂️</div>
          <h3>DISEÑO ÚNICO</h3>
          <p>Piezas exclusivas con estética urbana y minimalista</p>
        </div>

        <div className="feature">
          <div className="icon">✔️</div>
          <h3>CALIDAD PREMIUM</h3>
          <p>Materiales de alta calidad para máxima durabilidad</p>
        </div>

        <div className="feature">
          <div className="icon">⚡</div>
          <h3>ENVÍO RÁPIDO</h3>
          <p>Entrega express en 24-48 horas</p>
        </div>
      </section>
    </>
  );
};

export default Inicio;