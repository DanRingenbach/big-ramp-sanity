// app/posts/[post]/page.tsx

import { getPost } from "@/sanity/sanity.query";
import type { PostType} from "@/types";
import Post from "../../../../components/Post"

type Props = {
  params: {
    post: string;
  }
};

const SinglePost = async({ params }: Props ) =>{
  const slug = params.post
  const post: PostType = await getPost(slug);
    return (
        <main className="max-w-6xl mx-auto lg:px-16 px-8">
            <Post coverImageURL={post.coverImageURL} content={post.content}></Post>
        </main>
    );
}

export const revalidate = 60;

export default SinglePost;