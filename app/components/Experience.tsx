import { experience } from "./data";

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 md:px-20 py-24 bg-bg text-text">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Experience</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {experience.map((item) => (
          <div
            key={item.role + item.org}
            className="border border-border rounded-xl p-6 flex flex-col gap-3"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <p className="text-accent-purple text-sm mt-0.5">{item.org}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-accent-purple hover:text-accent-gold transition-colors mt-1"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
                    </svg>
                    Find us on LinkedIn
                  </a>
                )}
              </div>
              <span className="text-sm text-text-muted whitespace-nowrap">{item.period}</span>
            </div>

            {item.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-1">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full bg-accent-gold/15 text-[color:var(--tag-text)] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 text-accent-purple hover:text-accent-gold underline underline-offset-4 text-sm"
      >
        View full CV →
      </a>
    </section>
  );
}