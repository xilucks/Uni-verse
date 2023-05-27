import dayjs from "dayjs";
import Image from "next/image";
import ClockIcon from "@/components/PostCard/atom/ClockIcon";
import TimeLabel from "@/components/PostCard/atom/TimeLabel";

const TimeMolecules = ({createTime}: {createTime: dayjs.ConfigType}) => {
    return (
        <div className={'w-full text-right flex align-middle flex flex-row-reverse'}>
            <TimeLabel createTime={createTime} />
            <ClockIcon  height={15} width={15}/>
        </div>
    )
}

export default TimeMolecules
