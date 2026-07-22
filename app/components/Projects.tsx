"use client";

import { useState } from "react";
import { projects } from "./data";

const ROW_SIZE = 3;

const categoryStyles: Record<string, string> = {
  Hardware: "bg-accent-gold/15 text-[color:var(--tag-text)]",
  "AI/ML": "bg-accent-purple/15 text-accent-purple",
  Research: "bg-accent-gold/15 text-[color:var(--tag-text)]",
  Software: "bg-accent-purple/15 text-accent-purple",
};

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(ROW_SIZE);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 md:px-20 py-24 bg-bg text-text">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-5">
        {visibleProjects.map((item) => {
          const badgeStyle = categoryStyles[item.category] ?? categoryStyles.Software;
          return (
            <div
              key={item.title}
              className="border border-border rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium shrink-0 ${badgeStyle}`}>
                  {item.category}
                </span>
              </div>

              {item.period && <p className="text-text-muted text-xs -mt-2">{item.period}</p>}

              <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>

              {item.techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-accent-gold/15 text-[color:var(--tag-text)] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-purple hover:text-accent-gold text-sm mt-1"
                >
                  View project →
                </a>
              )}
            </div>
          );
        })}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + ROW_SIZE)}
            className="px-6 py-2.5 rounded-full border border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white transition-colors text-sm"
          >
            Show more
          </button>
        </div>
      )}
    </section>
  );
}