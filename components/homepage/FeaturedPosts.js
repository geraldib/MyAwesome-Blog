import PostsGrid from "../posts/PostsGrid";
import classes from "./featured-posts.module.css";

const FeaturePosts = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturePosts;
