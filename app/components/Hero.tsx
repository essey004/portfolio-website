import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-bg text-text flex items-center px-6 md:px-20 pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left: text */}
        <div className="flex flex-col gap-6">
        

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Turning Ideas Into{" "}
            <span className="text-accent-purple">Technology</span>{" "}
            That Matters
          </h1>

          <p className="text-text-muted max-w-md leading-relaxed">
            I'm a final-year student,
            working across software, hardware, and research, from embedded
            systems to AI/ML hoping to build things that solve real problems. Iam currently looking for internship opportunities
          </p>

          <div className="flex items-center gap-6 mt-2">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-purple to-accent-gold text-white font-medium hover:opacity-90 transition-opacity"
            >
              View CV
            </a>

            <a
              href="#projects"
              className="flex items-center gap-1.5 text-text hover:text-accent-purple transition-colors text-sm font-medium"
            >
              See Projects
             
            </a>
          </div>

          <div className="flex gap-10 mt-8">
            <div>
              <p className="text-2xl font-bold">5+</p>
              <p className="text-text-muted text-sm">Hardware Builds</p>
            </div>
            <div>
              <p className="text-2xl font-bold">3+</p>
              <p className="text-text-muted text-sm">Research Projects</p>
            </div>
            <div>
              <p className="text-2xl font-bold">3+</p>
              <p className="text-text-muted text-sm">Projects</p>
            </div>
          </div>
        </div>


        <div className="relative w-full max-w-sm mx-auto aspect-square">
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full border-2 border-accent-purple/30" />

          
          <div className="absolute inset-4 rounded-full border border-dashed border-border flex items-center justify-center text-text-muted bg-accent-purple/5 overflow-hidden">
          <Image
            src="/slimeyfox-hardware-4955476.jpg"
            alt="Hero Image"
            fill
            className="object-cover"
            priority
          />
          </div>

          
        </div>
      </div>
    </section>
  );
}