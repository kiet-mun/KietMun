"use client";

import Image from "next/image";
import Navbar from "./Navbar";

export default function HeroContent() {
    return (
        <div>
            
            <div className="relative min-h-screen overflow-hidden">
                <div className="mt-24 flex flex-col items-center text-center text-white">
                <span className="mb-3 text-sm tracking-[0.4em] text-[#C7BEE6]">
                    KIET
                </span>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
                    MODEL UNITED NATION 8.0
                </h1>

                <p className="mt-4 text-sm tracking-[0.3em] text-[#C7BEE6]">
                    DEBATE • DIPLOMACY • DEVELOPMENT
                </p>

                {/* Divider */}
                <div className="my-10 flex items-center gap-6">
                    <div className="h-px w-32 bg-[#C7BEE6]/40" />
                    <span className="text-[#C7BEE6] text-sm tracking-widest">
                        KIET MUN
                    </span>
                    <div className="h-px w-32 bg-[#C7BEE6]/40" />
                </div>

                <h2 className="text-5xl md:text-6xl font-bold text-[#C7BEE6]">
                    2026
                </h2>
            </div>
                {/* SVG Background */}
                <Image
                    src="/test.svg"
                    alt="Background"
                    fill
                    priority
                    className="object-cover -z-10"
                />
                <Image
                    src="/bg.jpeg"
                    alt="Background Overlay"
                    fill
                    priority
                    className="object-cover -z-20 "
                />

                {/* Content */}
                <div className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-[#0d0c2d]/80">
                    <Navbar />
                </div>


                <div className="relative z-10 pt-20">


                </div>
                <Image
                    src="/building.png"
                    alt="Building"
                    width={600}
                    height={400}
                    priority
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 grayscale pointer-events-none"
                />
            </div>
        </div>
    );
}
