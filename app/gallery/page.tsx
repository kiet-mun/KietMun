"use client";

import Image from "next/image";
import { motion } from "framer-motion";

/* ================= TYPES ================= */

interface GalleryImage {
    src: string;
    alt: string;
}

/* ================= DATA ================= */

const images: GalleryImage[] = [
    { src: "/DSC00522.JPG", alt: "Gallery image 1" },
    { src: "/DSC00533.JPG", alt: "Gallery image 2" },
    { src: "/DSC00540.JPG", alt: "Gallery image 3" },
    { src: "/DSC00543.JPG", alt: "Gallery image 4" },
    { src: "/IMG_0094.JPG", alt: "Gallery image 5" },
    { src: "/IMG_0096.JPG", alt: "Gallery image 6" },
    { src: "/Group.jpeg", alt: "Gallery image 7" },
    { src: "/IMG_091.JPG", alt: "Gallery image 8" },
    { src: "/IMG_093.JPG", alt: "Gallery image 9" },
    { src: "/IMG_092.JPG", alt: "Gallery image 10" },
    { src: "/IMG_10.JPG", alt: "Gallery image 11" },
    { src: "/IMG_11.JPG", alt: "Gallery image 12" },
    { src: "/IMG_0181.JPG", alt: "Gallery image 13" },
    { src: "/IMG_0142.JPG", alt: "Gallery image 14" },
    { src: "/IMG_12.JPG", alt: "Gallery image 15" },
    { src: "/IMG_0166.JPG", alt: "Gallery image 16" },
    { src: "/IMG_14.JPG", alt: "Gallery image 17" },
    { src: "/IMG_18.JPG", alt: "Gallery image 18" },
    { src: "/IMG_19.JPG", alt: "Gallery image 19" },
    { src: "/IMG_M.jpeg", alt: "Gallery image 20" },
    { src: "/IMG_20.jpeg", alt: "Gallery image 21" },
    { src: "/IMG_21.JPG", alt: "Gallery image 22" },
    { src: "/IMG_21.jpeg", alt: "Gallery image 23" },
    { src: "/IMG_22.jpeg", alt: "Gallery image 24" },
    { src: "/IMG_23.jpeg", alt: "Gallery image 25" },
    { src: "/IMG_24.jpeg", alt: "Gallery image 26" },
    { src: "/IMG_25.jpeg", alt: "Gallery image 27" },
    { src: "/IMG_27.jpeg", alt: "Gallery image 28" },
    { src: "/IMG_28.jpeg", alt: "Gallery image 29" },
    { src: "/IMG_29.jpeg", alt: "Gallery image 30" },
    { src: "/IMG_30.jpeg", alt: "Gallery image 31" },
    { src: "/IMG_31.jpeg", alt: "Gallery image 32" },
    { src: "/IMG_32.jpeg", alt: "Gallery image 33" },
    { src: "/IMG_33.jpeg", alt: "Gallery image 34" },
    { src: "/IMG_34.jpeg", alt: "Gallery image 35" },
    { src: "/IMG_35.jpeg", alt: "Gallery image 36" },
    { src: "/IMG_37.jpg", alt: "Gallery image 37" },
];

/* ================= COMPONENT ================= */

export default function Gallery(): React.ReactElement {
    const renderMobile = (): React.ReactElement[] =>
        images.map((image, index) => (
            <motion.div
                key={`mobile-${index}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="block md:hidden mb-4"
            >
                <div className="relative h-48 rounded-xl overflow-hidden shadow-[0_6px_30px_rgba(13,12,45,0.25)]">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        quality={70}
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>
            </motion.div>
        ));

    const renderDesktop = (): React.ReactElement[] => {
        const rows: React.ReactElement[] = [];
        let i = 0;

        while (i < images.length) {
            rows.push(
                <motion.div
                    key={`row-${i}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="hidden md:flex w-full gap-4 mb-4"
                >
                    {[0, 1, 2].map((offset) => {
                        const img = images[i + offset];
                        if (!img) return null;

                        return (
                            <div
                                key={offset}
                                className="relative h-96 flex-1 rounded-xl overflow-hidden shadow-[0_6px_30px_rgba(13,12,45,0.25)]"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    quality={70}
                                    sizes="(min-width: 768px) 33vw"
                                    className="object-cover"
                                />
                            </div>
                        );
                    })}
                </motion.div>
            );

            i += 3;
        }

        return rows;
    };

    return (
        <section className="min-h-screen w-full bg-white px-6 py-28">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold text-[#0d0c2d] text-center mb-16"
            >
                Photo Gallery
            </motion.h1>

            <div className="w-full max-w-7xl mx-auto">
                {renderMobile()}
                {renderDesktop()}
            </div>
        </section>
    );
}
