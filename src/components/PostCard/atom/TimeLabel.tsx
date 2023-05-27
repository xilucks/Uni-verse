import dayjs from "dayjs";

const TimeLabel = ({createTime}: {createTime: dayjs.ConfigType}) => {
    return <span className={'text-sm w-fit'}>{dayjs(createTime).format("YYYY-MM-DD")}</span>
}

export default TimeLabel
