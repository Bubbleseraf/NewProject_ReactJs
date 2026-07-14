import { Link, Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";

function Layout() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link>
        {isAuthenticated && <Link to="/posts">Posts</Link>}
        {!isAuthenticated && <Link to="/login">Login</Link>}
        {!isAuthenticated && <Link to="/register">Register</Link>}
        {isAuthenticated && (
          <span style={{ marginLeft: "auto" }}>
            Ciao, {user.name}!{" "}
            <button onClick={logout}>Logout</button>
          </span>
        )}
      </nav>

      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;