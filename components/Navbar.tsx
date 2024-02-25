import Link from "next/link";
import { ThemeSwitcher } from "./ThemeToggle";

const Navbar = () => {

  return (
    <nav className="flex items-center justify-between flex-wrap p-6 max_width mx-auto">
      <Link href="/">
        <h2 className="text-3xl sm:text-5xl" >Eshkon Blogs</h2>
      </Link>
      <ThemeSwitcher />
    </nav>
  )
}

export default Navbar