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
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;