import { leadership } from "./data";

export default function Leadership() {
  return (
    <section id="leadership" className="max-w-6xl mx-auto px-6 md:px-20 py-24 bg-bg text-text">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Leadership & Involvement</h2>

      <div className="grid md:grid-cols-3 gap-5">
        {leadership.map((item) => (
          <div
            key={item.role + item.org}
            className="bg-accent-purple text-white rounded-xl p-5 flex flex-col gap-2 border-t-2 border-accent-gold"
          >
            <h3 className="text-base font-semibold">{item.role}</h3>
            <p className="text-white/80 text-sm">{item.org}</p>
            <p className="text-accent-gold text-xs font-medium">{item.period}</p>
          </div>
        ))}
      </div>

      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-8 text-accent-purple hover:text-accent-gold underline underline-offset-4 text-sm"
      >
        See more on my CV →
      </a>
    </section>
  );
}