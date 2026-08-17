import Image from "next/image";
import { athlete, academics, experience, videos } from "@/data/athlete";
import { SectionTitle } from "@/components/SectionTitle";
import { VideoCard } from "@/components/VideoCard";
import { ProgressionChart } from "@/components/ProgressionChart";
import { ResultsTable } from "@/components/ResultsTable";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
const nav = [
  ["Film", "#film"],
  ["Gallery", "#gallery"],
  ["Results", "#results"],
  ["Academics", "#academics"],
  
  ["Contact", "#contact"],
];

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50">
  <div className="border-b border-white/10 bg-[#91948F]/70 backdrop-blur-xl">
    <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 md:px-8">

      {/* LEFT — BRAND */}
      <a
        href="#top"
        className="group flex items-center gap-4"
      >
        {/* SH */}
        <div
          className="
            flex h-10 w-10 items-center justify-center
            rounded-xl
            border border-white/15
            bg-white/5
            transition-all duration-300
            group-hover:border-[#D4AF68]/60
            group-hover:bg-[#D4AF68]/10
          "
        >
          <span className="font-display text-lg font-bold text-white">
            SH
          </span>
        </div>

        {/* divider */}
        <div className="h-8 w-px bg-white/15" />

        {/* Athlete */}
        <div>
          <p className="font-display text-[17px] font-bold uppercase leading-none tracking-[0.02em] text-white">
            Sandil Hetti Arachchige
          </p>

          <div className="mt-1.5 flex items-center gap-2">
            <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#000000]">
              High Jump
            </span>

            <span className="h-1 w-1 rounded-full bg-white/30" />

            
          </div>
        </div>
      </a>


      {/* CENTER NAV */}
      <nav
        className="hidden items-center gap-1 md:flex"
        aria-label="Main navigation"
      >
        {nav.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="
              group relative
              rounded-lg
              px-4 py-2.5
              text-[13px]
              font-bold
              uppercase
              tracking-[0.17em]
              text-white
              transition-all duration-300
              hover:bg-white/8
              hover:text-white
            "
          >
            {label}

            <span
              className="
                absolute bottom-1 left-1/2
                h-[2px] w-0
                -translate-x-1/2
                rounded-full
                bg-[#D4AF68]
                transition-all duration-300
                group-hover:w-5
              "
            />
          </a>
        ))}
      </nav>


      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* PB */}
        

        <div className="hidden h-8 w-px bg-white/15 lg:block" />

        {/* CONTACT BUTTON */}
        <a
          href={`mailto:${athlete.email}`}
          className="
            group inline-flex items-center gap-2.5
            rounded-xl
            bg-[#D4AF68]
            px-4 py-2.5
            text-[9px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-[#2F3E4E]
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-white
            md:px-5
          "
        >
          Contact

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

      </div>
    </div>
  </div>
</header>

      <section
  id="top"
  className="relative overflow-hidden border-b border-[#111827]/10 bg-[#F8F6F1]"
>
  {/* Subtle background decoration */}
  <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#D4AF68]/10 blur-3xl" />

  <div className="relative mx-auto grid max-w-[1320px] md:min-h-[720px] md:grid-cols-[1.05fr_.95fr]">

    {/* LEFT CONTENT */}
    <div className="flex flex-col justify-between px-5 py-14 md:px-10 md:py-16 lg:px-12 lg:py-20">

      <div>
        {/* Category */}
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-10 bg-[#B88A44]" />

          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B88A44]">
            {athlete.event} · {athlete.category} · {athlete.classYear}
          </p>
        </div>

        {/* Main Name */}
        <h1 className="mt-7 max-w-[850px] font-['Plus_Jakarta_Sans'] text-[clamp(3.5rem,7vw,7.5rem)] font-extrabold uppercase leading-[0.78] tracking-[0.01em] text-[#111827]">

          Sandil

          <br />

          <span className="text-[#B88A44]">
            Hetti
          </span>

          <br />

          Arachchige
        </h1>

        {/* Description */}
        <p className="mt-9 max-w-xl text-base leading-7 text-[#64748B] md:text-lg">
          Sri Lankan high jumper combining a{" "}
          <strong className="font-semibold text-[#111827]">
            2.01 m personal best
          </strong>{" "}
          with strong Edexcel IAL academics and school leadership.
        </p>

        {/* CTA */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#results"
            className="group inline-flex items-center gap-3 rounded-full bg-[#111827] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#B88A44] hover:shadow-lg"
          >
            View Achievements

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

          
        </div>
      </div>

      {/* STATS */}
      <div className="mt-14 border-t border-[#111827]/15 pt-7">

        <div className="grid grid-cols-2 gap-y-7 sm:grid-cols-4">

          {[
            ["PB", `${athlete.personalBest} / ${athlete.personalBestImperial}`],
            ["Target", athlete.target],
            ["Class", "2027"],
            ["Base", athlete.location],
          ].map(([k, v], index) => (
            <div
              key={k}
              className={`relative ${
                index !== 0
                  ? "sm:border-l sm:border-[#111827]/10 sm:pl-5"
                  : ""
              }`}
            >
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#64748B]">
                {k}
              </p>

              <p className="mt-2 font-display text-2xl font-bold uppercase tracking-tight text-[#111827]">
                {v}
              </p>

              {k === "PB" && (
                <span className="mt-2 inline-block rounded-full bg-[#B88A44]/10 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.15em] text-[#B88A44]">
                  Personal Best
                </span>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <figure className="relative min-h-[560px] overflow-hidden bg-[#111827] md:min-h-full">

      <Image
        src={athlete.heroPhoto}
        alt={athlete.heroPhotoAlt}
        fill
        priority
        className="object-cover object-[50%_20%] transition-transform duration-700 hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, 46vw"
      />

      {/* Image dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/15 to-transparent" />

      {/* Top badge */}
      <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md md:right-7 md:top-7">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white">
          Sri Lanka · High Jump
        </p>
      </div>

      {/* Personal Best Card */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-7 md:px-8 md:pb-9">

        <div className="mb-5 h-px w-full bg-white/20" />

        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D4AF68]">
          Personal Best · July 2026
        </p>

        <div className="mt-2 flex items-end gap-3">

          <span className="font-['DM_Sans'] text-[clamp(5rem,9vw,8rem)] font-bold leading-none tracking-[-0.02em] text-white">
  2.01
</span>

          <span className="mb-3 font-display text-xl font-semibold uppercase tracking-wide text-white/80 md:text-2xl">
            metres
          </span>

        </div>

        <figcaption className="mt-4 max-w-md text-xs leading-5 text-white/65">
          {athlete.heroPhotoCaption}
        </figcaption>
      </div>

    </figure>
  </div>
</section>
<section className="border-b border-line bg-white px-5 py-14 md:px-8 md:py-20">
  <div className="mx-auto grid max-w-[1320px] gap-10 md:grid-cols-[240px_1fr]">

    {/* LEFT SIDE */}
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
        Athlete Mindset
      </p>

      
      {/* SMALL IMAGE */}
      <div className="relative mt-7 aspect-[4/5] w-full max-w-[210px] overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-[#F8F6F1] shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
        <Image
          src="/media/news.jpeg"
          alt="Sandil Hetti Arachchige"
          fill
          className="object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
          sizes="210px"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        <div className="absolute bottom-3 left-3">
          <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-white">
            High Jump · Sri Lanka
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="max-w-4xl">
      <p className="font-display text-3xl font-semibold leading-tight text-[#0F172A] md:text-5xl">
        “I compete with none but myself.”
      </p>

      <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
        That mindset has driven every leap since I first stepped onto a track
        at age nine. For nearly a decade, high jump has shaped how I organise
        my life — a minimum of five training sessions a week, maintained
        through exam seasons, competitions, and a full academic timetable.
      </p>

      <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">
        That discipline is the thread tying together the two things I care
        about most: my sport and my studies. I have refused to let either come
        at the expense of the other. My ambition is to bring that same
        standard of excellence, competitive grit, and discipline to a
        top-tier Division I program.
      </p>
    </div>

  </div>
</section>
     <section className="border-b border-line bg-gradient-to-t from-[#8F672F]/50 px-5 py-6 md:px-8">
  <div className="mx-auto grid max-w-[1320px] gap-3 sm:grid-cols-2 lg:grid-cols-4">

    {[
      {
        label: "Event",
        title: "High Jump",
        detail: "PB 2.01 m · Target 2.05 m",
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-5 w-5"
          >
            <path d="M4 18h16" />
            <path d="M6 15l4-5 3 3 5-7" />
            <path d="M15 6h3v3" />
          </svg>
        ),
      },

      {
        label: "Academics",
        title: "Mathematics A*",
        detail: "AS Economics A",
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-5 w-5"
          >
            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
            <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5A2.5 2.5 0 0 1 20 21.5v-16Z" />
          </svg>
        ),
      },

      {
        label: "Leadership",
        title: "Athletic Captain",
        detail: "Investment Society Secretary",
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-5 w-5"
          >
            <path d="M12 3l2.6 5.3 5.9.9-4.3 4.2 1 5.9L12 16.5l-5.2 2.8 1-5.9-4.3-4.2 5.9-.9L12 3Z" />
          </svg>
        ),
      },

      {
        label: "Recruit Status",
        title: "Class of 2027",
        detail: "International Recruit · Sri Lanka",
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-5 w-5"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21" />
            <path d="M12 3C9.5 5.7 8.2 8.7 8.2 12S9.5 18.3 12 21" />
          </svg>
        ),
      },
    ].map((item, index) => (
      <article
        key={item.label}
        className="
          group relative overflow-hidden
          border border-line
          bg-white
          px-5 py-5
          transition-all duration-300
          hover:-translate-y-1
          hover:bg-paper/70
          hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)]
          md:px-6 md:py-6
        "
      >
        {/* top */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            
            {/* icon */}
            <div
              className="
                flex h-9 w-9 items-center justify-center
                border border-wine/20
                text-wine
                transition-all duration-300
                group-hover:bg-wine
                group-hover:text-white
              "
            >
              {item.icon}
            </div>

            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-wine">
              {item.label}
            </p>
          </div>

          <span className="font-display text-sm font-bold text-ink/15">
            0{index + 1}
          </span>
        </div>

        {/* content */}
        <div className="mt-7">
          <h3 className="font-display text-2xl font-bold uppercase leading-none text-ink md:text-3xl">
            {item.title}
          </h3>

          <p className="mt-3 min-h-[40px] text-xs font-semibold leading-5 text-slate">
            {item.detail}
          </p>
        </div>

        {/* bottom line */}
        <div className="mt-6 h-px w-full bg-line">
          <div
            className="
              h-px w-10 bg-wine
              transition-all duration-500
              group-hover:w-full
            "
          />
        </div>
      </article>
    ))}
  </div>
</section>

      <section id="film" className="px-5 py-16 md:px-8 md:py-24">
  <div className="mx-auto max-w-[1320px]">

    <SectionTitle
      kicker="Recruiting Film"
      title="See the jump before reading the résumé."
      description="Watch Sandil's key competition performances and explore more high-jump footage."
    />

    {/* =====================================================
        KEEP ORIGINAL MAIN VIDEO + PHOTO
    ====================================================== */}

    <div className="mt-10 grid gap-5 md:grid-cols-2">
      {videos.slice(0, 1).map((video) => (
        <VideoCard key={video.title} {...video} />
      ))}
    </div>


    {/* =====================================================
        ADDITIONAL VIDEO GALLERY
    ====================================================== */}

    {videos.length > 1 && (
  <div id="gallery" className="mt-12 scroll-mt-24">

        {/* Gallery heading */}
        <div className="flex items-end justify-between gap-5">

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#B88A44]">
              Video Gallery
            </p>

            <h3 className="mt-2 font-display text-2xl font-bold uppercase text-[#111827] md:text-3xl">
              More Competition Film
            </h3>
          </div>

          {/* Visual arrows */}
          <div className="hidden items-center gap-2 sm:flex">

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111827]/10 bg-white text-[#111827]">
              ←
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#111827]/10 bg-white text-[#111827]">
              →
            </div>

          </div>

        </div>


        {/* =================================================
            LEFT / RIGHT SCROLL VIDEO GALLERY
        ================================================== */}

        <div
          className="
            mt-5
            flex gap-4
            overflow-x-auto
            scroll-smooth
            snap-x snap-mandatory
            pb-5
            [scrollbar-width:thin]
            [scrollbar-color:#B88A44_transparent]
          "
        >

          {videos.slice(1).map((video, index) => (
            <article
              key={`${video.title}-${index}`}
              className="
                group
                min-w-[280px]
                snap-start
                overflow-hidden
                rounded-2xl
                border border-[#111827]/10
                bg-white
                transition-all duration-300

                hover:-translate-y-1
                hover:border-[#B88A44]/40
                hover:shadow-[0_15px_35px_rgba(17,24,39,0.10)]

                sm:min-w-[340px]
                lg:min-w-[390px]
              "
            >

              {/* VIDEO */}
              <div className="overflow-hidden bg-[#111827]">

                <video
                  controls
                  preload="metadata"
                  poster={video.poster}
                  className="aspect-video w-full bg-black object-cover"
                >
                  <source src={video.src} type="video/mp4" />

                  Your browser does not support HTML5 video.
                </video>

              </div>


              {/* VIDEO DETAILS */}
              <div className="p-5">

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#B88A44]">
                      Film {String(index + 2).padStart(2, "0")}
                    </p>

                    <h4 className="mt-2 font-display text-2xl font-bold uppercase leading-none text-[#111827]">
                      {video.title}
                    </h4>

                    <p className="mt-3 text-[11px] font-medium leading-5 text-[#64748B]">
                      {video.meta}
                    </p>
                  </div>


                  {/* Play icon */}
                  <div
                    className="
                      flex h-9 w-9 shrink-0
                      items-center justify-center
                      rounded-full
                      bg-[#111827]
                      text-[10px]
                      text-white
                      transition-all duration-300
                      group-hover:bg-[#B88A44]
                    "
                  >
                    ▶
                  </div>

                </div>


                {/* Accent line */}
                <div className="mt-5 h-px bg-[#111827]/10">

                  <div
                    className="
                      h-px w-10
                      bg-[#B88A44]
                      transition-all duration-500
                      group-hover:w-full
                    "
                  />

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* Mobile instruction */}
        <p className="mt-1 text-center text-[9px] font-bold uppercase tracking-[0.18em] text-[#64748B] sm:hidden">
          Swipe left or right to view more →
        </p>

      </div>
    )}

  </div>
</section>

      <section
  id="results"
  className={`${manrope.className} relative overflow-hidden border-y border-[#111827]/10 bg-[#F8F6F1] px-5 py-16 text-[#111827] md:px-8 md:py-24`}
>
  {/* =====================================================
      LIGHT SPORTS BACKGROUND
  ====================================================== */}
  {/* LIGHT SPORTS BACKGROUND */}
<div className="pointer-events-none absolute inset-0">

  <Image
    src="/media/sandil-champion.jpg"
    alt=""
    fill
    className="object-cover object-[50%_25%] opacity-[0.28]"
    sizes="100vw"
  />

  {/* LIGHT OVERLAY - keeps text readable */}
  <div className="absolute inset-0 bg-[#F7E6D7]" />

  {/* SOFT FADE */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#F8F6F1]/80" />

</div>


  {/* SOFT GOLD BACKGROUND ACCENTS */}
  <div className="pointer-events-none absolute right-[-140px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF68]/10 blur-[90px]" />

  <div className="pointer-events-none absolute bottom-[-120px] left-[-100px] h-[360px] w-[360px] rounded-full bg-[#B88A44]/5 blur-[90px]" />


  <div className="relative mx-auto max-w-[1320px]">

    {/* =====================================================
        SECTION INTRO
    ====================================================== */}
    <div className="grid gap-8 md:grid-cols-[170px_1fr]">

      {/* LEFT */}
      <div>

        <div className="flex items-center gap-3">

          <span className="h-[2px] w-8 bg-[#B88A44]" />

          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#B88A44]">
            Performance
          </p>

        </div>


        <p className="mt-4 max-w-[140px] text-[11px] font-medium leading-5 text-[#64748B]">
          Competition progression from 2022 to 2026.
        </p>

      </div>


      {/* RIGHT */}
      <div>

        <h2 className="max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-[#111827] md:text-5xl">

          From 1.63 m to{" "}

          <span className="relative inline-block text-[#B88A44]">

            2.01 m

            <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-[#D4AF68]/35" />

          </span>


          <span className="mt-4 block text-3xl font-semibold tracking-[-0.03em] text-[#64748B] md:text-4xl">
            The progression is the story.
          </span>

        </h2>


        <p className="mt-6 max-w-2xl text-sm font-medium leading-7 text-[#64748B] md:text-[15px]">
          Recorded competition performances from August 2022 to July 2026,
          showing consistent development toward a current target of 2.05 m.
        </p>

      </div>

    </div>


    {/* =====================================================
        PERFORMANCE CARDS
    ====================================================== */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      {/* PERSONAL BEST */}
      <article
        className="
          group relative overflow-hidden
          rounded-[18px]
          border border-[#111827]/10
          bg-white/95
          px-5 py-5
          shadow-[0_8px_30px_rgba(17,24,39,0.05)]
          backdrop-blur-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:border-[#B88A44]/40
          hover:shadow-[0_18px_45px_rgba(17,24,39,0.09)]
        "
      >

        <div className="absolute left-0 top-0 h-full w-[3px] bg-[#B88A44]" />


        <div className="flex items-start justify-between">

          <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#64748B]">
            Personal Best
          </p>

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B88A44]/10 text-sm font-bold text-[#B88A44]">
            ↑
          </span>

        </div>


        <div className="mt-5 flex items-end gap-2">

          <span className="tabular-nums text-[40px] font-extrabold leading-none tracking-[-0.055em] text-[#111827]">
            2.01
          </span>

          <span className="mb-1 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#B88A44]">
            m
          </span>

        </div>


        <div className="mt-5 border-t border-[#111827]/10 pt-3">

          <p className="text-[10px] font-semibold text-[#64748B]">
            July 2026
          </p>

        </div>

      </article>


      {/* TARGET */}
      <article
        className="
          group relative overflow-hidden
          rounded-[18px]
          border border-[#111827]/10
          bg-white/95
          px-5 py-5
          shadow-[0_8px_30px_rgba(17,24,39,0.05)]
          backdrop-blur-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:border-[#B88A44]/40
          hover:shadow-[0_18px_45px_rgba(17,24,39,0.09)]
        "
      >

        <div className="absolute left-0 top-0 h-full w-[3px] bg-[#D4AF68]/65" />


        <div className="flex items-start justify-between">

          <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#64748B]">
            Current Target
          </p>

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B88A44]/10 text-sm font-bold text-[#B88A44]">
            ◎
          </span>

        </div>


        <div className="mt-5 flex items-end gap-2">

          <span className="tabular-nums text-[40px] font-extrabold leading-none tracking-[-0.055em] text-[#111827]">
            2.05
          </span>

          <span className="mb-1 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#B88A44]">
            m
          </span>

        </div>


        <div className="mt-5 border-t border-[#111827]/10 pt-3">

          <p className="text-[10px] font-semibold text-[#64748B]">
            Next milestone
          </p>

        </div>

      </article>


      {/* PROGRESSION */}
      <article
        className="
          group relative overflow-hidden
          rounded-[18px]
          border border-[#111827]/10
          bg-white/95
          px-5 py-5
          shadow-[0_8px_30px_rgba(17,24,39,0.05)]
          backdrop-blur-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:border-[#B88A44]/40
          hover:shadow-[0_18px_45px_rgba(17,24,39,0.09)]
        "
      >

        <div className="absolute left-0 top-0 h-full w-[3px] bg-[#D4AF68]/65" />


        <div className="flex items-start justify-between">

          <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#64748B]">
            Progression
          </p>

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B88A44]/10 text-sm font-bold text-[#B88A44]">
            ↗
          </span>

        </div>


        <div className="mt-5 flex items-end gap-2">

          <span className="tabular-nums text-[40px] font-extrabold leading-none tracking-[-0.055em] text-[#111827]">
            +0.38
          </span>

          <span className="mb-1 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#B88A44]">
            m
          </span>

        </div>


        <div className="mt-5 border-t border-[#111827]/10 pt-3">

          <p className="text-[10px] font-semibold text-[#64748B]">
            2022 → 2026
          </p>

        </div>

      </article>


      {/* ATHLETE PROFILE */}
      <article
        className="
          group relative overflow-hidden
          rounded-[18px]
          border border-[#B88A44]/25
          bg-gradient-to-br from-[#FFFDF8]/95 to-[#F5EBD9]/95
          px-5 py-5
          shadow-[0_8px_30px_rgba(17,24,39,0.05)]
          backdrop-blur-sm
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-[0_18px_45px_rgba(17,24,39,0.09)]
        "
      >

        <div className="absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full border border-[#B88A44]/15" />

        <div className="absolute right-[-10px] top-[-10px] h-14 w-14 rounded-full border border-[#B88A44]/20" />


        <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#B88A44]">
          Athlete Profile
        </p>


        <p className="mt-5 text-2xl font-extrabold leading-[1.08] tracking-[-0.035em] text-[#111827]">
          U18
          <br />
          High Jump
        </p>


        <div className="mt-5 border-t border-[#B88A44]/20 pt-3">

          <p className="text-[10px] font-semibold text-[#64748B]">
            Sri Lanka · Class of 2027
          </p>

        </div>

      </article>

    </div>


    {/* =====================================================
        PROGRESSION CHART
    ====================================================== */}
    <div
      className="
        relative mt-10 overflow-hidden
        rounded-[20px]
        border border-[#111827]/10
        bg-white/95
        shadow-[0_16px_50px_rgba(17,24,39,0.07)]
        backdrop-blur-md
      "
    >

      {/* GOLD TOP LINE */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#8F672F] via-[#D4AF68] to-[#8F672F]" />


      {/* HEADER */}
      <div className="flex flex-col gap-4 border-b border-[#111827]/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-7">

        <div className="flex items-center gap-4">

          {/* ICON */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B88A44]/10 text-[#B88A44]">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path d="M4 18l5-6 4 3 7-9" />
              <path d="M16 6h4v4" />
            </svg>

          </div>


          <div>

            <p className="text-[9px] font-extrabold uppercase tracking-[0.17em] text-[#B88A44]">
              Performance Progression
            </p>

            <h3 className="mt-1 text-lg font-extrabold tracking-[-0.025em] text-[#111827] md:text-xl">
              Competition Height Development
            </h3>

          </div>

        </div>


        {/* DATE */}
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#B88A44]/20 bg-[#F8F6F1] px-3.5 py-2">

          <span className="h-1.5 w-1.5 rounded-full bg-[#B88A44]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#64748B]">
            Aug 2022 — Jul 2026
          </span>

        </div>

      </div>


      {/* CHART */}
      <div className="relative bg-gradient-to-b from-white/95 to-[#FCFBF8]/95 p-3 md:p-6">

        <div className="absolute bottom-6 left-0 top-6 w-[3px] rounded-r-full bg-[#B88A44]/25" />

        <ProgressionChart />

      </div>

    </div>


    {/* =====================================================
        RESULTS TABLE
    ====================================================== */}
    <div
      className="
        relative mt-8 overflow-hidden
        rounded-[20px]
        border border-[#111827]/10
        bg-white/95
        shadow-[0_16px_50px_rgba(17,24,39,0.07)]
        backdrop-blur-md
      "
    >

      {/* GOLD TOP LINE */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#8F672F] via-[#D4AF68] to-[#8F672F]" />


      {/* TABLE HEADER */}
      <div className="flex flex-col gap-5 border-b border-[#111827]/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-7">

        <div className="flex items-center gap-4">

          {/* ICON */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B88A44]/10 text-[#B88A44]">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path d="M5 4h14v16H5z" />
              <path d="M8 8h8" />
              <path d="M8 12h8" />
              <path d="M8 16h5" />
            </svg>

          </div>


          <div>

            <div className="flex items-center gap-2">

              <span className="h-[2px] w-5 bg-[#B88A44]" />

              <p className="text-[9px] font-extrabold uppercase tracking-[0.17em] text-[#B88A44]">
                Competition Record
              </p>

            </div>


            <h3 className="mt-1.5 text-xl font-extrabold tracking-[-0.03em] text-[#111827] md:text-2xl">
              Recorded Results
            </h3>

          </div>

        </div>


        <p className="max-w-[360px] text-[11px] font-medium leading-5 text-[#64748B]">
          Competition results showing event, category, placing and recorded
          height across Sandil&apos;s progression.
        </p>

      </div>


      {/* TABLE */}
      <div className="relative p-4 md:p-6">

        {/* INNER GOLD LINE */}
        <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#B88A44]/50 to-transparent" />


        <div
          className="
            overflow-hidden
            rounded-xl
            border border-[#111827]/10
            bg-white

            [&_table]:w-full
            [&_table]:border-collapse

            [&_thead]:bg-[#F8F6F1]

            [&_th]:border-b
            [&_th]:border-[#B88A44]/25
            [&_th]:px-4
            [&_th]:py-3.5
            [&_th]:text-left
            [&_th]:text-[9px]
            [&_th]:font-extrabold
            [&_th]:uppercase
            [&_th]:tracking-[0.13em]
            [&_th]:text-[#8F672F]

            [&_td]:border-b
            [&_td]:border-[#111827]/10
            [&_td]:px-4
            [&_td]:py-3.5
            [&_td]:text-[11px]
            [&_td]:font-medium
            [&_td]:text-[#475569]

            [&_tbody_tr]:transition-all
            [&_tbody_tr]:duration-200

            [&_tbody_tr:nth-child(even)]:bg-[#FCFBF8]

            [&_tbody_tr:hover]:bg-[#B88A44]/[0.06]

            [&_tbody_tr:hover_td:first-child]:shadow-[inset_3px_0_0_#B88A44]
          "
        >
          <ResultsTable />
        </div>


        {/* TABLE FOOTER */}
        <div className="mt-5 flex items-center gap-3">

          <span className="h-1.5 w-1.5 rounded-full bg-[#B88A44]" />

          <span className="text-[8px] font-extrabold uppercase tracking-[0.15em] text-[#64748B]">
            Competition Performance Record
          </span>

          <div className="h-px flex-1 bg-gradient-to-r from-[#B88A44]/25 to-transparent" />

        </div>

      </div>

    </div>

  </div>
</section>

      <section
  id="academics"
  className={`${manrope.className} relative overflow-hidden bg-[#F8F6F1] px-5 py-14 md:px-8 md:py-20`}
>
  {/* BACKGROUND DECORATION */}
  <div className="pointer-events-none absolute -right-20 top-20 h-[360px] w-[360px] rounded-full bg-[#D4AF68]/10 blur-3xl" />
  <div className="pointer-events-none absolute -left-32 bottom-10 h-[280px] w-[280px] rounded-full bg-[#111827]/5 blur-3xl" />

  <div className="relative mx-auto max-w-[1320px]">

    {/* SECTION TITLE */}
    <SectionTitle
      kicker="Student Athlete"
      title="Academic strength matters too."
      description="Strong academic performance, leadership responsibility, and professional experience alongside competitive high jump."
    />

    <div className="mt-10 grid gap-6 lg:grid-cols-2">

      {/* =====================================================
          ACADEMICS
      ====================================================== */}
      <div className="overflow-hidden rounded-[22px] border border-[#111827]/10 bg-white shadow-[0_16px_45px_rgba(17,24,39,0.06)]">

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-[#111827]/10 px-5 py-5 md:px-7">

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#B88A44]">
              Academic Record
            </p>

            <h3 className="mt-1.5 text-2xl font-extrabold uppercase tracking-[-0.02em] text-[#111827] md:text-3xl">
              Qualifications
            </h3>
          </div>

          {/* ICON */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B88A44]/10 text-[#B88A44]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-4 w-4"
            >
              <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
              <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5A2.5 2.5 0 0 1 20 21.5v-16Z" />
            </svg>
          </div>

        </div>

        {/* ACADEMIC ITEMS */}
        <div className="px-5 md:px-7">

          {academics.map((item, index) => (
            <div
              key={item.subject}
              className="
                group grid grid-cols-[1fr_auto]
                items-center gap-5
                border-b border-[#111827]/10
                py-5
              "
            >

              {/* LEFT */}
              <div className="flex gap-3">

                <span className="mt-0.5 text-[11px] font-bold text-[#B88A44]/55">
                  0{index + 1}
                </span>

                <div>
                  <h4 className="text-lg font-extrabold uppercase leading-tight tracking-[-0.01em] text-[#111827] transition-colors duration-300 group-hover:text-[#B88A44] md:text-xl">
                    {item.subject}
                  </h4>

                  <p className="mt-1.5 text-[11px] font-medium leading-5 text-[#64748B]">
                    {item.board}
                  </p>

                  {item.status === "AS" && (
                    <span className="mt-2 inline-flex rounded-full bg-[#111827]/5 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.14em] text-[#64748B]">
                      AS Level
                    </span>
                  )}
                </div>

              </div>

              {/* GRADE */}
              <div
                className={`
                  flex min-h-[54px] min-w-[58px]
                  items-center justify-center
                  rounded-xl
                  px-3
                  !text-[12px]
                  font-extrabold
                  ${
                    item.grade === "A*"
                      ? "bg-[#B88A44] text-white"
                      : item.grade === "A"
                      ? "bg-[#111827] text-white"
                      : "bg-[#F1EEE7] text-[#64748B]"
                  }
                `}
              >
                {item.grade}
              </div>

            </div>
          ))}

        </div>

        {/* SUMMARY */}
        <div className="px-5 pb-6 pt-5 md:px-7">

          <div className="rounded-xl border border-[#B88A44]/20 bg-[#B88A44]/5 p-4">

            <div className="flex gap-3">

              <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B88A44]" />

              <p className="text-[12px] leading-6 text-[#64748B]">
                <strong className="font-semibold text-[#111827]">
                  IAL Mathematics complete with A*.
                </strong>{" "}
                AS Economics awarded A. Full IAL Economics and Further
                Mathematics are scheduled for the 2027 examination series.
              </p>

            </div>

          </div>

          {/* TRANSCRIPT */}
          <div className="mt-4">

            {athlete.transcriptUrl ? (
              <a
                href={athlete.transcriptUrl}
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-[#111827]
                  px-4 py-2.5
                  text-[9px] font-bold uppercase
                  tracking-[0.15em]
                  text-white
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#B88A44]
                "
              >
                View Transcript
                <span>→</span>
              </a>
            ) : (
              <span className="inline-flex rounded-full border border-[#111827]/10 bg-[#F8F6F1] px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#64748B]">
                Transcript link to be added
              </span>
            )}

          </div>

        </div>
      </div>


      {/* =====================================================
          LEADERSHIP & EXPERIENCE
      ====================================================== */}
      <div className="overflow-hidden rounded-[22px] bg-[#111827] text-white shadow-[0_16px_45px_rgba(17,24,39,0.14)]">

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5 md:px-7">

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D4AF68]">
              Beyond Competition
            </p>

            <h3 className="mt-1.5 text-2xl font-extrabold uppercase tracking-[-0.02em] text-white md:text-3xl">
              Leadership & Experience
            </h3>
          </div>

          {/* ICON */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#D4AF68]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-4 w-4"
            >
              <path d="M12 3l2.6 5.3 5.9.9-4.3 4.2 1 5.9L12 16.5l-5.2 2.8 1-5.9-4.3-4.2 5.9-.9L12 3Z" />
            </svg>
          </div>

        </div>

        {/* EXPERIENCE ITEMS */}
        <div className="px-5 md:px-7">

          {experience.map((item, i) => (
            <article
              key={item.title}
              className="
                group grid grid-cols-[48px_1fr]
                gap-4
                border-b border-white/10
                py-5
              "
            >

              {/* NUMBER */}
              <div
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border border-[#D4AF68]/25
                  bg-[#D4AF68]/10
                  text-sm font-bold
                  text-[#D4AF68]
                  transition-all duration-300
                  group-hover:bg-[#D4AF68]
                  group-hover:text-[#111827]
                "
              >
                0{i + 1}
              </div>

              {/* CONTENT */}
              <div>

                <h4 className="text-lg font-extrabold uppercase leading-tight tracking-[-0.01em] text-white transition-colors duration-300 group-hover:text-[#D4AF68] md:text-xl">
                  {item.title}
                </h4>

                <p className="mt-1.5 text-[12px] font-semibold text-white/80">
                  {item.organisation}
                </p>

                <p className="mt-2 max-w-lg text-[11px] leading-5 text-white/55">
                  {item.detail}
                </p>

                {/* ACCENT LINE */}
                <div className="mt-4 h-px w-8 bg-[#D4AF68] transition-all duration-500 group-hover:w-16" />

              </div>

            </article>
          ))}

        </div>

        {/* BOTTOM NOTE */}
        <div className="px-5 py-5 md:px-7">

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">

            <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#D4AF68]">
              Student Athlete
            </p>

            <p className="mt-2 text-[12px] leading-6 text-white/55">
              Competitive sport, academic performance, leadership, and
              professional experience reflect a consistent commitment to
              disciplined development.
            </p>

          </div>

        </div>

      </div>

    </div>
  </div>
</section>

      <section
  id="contact"
  className={`${manrope.className} relative overflow-hidden px-5 py-16 text-white md:px-8 md:py-20`}
>
  {/* =====================================================
    BACKGROUND IMAGE
====================================================== */}
<div className="absolute inset-0">

  <Image
    src="/media/news.jpeg"
    alt=""
    fill
    priority={false}
    className="object-cover object-[90%_35%]"
    sizes="100vw"
  />

  {/* LIGHT WINE TINT - image remains visible */}
  <div className="absolute inset-0 bg-[#6E2C3A]/10" />

<div className="absolute inset-0 bg-gradient-to-r from-[#4A1F29]/35 via-[#6E2C3A]/10 to-transparent" />

<div className="absolute inset-0 bg-gradient-to-t from-[#281017]/15 via-transparent to-transparent" />

</div>

  {/* SOFT GOLD DECORATION */}
  <div className="pointer-events-none absolute -right-24 top-[-100px] h-[360px] w-[360px] rounded-full bg-[#D4AF68]/15 blur-[100px]" />


  {/* =====================================================
      CONTENT
  ====================================================== */}
  <div className="relative mx-auto max-w-[1320px]">

    {/* SMALL LABEL */}
    <div className="flex items-center gap-3">

      <span className="h-[2px] w-8 bg-[#D4AF68]" />

      <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#D4AF68]">
        Coaches & Recruiters
      </p>

    </div>


    {/* MAIN CONTENT */}
    <div className="mt-8 grid gap-12 md:grid-cols-[1.15fr_.85fr] md:items-end">

      {/* LEFT */}
      <div>

        <h2 className="max-w-[720px] text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
          Start the
          <br />

          <span className="text-[#E3C17A]">
            conversation.
          </span>
        </h2>


        <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-white/65 md:text-[15px]">
          For recruitment opportunities, competition information, academic
          details or additional footage, get in touch directly.
        </p>


        {/* QUICK CTA BUTTONS */}
        <div className="mt-8 flex flex-wrap gap-3">

          <a
            href={`mailto:${athlete.email}`}
            className="
              group inline-flex items-center gap-3
              rounded-full
              bg-[#D4AF68]
              px-5 py-3
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.14em]
              text-[#3F101B]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:bg-white
              hover:shadow-lg
            "
          >
            Send Email

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>


          <a
            href={athlete.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group inline-flex items-center gap-3
              rounded-full
              border border-white/25
              bg-white/10
              px-5 py-3
              text-[10px]
              font-extrabold
              uppercase
              tracking-[0.14em]
              text-white
              backdrop-blur-sm
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-white/50
              hover:bg-white
              hover:text-[#3F101B]
            "
          >
            WhatsApp

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>

        </div>

      </div>


      {/* =====================================================
          CONTACT DETAILS
      ====================================================== */}
      <div className="overflow-hidden rounded-[20px] border border-white/15 bg-white/[0.08] p-5 backdrop-blur-md md:p-6">

        {/* EMAIL */}
        <div className="border-b border-white/15 pb-5">

          <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#D4AF68]">
            Email
          </p>

          <a
            href={`mailto:${athlete.email}`}
            className="
              mt-2 block
              break-all
              text-[15px]
              font-bold
              tracking-[-0.015em]
              text-white
              transition-colors
              hover:text-[#E3C17A]
              md:text-[17px]
            "
          >
            {athlete.email}
          </a>

        </div>


        {/* PHONE */}
        <div className="border-b border-white/15 py-5">

          <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#D4AF68]">
            Phone / WhatsApp
          </p>

          <a
            href={athlete.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-2 block
              text-[15px]
              font-bold
              tracking-[-0.015em]
              text-white
              transition-colors
              hover:text-[#E3C17A]
              md:text-[17px]
            "
          >
            {athlete.phone}
          </a>

        </div>


        {/* LOCATION */}
        <div className="pt-5">

          <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#D4AF68]">
            Location
          </p>

          <p className="mt-2 text-[15px] font-bold tracking-[-0.015em] text-white md:text-[17px]">
            {athlete.location}
          </p>

        </div>

      </div>

    </div>


    {/* =====================================================
        FOOTER LINE
    ====================================================== */}
    <div className="mt-14 flex flex-col gap-4 border-t border-white/20 pt-5 sm:flex-row sm:items-center sm:justify-between">

      <div>

        <p className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-white/80">
          {athlete.name}
        </p>

        <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/45">
          High Jump · International Recruit
        </p>

      </div>


      <div className="flex items-center gap-3">

        <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF68]" />

        <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-white/55">
          PB 2.01 m · Class of 2027
        </span>

      </div>

    </div>

  </div>
</section>
    </main>
  );
}
