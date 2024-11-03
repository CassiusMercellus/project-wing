import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-96"></div>
      <div className="flex h-screen justify-center items-center overflow-hidden relative">
        {/* Lighthouse Image */}
        <div className="absolute w-[700px] h-[700px] 
        sm:w-[900px] sm:h-[900px] 
        md:w-[1100px] md:h-[1100px] 
        translate-x-1 translate-y-1">

          <Image
            src="/LIGHTHOUSE_IMAGE.png"
            alt="Lighthouse"
            layout="fill"
            objectFit="contain"   // Ensures the entire image is visible
            objectPosition="center" // Centers the image within its container
          />
        </div>

        {/* Hers Image */}
        <div className="absolute w-[30px] h-[30px] 
          sm:w-[40px] sm:h-[40px] 
          md:w-[50px] md:h-[50px] 
          translate-x-40 translate-y-60
          sm:translate-x-52 sm:translate-y-64
          md:translate-x-60 md:translate-y-96">
          <Image
            src="/HERS.png"
            alt="Hers"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>

        {/* Tree Image */}
        <div className="absolute w-[300px] h-[300px] 
          sm:w-[400px] sm:h-[400px] 
          md:w-[450px] md:h-[450px] 
          translate-x-40 translate-y-32 
          sm:translate-x-52 sm:translate-y-40 
          md:translate-x-60 md:translate-y-52">
          <Image
            src="/TREE.png"
            alt="Tree"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
    </>
  );
}
