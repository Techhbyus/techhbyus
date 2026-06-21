"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../data";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredHref, setHoveredHref] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 920px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const pillHref = hoveredHref ?? pathname;

  return (
    <motion.header
      className="site-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="navbar" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="TechByus home" onClick={() => setIsMenuOpen(false)}>
          <motion.span className="brand-logo-wrap" whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
            <Image className="brand-logo" src="/assets/techbyus-logo.png" alt="TechByus logo" width={260} height={260} priority />
          </motion.span>
          <span>TechByus</span>
        </Link>

        <AnimatePresence initial={false}>
          {(!isMobile || isMenuOpen) && (
            <motion.div
              className={`nav-links ${isMenuOpen ? "open" : ""}`}
              id="primary-menu"
              onMouseLeave={() => setHoveredHref(null)}
              initial={isMobile ? { opacity: 0, y: -12 } : false}
              animate={isMobile ? { opacity: 1, y: 0 } : false}
              exit={isMobile ? { opacity: 0, y: -12 } : undefined}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              {navItems.map((item) => {
                const isCta = item.href === "/avail-service";
                const isActive = pathname === item.href;
                const showPill = !isCta && pillHref === item.href;
                const cls = [isActive ? "active" : "", isCta ? "nav-cta" : ""].filter(Boolean).join(" ");
                return (
                  <Link
                    key={item.href}
                    className={cls || undefined}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    onMouseEnter={() => setHoveredHref(item.href)}
                  >
                    {showPill && (
                      <motion.span
                        layoutId="nav-pill"
                        className="nav-pill"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}
                    <span className="nav-label">{item.label}</span>
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="nav-actions">
          <ThemeToggle />
          <button className="menu-toggle" type="button" aria-label="Open menu" aria-expanded={isMenuOpen} aria-controls="primary-menu" onClick={() => setIsMenuOpen((current) => !current)}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
