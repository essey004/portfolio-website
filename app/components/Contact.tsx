"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-accent-purple text-white py-24 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left: warm intro + direct links */}
        <div className="flex flex-col gap-6">
          <span className="text-accent-gold text-sm font-medium uppercase tracking-widest">
            Let's Connect
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Got an idea, a role, or just want to talk tech?
          </h2>

          <p className="text-white/80 leading-relaxed max-w-md">
            Whether you're hiring, collaborating, or a fellow student, my inbox is open.
          </p>

          <div className="flex flex-col gap-3 mt-2">
            <a
              href="mailto:esinamamegah22@gmail.com"
              className="flex items-center gap-2 text-white hover:text-accent-gold transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              esinamamegah22@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/esinam-amegah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-accent-gold transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
              </svg>
              linkedin.com/in/esinam-amegah
            </a>

            <a
              href="https://github.com/essey004"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-accent-gold transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              github.com/essey004
            </a>
          </div>
        </div>

        {/* Right: form, lifted white card */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#FEFCFA] text-[#241B2F] rounded-2xl p-6 md:p-8 flex flex-col gap-4 shadow-2xl"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm text-text-muted">Name</label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="border border-border rounded-lg px-3 py-2 bg-[#FEFCFA] text-[#241B2F] focus:outline-none focus:border-accent-purple"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-text-muted">Email</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border border-border rounded-lg px-3 py-2 bg-[#FEFCFA] text-[#241B2F] focus:outline-none focus:border-accent-purple"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm text-text-muted">Message</label>
            <textarea
              id="message"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="border border-border rounded-lg px-3 py-2 bg-[#FEFCFA] text-[#241B2F] focus:outline-none focus:border-accent-purple"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 px-6 py-3 rounded-full bg-accent-purple text-white hover:bg-accent-gold hover:text-[#241B2F] transition-colors disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-accent-purple font-medium">
              Message sent . I'll get back to you soon!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500">Something went wrong — try emailing me directly.</p>
          )}
        </form>
      </div>
    </section>
  );
}