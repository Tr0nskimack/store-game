import Image from "next/image";
import Card from '@/components/Card'

const Content = () => {
  return (
    <div className="flex-1 h-full overflow-y-scroll ">
      {/* Portada */}
      <div className="rounded-2xl mb-4">
        <Image
          src={"/fondo2.jpg"}
          width={1400}
          height={500}
          alt="Call of duty"
          className="w-full h-[500px] object-cover object-top md:object-top rounded-2xl"
        />
      </div>
      <div className="flex items-center md:grid md:grid-cols-2 xl:flex justify-around gap-8 flex-wrap">
        <Card img="/free.jpg" title = "Free Fire" category= "PS-X" price="51" />
        <Card img="/assasing.jpg" title = "Assasing Creed" category= "360" price="48" />
        <Card img="/vanquish.jpg" title = "Vanquish" category= "DS" price="74" />
        <Card img="/dead.jpg" title = "Dead Space" category= "PC" price="57" />
        <Card img="/fifa.jpg" title = "Fifa 23" category= "PC" price="35" />

      </div>
    </div>
  );
};

export default Content;
