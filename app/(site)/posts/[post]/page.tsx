// app/posts/[post]/page.tsx

import { getPost } from "@/sanity/sanity.query";
import type { PostType } from "@/types";
import Post from "../../../../components/Post";
import ImageOverlay from "@/components/ImageOverlay";

interface Props {
  params: {
    post: string;
  };
}

interface GalleryProps {
  gallery: string[];
}


const Gallery: React.FC<GalleryProps> = ({ gallery }) => (
  <div className="max-w-xl grid grid-cols-2 md:grid-cols-3 gap-4">
    {gallery.map((image, index) => (
      <ImageOverlay imageUrl={image} key={index} />
    ))}
  </div>
);



const SinglePost: React.FC<Props> = async ({ params }) => {
  const slug = params.post;
  const post: PostType = await getPost(slug);


  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <Post coverImageURL={post.coverImageURL} content={post.content} />
      {post.imageUrls && <Gallery gallery={post.imageUrls} />}
    

    </main>
  );
};

export const revalidate = 60;

export default SinglePost;