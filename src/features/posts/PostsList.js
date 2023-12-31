import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/dist";
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import { ReactionButtons } from "./ReactionButtons";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => {
    return (
      <article className="post-excerpt" key={post.id}>
        <h3>{post.title}</h3>
        <PostAuthor userId={post.user} />
        <p className="post-content">{post.content.substring(0, 100)}</p>
        <div>
          <TimeAgo timestamp={post.date} />
        </div>
        <div>
          <ReactionButtons post={post} />
        </div>
        <Link to={`/posts/${post.id}`} className="button muted-button">
          View Post
        </Link>
      </article>
    );
  });

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      <div>
        {/* style={{ display: "flex", flexDirection: "column-reverse" }} */}
        {renderedPosts}
      </div>
    </section>
  );
};
