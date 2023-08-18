import Link from "next/link";
import './NavBar.css'


function NavBar() {
  return (
    <nav className="navbar">
      <Link href='/'>
        <h1>NavBar</h1>
      </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/tienda">Tienda</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
      </ul>
    </nav>);
}

export default NavBar;