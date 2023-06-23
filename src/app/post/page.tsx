import { allPosts } from "contentlayer/generated";
import PostCard, {
  PostCardProps,
} from "@/components/PostCard/organisms/PostCard";
export function getSortedPostList() {
  const postList: any[] = allPosts.sort(
    (prevPost, nextPost) =>
      Number(new Date(nextPost.date)) - Number(new Date(prevPost.date))
  );

  return postList;
}
export default function PageHome() {
  const postList = getSortedPostList();
  return (
    <div className={"text-center w-full"}>
      {postList.map((post: PostCardProps) => {
        return (
          <PostCard
            key={post._id}
            title={post.title}
            description={post.description}
            imgSrc={post.imgSrc}
            imgAlt={post.imgAlt}
            tags={post.tags}
            createTime={post.createTime}
            slug={post._raw.flattenedPath}
          />
        );
      })}
    </div>
  );
}
