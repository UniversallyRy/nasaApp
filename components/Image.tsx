import Image from "next/legacy/image";

type Props = {
  src: string;
  alt: string;
  className: string;
}

export default function ChakraNextImage({ src, alt, className, ...otherProps }: Props) {
  return (
    <div className={`relative ` + className} {...otherProps}>
      <Image objectFit="contain" layout="fill" src={src} alt={alt} priority />
    </div>
  );
};
