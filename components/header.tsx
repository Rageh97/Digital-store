import Image from "next/image";

export const Header = () => {
  return (
    <div className="relative flex items-center justify-center w-full ">
      <h1 className="absolute top-50 text-6xl font-bold text-indigo-500">
        Your Special World
      </h1>
      <p className="absolute top-70 text-2xl  text-gray-500">
        الطريق الى عالمك الرقمي
      </p>
      <Image
        quality={100}
        className="object-cover h-[600px]"
        src={"/download (3).jpeg"}
        width={1600}
        height={300}
        alt="header banner"
      />
    </div>
  );
};
