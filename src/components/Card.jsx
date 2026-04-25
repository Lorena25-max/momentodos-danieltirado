import "./styles/card.css";

const Card = ({ title, price, description }) => {
  return (
    <div className="card">
      <div className="img"></div>

      <h4>{title}</h4>
      <p className="desc">{description}</p>

      <div className="card-footer">
        <span className="price">{price}</span>
        <button>AÑADIR</button>
      </div>
    </div>
  );
};

export default Card;