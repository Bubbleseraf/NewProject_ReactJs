import { useFetch } from "../hooks/useFetch";

function Home() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore: {error}</p>;

  return (
    <div>
      <h1>Benvenuto</h1>
      <p>Usa la navbar per esplorare Posts, Login e Register.</p>
      <p>Numero totale di post disponibili: {data.length}</p>
    </div>
  );
}

export default Home;