import Image from "next/image";

const Card = (props) => {

    const {img, title, category, price} = props
  return (
    <div className="bg-[#362c29]/50 p-6 flex flex-col gap-2 rounded-2xl">
        <Image src={img}
        width={200}
        height={200}
        className="h-52 w-52 object-cover rounded-2xl"
        
        ></Image>
        <h1 className="text-white text-lg">{title}</h1>
        <span className="text-gray-400">{category}</span>
        <div className="flex items-center justify-between gap-2">
            <h5 className="text-[#e58d27] font-bold text-3xl">${price}</h5>
            <button type="submit" className="p-3 bg-[#e58d27] text-black font-bold rounded-full w-full hover:-translate-y-1 transition-all">Buy</button>
        </div>


    </div>
  )
}

export default Card
