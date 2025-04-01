"use client"
import { TbVideo } from "react-icons/tb";
import Link from "next/link"
import {FiHome } from "react-icons/fi"
import { usePathname } from "next/navigation";


export default function Links() {
    const path = usePathname()

  return (
<ul className="flex flex-col gap-2">
    {links.map(link => (
        <li key={link.route} className="cursor-pointer">
                <Link href={link.route}>
                <div className={`flex items-center gap-2 text-xl p-3 rounded-md hover:font-semibol0d0 hover:text-primary transition-all ${path==link.route ? 'bg-primary/5 text-primary font-semibold': "" } `}>
                    {link.icon}
                    {link.label}
                </div>
                </Link>
        </li>
    ))}

</ul> 
  )
}


const links = [
    {route:"/", label:"Home" , icon: <FiHome/> },
    {route:"/create", label:"Create" , icon: <TbVideo/> }
] 