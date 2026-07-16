import { Link, useLoaderData } from "react-router";

export async function postsLoader() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Response("Errore nel caricamento dei post", { status: response.status });
  }
  return response.json();
}

function Posts() {
  const posts = useLoaderData();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <div key={post.id} className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="line-clamp-2 text-sm opacity-70">{post.body}</p>
              <div className="card-actions justify-end">
                <Link to={`/posts/${post.id}`} className="btn btn-primary btn-sm">
                  Leggi
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;