import Image from "next/image";

const ClockIcon = ({width, height}: {width: number; height: number}) => {

    return <Image className={"fill-white mr-2"}
                  src={"/icons/clock.svg"}
                  alt={'시계 아이콘'}
                  width={width}
                  height={height}/>

}

export default ClockIcon;
