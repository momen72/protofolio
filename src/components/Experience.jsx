import React from "react";

const timelineData = [
  {
    title: "Graphic Designer",
    company: "Freelance",
    date: "2022 – 2023",
    side: "left",
    points: [
      "Designed logos, posters, and social media content for local businesses",
      "Delivered high-quality assets using Adobe Photoshop, Illustrator, and CorelDRAW",
    ],
  },
  {
    title: "Graphic Designer",
    company: "Small Agency",
    date: "2023 – 2025",
    side: "right",
    points: [
      "Created brand identities and print materials for clients in retail and service sectors.",
    ],
  },
  {
    title: "Graphic Designer",
    company: "Metro Advertising Agency",
    date: "2025 – present",
    side: "left",
    points: [
      "Developed social media content using AI tools.",
      "Improved print design workflows and production quality",
    ],
  },
];

export default function Timeline() {
  return (
    <div className='bg-black text-white pt-20 pb-16 px-4 bg-[url("https://assets.prebuiltui.com/images/components/hero-section/hero-background-image.png")] bg-cover bg-center bg-no-repeat'>

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[#A6FF5D] tracking-widest uppercase text-sm mb-2">
          Career Path
        </p>
        <h1 className="text-center text-5xl font-Ovo">Professional History</h1>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">

        {/* Center Line - desktop only */}
        <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-gray-600 -translate-x-1/2" />

        {/* Left Line - mobile only */}
        <div className="md:hidden absolute left-4 top-0 w-[2px] h-full bg-gray-600" />

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`relative mb-10 md:mb-16 flex items-start
              ${item.side === "left"
                ? "md:justify-start justify-end"
                : "md:justify-end justify-end"
              }
            `}
          >
            {/* Dot - mobile */}
            <div className="md:hidden absolute left-[9px] top-6 w-3 h-3 bg-[#A6FF5D] rounded-full shadow-[0_0_8px_4px_rgba(166,255,93,0.4)]" />

            {/* Dot - desktop */}
            <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 bg-[#A6FF5D] rounded-full shadow-[0_0_10px_6px_rgba(166,255,93,0.35)] z-10" />

            {/* Card */}
            <div
              className={`w-[calc(100%-2rem)] ml-10 md:ml-0 md:w-[46%]
                ${item.side === "left" ? "md:pr-10 md:pl-0" : "md:pl-10 md:pr-0"}
              `}
            >
              <div className="bg-[#111] border border-gray-800 p-5 md:p-6 rounded-xl shadow-lg">
                <h3 className="text-lg md:text-xl font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-[#A6FF5D] text-sm mb-3">{item.company}</p>
                <ul className="text-gray-300 text-sm space-y-1 mb-4">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#A6FF5D] mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <span className="text-xs bg-gray-800 text-gray-400 px-3 py-1 rounded-full">
                  {item.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}