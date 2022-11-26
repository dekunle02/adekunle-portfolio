import Link from "next/link";
import { useRouter } from "next/router";

type NavLinkProps = {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
};

function NavLink(props: NavLinkProps) {
  const { href, exact, children } = props;
  const { pathname } = useRouter();
  const match = exact ? pathname === href : pathname.startsWith(href);
  return (
    <Link
      href={href}
      className={`${match ? "text-teal500" : "text-gray-800"} `}
    >
      {children}
    </Link>
  );
}

function Navbar() {
  // about articles projects
  return (
    <nav>
      <ul>
        <li>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/articles">Articles</NavLink>
          <NavLink href="/projects">Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
