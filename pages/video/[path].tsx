// import { useRouter } from "next/router";
import VideoPlayer from "../components/videoplayer";
import { getUrl } from "aws-amplify/storage";
// pages/video/[path].tsx
import { GetStaticPaths, GetStaticProps } from "next";

interface VideoProps {
  path: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch or define your dynamic paths
  const paths = [
    { params: { path: "video-1" } },
    // { params: { path: "video-2" } },
  ];

  return {
    paths,
    fallback: true, // or true
  };
};

export const getStaticProps: GetStaticProps<VideoProps> = async ({
  params,
}) => {
  const { path } = params as { path: string };

  // Fetch video data based on the path
  // const videoData = await fetch(`https://api.example.com/videos/${path}`)
  //   .then((res) => res.json())
  //   .catch(() => null);

  // // If no data found, you can return a 404 page
  // if (!videoData) {
  //   return {
  //     notFound: true,
  //   };
  // }

  return {
    props: {
      path,
    },
    // revalidate: 60, // Revalidate every 60 seconds
  };
};

const VideoPage = ({ path }: VideoProps) => {
  return (
    <div>
      <h1>{path}</h1>
      {/* <p>{videoData.description}</p> */}
    </div>
  );
};

export default VideoPage;
