import { useLoaderData } from "react-router";

export async function postDetailLoader({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  if (!response.ok) {
    throw new Response("Post non trovato", { status: response.status });
  }
  return response.json();
}

function PostDetail() {
  const post = useLoaderData();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetail;