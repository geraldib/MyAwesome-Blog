import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

const AllPostsPage = (props) => {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Displaying all posts page!" />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
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
