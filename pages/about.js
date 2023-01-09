import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaLaptop, FaTwitter } from "react-icons/fa";
import { getAllTopics } from "../Lib/Data";
import Head from "next/head";

export const getStaticProps = () => {
  const allTopics = getAllTopics();
  return {
    props: {
      topics: allTopics,
    },
  };
};

function about({ topics }) {
  return (
    <>
      <Head>
        <title>Dastaan - about</title>
        <meta name="title" content="Dastaan" />
        <meta name="description" content="Kuch unsuni kahaniyan" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="iamrahulmahato.github.io" />
        <meta property="og:title" content="Dastaan" />
        <meta property="og:description" content="Kuch unsuni kahaniyan" />
        <meta
          property="og:image"
          content="https://og-image.vercel.app/**Dastaan**%3Cbr%3EKuch%20unsuni%20kahaniyan%20.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&widths="
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="iamrahulmahato.github.io" />
        <meta property="twitter:title" content="Dastaan" />
        <meta property="twitter:description" content="Kuch unsuni kahaniyan" />
        <meta
          property="twitter:image"
          content="https://og-image.vercel.app/**Dastaan**%3Cbr%3EKuch%20unsuni%20kahaniyan%20.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&widths="
        />
      </Head>
      <div className="min-h-screen relative bg-white dark:bg-gray-900">
        <Navbar topics={topics} />
        <div className="max-w-2xl pt-20 pb-32 px-6 text-center mx-auto">
          <div className="h-64 w-full justify-center flex">
            <img src="/about.png" className="h-64" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-700 py-4 dark:text-gray-200">
            Hi,{" "}
            <span className="bg-orange-400 text-white rounded px-1 dark:bg-orange-500">
              I’m Rahul
            </span>{" "}
          </h2>
          <p className="text-gray-600 mt-4 dark:text-orange-200">
          I am an 20 years old developer and a student. I am passionate about technology, business, writing story and startup. People usually brag about themselves in blogs but I will try to keep everything genuine and authentic
          </p>

          <div className="text-center pt-8">
            <button className="bg-orange-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded dark:bg-orange-600">
              <FaLaptop />
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/iamrahulmahato"
              >
                See My Works
              </a>
            </button>

            <button className="bg-orange-500 px-3 py-1 font-semibold text-white inline-flex items-center space-x-2 rounded ml-3 dark:bg-orange-600">
              <FaTwitter />
              <a
                className="twitter-follow-button"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/iamrahulmahato/"
              >
                Follow Me
              </a>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default about;
