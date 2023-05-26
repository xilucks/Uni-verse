import { allPosts } from "contentlayer/generated";
import PostCard, {PostCardProps} from "@/components/home/PostCard";
export function getSortedPostList(){
    const postList: any[] = allPosts.sort((prevPost, nextPost) => Number(new Date(nextPost.date)) - Number(new Date(prevPost.date)));

    return postList;
}
export default function PageHome() {
    const postList = getSortedPostList();
    console.log('--')
    return (
        <div className={'text-center w-full'}>
            {postList.map((post: PostCardProps) => {
                return <PostCard
                            key={`${post.title}${post.createTime}`}
                            title={post.title}
                            description={post.description}
                            imgSrc={post.imgSrc}
                            imgAlt={post.imgAlt}
                            tags={post.tags}
                            createTime={post.createTime} />
            })}

        </div>
    )
}
