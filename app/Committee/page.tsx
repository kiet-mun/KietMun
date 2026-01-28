"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

/* =======================
   Animation Variants
======================= */

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: "easeOut" },
    },
};

const zoomIn: Variants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

/* =======================
   Types
======================= */

type CommitteeAnimation = Variants;

interface CommitteeItem {
    name: string;
    img: string;
    agenda: string;
    animation: CommitteeAnimation;
}

/* =======================
   Data
======================= */

const committees: CommitteeItem[] = [
    {
        name: "UNGA-DISEC",
        img: "/UNGAC.jpg",
        agenda:
            "Deliberation on the illegal trade of conventional arms, with special emphasis on the effectiveness of international arms control agreements.",
        animation: fadeInLeft,
    },
    {
        name: "UNHRC",
        img: "/UNHRC.jpg",
        agenda:
            "Addressing human rights violations and their impact on civilians in the MENA region.",
        animation: fadeInRight,
    },
    {
        name: "UNEP",
        img: "/UNEP.jpeg",
        agenda:
            "Deliberation on reducing greenhouse gas emissions and transitioning to low-carbon economies.",
        animation: fadeInLeft,
    },
    {
        name: "AIPPM",
        img: "/AIPPM.avif",
        agenda:
            "Addressing challenges to secularism posed by political parties leveraging religion for electoral gains.",
        animation: fadeInRight,
    },
];

/* =======================
   Component
======================= */

export default function Committee(): React.ReactElement {
    return (
        <section className="w-full bg-[#f8f8f8] py-20 px-4 sm:px-8 lg:px-16">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-7xl mx-auto flex flex-col items-center"
            >
                {/* Heading */}
                <motion.h1
                    variants={fadeInUp}
                    className="text-4xl md:text-5xl font-extrabold text-[#0d0c2d] mb-16"
                >
                    Committees
                </motion.h1>

                {/* Committee Cards */}
                <div className="w-full flex flex-col gap-14">
                    {committees.map((committee, index) => (
                        <motion.div
                            key={committee.name}
                            variants={committee.animation}
                            className={`bg-white rounded-2xl shadow-md flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                                } items-center gap-10 p-8 md:p-12`}
                        >
                            {/* Logo */}
                            <motion.div
                                variants={zoomIn}
                                className="w-full md:w-1/4 flex justify-center"
                            >
                                <Image
                                    src={committee.img}
                                    alt={committee.name}
                                    width={260}
                                    height={260}
                                    className="rounded-full object-cover"
                                />
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                variants={fadeInUp}
                                className="w-full md:w-3/4 bg-[#f4f5fb] rounded-xl p-8 border border-[#C7BEE6]/50 text-center"
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-[#0d0c2d] mb-4">
                                    {committee.name}
                                </h2>

                                <p className="text-[#0d0c2d] text-lg leading-relaxed">
                                    <span className="font-semibold text-[#C7BEE6] text-xl">
                                        Agenda:
                                    </span>{" "}
                                    {committee.agenda}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
