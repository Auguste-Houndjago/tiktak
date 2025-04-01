
import Hashtags from "./hashtags";
import Link from "./Link";
import Profiles from "./profiles";


export default function Sidebar() {
  return (
<div className="overflow-auto border-r p-4 max-w-xs w-full space-y-12" >
<Link/>
<Hashtags/>
<Profiles />
</div>
  )
}


