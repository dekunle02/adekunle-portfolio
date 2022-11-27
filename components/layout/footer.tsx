import Link from "next/link";
import { MenuItems } from "./navbar";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="border-t dark:border-colorWhite/10 flex flex-col md:flex-row md:justify-between px-5 py-10 gap-5 items-center justify-center text-sm">
      <ul className="flex flex-row gap-x-3">
        {MenuItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <span className="text-colorBlack/50 dark:text-colorWhite/50">
        © {year} Adekunle Adeleke. All Rights Reserved.
      </span>
    </div>
  );
}
export default Footer;
