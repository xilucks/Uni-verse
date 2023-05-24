'use client'

import Image from "next/image";
import dayjs from "dayjs";
import clockIcon from "../../../public/icons/clock.svg"

export interface PostCardProps {
    title: string,
    subTitle: string,
    imgSrc: string,
    imgAlt: string,
    tags: string[],
    createTime: typeof Date,
}

export default function PostCard(props: PostCardProps){
    return(
        <article className={'card w-full max-w-xs h-96 bg-base-100 text-left hover:shadow-lg dark:hover:shadow-black/30 hover:scale-105'}>
            <figure className={"h-fit w-full"}>
                <Image src={props.imgSrc} alt={props.imgAlt} width={400} height={200} className={"flex items-center justify-center"}/>
            </figure>
            <div className={'card-body h-3/6 pb-2'}>
                <h3 className={'card-title'}>{props.title}</h3>
                <div className={'h-24 w-full'}>
                    <p>{props.subTitle}</p>
                </div>
                <div className="card-actions justify-end">
                    {props.tags.map((tag) => {
                        return (
                            <div key={`${props.title}${tag}`} className="badge badge-outline">
                                {tag}
                            </div>
                        );
                    })}
                </div>
                <div className={'w-full text-right flex align-middle'}>
                    <Image className={""} src={clockIcon} alt={'시계 아이콘'} width={15} height={15}/>
                     <p className={'text-sm'}>{dayjs(props.createTime).format("YYYY-MM-DD")}</p>
                </div>
            </div>
        </article>
    )
}
