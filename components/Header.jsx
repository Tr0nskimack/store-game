import Link from 'next/link'
import { RiShoppingCart2Line, RiHeart3Line } from "react-icons/ri";

const Header = () => {
  return (
    <div>
      <header className='h-[10vh] text-gray-400 py-4 px-10 justify-between items-center flex bg-[#181a20] z-40'>

        {/* MENU */}
        
        <ul className='flex gap-6'>
            <li className='hover:text-[#e58d27] transition-colors'><Link href={"/"}>Home</Link></li>
            <li className='hover:text-[#e58d27] transition-colors'><Link href={"/"}>Streams</Link></li>
            <li className='text-[#e58d27] transition-colors'><Link href={"/"}>Games Store</Link></li>
            <li className='hover:text-[#e58d27] transition-colors'><Link href={"/"}>New</Link></li>
        </ul>
        {/* USER MENU */}
        <ul className='text-gray-300 flex gap-6 items-center text-xl'>
            <li>
                <button className='hover:text-[#e58d27] transition-colors'><RiShoppingCart2Line /></button>
            </li>
            <li>
                <button className='hover:text-[#e58d27] transition-colors'><RiHeart3Line /></button>
            </li>
            <li>
                <button><img src='profile-pic.png' className='rounded-full object-cover w-8 h-8 ring-2 ring-[#e58d27]' /></button>
            </li>
        
        
        </ul>
      </header>
    </div>
  )
}

export default Header
