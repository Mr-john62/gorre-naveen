import {
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* HERO */}

      <Reveal>
  
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">

        <div className="grid items-center gap-16 lg:grid-cols-2">
        

          {/* Left */}

          <div>

            <p className="mb-6 text-[11px] uppercase tracking-[0.45em] text-neutral-500">
              Hire Me
            </p>

            <h1 className="text-[clamp(52px,8vw,110px)] font-black leading-[0.9] tracking-[-0.05em]">
              Gorre
              <br />
              Naveen
            </h1>

            <p className="mt-6 text-xl font-medium text-neutral-300">
              Creative Director • Video Editor • Brand Strategist
            </p>

            <p className="mt-8 max-w-xl text-lg leading-9 text-neutral-400">
              Helping brands grow through premium storytelling,
              creative direction, branding, YouTube strategy,
              AI automation and high-quality video editing.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="https://wa.me/916281889154"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-neutral-200"
              >
                WhatsApp Me
              </a>

              <a
                href="tel:+916281889154"
                className="rounded-full border border-neutral-700 px-8 py-4 transition hover:border-white"
              >
                Call Me
              </a>

              <Link
                href="/"
                className="rounded-full border border-neutral-700 px-8 py-4 transition hover:border-white"
              >
                Back to Home
              </Link>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center lg:justify-end">

            <div className="relative h-[440px] w-[340px] overflow-hidden rounded-[40px] border border-neutral-800">

              <Image
                src="/profile.png"
                alt="Gorre Naveen"
                fill
                priority
                className="object-cover"
              />

            </div>

          </div>

        </div>

      </section>
      
</Reveal>

      {/* ABOUT */}
      <Reveal>
  
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
 

        <div className="rounded-[36px] border border-neutral-800 bg-white/[0.02] p-8 sm:p-12">

          <p className="text-[11px] uppercase tracking-[0.45em] text-neutral-500">
            About Me
          </p>

          <h2 className="mt-6 text-4xl font-bold">
            Let's Build
            <br />
            Something Extraordinary.
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-9 text-neutral-400">
            I'm a Creative Director, Video Editor and Brand Strategist
            passionate about creating memorable digital experiences.
            From restaurant brands to personal brands, I help businesses
            stand out through powerful storytelling, premium visuals and
            AI-powered creative workflows.
          </p>

        </div>

      </section>
</Reveal>
      {/* EXPERIENCE */}
<Reveal>
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">

        <p className="mb-12 text-[11px] uppercase tracking-[0.45em] text-neutral-500">
          Experience
        </p>

        <div className="space-y-8">

          <div className="rounded-[30px] border border-neutral-800 bg-white/[0.02] p-8 transition hover:border-neutral-600">

            <div className="flex flex-col justify-between gap-6 md:flex-row">

              <div>

                <h3 className="text-3xl font-bold">
                  Food Squad Pvt. Ltd.
                </h3>

                <p className="mt-2 text-neutral-400">
                  Content Editor • Creative Lead
                </p>

              </div>

              <p className="text-neutral-500">
                2026 — Present
              </p>

            </div>

            <ul className="mt-8 space-y-3 text-neutral-400">

              <li>• Creative Direction for restaurant brands.</li>

              <li>• Premium Video Editing for YouTube & Instagram.</li>

              <li>• Brand Strategy & Content Planning.</li>

              <li>• AI Workflow Automation.</li>

              <li>• YouTube SEO & Audience Growth.</li>

            </ul>

          </div>

        </div>

      </section>
</Reveal>
      {/* SKILLS */}
<Reveal>
  

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">

        <p className="mb-12 text-[11px] uppercase tracking-[0.45em] text-neutral-500">
          Skills
        </p>

        <div className="flex flex-wrap gap-4">

          {[
            "Adobe Premiere Pro",
            "Photoshop",
            "Canva",
            "CapCut",
            "YouTube SEO",
            "Content Strategy",
            "Brand Strategy",
            "Instagram Marketing",
            "ChatGPT",
            "Claude AI",
            "Creative Direction",
          ].map((skill) => (

            <div
              key={skill}
              className="rounded-full border border-neutral-700 bg-white/[0.02] px-5 py-3 text-sm transition hover:border-white"
            >
              {skill}
            </div>

          ))}

        </div>

      </section>
</Reveal>

      {/* QUICK STATS */}
