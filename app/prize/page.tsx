"use client";

import { FaMedal, FaTrophy, FaAward, FaUsers, FaSchool } from "react-icons/fa";

interface Prize {
    title: string;
    amount: string;
    quote: string;
    icon: React.ReactElement;
}

export default function Prizes(): React.ReactElement {
    const prizeList: Prize[] = [
        {
            title: "Best Delegate",
            amount: "₹10,000",
            quote: "Leadership that inspires change.",
            icon: <FaTrophy className="text-[#C7BEE6] text-5xl" />,
        },
        {
            title: "High Commendation",
            amount: "₹5,000",
            quote: "Recognizing exceptional contribution.",
            icon: <FaMedal className="text-[#C7BEE6] text-5xl" />,
        },
        {
            title: "Special Mention",
            amount: "₹2,000",
            quote: "For dedication and impactful presence.",
            icon: <FaAward className="text-[#C7BEE6] text-5xl" />,
        },
        {
            title: "Best Delegation",
            amount: "₹2,000",
            quote: "Teamwork makes the dream work.",
            icon: <FaUsers className="text-[#C7BEE6] text-5xl" />,
        },
        {
            title: "Best School Delegation",
            amount: "₹2,000",
            quote: "Excellence in collective effort.",
            icon: <FaSchool className="text-[#C7BEE6] text-5xl" />,
        },
    ];

    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#0d0c2d] mb-12">
                    Prize Structure
                </h1>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {prizeList.slice(0, 4).map((prize) => (
                        <div
                            key={prize.title}
                            className="
                flex flex-col items-center
                bg-white
                border border-[#C7BEE6]/40
                rounded-2xl
                shadow-md hover:shadow-xl
                p-10
                transition duration-300 ease-in-out
              "
                        >
                            <div className="mb-5">{prize.icon}</div>

                            <h2 className="text-2xl md:text-3xl font-bold text-[#0d0c2d] mb-2">
                                {prize.title}
                            </h2>

                            <p className="text-2xl font-semibold text-[#0d0c2d]/80 mb-4">
                                {prize.amount}
                            </p>

                            <p className="text-[#0d0c2d]/70 italic">
                                {prize.quote}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Centered last prize */}
                <div className="flex justify-center mt-14">
                    <div
                        className="
              flex flex-col items-center
              bg-white
              border border-[#C7BEE6]/40
              rounded-2xl
              shadow-md hover:shadow-xl
              p-10
              transition duration-300 ease-in-out
              w-full md:w-1/2
            "
                    >
                        <div className="mb-5">{prizeList[4].icon}</div>

                        <h2 className="text-2xl md:text-3xl font-bold text-[#0d0c2d] mb-2">
                            {prizeList[4].title}
                        </h2>

                        <p className="text-2xl font-semibold text-[#0d0c2d]/80 mb-4">
                            {prizeList[4].amount}
                        </p>

                        <p className="text-[#0d0c2d]/70 italic">
                            {prizeList[4].quote}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
