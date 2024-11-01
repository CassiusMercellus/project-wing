import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-96"></div>
      <div className="flex h-screen justify-center items-center overflow-hidden relative">
        <Image src="/STARLIGHT_IMAGE.png" alt="Lighthouse" width={1100} height={1100} className="absolute translate-x-1 translate-y-1" />
        <Image src="/EVERY_MAN.png" alt="Everyman" width={50} height={50} className="absolute translate-x-60 translate-y-80" />
        <p className="absolute translate-x-60 translate-y-64">1034_103124</p>
        <Image src="/TREE.png" alt="Tree" width={300} height={300} className="absolute translate-x-60 translate-y-52" />
      </div>
      
    </>
  )
}
