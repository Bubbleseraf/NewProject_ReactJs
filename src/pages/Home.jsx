import { useFetch } from "../hooks/useFetch";

function Home() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className="hero bg-base-100 rounded-box shadow-md p-10">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Benvenuto</h1>
          <p className="py-4">
            Usa la navbar per esplorare Posts, Login e Register.
          </p>

          {loading && <span className="loading loading-spinner loading-md"></span>}
          {error && <p className="text-error">Errore: {error}</p>}
          {data && (
            <p className="badge badge-primary badge-lg">
              {data.length} post disponibili
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;