import Card from "../components/Card";
import "./productos.css";

const Productos = () => {
  const productos = [
    {
      title: "Camiseta Básica Urban",
      price: "€29",
      description: "Algodón 100% orgánico",
    },
    {
      title: "Jeans Slim Fit",
      price: "€89",
      description: "Denim premium stretch",
    },
    {
      title: "Sudadera Oversize",
      price: "€65",
      description: "Algodón French Terry",
    },
    {
      title: "Chaqueta Bomber",
      price: "€120",
      description: "Nylon resistente al agua",
    },
    {
      title: "Gorra Snapback",
      price: "€35",
      description: "Bordado premium",
    },
    {
      title: "Zapatillas Urban",
      price: "€95",
      description: "Suela de goma antideslizante",
    },
  ];

  return (
    <div className="container">
      <h2 className="title">NUESTRA COLECCIÓN</h2>
      <p className="subtitle">Estilo urbano para cada ocasión</p>

      <div className="grid">
        {productos.map((producto, index) => (
          <Card
            key={index}
            title={producto.title}
            price={producto.price}
            description={producto.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Productos;