import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-96"></div>
      <div className="flex h-screen justify-center items-center">
        <Image src="/LIGHTHOUSE_IMAGE.png" alt="Lighthouse" width={1100} height={700} className="flex absolute" />
        <Image src="/HERS.png" alt="Hers" width={50} height={50} className="flex absolute translate-x-60 translate-y-96" />
        <Image src="/TREE.png" alt="Tree" width={300} height={200} className="flex absolute translate-x-60 translate-y-52" />
      </div>
      
    </>
  )
}
