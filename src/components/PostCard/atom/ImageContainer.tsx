import Image from "next/image";

interface ImageContainerProps {
  imgSrc: string;
  imgAlt: string;
  width: number;
  height: number;
}
const ImageContainer = ({
  imgSrc,
  imgAlt,
  width,
  height,
}: ImageContainerProps) => {
  return (
    <figure className={"h-3/6 w-full"}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={width}
        height={height}
        className={"flex items-center justify-center"}
      />
    </figure>
  );
};

export default ImageContainer;
