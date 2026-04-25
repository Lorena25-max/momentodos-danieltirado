import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Productos from "../pages/Productos";
import Contacto from "../pages/Contacto";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
  <div className="app-wrapper">
    <Header />

    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>

    <Footer />
  </div>
</BrowserRouter>
  );
};

export default AppRouter;