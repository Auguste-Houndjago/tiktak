import Logo from "./Logo";
import Profile from "./profile";
import Search from "./Search";


export default function Navbar() {
  return (
<nav className="p-6 border-b">

    <div className="flex justify-between">
        <Logo/>
        <Search/>
        <Profile/>
    </div>
</nav>
  )
}




// 074847 