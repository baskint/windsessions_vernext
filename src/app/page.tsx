import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Image
        src="/images/niagara01.jpg"
        alt="Wind Sessions Background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30" /> {/* Overlay for better text visibility */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
          Wind Sessions
        </h1>
      </div>
    </div>
  );
}
