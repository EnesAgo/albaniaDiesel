import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    const navItems: { name: string; href: string }[] = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" },
    ];
    // Sticky Header
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setSticky(true);
                if (isOpen) {
                    setSticky(false);
                }
            } else {
                setSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isOpen]);
    return (
        <header
            className={`px-6 md:px-8 lg:px-12 py-4 md:py-6 flex items-center justify-between border-b border-gray-200 ${
                sticky && "header-effect border-none"
            }`}
        >
            {/* Logo and Icon */}
            <div
                className="flex items-center gap-4 cursor-pointer"
            >
                <Image
                    src="/Logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                    className="w-auto h-auto"
                />
                <h2 className="font-slab font-bold text-xl">ALBANIA DIZEL</h2>
            </div>
            {/* Menu Icons */}
            <div className="md:hidden">
                {isOpen ? (
                    <RxCross2
                        className="w-6 h-6 text-gray-600"
                        onClick={() => setIsOpen(false)}
                    />
                ) : (
                    <IoMenuOutline
                        className="w-6 h-6 text-gray-600"
                        onClick={() => setIsOpen(true)}
                    />
                )}
            </div>
            {/* Navigation */}
            <AnimatePresence>
                <div
                    key="overlay"
                    className={`fixed inset-0 min-h-screen w-full bg-black/50 transition-opacity duration-300 z-40 ${
                        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    onClick={() => setIsOpen(false)}
                ></div>
                {isOpen ? (
                    <motion.nav
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        key="mobile-nav"
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed top-0 right-0 min-h-screen w-[60%] bg-white shadow-2xl md:hidden z-90"
                    >
                        <RxCross2
                            className="w-6 h-6 text-gray-600 absolute top-4 right-4 m-3"
                            onClick={() => setIsOpen(false)}
                        />
                        <div className="px-6 py-10">
                            <ul className="flex flex-col gap-6">
                                {navItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="font-medium hover:text-accent duration-500 ease-in-out block"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.nav>
                ) : (
                    <nav key="desktop-nav" className={`hidden md:block`}>
                        <ul className={`flex items-center xl:gap-10 gap-8`}>
                            {navItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a
                                            href={item.href}
                                            className="font-medium hover:text-accent duration-500 ease-in-out"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
