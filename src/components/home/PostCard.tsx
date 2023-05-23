'use client'

export interface PostCardProps {
    title: string,
    subTitle: string,
    imgSrc: string,
    imgAlt: string,
    tags: string[],
    createTime: Date,
}

export default function PostCard(props: PostCardProps){
    return(
        <article className={'card w-96 bg-base-100 text-left'}>
            <div className={'card-body'}>
                <h2 className={'card-title'}>{props.title}</h2>
                <p>{props.subTitle}</p>
                <div className={"flex"}>
                    {props.tags.map((tag) => {
                        return <div key={`${props.title}${tag}`}>{tag}</div>
                    })}
                </div>
            </div>
        </article>
    )
}
