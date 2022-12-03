import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  MdOutlineNightsStay,
  MdWbSunny,
  MdExpandMore,
  MdClose,
} from "react-icons/md";
import { useTheme, Theme } from "../../hooks/ThemeContext";

export const MenuItems = [
  { href: "/about", text: "About" },
  // { href: "/articles", text: "Articles" },
  { href: "/projects", text: "Projects" },
  { href: "/contact", text: "Contact" },
];

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
      className={`${
        match ? "text-teal-600" : "text-gray-80 dark:text-colorWhite "
      } hover:text-teal-600 dark:hover:text-teal-600 text-sm py-3 `}
    >
      {children}
    </Link>
  );
}

type NavMenuBoxProps = {
  onDismiss: () => void;
};
function NavMenuBox({ onDismiss }: NavMenuBoxProps) {
  return (
    <div
      className="w-screen h-screen z-[24] fixed top-0 right-0 bg-colorBlack/30 backdrop-blur-sm flex flex-col md:hidden"
      onClick={onDismiss}
    >
      <div
        className="p-4 bg-colorWhite dark:bg-colorGray dark:text-colorWhite rounded-2xl m-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row items-center justify-between mb-3">
          <h5 className="text-sm text-colorBlack/50 dark:text-colorWhite/50">
            Navigation
          </h5>
          <button className="p-3 text-lg focus:ring-2" onClick={onDismiss}>
            <MdClose />
          </button>
        </div>

        <ul className="divide-y dark:divide-colorWhite/10 text-colorBlack/80 dark:text-colorWhite/80">
          {MenuItems.map((item) => (
            <li key={item.href} onClick={onDismiss} className="py-2">
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Navbar() {
  const theme = useTheme();
  const themeIcon =
    theme.value === Theme.LightMode ? (
      <MdWbSunny className="group-hover:text-teal-600" />
    ) : (
      <MdOutlineNightsStay className="text-teal-600" />
    );

  const [displayingPopup, setDisplayingPopup] = useState(false);
  function togglePopup() {
    setDisplayingPopup((prevValue) => !prevValue);
  }

  return (
    <nav className="p-2 flex flex-row gap-x-3 items-center justify-between">
      {/* HOME LOGO */}
      <Link href="/" className="flex-grow md:flex-grow-0">
        <Image
          className="rounded-[50%] block w-auto h-auto bg"
          src="/profile-picture.jpeg"
          alt="home"
          width={28}
          height={28}
        />
      </Link>

      {/* MENU */}
      <div
        className="rounded-full border px-4 mx-3 gap-5 hidden md:flex flex-row shadow-sm
      dark:border-colorWhite/5 dark:bg-colorWhite/5"
      >
        {MenuItems.map((item) => (
          <NavLink key={item.href} href={item.href}>
            {item.text}
          </NavLink>
        ))}
      </div>

      {/* TOGGLE MENU BUTTON */}
      <button
        className="flex flex-row items-center gap-x-2 border rounded-3xl py-2 px-4 shadow-sm
      dark:border-colorWhite/5 dark:bg-colorWhite/5 md:hidden"
        onClick={togglePopup}
      >
        <span>Menu</span>
        <MdExpandMore className="text-gray-600" />
      </button>

      {/* OVERLAY MENU */}
      {displayingPopup && <NavMenuBox onDismiss={togglePopup} />}

      {/* DARKMODE BUTTON */}
      <button
        onClick={() => {
          theme.toggle();
        }}
        className="p-3 border rounded-2xl group dark:border-colorWhite/5 dark:bg-colorWhite/5"
      >
        {themeIcon}
      </button>
    </nav>
  );
}

export default Navbar;
