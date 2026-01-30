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
                    pt-28 md:pt-32
                    text-white
                "
            >
                <span className="mb-3 text-xs sm:text-sm tracking-[0.4em] text-[#C7BEE6]">
                    KIET
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-wide leading-tight">
                    MODEL UNITED NATION 8.0
                </h1>

                <p className="mt-4 text-xs sm:text-sm tracking-[0.3em] text-[#C7BEE6]">
                    DEBATE • DIPLOMACY • DEVELOPMENT
                </p>

                {/* Desktop: Logo + Year split animation */}
                <div className="hidden md:flex items-center gap-16 my-14">
                    {/* Logo slides from left */}
                    <motion.div
                        initial={{ x: -120, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <Image
                            src="/log.png"
                            alt="KIET MUN Logo"
                            width={220}
                            height={220}
                            priority
                        />
                    </motion.div>

                    {/* Year slides from right */}
                    <motion.h2
                        initial={{ x: 120, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.1,
                        }}
                        className="text-6xl font-bold text-[#C7BEE6]"
                    >
                        2026
                    </motion.h2>
                </div>

                {/* Mobile: Big logo below heading */}
                <div className="md:hidden my-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.7,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                    >
                        <Image
                            src="/log.png"
                            alt="KIET MUN Logo"
                            width={260}
                            height={260}
                            priority
                        />
                    </motion.div>

                    <h2 className="mt-6 text-4xl font-bold text-[#C7BEE6]">
                        2026
                    </h2>
                </div>
            </div>

            {/* Bottom Building Image */}
            <Image
                src="/building.png"
                alt="KIET Building"
                width={600}
                height={400}
                priority
                className="
                    absolute bottom-0 left-1/2
                    -translate-x-1/2
                    z-20
                    grayscale
                    pointer-events-none
                    w-[260px] sm:w-[380px] md:w-[600px]
                "
            />
        </section>
    );
}
