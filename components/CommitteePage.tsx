"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const committees = [
  {
    name: "AIPPM",
    image: "/committees/aippm.png",
    position: "top-0 left-10",
    direction: "left",
  },
  {
    name: "UNEP",
    image: "/committees/uncsw.png",
    position: "top-0 right-10",
    direction: "right",
  },
  {
    name: "UNHRC",
    image: "/committees/unhrc.png",
    position: "bottom-5 left-10",
    direction: "left",
  },
  {
    name: "UNGA-DISEC",
    image: "/committees/unga.png",
    position: "bottom-5 right-10",
    direction: "right",
  },
];

export default function CommitteesPage() {
  return (
    <div className="w-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden bg-white">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl sm:text-5xl font-extrabold text-[#062045] mb-2 text-center z-10"
      >
        Committees
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-sm sm:text-base text-gray-600 mb-12 text-center tracking-wide z-10"
      >
        DEBATE. DIPLOMACY. DEVELOPMENT.
      </motion.p>

      {/* Committees Layout */}
      <div className="relative w-full max-w-4xl lg:h-[500px] flex flex-col lg:block items-center z-10 gap-8">

        {/* 🔹 CENTER EMBLEM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.18, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            absolute
            top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            w-56 h-56
            bg-no-repeat bg-center bg-contain
            z-[5]
            pointer-events-none
          "
          style={{ backgroundImage: "url('/committee/Blo.png')" }}
        />

        {/* 🔹 COMMITTEE ITEMS */}
        {committees.map((committee, index) => (
          <motion.div
            key={committee.name}
            initial={{ opacity: 0, x: committee.direction === "left" ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col items-center transition-transform hover:scale-110 
              mt-6 lg:mt-0
              lg:absolute ${committee.position}`}
          >
            {/* Committee Image */}
            <div
              className="
                relative
                w-32 h-32 sm:w-48 sm:h-48
                rounded-full
                overflow-hidden
                shadow-[0px_8px_40px_rgba(0,0,0,0.4)]
                hover:shadow-[0px_12px_50px_rgba(0,0,0,0.6)]
                transition-all duration-500 ease-in-out
              "
            >
              <Image
                src={committee.image}
                alt={committee.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 128px, 192px"
                priority={index < 2}
              />
            </div>

            {/* Committee Name */}
            <span className="mt-3 text-sm sm:text-lg font-semibold text-[#062045] text-center">
              {committee.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
