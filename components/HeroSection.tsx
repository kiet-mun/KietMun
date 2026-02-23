"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";

export default function HeroContent(): React.ReactElement {
    const router = useRouter();

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const fadeIn: Variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <section
            className="relative w-full overflow-hidden"
            style={{ height: "100vh" }}
        >
            <Navbar />

            {/* Background layers */}
            <Image src="/test.svg" alt="Background Pattern" fill priority className="object-cover -z-20" />
            <Image src="/bg.jpeg" alt="Background Overlay" fill priority className="object-cover -z-30" />

            {/* Gradient overlays */}
            <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-b from-[#0d0c2d]/60 via-transparent to-[#0d0c2d]/95" />
            <div className="absolute inset-0 -z-10 pointer-events-none bg-gradient-to-r from-[#0d0c2d]/30 to-transparent" />

            {/* ── Hero Text ──
                - paddingTop  : clears navbar
                - paddingBottom: = building height (55vh) so text sits above it  */}
            <div
                className="relative z-10 flex flex-col items-center text-center text-white px-4"
                style={{
                    paddingTop: "clamp(80px, 9vh, 120px)",
                    paddingBottom: "55vh",
                }}
            >
                {/* Logo + KIET */}
                <div className="flex flex-row items-center justify-center gap-3 md:gap-5 mt-5 mb-3">
                    <div
                        className="relative flex-shrink-0"
                        style={{
                            width:  "clamp(60px, 8vw, 130px)",
                            height: "clamp(60px, 8vw, 130px)",
                        }}
                    >
                        <Image src="/log.png" alt="KIET MUN Logo" fill priority className="object-contain drop-shadow-2xl" />
                    </div>

                    <motion.span
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        style={{ fontSize: "clamp(24px, 4vw, 66px)", letterSpacing: "0.28em" }}
                        className="text-[#c7bee6] font-bold uppercase"
                    >
                        KIET
                    </motion.span>
                </div>

                {/* Title */}
                <motion.h1
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    style={{
                        fontSize: "clamp(18px, 4.8vw, 78px)",
                        letterSpacing: "0.03em",
                        lineHeight: 1.1,
                        whiteSpace: "nowrap",
                    }}
                    className="font-extrabold text-white drop-shadow-lg"
                >
                    MODEL UNITED NATIONS 8.0
                </motion.h1>

                {/* Marquee */}
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-2 overflow-hidden w-full"
                    style={{ maxWidth: "clamp(240px, 46vw, 560px)" }}
                >
                    <motion.div
                        animate={{ x: ["-100%", "60%"] }}
                        transition={{ duration: 19, repeat: Infinity, ease: "linear", repeatType: "loop" }}
                        className="flex whitespace-nowrap"
                    >
                        {[...Array(4)].map((_, i) => (
                            <span
                                key={i}
                                style={{ fontSize: "clamp(10px, 1.1vw, 16px)", letterSpacing: "0.28em" }}
                                className="text-white/80 font-medium inline-block px-4 uppercase"
                            >
                                DEBATE . DISCUSSION . DIPLOMACY 
                            </span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Date */}
                <motion.h2
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                    style={{ fontSize: "clamp(15px, 2.4vw, 38px)" }}
                    className="mt-2 font-bold text-[#c7bee6] drop-shadow-md"
                >
                    28-29 March&apos;26
                </motion.h2>

                {/* Register Button */}
                <motion.button
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                    onClick={() => router.push("/register")}
                    className="mt-6 md:hidden rounded-full bg-white px-8 py-3 text-sm font-bold text-[#0d0c2d] hover:bg-[#c7bee6] transition-colors duration-300 shadow-lg"
                >
                    Register
                </motion.button>
            </div>

           
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
                style={{
                    width: "min(140%, 1400px)",
                    height: "101vh",
                }}
            >
                <Image
                    src="/builld.png"
                    alt="KIET Building"
                    fill
                    priority
                    className="object-contain object-bottom"
                    style={{
                        filter: "grayscale(100%) brightness(0.85) contrast(1.1)",
                    }}
                />
            </div>
        </section>
    );
}