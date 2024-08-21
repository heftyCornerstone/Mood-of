"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function navLinks() {
  const currentPathname = usePathname();
  
  const paths = {
    home: "/mood-of",
    write: "/mood-of/write-a-log",
    read: "/mood-of/read-my-logs",
    calendar: "/mood-of/calendar",
    report: "/mood-of/journal-report",
  };
  const inNav = Object.entries(paths).map((c)=>{
    if (c[1] === currentPathname) return;
    return (
      <div key={c[0]} style={{display:'inline-block', margin:'0 5px'}}>
      <Link href={c[1]}>
        {c[0]}
      </Link></div>
    );
  })

  return inNav;
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
