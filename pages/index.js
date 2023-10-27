import Head from "next/head";
import Hero from "../components/homepage/hero";
import FeaturePosts from "../components/homepage/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

const HomePage = (props) => {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>My Awesome Blog</title>
        <meta name="description" content="I post about stuff, thank you!" />
      </Head>
      <Hero />
      <FeaturePosts posts={posts} />
    </>
  );
};

export default HomePage;

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 300,
  };
};
