"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFloatingBtn, setShowFloatingBtn] = useState(false);

  useEffect(() => {
    const heroEl = document.querySelector("main")?.closest(".relative.z-10");
    const footerEl = document.querySelector(
      "section.relative.w-full.overflow-hidden",
    );
    if (!heroEl && !footerEl) return;

    const visibleSections = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target);
          } else {
            visibleSections.delete(entry.target);
          }
        }
        setShowFloatingBtn(visibleSections.size === 0);
      },
      { threshold: 0.1 },
    );

    if (heroEl) observer.observe(heroEl);
    if (footerEl) observer.observe(footerEl);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false);
    },
    [],
  );

  const headerStyle =
    hasScrolled || menuOpen
      ? {
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        }
      : {
          backgroundColor: "transparent",
        };

  return (
    <>
      <header
        className="fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300"
        style={headerStyle}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={24} height={24} />
            <span
              className="text-lg font-bold text-slate-900"
              style={{
                fontFamily: "var(--font-bitcount-single)",
                fontSize: "18px",
                fontWeight: 700,
              }}
            >
              YourSaaS
            </span>
          </Link>

          {/* Nav Right - Desktop */}
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              მთავარი
            </Link>
            <Link
              href="/news"
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              სიახლეები
            </Link>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/cabinet"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-white"
                style={{
                  background:
                    "radial-gradient(80% 150% at 50% -20%, #818cf8 0%, #6366f1 100%)",
                  boxShadow:
                    "rgba(99, 102, 241, 0.3) 0px 2px 10px 0px",
                }}
              >
                პირადი კაბინეტი
              </Link>
            </motion.div>
          </div>

          {/* Hamburger - Mobile */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-transparent sm:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 stroke-slate-900/70"
              strokeWidth={1.5}
              fill="none"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="border-t px-4 pb-4 sm:hidden"
              style={{
                borderColor: "rgba(0, 0, 0, 0.08)",
                backgroundColor: "rgba(255, 255, 255, 0.6)",
                backdropFilter: "blur(16px) saturate(180%)",
                WebkitBackdropFilter: "blur(16px) saturate(180%)",
              }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/"
                className="block rounded-lg py-3 text-[15px] font-medium text-slate-900"
                onClick={() => setMenuOpen(false)}
              >
                მთავარი
              </Link>
              <Link
                href="/news"
                className="block rounded-lg py-3 text-[15px] font-medium text-slate-900"
                onClick={() => setMenuOpen(false)}
              >
                სიახლეები
              </Link>
              <Link
                href="/cabinet"
                className="block rounded-lg py-3 text-[15px] font-medium text-indigo-600"
                onClick={() => setMenuOpen(false)}
              >
                პირადი კაბინეტი
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile floating bottom button */}
      <AnimatePresence>
        {showFloatingBtn && (
          <motion.div
            className="fixed right-4 bottom-6 left-4 z-50 sm:hidden"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href="#pricing"
              onClick={(e) => scrollTo(e, "pricing")}
              className="block w-full rounded-2xl px-6 py-4 text-center text-base font-semibold"
              style={{
                color: "rgba(255, 255, 255, 0.95)",
                background:
                  "radial-gradient(80% 150% at 50% -20%, #3a3a3a 0%, #222222 100%)",
                boxShadow:
                  "rgba(0, 0, 0, 0.4) 0px 8px 24px 0px, rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset",
              }}
            >
              Get Started — $XX
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
