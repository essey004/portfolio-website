"use client";

import { useState } from "react";
import { skillCategories } from "./data";

const ICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items]; // duplicate for seamless loop

  return (
    <div className="marquee-row overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={`marquee-track gap-3 py-1.5 ${reverse ? "reverse" : ""}`}>
        {doubled.map((skill, i) => (
          <span
            key={skill + i}
            className="shrink-0 text-sm px-4 py-2 rounded-full bg-accent-gold/15 text-[#8a6d13] font-medium whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  const logoCategories = skillCategories.filter((c) => c.type === "logo");
  const textCategories = skillCategories.filter((c) => c.type === "text");

  // split all text-category skills into rows for the marquee
  const allTextSkills = textCategories.flatMap((c) => c.items as string[]);
  const rowSize = Math.ceil(allTextSkills.length / 3);
  const rows = [
    allTextSkills.slice(0, rowSize),
    allTextSkills.slice(rowSize, rowSize * 2),
    allTextSkills.slice(rowSize * 2),
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 md:px-20 py-24 bg-bg text-text overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-14">Skills</h2>

      {/* Logo categories — unchanged */}
      <div className="flex flex-col gap-12 mb-16">
        {logoCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-sm uppercase tracking-widest text-accent-purple font-semibold mb-5">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-5">
              {(category.items as { name: string; icon: string }[]).map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHovered(item.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="h-14 w-14 rounded-xl border border-border flex items-center justify-center hover:border-accent-purple transition-colors bg-white">
                    <img
                      src={`${ICON_BASE}/${item.icon}.svg`}
                      alt={item.name}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  {hovered === item.name && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 text-xs bg-text text-bg px-2 py-1 rounded-md whitespace-nowrap z-10">
                      {item.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Marquee rows for text-based skills */}
      <div>
        <h3 className="text-sm uppercase tracking-widest text-accent-purple font-semibold mb-5">
          Additional
        </h3>
        <div className="flex flex-col gap-4">
          <Marquee items={rows[0]} />
          <Marquee items={rows[1]} reverse />
          <Marquee items={rows[2]} />
        </div>
      </div>
    </section>
  );
}