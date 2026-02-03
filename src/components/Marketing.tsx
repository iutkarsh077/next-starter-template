import Image from "next/image";

const Marketing = () => {
  return (
    <section className="w-full ">
      <div className="w-full">
        <Image
          src="/installation.png"
          width={1200}
          height={600}
          alt="installation steps"
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
};

export default Marketing;
