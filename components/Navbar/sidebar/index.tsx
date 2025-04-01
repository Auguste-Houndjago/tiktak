
import Hashtags from "./hashtags";
import Link from "./Link";
import Profiles from "./profiles";


export default function Sidebar() {
  return (
<div className="overflow-auto border-r p-8 max-w-[350px] space-y-12" >
<Link/>
<Hashtags/>
<Profiles />
</div>
  )
}


