import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = (props) => {
  const { posts } = props;
  return <AllPosts posts={posts} />;
};

export default AllPostsPage;

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 300,
  };
};
