import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>URBAN THREADS</h3>
          <p>Estilo urbano minimalista y calidad premium.</p>
        </div>

        <div>
          <h4>ENLACES</h4>
          <p>Inicio</p>
          <p>Productos</p>
          <p>Contacto</p>
        </div>

        <div>
          <h4>AYUDA</h4>
          <p>Envíos</p>
          <p>Devoluciones</p>
          <p>FAQ</p>
        </div>

        <div>
          <h4>SÍGUENOS</h4>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>

      <p className="copy">© 2024 Urban Threads</p>
    </footer>
  );
};

export default Footer;