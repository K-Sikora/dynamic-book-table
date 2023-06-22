"use client";
import { FaChevronRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
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
    <nav className="max-w-6xl w-full mx-auto flex flex-wrap items-center gap-1 text-sm font-medium text-white">
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
