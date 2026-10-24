import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page">
      <div className="container narrow center not-found">
        <p className="eyebrow">404</p>
        <h1>We can't find that page.</h1>
        <p className="lead">The item may have sold out or moved.</p>
        <div className="hero-actions">
          <Link className="btn" to="/shop">
            Shop all
          </Link>
          <Link className="text-link" to="/">
            Alfa Shop home
          </Link>
        </div>
      </div>
    </div>
  );
}
