import { useContext } from "react";
import { Link, Outlet } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useScroll } from "../hooks/useScroll";

function Layout() {
  const { user } = useContext(AuthContext);
  const scrollY = useScroll();

  return (
    <div className="min-h-screen bg-base-200">
      <nav
        className={`navbar px-6 sticky top-0 z-10 transition-colors ${
          scrollY > 50 ? "bg-base-100 shadow-md" : "bg-base-100"
        }`}
      >
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            ReactJs
          </Link>
        </div>
        <div className="flex-none gap-2">
          <ul className="menu menu-horizontal px-1 items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            {user && (
              <li>
                <Link to="/posts">Posts</Link>
              </li>
            )}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-6">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;