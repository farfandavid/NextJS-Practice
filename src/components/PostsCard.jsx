"use client"

import Link from "next/link";

function PostsCard({ post }) {
  return (
    <div>
      <h3>{post.id}.{post.title}</h3>
      <p>{post.body}</p>
      <Link href={`/posts/${post.id}`}>Click</Link>
    </div>

  );
}

export default PostsCard;