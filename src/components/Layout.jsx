import { Link, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useScroll } from "../hooks/useScroll";

function Layout() {
  const { user } = useAuth();
  const scrollY = useScroll();

  return (
    <div>
      <nav
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          borderBottom: "1px solid #ccc",
          backgroundColor: scrollY > 50 ? "#f0f0f0" : "white",
        }}
      >
        <Link to="/">Home</Link>
        {user && <Link to="/posts">Posts</Link>}
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>

      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
