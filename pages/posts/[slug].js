import Head from "next/head";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import PostContent from "../../components/posts/post-detail/post-content";

const PostDetailPage = (props) => {
  const { post } = props;
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`Detail page for ${post.title}`} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export default PostDetailPage;

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 300,
  };
};

export const getStaticPaths = () => {
  const postsFileNames = getPostsFiles();
  const slugs = postsFileNames.map((filename) => filename.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
};
