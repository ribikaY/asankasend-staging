"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, Smartphone, X } from "lucide-react";
import Link from "next/link";
import { handleDownloadClick } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = useCallback(() => setIsOpen(false), []);
    const openMenu = useCallback(() => setIsOpen(true), []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <header className="sticky w-full top-0 z-[50] bg-transparent">
            <div className="py-3 md:py-5">
                {/* Mobile Header */}
                <div className="container flex md:hidden justify-between items-center">
                    <Menu
                        size={20}
                        onClick={openMenu}
                        className="text-asanka-secondary cursor-pointer"
                    />

                    <ThemeSwitcher />
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                                onClick={closeMenu}
                            />

                            {/* Side Panel */}
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{
                                    type: "spring",
                                    damping: 22,
                                    stiffness: 220,
                                }}
                                className="fixed top-0 left-0 h-screen w-[85%] max-w-[340px] bg-background/95 backdrop-blur-2xl border-r border-border/50 z-50 px-6 py-6 flex flex-col"
                            >
                                <div className="flex items-center justify-between mb-10">
                                    <Image
                                        src="/images/logo/logo.svg"
                                        alt="Logo"
                                        width={130}
                                        height={40}
                                    />

                                    <button
                                        onClick={closeMenu}
                                        className="w-10 h-10 rounded-xl border border-border/40 flex items-center justify-center"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>

                                <nav className="flex flex-col gap-2">
                                    <Link onClick={closeMenu} href="/" className="text-lg px-4 py-2 w-full rounded-2xl hover:bg-muted">
                                        Home
                                    </Link>
                                    <Link onClick={closeMenu} href="#about" className="text-lg px-4 py-2 rounded-2xl hover:bg-muted">
                                        About
                                    </Link>
                                    <Link onClick={closeMenu} href="#contact" className="text-lg px-4 py-2 rounded-2xl hover:bg-muted">
                                        Contact
                                    </Link>
                                    <Link onClick={closeMenu} href="#features" className="text-lg px-4 py-2 rounded-2xl hover:bg-muted">
                                        Features
                                    </Link>
                                </nav>

                                <div className="mt-auto pt-8">
                                    <Button
                                        asChild
                                        className="w-full rounded-2xl bg-asanka-secondary py-6 text-base font-light"
                                    >
                                        <Link
                                            href="#how-it-works"
                                            onClick={(e) => {
                                                closeMenu();
                                                handleDownloadClick(e);
                                            }}
                                        >
                                            Download App
                                            <Smartphone size={17} />
                                        </Link>
                                    </Button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Desktop Header */}
                <div className="container hidden md:flex justify-between items-center">
                    <Image
                        src="/images/logo/logo.svg"
                        alt="Logo"
                        width={176}
                        height={50}
                    />

                    <div className="flex items-center gap-3.5">
                        <nav className="flex gap-6 text-foreground/70 mr-5">
                            <Link href="#about">About</Link>
                            <Link href="#contact">Contact</Link>
                            <Link href="#features">Features</Link>
                        </nav>

                        <Button asChild className="rounded-full bg-asanka-secondary py-5">
                            <Link href="#how-it-works" onClick={handleDownloadClick}>
                                Download <Smartphone size={16} />
                            </Link>
                        </Button>

                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;