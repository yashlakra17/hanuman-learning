import "./BhajanCard.css";

function BhajanCard({ icon, title, description }) {
  return (
    <div className="bhajan-card">
      <span className="bhajan-card-icon">{icon}</span>

      <h2 className="bhajan-card-title">
        {title}
      </h2>

      <p className="bhajan-card-description">
        {description}
      </p>

      <button className="bhajan-card-button">
        Start Learning
      </button>
    </div>
  );
}

export default BhajanCard;