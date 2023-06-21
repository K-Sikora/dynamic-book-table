"use client";
import { FaChevronRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";
type Props = {};

const Breadcrumbs = (props: Props) => {
  const pathname = usePathname();

  let breadcrumbs = "";
  const capitalizeStr = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, " ");
  };
  const crumbs = pathname
    .split("/")
    .filter((crumb) => crumb !== "" && !/^\d+$/.test(crumb))
    .map((crumb, index, array) => {
      breadcrumbs += `/${crumb}`;

      return (
        crumb !== "author" && (
          <Link
            href={breadcrumbs}
            key={crumb}
            className="flex items-center gap-1 capitalize"
          >
            {capitalizeStr(crumb)}
            {index + 1 !== array.length && <FaChevronRight size={12} />}
          </Link>
        )
      );
    });

  return (
    <nav className="absolute top-3 flex items-center gap-1 text-xs font-normal text-white">
      <Link
        href="/"
        className="flex items-center gap-1"
      >
        Homepage <FaChevronRight size={12} />
      </Link>
      {crumbs}
    </nav>
  );
};

export default Breadcrumbs;
