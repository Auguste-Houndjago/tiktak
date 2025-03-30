import Link from "next/link";
import { PiMusicNote } from "react-icons/pi";


export default function Logo() {
  return (
<Link href={"/"} className="flex items-center font-black text-center text-2xl gap-0.5 group" >

<PiMusicNote/>
<p> <span className="text-primary "> TIK</span> TAK </p>
</Link>
  )
}