<Reveal>
  
      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-10 lg:px-16">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              number: "50+",
              title: "Videos Edited",
            },
            {
              number: "100+",
              title: "Creative Assets",
            },
            {
              number: "6",
              title: "Months Experience",
            },
            {
              number: "AI",
              title: "Creative Workflows",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="rounded-[28px] border border-neutral-800 bg-white/[0.02] p-8"
            >

              <h3 className="text-5xl font-black">
                {item.number}
              </h3>

              <p className="mt-4 text-neutral-400">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </section>
</Reveal>
     {/* SERVICES */}
<Reveal>
  
<section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">

  <p className="mb-12 text-[11px] uppercase tracking-[0.45em] text-neutral-500">
    Services I Offer
  </p>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

    <div className="rounded-[30px] border border-neutral-800 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white">

      <div className="mb-6 text-4xl">🎬</div>

      <h3 className="text-2xl font-bold">
        Video Editing
      </h3>

      <p className="mt-5 leading-8 text-neutral-400">
        Premium YouTube videos, Instagram Reels, Shorts and commercial edits.
      </p>

    </div>

    <div className="rounded-[30px] border border-neutral-800 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white">

      <div className="mb-6 text-4xl">🚀</div>

      <h3 className="text-2xl font-bold">
        Brand Strategy
      </h3>

      <p className="mt-5 leading-8 text-neutral-400">
        Build a memorable brand identity, content plan and digital presence.
      </p>

    </div>

    <div className="rounded-[30px] border border-neutral-800 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white">

      <div className="mb-6 text-4xl">📱</div>

      <h3 className="text-2xl font-bold">
        Social Media
      </h3>

      <p className="mt-5 leading-8 text-neutral-400">
        Instagram growth, YouTube SEO, content strategy and audience engagement.
      </p>

    </div>

    <div className="rounded-[30px] border border-neutral-800 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white">

      <div className="mb-6 text-4xl">🤖</div>

      <h3 className="text-2xl font-bold">
        AI Automation
      </h3>

      <p className="mt-5 leading-8 text-neutral-400">
        AI workflows using ChatGPT, Claude and automation tools to speed up creative work.
      </p>

    </div>

  </div>

</section>
</Reveal>
      {/* EDUCATION */}
<Reveal>
 

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">

        <div className="rounded-[36px] border border-neutral-800 bg-white/[0.02] p-10">

          <p className="text-[11px] uppercase tracking-[0.45em] text-neutral-500">
            Education
          </p>

          <h2 className="mt-6 text-3xl font-bold">
            Bachelor of Science
          </h2>

          <p className="mt-3 text-lg text-neutral-400">
            Computer Science
          </p>

          <p className="mt-2 text-neutral-500">
            Vaagdevi Degree College
          </p>

        </div>

      </section>
</Reveal>
      {/* CONTACT */}
<Reveal>
  
      <section className="mx-auto max-w-7xl px-6 pb-28 sm:px-10 lg:px-16">

        <div className="rounded-[40px] border border-neutral-800 bg-gradient-to-br from-white/[0.03] to-transparent p-10 sm:p-16">

          <p className="text-[11px] uppercase tracking-[0.45em] text-neutral-500">
            Let's Work Together
          </p>

          <h2 className="mt-6 text-4xl font-black sm:text-6xl">
            Ready to Build
            <br />
            Something Amazing?
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-neutral-400">
            Looking for premium video editing, branding, YouTube strategy
            or AI-powered creative solutions? Let's connect.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-neutral-800 p-6">

              <p className="text-sm uppercase tracking-widest text-neutral-500">
                Email
              </p>

              <a
                href="mailto:naveenjohn6283@gmail.com"
                className="mt-2 block text-lg hover:text-white"
              >
                naveenjohn6283@gmail.com
              </a>

            </div>

            <div className="rounded-3xl border border-neutral-800 p-6">

              <p className="text-sm uppercase tracking-widest text-neutral-500">
                Phone
              </p>

              <a
                href="tel:+916281889154"
                className="mt-2 block text-lg hover:text-white"
              >
                +91 6281889154
              </a>

            </div>

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

   <a
  href="https://wa.me/916281889154"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-3 rounded-full border border-neutral-700 bg-transparent px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366]"
>
  <FaWhatsapp className="text-xl" />
  WhatsApp Me
</a>

        <a
  href="tel:+916281889154"
  className="inline-flex items-center justify-center gap-3 rounded-full border border-neutral-700 bg-transparent px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/5"
>
  <FaPhoneAlt className="text-lg" />
  Call Me
</a>

           <a
  href="https://instagram.com/YOUR_USERNAME"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-3 rounded-full border border-neutral-700 bg-transparent px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-pink-500 hover:bg-pink-500/10 hover:text-pink-400"
>
  <FaInstagram className="text-lg" />
  Instagram
</a>
           <a
  href="https://linkedin.com/in/YOUR_USERNAME"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-3 rounded-full border border-neutral-700 bg-transparent px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
>
  <FaLinkedin className="text-lg" />
  LinkedIn
</a>

          </div>

          <div className="mt-12 border-t border-neutral-800 pt-8">

            <p className="text-neutral-400">
              Need my resume?
            </p>

            <Link
              href="/resume.pdf"
              target="_blank"
              className="mt-4 inline-flex rounded-full border border-neutral-700 px-8 py-4 transition hover:border-white hover:bg-white/5"
            >
              Download Resume
            </Link>

          </div>

        </div>

      </section>
</Reveal>

    </main>
  );
}