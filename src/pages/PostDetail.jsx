import { useLoaderData, Link } from "react-router";

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
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h1 className="card-title text-2xl">{post.title}</h1>
        <p className="opacity-80">{post.body}</p>
        <div className="card-actions justify-end mt-4">
          <Link to="/posts" className="btn btn-outline btn-sm">
            Torna ai post
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostDetail;