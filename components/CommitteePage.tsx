"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactHTMLElement } from "react";

/* ================= TYPES ================= */

type Direction = "left" | "right";

interface Committee {
    name: string;
    image: string;
    position: string;
    direction: Direction;
}

/* ================= DATA ================= */

const committees: Committee[] = [
    {
        name: "AIPPM",
        image: "/aippm.png",
        position: "top-0 left-10",
        direction: "left",
    },
    {
        name: "UNEP",
        image: "/unep.png",
        position: "top-0 right-10",
        direction: "right",
    },
    {
        name: "UNHRC",
        image: "/unhrc.png",
        position: "bottom-5 left-10",
        direction: "left",
    },
    {
        name: "UNGA-DISEC",
        image: "/unga.png",
        position: "bottom-5 right-10",
        direction: "right",
    },
];

/* ================= COMPONENT ================= */

export default function CommitteesPage(): React.ReactElement {
    return (
        <section className="w-screen min-h-screen flex flex-col items-center justify-center px-4 py-24 relative overflow-hidden bg-[#0d0c2d]">

            {/* Background Logo */}
            <motion.div
                initial={{ opacity: 0, y: -120 }}
                whileInView={{ opacity: 0.15, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className="absolute w-80 h-80 bg-no-repeat bg-center bg-contain"
                style={{ backgroundImage: "url('/Blo.png')" }}
            />

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-3xl sm:text-5xl font-extrabold text-white mb-2 text-center z-10"
            >
                Committees
            </motion.h2>

            {/* Subheading */}
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base text-[#C7BEE6] mb-14 tracking-widest z-10"
            >
                DEBATE • DIPLOMACY • DEVELOPMENT
            </motion.p>

            {/* Committees Layout */}
            <div className="relative w-full max-w-4xl lg:h-[520px] flex flex-col lg:block items-center z-10 gap-10">

                {committees.map((committee, index) => (
                    <motion.div
                        key={committee.name}
                        initial={{
                            opacity: 0,
                            x: committee.direction === "left" ? -120 : 120,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: index * 0.2,
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className={`flex flex-col items-center 
              transition-transform hover:scale-110 
              ${index === 0 ? "mt-0" : "mt-6"} 
              lg:absolute ${committee.position}`}
                    >
                        <div className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden shadow-[0_8px_40px_rgba(199,190,230,0.35)] hover:shadow-[0_12px_55px_rgba(199,190,230,0.55)] transition-all duration-500">
                            <Image
                                src={committee.image}
                                alt={committee.name}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <span className="mt-4 text-sm sm:text-lg font-semibold text-white tracking-wide text-center">
                            {committee.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
