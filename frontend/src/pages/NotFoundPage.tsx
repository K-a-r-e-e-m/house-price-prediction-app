import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <h1>404</h1>

      <p>Oops! The page you are looking for doesn't exist.</p>

      <Link to="/">
        Back to Home
      </Link>
    </main>
  );
}