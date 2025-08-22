import React, { useState, FormEvent } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { toast } from "react-toastify";

const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About us" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" }
];

const services = [
    { href: "#", label: "Auto repair" },
    { href: "#", label: "Maintenance" },
    { href: "#", label: "Diagnostics" },
    // { href: "#", label: "Tire services" }
];

const aboutLinks = [
    { href: "#", label: "Our story" },
    { href: "#", label: "Mission" },
    { href: "#", label: "Meet the Team" }
];

const socialLinks = [
    // { href: "#", Icon: FaFacebook, label: "Facebook" },
    { href: "https://www.instagram.com/agodizel/", Icon: FaInstagram, label: "Instagram" },
    // { href: "#", Icon: FaXTwitter, label: "Twitter" },
    { href: "https://wa.me/38970701269", Icon: FaWhatsapp, label: "WhatsApp" }
];

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setEmail(""); // Clear the form
        toast.success("👍 Submission successful!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    return (
        <footer className="bg-neutral-900 text-white">
            <div className="box-padding lg:space-y-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Contact Section */}
                    <div className="space-y-4">
                        <Image
                            src="/icon.png"
                            alt="AGO DIZEL icon"
                            width={40}
                            height={40}
                        />
                        <div className="space-y-2">
                            <p className="flex items-start gap-2">
                                <FaMapMarkerAlt className="mt-1" />
                                Hadzhi Mustafa 51, Ohrid 6000, Macedonia
                            </p>
                            <a href="mailto:agodizel@gmail.com" className="flex items-center gap-2">
                                <FaEnvelope />
                                agodizel@gmail.com
                            </a>
                            <a href="tel:+38970701269" className="flex items-center gap-2">
                                <FaPhone />
                                +389 70 701 269
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-xl mb-4 font-slab">
                            Quick Link
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="hover:text-accent duration-300 ease-in-out"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-bold text-xl mb-4 font-slab">
                            Services
                        </h3>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.href}
                                        className="hover:text-accent duration-300 ease-in-out"
                                    >
                                        {service.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About & Newsletter */}
                    <div>
                        <h3 className="font-bold text-xl font-slab mb-4">
                            About
                        </h3>
                        <ul className="space-y-2 mb-6">
                            {aboutLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="hover:text-accent duration-300 ease-in-out"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>


                {/* Social Media Icons */}
                <div className="flex gap-4 justify-end mt-8">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="text-2xl hover:text-accent transition-colors"
                        >
                            <social.Icon />
                        </a>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-4 flex flex-wrap justify-between items-center">
                    <p>© 2024 AGO DIZEL. All rights reserved</p>
                    <div className="flex gap-6">
                        <button>Terms of service</button>
                        <button>Cookies</button>
                        <button>Privacy Policy</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
