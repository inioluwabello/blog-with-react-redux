import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom/dist";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";

export const SinglePostPage = () => {
  const { postId } = useParams();

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <PostAuthor userId={post.user} />
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>

        <div><TimeAgo timestamp={post.date} />
        </div>
        <div>
          <ReactionButtons post={post} />
        </div>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  );
};
