'use client'

import dayjs from "dayjs";
import TimeMolecules from "@/components/PostCard/molecules/TimeMolecules";
import ContentSummary from "@/components/PostCard/molecules/ContentSummary";
import ImageContainer from "@/components/PostCard/atom/ImageContainer";

export interface PostCardProps {
    title: string,
    description: string,
    imgSrc: string,
    imgAlt: string,
    tags: string[],
    createTime: dayjs.ConfigType,
}

export default function PostCard(props: PostCardProps){
    return(
        <article className={'card w-72 max-w-[280px] h-80 bg-base-100 text-left hover:shadow-lg dark:hover:shadow-black/30 hover:scale-105 mx-auto sm:m-0'}>
            <ImageContainer imgSrc={props.imgSrc} imgAlt={props.imgAlt} width={400} height={200} />
            <div className={'card-body h-3/6 pb-2 px-4 pt-4'}>
                <ContentSummary title={props.title} description={props.description} tags={props.tags} />
                <TimeMolecules createTime={props.createTime} />
            </div>
        </article>
    )
}
