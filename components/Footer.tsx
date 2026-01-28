"use client";
import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#0d0c2d] text-white py-10 px-6 md:px-16">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">

                {/* Explore Section */}
                <div>
                    <h3 className="text-lg font-semibold text-[#C7BEE6] mb-3">
                        Explore
                    </h3>
                    <ul className="text-sm space-y-2">
                        <li>
                            <a href="/Committee" className="hover:text-[#C7BEE6] transition">
                                Committees
                            </a>
                        </li>
                        <li>
                            <a href="/Prizes" className="hover:text-[#C7BEE6] transition">
                                Prizes
                            </a>
                        </li>
                        <li>
                            <a href="/gallery" className="hover:text-[#C7BEE6] transition">
                                Gallery
                            </a>
                        </li>
                        <li>
                            <a href="/faqs" className="hover:text-[#C7BEE6] transition">
                                FAQs
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-lg font-semibold text-[#C7BEE6] mb-3">
                        Contact Us
                    </h3>
                    <p className="text-sm text-white/80">
                        📍 KIET Group of Institutions, Ghaziabad
                    </p>
                    <p className="text-sm mt-2">
                        📧{" "}
                        <a
                            href="mailto:kietmun@kiet.edu"
                            className="hover:text-[#C7BEE6] transition"
                        >
                            kietmun@kiet.edu
                        </a>
                    </p>
                    <p className="text-sm mt-2">
                        📞{" "}
                        <a
                            href="tel:+918303220540"
                            className="hover:text-[#C7BEE6] transition"
                        >
                            +91 8303220540
                        </a>
                    </p>
                    <p className="text-sm mt-2">
                        📞{" "}
                        <a
                            href="tel:+917017712755"
                            className="hover:text-[#C7BEE6] transition"
                        >
                            +91 7017712755
                        </a>
                    </p>
                </div>

                {/* Socials */}
                <div className="flex flex-col items-center md:items-end">
                    <h3 className="text-lg font-semibold text-[#C7BEE6] mb-3">
                        Follow Us
                    </h3>
                    <div className="flex space-x-4 text-2xl text-white/90">
                        <a
                            href="https://www.instagram.com/kiet_mun"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#C7BEE6] transition"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/kiet-mun-society/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#C7BEE6] transition"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://www.facebook.com/share/1Y6C8EN5pW/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#C7BEE6] transition"
                        >
                            <FaFacebook />
                        </a>
                    </div>

                    {/* Register Button */}
                    <a href="/register" className="mt-6">
                        <button className="
              bg-[#C7BEE6] text-[#0d0c2d]
              px-6 py-2.5 rounded-lg
              text-sm font-semibold
              hover:bg-[#b9aedf]
              transition
            ">
                            Register
                        </button>
                    </a>
                </div>
            </div>

            {/* Divider */}
            <div className="mt-10 border-t border-[#C7BEE6]/30 pt-6 text-center">
                <p className="text-xs text-white/60">
                    © 2025 KIET MUN. All Rights Reserved.
                </p>
                <p className="text-sm text-white/70 mt-2">
                    Made with ❤️ by
                    <a
                        href="/Team"
                        className="text-[#C7BEE6] hover:underline ml-1"
                    >
                        KIET MUN Tech Team
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
