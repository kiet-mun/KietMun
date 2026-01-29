"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Committee {
    name: string;
    image: string;
    position: string;
}

const committees: Committee[] = [
    {
        name: "AIPPM",
        image: "/committees/aippm.png",
        position: "top-0 left-10",
    },
    {
        name: "UNCSW",
        image: "/committees/uncsw.png",
        position: "top-0 right-10",
    },
    {
        name: "UNHRC",
        image: "/committees/unhrc.png",
        position: "bottom-5 left-10",
    },
    {
        name: "UNGA-DISEC",
        image: "/committees/unga.png",
        position: "bottom-5 right-10",
    },
];

export default function CommitteesPage(): React.ReactElement {
    return (
        <section className="w-full bg-white px-4 py-24 overflow-x-hidden">
            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#062045] mb-2 text-center">
                Committees
            </h2>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-[#062045]/60 mb-14 text-center tracking-wide">
                DEBATE. DIPLOMACY. DEVELOPMENT.
            </p>

            {/* ================= MOBILE & TABLET (LIST VIEW, NO LOGO, NO ANIMATION) ================= */}
            <div className="lg:hidden max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">
                {committees.map((committee) => (
                    <div
                        key={committee.name}
                        className="
                            flex flex-col items-center
                            border border-[#C7BEE6]/40
                            rounded-2xl
                            p-8
                            shadow-sm
                        "
                    >
                        <div className="relative w-36 h-36 rounded-full overflow-hidden mb-4">
                            <Image
                                src={committee.image}
                                alt={committee.name}
                                fill
                                className="object-cover"
                                sizes="144px"
                                quality={70}
                            />
                        </div>

                        <span className="text-lg font-semibold text-[#062045]">
                            {committee.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* ================= DESKTOP (FREE LAYOUT + CENTER LOGO) ================= */}
            <div className="hidden lg:block relative w-full max-w-5xl mx-auto h-[560px]">
                {/* Center KIET Logo – DESKTOP ONLY */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="
                        absolute
                        top-1/2 left-1/2
                        -translate-x-1/2 -translate-y-1/2
                        w-64 h-64
                        bg-no-repeat bg-center bg-contain
                        z-[5]
                        pointer-events-none
                    "
                    style={{ backgroundImage: "url('/committees/Blo.png')" }}
                />

                {/* Committee Items */}
                {committees.map((committee, index) => (
                    <motion.div
                        key={committee.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: index * 0.15,
                            duration: 0.6,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className={`
                            absolute ${committee.position}
                            flex flex-col items-center
                        `}
                    >
                        <div
                            className="
                                relative
                                w-56 h-56
                                rounded-full overflow-hidden
                                shadow-[0px_12px_45px_rgba(0,0,0,0.35)]
                                transition-transform duration-300
                                hover:scale-110
                            "
                        >
                            <Image
                                src={committee.image}
                                alt={committee.name}
                                fill
                                className="object-cover"
                                sizes="224px"
                                quality={70}
                            />
                        </div>

                        <span className="mt-4 text-xl font-semibold text-[#062045]">
                            {committee.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
