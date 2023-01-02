import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import BlogHeader from "../Components/BlogHeader";
import { getAllBlogPosts, getAllTopics } from "../Lib/Data";

export const getStaticProps = () => {
  const allBlogs = getAllBlogPosts();
  const allTopics = getAllTopics();
  return {
    props: {
      blogs: allBlogs,
      topics: allTopics,
    },
  };
};

export default function Home({ blogs, topics }) {
  return (
    <>
      <Head>
        <title>Dastaan</title>
        <meta name="title" content="Dastaan" />
        <meta
          name="description"
          content="Kuch unsuni kahaniyan"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="iamrahulmahato.github.io" />
        <meta property="og:title" content="Dastaan" />
        <meta
          property="og:description"
          content="Kuch unsuni kahaniyan"
        />
        <meta
          property="og:image"
          content="https://og-image.vercel.app/**Dastaan**%3Cbr%3EKuch%20unsuni%20kahaniyan%20.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&widths="
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="iamrahulmahato.github.io" />
        <meta property="twitter:title" content="Dastaan" />
        <meta
          property="twitter:description"
          content="Kuch unsuni kahaniyan"
        />
        <meta
          property="twitter:image"
          content="https://og-image.vercel.app/**Dastaan**%3Cbr%3EKuch%20unsuni%20kahaniyan%20.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&widths="
        />
      </Head>

      <div className="min-h-screen relative bg-white dark:bg-gray-900">
        <Navbar topics={topics} />
        <Header />

        <div className="px-0.5 md:px-7 pb-14 pt-6 mx-auto">
          <div className="flex flex-wrap">
            {blogs &&
              blogs.map(
                (blog) =>
                  blog.data.isPublished && (
                    <BlogHeader
                      key={blog.data.Id}
                      data={blog.data}
                      content={blog.content}
                      readTime={blog.readTime.text}
                    />
                  )
              )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
