import Head from "next/head";
import Hero from "../components/homepage/Hero";
import FeaturePosts from "../components/homepage/FeaturedPosts";
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
