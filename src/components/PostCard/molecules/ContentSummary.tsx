import DescriptionLabel from "@/components/PostCard/atom/DescriptionLabel";
import TagLabel from "@/components/PostCard/atom/TagLabel";

interface ContentSummaryProps {
    title: string,
    description: string,
    tags: string[]
}
const ContentSummary = ({title, description, tags}: ContentSummaryProps) => {
    return (
        <>
            <h3 className={'card-title'}>{title}</h3>
            <div className={'h-24 w-full'}>
                <DescriptionLabel description={description}/>
            </div>
            <div className="card-actions justify-end">
                {tags.map((tag: string) => {
                    return <TagLabel tagName={tag} />;
                })}
            </div>
        </>

    )
}

export default ContentSummary


