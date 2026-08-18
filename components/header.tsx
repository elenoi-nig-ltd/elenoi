"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/businesses", label: "Our businesses" },
  { href: "/#purpose", label: "Our purpose" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/#purpose") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="ELENOI home">
          <span className="brand__mark" aria-hidden="true">
            <i />
            <i />
          </span>
          <span>
            <strong>ELENOI</strong>
            <small>NIG. LTD</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map((link) => (
            <Link className={isActive(link.href) ? "is-active" : undefined} href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="/contact">
          Partner with us <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <ThemeToggle />

        <button
          className="mobile-nav__trigger"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
        {menuOpen && <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link className={isActive(link.href) ? "is-active" : undefined} href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>}
      </div>
    </header>
  );
}
