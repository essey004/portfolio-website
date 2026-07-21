"use client";

import { motion } from "framer-motion";
import { stats } from "./data";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 md:px-20 py-20 grid md:grid-cols-2 gap-12 items-center bg-bg text-text">
      {/* Left: bio */}
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-accent-purple">About</span> Me
        </h2>

        <p className="text-text-muted leading-relaxed text-justify">
          I am a final-year Computer Engineering student at Ashesi University
          aiming to apply technical skills across software, hardware, and
          research to address problems.
        </p>

        <p className="text-text-muted leading-relaxed text-justify">
          My work spans AI/ML, software development, modelling and analysis,
          circuit design through my 100 Days of Hardware project, and applied
          mathematics through my current research on a compartmental model
          for cancer prevention policy in Ghana.
        </p>

        <p className="text-text-muted leading-relaxed text-justify">
          I founded AiT Africa, a community supporting undergraduate women in
          engineering and technology through mentorship and peer support.
        </p>
      </div>

      {/* Right: terminal card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl border border-border bg-[#17111F] shadow-xl w-full max-w-[480px] mx-auto overflow-hidden"
      >
        {/* Title bar */}
        <div className="flex items-center justify-between bg-[#241B2F] border-b border-border px-4 py-2">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-sm bg-accent-gold" />
            <span className="text-xs font-medium text-[#F0EAF5]">PowerShell</span>
          </div>
          <div className="flex text-[#A99BB3] text-sm">
            <span className="w-6 text-center">—</span>
            <span className="w-6 text-center">□</span>
            <span className="w-6 text-center hover:text-red-400">✕</span>
          </div>
        </div>

        {/* Terminal body */}
        <div className="p-6 font-mono text-sm space-y-4">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.15, duration: 0.3 }}
            >
              <p>
                <span className="text-accent-gold">PS</span>{" "}
                <span className="text-[#A99BB3]">C:\Users\Esinam&gt;</span>{" "}
                <span className="text-[#F0EAF5]">Get-{item.label.replace(/\s+/g, "")}</span>
              </p>
              <p className="mt-1 pl-5 text-accent-purple">{item.value}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + stats.length * 0.15 }}
            className="flex items-center"
          >
            <span className="text-accent-gold">PS</span>
            <span className="ml-2 text-[#A99BB3]">C:\Users\Esinam&gt;</span>
            <span className="ml-1 h-4 w-2 bg-accent-gold animate-pulse" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}