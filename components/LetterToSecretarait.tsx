"use client";

import { motion } from "framer-motion";

export default function LetterFromSecretariat() {
    return (
        <section className="bg-white py-24 px-6 md:px-20 flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="
          max-w-4xl w-full
          bg-white
          border-t-8 border-[#6f67b8]
          rounded-xl
          p-10 md:p-14
          shadow-lg hover:shadow-xl
          transition-shadow duration-300
        "
            >
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="
            text-center
            text-4xl md:text-5xl
            font-extrabold
            text-[#0d0c2d]
            mb-10
          "
                >
                    Letter from the Secretariat
                </motion.h2>

                {/* Content */}
                <div className="space-y-8 text-[17px] md:text-lg leading-relaxed text-[#0d0c2d]">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="font-medium"
                    >
                        Dear Delegates and Faculty Advisors,
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Bringing the world’s citizens together on a platform where disputes
                        may be settled through involvement, communication, and understanding
                        is urgently needed. Through MUNs, students learn about diplomacy,
                        international relations, and the United Nations. It enhances research,
                        public speaking, and debating skills, along with critical thinking,
                        leadership abilities, and effective conflict resolution.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        We’ve always welcomed opportunities that broaden the perspectives of
                        our young, dynamic leaders beyond rote memorization and encourage them
                        to explore the uncharted waters of international politics and
                        policymaking. With this thought in mind, we welcome you to{" "}
                        <span className="font-semibold text-[#6f67b8]">
                            KIET MUN 2025
                        </span>{" "}
                        and its engaging and stimulating sessions ahead.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Let the debates inspire new perspectives, foster diplomatic dialogue,
                        and build bridges of collaboration. We are certain that each one of
                        you will leave with enriched experiences and a deeper understanding
                        of the complexities of our global society.
                    </motion.p>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12 border-t border-[#6f67b8]/50 pt-6"
                >
                    <p className="text-[#0d0c2d]">Warm regards,</p>

                    <p className="mt-2 text-xl font-semibold text-[#6f67b8]">
                        The Secretariat
                    </p>

                    <p className="text-[#0d0c2d]/80">
                        KIET Model United Nations 2025
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
