"use client";

import SectionContainer from "@/lib/Wrapper/SectionContainer";
import Image from "next/image";
import { motion } from "framer-motion";

export const DUMMY_CARDS = [
  {
    id: 1,
    name: "dummy-card-1",
    title: "AI Task Manager",
    description:
      "A smart productivity dashboard that automatically organizes your tasks and schedules using AI.",
    img: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9",
    button1: "Live Demo",
    button2: "Source Code",
  },
  {
    id: 2,
    name: "dummy-card-2",
    title: "Crypto Portfolio Tracker",
    description:
      "Track real-time crypto prices, manage holdings, and get market insights instantly.",
    img: "https://images.unsplash.com/photo-1640794473656-e4fc5e3c2b21",
    button1: "Explore",
    button2: "Github",
  },
  {
    id: 3,
    name: "dummy-card-3",
    title: "E-Commerce UI Kit",
    description:
      "A beautiful and modern UI kit for building fast and scalable online stores.",
    img: "https://images.unsplash.com/photo-1605902711622-cfb43c44367f",
    button1: "Preview",
    button2: "Get Files",
  },
  {
    id: 4,
    name: "dummy-card-4",
    title: "Fitness Progress App",
    description:
      "Track workouts, monitor progress, and get AI-generated routines based on your goals.",
    img: "https://images.unsplash.com/photo-1599058918144-987585d60c7d",
    button1: "Try App",
    button2: "Learn More",
  },
  {
    id: 5,
    name: "dummy-card-5",
    title: "Smart Finance Dashboard",
    description:
      "A full finance dashboard with AI budgeting, expenditure insights, and savings projection.",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
    button1: "Dashboard",
    button2: "Docs",
  },
  {
    id: 6,
    name: "dummy-card-6",
    title: "Travel Planner",
    description:
      "Plan trips, discover locations, and get smart itinerary suggestions for your adventures.",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    button1: "Plan Trip",
    button2: "More Places",
  },
  {
    id: 7,
    name: "dummy-card-7",
    title: "Portfolio Website",
    description:
      "A clean and modern portfolio template for developers & designers to showcase work.",
    img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
    button1: "View Site",
    button2: "Download Template",
  },
];

const Dummy = () => {
  return (
    <div className="relative mt-80 -mb-40">
      <main className="relative flex flex-col items-center gap-[500px] pb-[40vh]">
        {DUMMY_CARDS.map((card, i) => (
          <motion.div
            key={card.id}
            className="sticky top-[50%] translate-y-[-50%]"
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.8,
              rotateX: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateX: 0,
            }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1], // premium easing
            }}
            // style={{
            //   zIndex: DUMMY_CARDS.length - i, // ⭐ correct stacking order
            // }}
          >
            <motion.div
              whileHover={{
                scale: 1.03,
                rotateX: 0,
                rotateY: 3,
                transition: { duration: 0.4 },
              }}
              className="shadow-2xl shadow-black/10 rounded-2xl"
            >
              <DummyCard {...card} />
            </motion.div>
          </motion.div>
        ))}
      </main>
    </div>
  );
};

export default Dummy;

// Cards
export interface DummyCardType {
  id: number;
  name: string;
  title: string;
  description: string;
  img: string;
  button1: string;
  button2: string;
}

function DummyCard({
  title,
  description,
  img,
  button1,
  button2,
}: DummyCardType) {
  return (
    <div className="w-[900px] h-[450px] bg-white rounded-2xl shadow-lg p-10 flex gap-10">
      {/* Image */}
      <div className="w-[45%] h-full relative rounded-xl overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="flex flex-col w-[55%] justify-between">
        <div>
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="text-gray-600 mt-4 text-[16px] leading-[1.5]">
            {description}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="px-5 py-2 bg-black text-white rounded-lg">
            {button1}
          </button>

          <button className="px-5 py-2 border border-black rounded-lg">
            {button2}
          </button>
        </div>
      </div>
    </div>
  );
}
