'use client'

import Image from "next/image";
import dayjs from "dayjs";

export interface PostCardProps {
    title: string,
    description: string,
    imgSrc: string,
    imgAlt: string,
    tags: string[],
    createTime: typeof Date,
}

export default function PostCard(props: PostCardProps){
    return(
        <article className={'card w-72 max-w-[280px] h-80 bg-base-100 text-left hover:shadow-lg dark:hover:shadow-black/30 hover:scale-105 mx-auto sm:m-0'}>
            <figure className={"h-fit w-full"}>
                <Image src={props.imgSrc} alt={props.imgAlt} width={400} height={200} className={"flex items-center justify-center"}/>
            </figure>
            <div className={'card-body h-3/6 pb-2 px-4'}>
                <h3 className={'card-title'}>{props.title}</h3>
                <div className={'h-24 w-full'}>
                    <p>{props.description}</p>
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
                <div className={'w-full text-right flex align-middle flex flex-row-reverse'}>
                     <span className={'text-sm w-fit'}>{dayjs(props.createTime).format("YYYY-MM-DD")}</span>
                    <Image className={"fill-white mr-2"} src={"/icons/clock.svg"} alt={'시계 아이콘'} width={15} height={15}/>
                </div>
            </div>
        </article>
    )
}
