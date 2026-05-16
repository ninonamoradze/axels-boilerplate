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
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ backgroundColor: "#1a3d2b" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a8d5b5" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span
              className="text-lg font-bold"
              style={{ color: "#1a3d2b", fontFamily: "var(--font-bitcount-single)" }}
            >
              არსი
            </span>
          </Link>

          {/* Nav Right - Desktop */}
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-[#1a3d2b]"
              style={{ color: "#6b8f78" }}
            >
              მთავარი
            </Link>
            <Link
              href="/news"
              className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-[#1a3d2b]"
              style={{ color: "#6b8f78" }}
            >
              სიახლეები
            </Link>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/cabinet"
                className="block rounded-lg px-4 py-2 text-sm font-semibold text-white"
                style={{
                  backgroundColor: "#1a3d2b",
                  boxShadow: "0 2px 8px rgba(26,61,43,0.25)",
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
                className="block rounded-lg py-3 text-[15px] font-medium"
                style={{ color: "#1a3d2b" }}
                onClick={() => setMenuOpen(false)}
              >
                მთავარი
              </Link>
              <Link
                href="/news"
                className="block rounded-lg py-3 text-[15px] font-medium"
                style={{ color: "#1a3d2b" }}
                onClick={() => setMenuOpen(false)}
              >
                სიახლეები
              </Link>
              <Link
                href="/cabinet"
                className="block rounded-lg py-3 text-[15px] font-semibold"
                style={{ color: "#2d6a4f" }}
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
