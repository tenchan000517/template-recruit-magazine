"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { company, contact, images, navigation } from "@/lib/site";

const navItems = navigation.main;
const ctaButton = navigation.cta;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* PC Header */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-[1000] h-20 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-header" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-full px-12 max-w-[1600px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={images.logo || "/images/logo.png"}
              alt={company.name || "採用サイト"}
              width={180}
              height={45}
              className={`transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* PC Navigation */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[15px] font-medium transition-colors duration-200 hover:opacity-70 ${
                  isScrolled ? "text-[var(--color-text-primary)]" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            {ctaButton.label && (
              <Link
                href={ctaButton.href}
                className={`px-6 py-3 text-sm font-semibold transition-all duration-200 ml-4 ${
                  isScrolled
                    ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-light)]"
                    : "bg-white text-[var(--color-primary)] hover:bg-white/90"
                }`}
              >
                {ctaButton.label}
              </Link>
            )}
          </nav>
        </div>
      </header>

      {/* SP Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-[1000] h-[60px] bg-white shadow-header">
        <div className="flex items-center justify-between h-full px-4">
          <Link href="/" className="flex items-center">
            <Image
              src={images.logo || "/images/logo.png"}
              alt={company.name || "採用サイト"}
              width={140}
              height={35}
            />
          </Link>

          <button
            className="w-11 h-11 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 w-6 h-0.5 bg-[var(--color-text-primary)] transition-all duration-300 ${
                  isMenuOpen ? "top-[11px] rotate-45" : "top-1"
                }`}
              />
              <span
                className={`absolute left-0 top-[11px] w-6 h-0.5 bg-[var(--color-text-primary)] transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-6 h-0.5 bg-[var(--color-text-primary)] transition-all duration-300 ${
                  isMenuOpen ? "top-[11px] -rotate-45" : "top-[19px]"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-[999] bg-black/50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <nav
        className={`lg:hidden fixed top-0 right-0 z-[999] w-[80vw] max-w-[300px] h-full bg-white transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="モバイルナビゲーション"
      >
        <div className="pt-16">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block h-14 leading-[56px] px-6 text-lg text-[var(--color-text-primary)] border-b border-gray-100 transition-colors hover:text-[var(--color-primary)]"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {ctaButton.label && (
            <div className="px-6 py-6">
              <Link
                href={ctaButton.href}
                className="block w-full h-12 leading-[48px] text-center bg-[var(--color-primary)] text-white font-semibold transition-colors hover:bg-[var(--color-primary-light)]"
                onClick={() => setIsMenuOpen(false)}
              >
                {ctaButton.label}
              </Link>
            </div>
          )}
          {contact.phone && (
            <div className="px-6 pt-4">
              <a
                href={`tel:${contact.phoneTel || contact.phone.replace(/-/g, "")}`}
                className="text-sm text-[var(--color-text-secondary)]"
              >
                TEL: {contact.phoneFormatted || contact.phone}
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
