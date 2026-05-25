"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "../data";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="TechByus home" onClick={() => setIsMenuOpen(false)}>
          <Image className="brand-logo" src="/assets/techbyus-logo.png" alt="TechByus logo" width={260} height={260} priority />
          <span>TechByus</span>
        </Link>
        <button className="menu-toggle" type="button" aria-label="Open menu" aria-expanded={isMenuOpen} aria-controls="primary-menu" onClick={() => setIsMenuOpen((current) => !current)}>
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`} id="primary-menu">
          {navItems.map((item) => (
            <Link key={item.href} className={pathname === item.href ? "active" : ""} href={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
