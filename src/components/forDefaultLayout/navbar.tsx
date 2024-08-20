"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function navLinks() {
  const currentPathname = usePathname();
  const paths = [
    "/",
    "/write-a-log",
    "/read-my-logs",
    "/calendar",
    "/journal-report",
  ];
  const inNav = paths.map((c) => {
    if (c === currentPathname) return;
    return <Link href={c} key={c}>{c}</Link>;
  });
  return(inNav)
}

export default function Navbar() {

  return (
    <div className="nav">
      <button>nav</button>
      <button>my account</button>
      {navLinks()}
    </div>
  );
}
