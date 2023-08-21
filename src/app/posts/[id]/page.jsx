import Posts from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json();
  console.log("first")
  return data;
}

/* export const metadata = {
  title: ''
}

export async function generateMetadata({ params }) {
  //console.log(post)
  const post = await loadPost(params.id);
  return {
    title: post?.title,
    description: post?.body
  }
}
 */

async function Usuario({ params }) {

  const post = await loadPost(params.id);

  return (
    <div>
      <title>{post.title}</title>
      <meta name="description" content={post.body} />
      <h3>{post.id}.{post.title}</h3>
      <p>{post.body}</p>
      <hr></hr>
      <hr />
      <h3>Otras Publicaciones</h3>
      <Suspense fallback={<div>
        Cargando Posts...
      </div>}>
        <Posts></Posts>
      </Suspense>

    </div>

  );
}

export default Usuario;