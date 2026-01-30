"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function HeroContent(): React.ReactElement {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Navbar */}
            <Navbar />

            {/* Background Images */}
            <Image
                src="/test.svg"
                alt="Background Pattern"
                fill
                priority
                className="object-cover -z-20"
            />
            <Image
                src="/bg.jpeg"
                alt="Background Overlay"
                fill
                priority
                className="object-cover -z-30"
            />

            {/* Hero Content */}
            <div
                className="
                    relative z-10
                    min-h-screen
                    flex flex-col
                    items-center
                    text-center
                    px-6
                    pt-24 md:pt-25
                    text-white
                "
            >
                <span className="mb-3 text-xs sm:text-sm tracking-[0.4em] text-[#c7bee6] font-bold">
                    KIET
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide leading-tight">
                    MODEL UNITED NATION 8.0
                </h1>

                {/* Seamless Marquee Text Container - No Gap */}
                <div className="mt-4 w-[100px] sm:w-[400px] md:w-[300px] overflow-hidden relative mx-auto">
                    <div className="flex">
                        <motion.p
                            animate={{
                                x: ["0%", "-100%"],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className=" pr-3 ext-xs sm:text-sm tracking-[0.3em] text-[#c7bee6] whitespace-nowrap inline-block"
                        >
                            DEBATE.DIPLOMACY.DEVELOPMENT
                        </motion.p>
                        <motion.p
                            animate={{
                                x: ["0%", "-100%"],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="text-xs sm:text-sm tracking-[0.3em] text-[#c7bee6] whitespace-nowrap inline-block"
                        >
                              DEBATE.DIPLOMACY.DEVELOPMENT
                        </motion.p>
                    </div>
                </div>

                {/* Desktop: Logo + Year split animation */}
                <div className="hidden md:flex items-center gap-12 mt-8 mb-6">
                    {/* Logo slides from left */}
                    <motion.div
                        initial={{ x: -120, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="relative"
                    >
                        <div className="relative w-[200px] h-[200px]">
                            {/* Purple laurel wreath border */}
                            <div className="absolute inset-0 rounded-full" style={{
                                border: '8px solid #6e72b2',
                                boxShadow: '0 0 20px rgba(110, 114, 178, 0.3)'
                            }}></div>
                            <div className="absolute inset-2 flex items-center justify-center">
                                <Image
                                    src="/log.png"
                                    alt="KIET MUN Logo"
                                    width={140}
                                    height={140}
                                    priority
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Divider - Made Bold */}
                    <div className="w-[3px] h-32 bg-[#6e72b2]"></div>

                    {/* Year slides from right */}
                    <motion.div
                        initial={{ x: 120, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.1,
                        }}
                        className="text-left"
                    >
                        <h2 className="text-5xl font-bold text-[#c7bee6] leading-none">
                            KIET MUN
                        </h2>
                        <h2 className="text-7xl font-bold text-[#c7bee6] leading-none mt-2 ml-8">
                            2026
                        </h2>
                    </motion.div>
                </div>

                {/* Mobile: Logo and Year stacked */}
                <div className="md:hidden mt-10 mb-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.7,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="relative"
                    >
                        <div className="relative w-[160px] h-[160px] mx-auto">
                            {/* Purple laurel wreath border */}
                            <div className="absolute inset-0 rounded-full" style={{
                                border: '6px solid #6e72b2',
                                boxShadow: '0 0 15px rgba(110, 114, 178, 0.3)'
                            }}></div>
                            <div className="absolute inset-2 flex items-center justify-center">
                                <Image
                                    src="/log.png"
                                    alt="KIET MUN Logo"
                                    width={110}
                                    height={110}
                                    priority
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <div className="mt-6 text-center">
                        <h2 className="text-3xl font-bold text-[#c7bee6] leading-none">
                            KIET MUN
                        </h2>
                        <h2 className="text-4xl font-bold text-[#c7bee6] leading-none mt-2 ">
                            2026
                        </h2>
                    </div>
                </div>
            </div>

            {/* Bottom Building Image - Enhanced sizing and positioning */}
            <div
                className="
                    absolute bottom-0 left-1/2
                    -translate-x-1/2
                    z-20
                    w-[90%] max-w-[1000px]
                    h-[220px]
                    sm:h-[280px]
                    md:h-[950px]
                    lg:h-[700px]
                    pointer-events-none
                "
            >
                <Image
                    src="/builld.png"
                    alt="KIET Building"
                    fill
                    priority
                    className="object-contain object-bottom"
                    style={{ filter: 'grayscale(100%) brightness(0.85) contrast(1.1)' }}
                />
            </div>
        </section>
    );
}