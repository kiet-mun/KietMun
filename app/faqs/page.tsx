"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* ================= TYPES ================= */

interface FAQItem {
    question: string;
    answer: string;
}

/* ================= DATA ================= */

const faqData: FAQItem[] = [
    {
        question: "What is Model United Nations?",
        answer:
            "Model United Nations (MUN) is a simulation where students act as UN delegates, debating global issues and developing diplomatic skills.",
    },
    {
        question: "I am a first-time MUN participant. What should I expect?",
        answer:
            "Expect an intellectual challenge—research your country’s stance, participate actively in debates, and collaborate to propose solutions.",
    },
    {
        question: "Is attendance taken in committee sessions?",
        answer:
            "Yes, attendance is mandatory, and action may be taken against absentees.",
    },
    {
        question:
            "The agenda of my committee isn’t relevant to my assigned nation. Does this mean I won’t be part of the debate?",
        answer:
            "No, all delegates are encouraged to participate—integrate your country’s general policies into the debate creatively.",
    },
    {
        question: "Do I get a participation certificate for attending the KIET MUN?",
        answer:
            "Yes, all participants will receive a certificate of participation.",
    },
    {
        question: "What committees are being simulated at KIET MUN?",
        answer:
            "UNGA, UNHRC, UNEP, AIPPM, along with the International Press.",
    },
    {
        question: "Do I need prior MUN experience to participate?",
        answer:
            "No, KIET MUN is open to all students, regardless of prior experience.",
    },
    {
        question: "What will be the dress code for the event?",
        answer:
            "Both traditional and western attire are permitted. Further details will be shared by the organizing team.",
    },
    {
        question: "What is a position paper?",
        answer:
            "A position paper outlines your country’s stance on the agenda. One is required for each topic in your committee.",
    },
    {
        question: "What is caucusing?",
        answer:
            "Caucusing is an informal debate—either moderated or unmoderated—where delegates collaborate to build consensus.",
    },
];

/* ================= COMPONENT ================= */

export default function FAQPage(): React.ReactElement {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (hoverIndex !== null) {
            timer = setTimeout(() => setOpenIndex(hoverIndex), 250);
        }
        return () => timer && clearTimeout(timer);
    }, [hoverIndex]);

    return (
        <section className="min-h-screen w-full bg-white px-4 py-24 flex justify-center">
            <div className="w-full max-w-4xl">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d0c2d]">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-4 text-[#0d0c2d]/70">
                        Everything you need to know before the conference
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-6">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={item.question}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="
                border border-[#C7BEE6]/40
                rounded-xl
                overflow-hidden
                bg-white
                shadow-sm
                hover:shadow-md
                transition
              "
                        >
                            {/* Question */}
                            <button
                                className={`
                  w-full flex justify-between items-center
                  px-6 py-5 text-left
                  transition-colors
                  ${openIndex === index
                                        ? "bg-[#C7BEE6]/20"
                                        : "hover:bg-[#C7BEE6]/10"
                                    }
                `}
                                onClick={() =>
                                    setOpenIndex(openIndex === index ? null : index)
                                }
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                            >
                                <h2 className="text-base md:text-lg font-medium text-[#0d0c2d]">
                                    {item.question}
                                </h2>
                                <span
                                    className={`
                    ml-4 text-lg
                    text-[#0d0c2d]/70
                    transition-transform
                    ${openIndex === index ? "rotate-180" : ""}
                  `}
                                >
                                    ▼
                                </span>
                            </button>

                            {/* Answer */}
                            {openIndex === index && (
                                <div className="px-6 py-4 text-[#0d0c2d]/80 leading-relaxed">
                                    {item.answer}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
