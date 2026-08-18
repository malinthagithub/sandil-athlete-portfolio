import Image from "next/image";
import { athlete, academics, experience, videos } from "@/data/athlete";
import { SectionTitle } from "@/components/SectionTitle";
import VideoCard from "@/components/VideoCard";
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
    <main className="min-w-0 overflow-x-hidden pt-[64px] sm:pt-[70px] lg:pt-[72px]">

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <header className="fixed left-0 right-0 top-0 z-[100] w-full">
        <div className="border-b border-white/10 bg-[#91948F]/70 backdrop-blur-xl">

          <div className="mx-auto flex h-[64px] max-w-[1320px] items-center justify-between gap-3 px-3 sm:h-[70px] sm:px-5 md:px-6 lg:h-[72px] lg:px-8">

            {/* BRAND */}
            <a
              href="#top"
              className="group flex min-w-0 items-center gap-2 sm:gap-3 lg:gap-4"
            >
              {/* SH */}
              <div
                className="
                  flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-xl
                  border border-white/15
                  bg-white/5
                  transition-all duration-300
                  group-hover:border-[#D4AF68]/60
                  group-hover:bg-[#D4AF68]/10
                  sm:h-10 sm:w-10
                "
              >
                <span className="font-display text-base font-bold text-white sm:text-lg">
                  SH
                </span>
              </div>

              {/* divider */}
              <div className="hidden h-8 w-px bg-white/15 sm:block" />

              {/* Athlete */}
              <div className="min-w-0">
                <p className="truncate font-display text-[11px] font-bold uppercase leading-none tracking-[0.01em] text-white sm:text-[14px] md:text-[15px] lg:text-[17px]">
                  Sandil Hetti Arachchige
                </p>

                <div className="mt-1.5 flex items-center gap-2">
                  <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-black sm:text-[10px] lg:text-[12px]">
                    High Jump
                  </span>

                  <span className="h-1 w-1 rounded-full bg-white/30" />
                </div>
              </div>
            </a>


            {/* DESKTOP NAV */}
            <nav
              className="hidden items-center gap-0.5 lg:flex xl:gap-1"
              aria-label="Main navigation"
            >
              {nav.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="
                    group relative
                    rounded-lg
                    px-3 py-2.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-white
                    transition-all duration-300
                    hover:bg-black/10
                    xl:px-4
                    xl:text-[12px]
                    xl:tracking-[0.15em]
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


            {/* RIGHT SIDE */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">

              {/* DESKTOP/TABLET CONTACT */}
              <a
                href={`mailto:${athlete.email}`}
                className="
                  group hidden items-center gap-2
                  rounded-xl
                  bg-[#D4AF68]
                  px-3 py-2.5
                  text-[8px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#2F3E4E]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-white
                  sm:inline-flex
                  md:px-4
                  lg:px-5
                  lg:text-[9px]
                "
              >
                Contact

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>


              {/* MOBILE / TABLET MENU */}
              <details className="group relative lg:hidden">

                <summary
                  className="
                    flex h-10 w-10 cursor-pointer
                    list-none items-center justify-center
                    rounded-xl
                    border border-white/20
                    bg-white/10
                    text-white
                    backdrop-blur-md
                    transition
                    hover:bg-white/20
                    [&::-webkit-details-marker]:hidden
                  "
                  aria-label="Open navigation"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </svg>
                </summary>


                <div
                  className="
                    absolute right-0 top-[48px]
                    w-[230px]
                    overflow-hidden
                    rounded-2xl
                    border border-white/15
                    bg-[#747873]/95
                    p-2
                    shadow-[0_20px_60px_rgba(0,0,0,0.18)]
                    backdrop-blur-xl
                  "
                >
                  {nav.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      className="
                        flex items-center justify-between
                        rounded-xl
                        px-4 py-3
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-white
                        transition
                        hover:bg-white/10
                        hover:text-[#D4AF68]
                      "
                    >
                      {label}
                      <span>→</span>
                    </a>
                  ))}
                </div>

              </details>
            </div>

          </div>
        </div>
      </header>


      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        id="top"
        className="relative scroll-mt-20 overflow-hidden border-b border-[#111827]/10 bg-[#F8F6F1]"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-[#D4AF68]/10 blur-3xl sm:h-[500px] sm:w-[500px]" />

        <div className="relative mx-auto grid max-w-[1320px] lg:min-h-[720px] lg:grid-cols-[1.05fr_.95fr]">

          {/* LEFT CONTENT */}
          <div className="flex min-w-0 flex-col justify-between px-5 py-10 sm:px-7 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-20">

            <div>

              {/* CATEGORY */}
              <div className="flex items-start gap-3 sm:items-center">
                <span className="mt-1.5 h-[2px] w-7 shrink-0 bg-[#B88A44] sm:mt-0 sm:w-10" />

                <p className="text-[8px] font-bold uppercase leading-5 tracking-[0.16em] text-[#B88A44] sm:text-[9px] md:text-[10px] md:tracking-[0.22em]">
                  {athlete.event} · {athlete.category} · {athlete.classYear}
                </p>
              </div>


              {/* NAME */}
              <h1
                className="
                  mt-6
                  max-w-[850px]
                  break-words
                  font-['Plus_Jakarta_Sans']
                  text-[3.2rem]
                  font-extrabold
                  uppercase
                  leading-[0.82]
                  tracking-[0.005em]
                  text-[#111827]
                  sm:text-[4.5rem]
                  md:text-[5.6rem]
                  lg:text-[6rem]
                  xl:text-[7.5rem]
                "
              >
                Sandil
                <br />

                <span className="text-[#B88A44]">
                  Hetti
                </span>

                <br />

                Arachchige
              </h1>


              {/* DESCRIPTION */}
              <p className="mt-7 max-w-xl text-sm leading-6 text-[#64748B] sm:text-base sm:leading-7 md:mt-9 md:text-lg">
                Sri Lankan high jumper combining a{" "}
                <strong className="font-semibold text-[#111827]">
                  2.01 m personal best
                </strong>{" "}
                with strong Edexcel IAL academics and school leadership.
              </p>


              {/* CTA */}
              <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
                <a
                  href="#results"
                  className="
                    group inline-flex items-center gap-3
                    rounded-full
                    bg-[#111827]
                    px-5 py-3
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-white
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:bg-[#B88A44]
                    hover:shadow-lg
                    sm:px-6 sm:py-3.5 sm:text-[10px]
                  "
                >
                  View Achievements

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>


            {/* STATS */}
            <div className="mt-10 border-t border-[#111827]/15 pt-6 sm:mt-12 md:mt-14 md:pt-7">

              <div className="grid grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4 sm:gap-x-0">

                {[
                  ["PB", `${athlete.personalBest} / ${athlete.personalBestImperial}`],
                  ["Target", athlete.target],
                  ["Class", "2027"],
                  ["Base", athlete.location],
                ].map(([k, v], index) => (
                  <div
                    key={k}
                    className={`relative min-w-0 ${
                      index !== 0
                        ? "sm:border-l sm:border-[#111827]/10 sm:pl-4 lg:pl-5"
                        : ""
                    }`}
                  >
                    <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#64748B] sm:text-[9px] sm:tracking-[0.2em]">
                      {k}
                    </p>

                    <p
                      className={`
                        mt-2
                        break-words
                        font-display
                        font-bold
                        uppercase
                        tracking-tight
                        text-[#111827]
                        ${
                          k === "Base"
                            ? "text-base sm:text-lg lg:text-xl"
                            : "text-xl sm:text-xl lg:text-2xl"
                        }
                      `}
                    >
                      {v}
                    </p>

                    {k === "PB" && (
                      <span className="mt-2 inline-block rounded-full bg-[#B88A44]/10 px-2 py-1 text-[7px] font-bold uppercase tracking-[0.12em] text-[#B88A44] sm:px-2.5 sm:text-[8px]">
                        Personal Best
                      </span>
                    )}
                  </div>
                ))}

              </div>
            </div>
          </div>


          {/* RIGHT IMAGE */}
          <figure className="relative min-h-[430px] overflow-hidden bg-[#111827] sm:min-h-[540px] lg:min-h-full">

            <Image
              src={athlete.heroPhoto}
              alt={athlete.heroPhotoAlt}
              fill
              priority
              className="object-cover object-[50%_20%] transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 46vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/15 to-transparent" />


            {/* TOP BADGE */}
            <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/20 px-3 py-2 backdrop-blur-md sm:right-5 sm:top-5 md:right-7 md:top-7">
              <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-white sm:text-[9px] sm:tracking-[0.2em]">
                Sri Lanka · High Jump
              </p>
            </div>


            {/* PB */}
            <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 sm:px-7 sm:pb-7 md:px-8 md:pb-9">

              <div className="mb-4 h-px w-full bg-white/20 sm:mb-5" />

              <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#D4AF68] sm:text-[9px] sm:tracking-[0.2em]">
                Personal Best · July 2026
              </p>

              <div className="mt-2 flex flex-wrap items-end gap-2 sm:gap-3">

                <span className="font-['DM_Sans'] text-[4rem] font-bold leading-none tracking-[-0.02em] text-white sm:text-[5.5rem] md:text-[6.5rem] xl:text-[8rem]">
                  2.01
                </span>

                <span className="mb-2 font-display text-base font-semibold uppercase tracking-wide text-white/80 sm:mb-3 sm:text-xl md:text-2xl">
                  metres
                </span>

              </div>

              <figcaption className="mt-3 max-w-md text-[10px] leading-5 text-white/65 sm:mt-4 sm:text-xs">
                {athlete.heroPhotoCaption}
              </figcaption>
            </div>

          </figure>
        </div>
      </section>


      {/* =====================================================
          ATHLETE MINDSET
      ====================================================== */}
      <section className="border-b border-line bg-white px-5 py-12 sm:py-14 md:px-8 md:py-20">

        <div className="mx-auto grid max-w-[1320px] gap-8 md:grid-cols-[210px_1fr] lg:grid-cols-[240px_1fr] lg:gap-10">

          {/* LEFT */}
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#D4AF37] sm:text-[10px] sm:tracking-[0.2em]">
              Athlete Mindset
            </p>


            {/* IMAGE */}
            <div className="relative mt-5 aspect-[4/5] w-full max-w-[180px] overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-[#F8F6F1] shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:mt-7 sm:max-w-[210px]">

              <Image
                src="/media/news.jpeg"
                alt="Sandil Hetti Arachchige"
                fill
                className="object-cover object-top transition-transform duration-500 hover:scale-[1.03]"
                sizes="210px"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3">
                <p className="text-[7px] font-bold uppercase tracking-[0.14em] text-white sm:text-[8px] sm:tracking-[0.16em]">
                  High Jump · Sri Lanka
                </p>
              </div>

            </div>
          </div>


          {/* RIGHT */}
          <div className="min-w-0 max-w-4xl">

            <p className="font-display text-2xl font-semibold leading-tight text-[#0F172A] sm:text-3xl md:text-4xl lg:text-5xl">
              “I compete with none but myself.”
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">
              That mindset has driven every leap since I first stepped onto a
              track at age nine. For nearly a decade, high jump has shaped how
              I organise my life — a minimum of five training sessions a week,
              maintained through exam seasons, competitions, and a full
              academic timetable.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
              That discipline is the thread tying together the two things I
              care about most: my sport and my studies. I have refused to let
              either come at the expense of the other. My ambition is to bring
              that same standard of excellence, competitive grit, and
              discipline to a top-tier Division I program.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          QUICK FACTS
      ====================================================== */}
      <section className="border-b border-line bg-gradient-to-t from-[#8F672F]/50 px-4 py-5 sm:px-5 sm:py-6 md:px-8">

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
                px-4 py-5
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-paper/70
                hover:shadow-[0_14px_35px_rgba(0,0,0,0.08)]
                sm:px-5
                md:px-6 md:py-6
              "
            >
              <div className="flex items-center justify-between gap-3">

                <div className="flex min-w-0 items-center gap-3">

                  <div
                    className="
                      flex h-9 w-9 shrink-0 items-center justify-center
                      border border-wine/20
                      text-wine
                      transition-all duration-300
                      group-hover:bg-wine
                      group-hover:text-white
                    "
                  >
                    {item.icon}
                  </div>

                  <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-wine sm:text-[9px] sm:tracking-[0.18em]">
                    {item.label}
                  </p>

                </div>

                <span className="shrink-0 font-display text-xs font-bold text-ink/15 sm:text-sm">
                  0{index + 1}
                </span>

              </div>


              <div className="mt-6 sm:mt-7">

                <h3 className="break-words font-display text-xl font-bold uppercase leading-none text-ink sm:text-2xl md:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-[11px] font-semibold leading-5 text-slate sm:min-h-[40px] sm:text-xs">
                  {item.detail}
                </p>

              </div>


              <div className="mt-5 h-px w-full bg-line sm:mt-6">
                <div className="h-px w-10 bg-wine transition-all duration-500 group-hover:w-full" />
              </div>

            </article>
          ))}

        </div>
      </section>


      {/* =====================================================
          FILM
      ====================================================== */}
      <section
        id="film"
        className="scroll-mt-20 px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-[1320px]">

          <SectionTitle
            kicker="Recruiting Film"
            title="See the jump before reading the résumé."
            description="Watch Sandil's key competition performances and explore more high-jump footage."
          />


          {/* MAIN VIDEO + PHOTO */}
          <div className="mt-8 grid min-w-0 gap-5 sm:mt-10 md:grid-cols-2">
            {videos.slice(0, 1).map((video) => (
              <VideoCard key={video.title} {...video} />
            ))}
          </div>


          {/* VIDEO GALLERY */}
          {videos.length > 1 && (
            <div
              id="gallery"
              className="mt-10 scroll-mt-24 sm:mt-12"
            >

              <div className="flex items-end justify-between gap-4">

                <div className="min-w-0">
                  <p className="text-[8px] font-bold uppercase tracking-[0.17em] text-[#B88A44] sm:text-[9px] sm:tracking-[0.2em]">
                    Video Gallery
                  </p>

                  <h3 className="mt-2 font-display text-xl font-bold uppercase text-[#111827] sm:text-2xl md:text-3xl">
                    More Competition Film
                  </h3>
                </div>


                <div className="hidden shrink-0 items-center gap-2 sm:flex">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#111827]/10 bg-white text-[#111827] md:h-10 md:w-10">
                    ←
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#111827]/10 bg-white text-[#111827] md:h-10 md:w-10">
                    →
                  </div>

                </div>
              </div>


              {/* SCROLLING CARDS */}
              <div
                className="
                  -mx-4 mt-5 flex
                  snap-x snap-mandatory
                  gap-4
                  overflow-x-auto
                  scroll-smooth
                  px-4 pb-5
                  sm:mx-0 sm:px-0
                  [scrollbar-color:#B88A44_transparent]
                  [scrollbar-width:thin]
                "
              >
                {videos.slice(1).map((video, index) => (
                  <article
                    key={`${video.title}-${index}`}
                    className="
                      group
                      w-[82vw]
                      max-w-[390px]
                      shrink-0
                      snap-start
                      overflow-hidden
                      rounded-2xl
                      border border-[#111827]/10
                      bg-white
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-[#B88A44]/40
                      hover:shadow-[0_15px_35px_rgba(17,24,39,0.10)]
                      sm:w-[340px]
                      lg:w-[390px]
                    "
                  >

                    {/* VIDEO */}
                    <div className="overflow-hidden bg-[#111827]">
                      <video
                        controls
                        preload="metadata"
                        className="aspect-video w-full bg-black object-cover"
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support HTML5 video.
                      </video>
                    </div>


                    {/* DETAILS */}
                    <div className="p-4 sm:p-5">

                      <div className="flex items-start justify-between gap-3 sm:gap-4">

                        <div className="min-w-0">

                          <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#B88A44] sm:text-[8px] sm:tracking-[0.18em]">
                            Film {String(index + 2).padStart(2, "0")}
                          </p>

                          <h4 className="mt-2 break-words font-display text-xl font-bold uppercase leading-none text-[#111827] sm:text-2xl">
                            {video.title}
                          </h4>

                          <p className="mt-3 text-[10px] font-medium leading-5 text-[#64748B] sm:text-[11px]">
                            {video.meta}
                          </p>

                        </div>


                        <div
                          className="
                            flex h-8 w-8 shrink-0 items-center justify-center
                            rounded-full
                            bg-[#111827]
                            text-[9px]
                            text-white
                            transition-all duration-300
                            group-hover:bg-[#B88A44]
                            sm:h-9 sm:w-9 sm:text-[10px]
                          "
                        >
                          ▶
                        </div>

                      </div>


                      <div className="mt-5 h-px bg-[#111827]/10">
                        <div className="h-px w-10 bg-[#B88A44] transition-all duration-500 group-hover:w-full" />
                      </div>

                    </div>

                  </article>
                ))}

              </div>


              <p className="mt-1 text-center text-[8px] font-bold uppercase tracking-[0.15em] text-[#64748B] sm:hidden">
                Swipe left or right to view more →
              </p>

            </div>
          )}

        </div>
      </section>


      {/* =====================================================
          RESULTS
      ====================================================== */}
      <section
        id="results"
        className={`${manrope.className} relative scroll-mt-20 overflow-hidden border-y border-[#111827]/10 bg-[#F8F6F1] px-4 py-12 text-[#111827] sm:px-5 sm:py-16 md:px-8 md:py-24`}
      >

        {/* BACKGROUND */}
        <div className="pointer-events-none absolute inset-0">

          <Image
            src="/media/sandil-champion.jpg"
            alt=""
            fill
            className="object-cover object-[50%_25%] opacity-[0.28]"
            sizes="100vw"
          />

          {/* IMPORTANT: TRANSPARENT NOW */}
          <div className="absolute inset-0 bg-[#F7E6D7]/80" />

          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-[#F8F6F1]/80" />

        </div>


        <div className="pointer-events-none absolute right-[-140px] top-[-120px] h-[420px] w-[420px] rounded-full bg-[#D4AF68]/10 blur-[90px]" />

        <div className="pointer-events-none absolute bottom-[-120px] left-[-100px] h-[360px] w-[360px] rounded-full bg-[#B88A44]/5 blur-[90px]" />


        <div className="relative mx-auto max-w-[1320px]">

          {/* INTRO */}
          <div className="grid gap-6 md:gap-8 lg:grid-cols-[170px_1fr]">

            <div>
              <div className="flex items-center gap-3">

                <span className="h-[2px] w-8 bg-[#B88A44]" />

                <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#B88A44] sm:text-[10px] sm:tracking-[0.18em]">
                  Performance
                </p>

              </div>

              <p className="mt-3 max-w-[220px] text-[10px] font-medium leading-5 text-[#64748B] sm:mt-4 sm:text-[11px] lg:max-w-[140px]">
                Competition progression from 2022 to 2026.
              </p>
            </div>


            <div className="min-w-0">

              <h2 className="max-w-4xl text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-[#111827] sm:text-4xl md:text-5xl">

                From 1.63 m to{" "}

                <span className="relative inline-block text-[#B88A44]">
                  2.01 m

                  <span className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full bg-[#D4AF68]/35" />
                </span>


                <span className="mt-4 block text-2xl font-semibold tracking-[-0.025em] text-[#64748B] sm:text-3xl md:text-4xl">
                  The progression is the story.
                </span>

              </h2>


              <p className="mt-5 max-w-2xl text-xs font-medium leading-6 text-[#64748B] sm:mt-6 sm:text-sm sm:leading-7 md:text-[15px]">
                Recorded competition performances from August 2022 to July
                2026, showing consistent development toward a current target
                of 2.05 m.
              </p>

            </div>
          </div>


          {/* PERFORMANCE CARDS */}
          <div className="mt-9 grid grid-cols-1 gap-3 min-[430px]:grid-cols-2 sm:mt-12 sm:gap-4 lg:grid-cols-4">

            {/* PB */}
            <article className="group relative overflow-hidden rounded-[16px] border border-[#111827]/10 bg-white/95 px-4 py-4 shadow-[0_8px_30px_rgba(17,24,39,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B88A44]/40 hover:shadow-[0_18px_45px_rgba(17,24,39,0.09)] sm:rounded-[18px] sm:px-5 sm:py-5">

              <div className="absolute left-0 top-0 h-full w-[3px] bg-[#B88A44]" />

              <div className="flex items-start justify-between">

                <p className="text-[8px] font-extrabold uppercase tracking-[0.14em] text-[#64748B] sm:text-[9px] sm:tracking-[0.16em]">
                  Personal Best
                </p>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B88A44]/10 text-sm font-bold text-[#B88A44]">
                  ↑
                </span>

              </div>

              <div className="mt-4 flex items-end gap-2 sm:mt-5">

                <span className="tabular-nums text-[34px] font-extrabold leading-none tracking-[-0.05em] text-[#111827] sm:text-[40px]">
                  2.01
                </span>

                <span className="mb-1 text-[10px] font-extrabold uppercase text-[#B88A44] sm:text-[11px]">
                  m
                </span>

              </div>

              <div className="mt-4 border-t border-[#111827]/10 pt-3 sm:mt-5">
                <p className="text-[9px] font-semibold text-[#64748B] sm:text-[10px]">
                  July 2026
                </p>
              </div>

            </article>


            {/* TARGET */}
            <article className="group relative overflow-hidden rounded-[16px] border border-[#111827]/10 bg-white/95 px-4 py-4 shadow-[0_8px_30px_rgba(17,24,39,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B88A44]/40 hover:shadow-[0_18px_45px_rgba(17,24,39,0.09)] sm:rounded-[18px] sm:px-5 sm:py-5">

              <div className="absolute left-0 top-0 h-full w-[3px] bg-[#D4AF68]/65" />

              <div className="flex items-start justify-between">

                <p className="text-[8px] font-extrabold uppercase tracking-[0.14em] text-[#64748B] sm:text-[9px]">
                  Current Target
                </p>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B88A44]/10 text-sm font-bold text-[#B88A44]">
                  ◎
                </span>

              </div>

              <div className="mt-4 flex items-end gap-2 sm:mt-5">

                <span className="tabular-nums text-[34px] font-extrabold leading-none tracking-[-0.05em] text-[#111827] sm:text-[40px]">
                  2.05
                </span>

                <span className="mb-1 text-[10px] font-extrabold uppercase text-[#B88A44] sm:text-[11px]">
                  m
                </span>

              </div>

              <div className="mt-4 border-t border-[#111827]/10 pt-3 sm:mt-5">
                <p className="text-[9px] font-semibold text-[#64748B] sm:text-[10px]">
                  Next milestone
                </p>
              </div>

            </article>


            {/* PROGRESSION */}
            <article className="group relative overflow-hidden rounded-[16px] border border-[#111827]/10 bg-white/95 px-4 py-4 shadow-[0_8px_30px_rgba(17,24,39,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#B88A44]/40 hover:shadow-[0_18px_45px_rgba(17,24,39,0.09)] sm:rounded-[18px] sm:px-5 sm:py-5">

              <div className="absolute left-0 top-0 h-full w-[3px] bg-[#D4AF68]/65" />

              <div className="flex items-start justify-between">

                <p className="text-[8px] font-extrabold uppercase tracking-[0.14em] text-[#64748B] sm:text-[9px]">
                  Progression
                </p>

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#B88A44]/10 text-sm font-bold text-[#B88A44]">
                  ↗
                </span>

              </div>

              <div className="mt-4 flex items-end gap-2 sm:mt-5">

                <span className="tabular-nums text-[34px] font-extrabold leading-none tracking-[-0.05em] text-[#111827] sm:text-[40px]">
                  +0.38
                </span>

                <span className="mb-1 text-[10px] font-extrabold uppercase text-[#B88A44] sm:text-[11px]">
                  m
                </span>

              </div>

              <div className="mt-4 border-t border-[#111827]/10 pt-3 sm:mt-5">
                <p className="text-[9px] font-semibold text-[#64748B] sm:text-[10px]">
                  2022 → 2026
                </p>
              </div>

            </article>


            {/* PROFILE */}
            <article className="group relative overflow-hidden rounded-[16px] border border-[#B88A44]/25 bg-gradient-to-br from-[#FFFDF8]/95 to-[#F5EBD9]/95 px-4 py-4 shadow-[0_8px_30px_rgba(17,24,39,0.05)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(17,24,39,0.09)] sm:rounded-[18px] sm:px-5 sm:py-5">

              <div className="absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full border border-[#B88A44]/15" />
              <div className="absolute right-[-10px] top-[-10px] h-14 w-14 rounded-full border border-[#B88A44]/20" />

              <p className="text-[8px] font-extrabold uppercase tracking-[0.14em] text-[#B88A44] sm:text-[9px]">
                Athlete Profile
              </p>

              <p className="mt-4 text-xl font-extrabold leading-[1.08] tracking-[-0.03em] text-[#111827] sm:mt-5 sm:text-2xl">
                U18
                <br />
                High Jump
              </p>

              <div className="mt-4 border-t border-[#B88A44]/20 pt-3 sm:mt-5">
                <p className="text-[9px] font-semibold text-[#64748B] sm:text-[10px]">
                  Sri Lanka · Class of 2027
                </p>
              </div>

            </article>

          </div>


          {/* PROGRESSION CHART */}
          <div className="relative mt-7 overflow-hidden rounded-[16px] border border-[#111827]/10 bg-white/95 shadow-[0_16px_50px_rgba(17,24,39,0.07)] backdrop-blur-md sm:mt-10 sm:rounded-[20px]">

            <div className="h-[3px] w-full bg-gradient-to-r from-[#8F672F] via-[#D4AF68] to-[#8F672F]" />


            <div className="flex flex-col gap-4 border-b border-[#111827]/10 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-5 md:px-7">

              <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#B88A44]/10 text-[#B88A44] sm:h-10 sm:w-10">
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


                <div className="min-w-0">

                  <p className="text-[7px] font-extrabold uppercase tracking-[0.14em] text-[#B88A44] sm:text-[9px] sm:tracking-[0.17em]">
                    Performance Progression
                  </p>

                  <h3 className="mt-1 text-sm font-extrabold tracking-[-0.02em] text-[#111827] sm:text-lg md:text-xl">
                    Competition Height Development
                  </h3>

                </div>

              </div>


              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#B88A44]/20 bg-[#F8F6F1] px-3 py-2 sm:px-3.5">

                <span className="h-1.5 w-1.5 rounded-full bg-[#B88A44]" />

                <span className="text-[7px] font-bold uppercase tracking-[0.1em] text-[#64748B] sm:text-[9px] sm:tracking-[0.12em]">
                  Aug 2022 — Jul 2026
                </span>

              </div>

            </div>


            {/* CHART - RESPONSIVE */}
            <div className="relative overflow-x-auto bg-gradient-to-b from-white/95 to-[#FCFBF8]/95 p-3 sm:p-4 md:p-6">

              <div className="absolute bottom-6 left-0 top-6 w-[3px] rounded-r-full bg-[#B88A44]/25" />

              <div className="min-w-[600px] sm:min-w-0">
                <ProgressionChart />
              </div>

            </div>

          </div>


          {/* RESULTS TABLE */}
          <div className="relative mt-6 overflow-hidden rounded-[16px] border border-[#111827]/10 bg-white/95 shadow-[0_16px_50px_rgba(17,24,39,0.07)] backdrop-blur-md sm:mt-8 sm:rounded-[20px]">

            <div className="h-[3px] w-full bg-gradient-to-r from-[#8F672F] via-[#D4AF68] to-[#8F672F]" />


            <div className="flex flex-col gap-4 border-b border-[#111827]/10 px-4 py-4 sm:gap-5 sm:px-5 sm:py-5 md:flex-row md:items-center md:justify-between md:px-7">

              <div className="flex min-w-0 items-center gap-3 sm:gap-4">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#B88A44]/10 text-[#B88A44] sm:h-10 sm:w-10">

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


                <div className="min-w-0">

                  <div className="flex items-center gap-2">
                    <span className="h-[2px] w-4 shrink-0 bg-[#B88A44] sm:w-5" />

                    <p className="text-[7px] font-extrabold uppercase tracking-[0.14em] text-[#B88A44] sm:text-[9px] sm:tracking-[0.17em]">
                      Competition Record
                    </p>
                  </div>

                  <h3 className="mt-1.5 text-lg font-extrabold tracking-[-0.025em] text-[#111827] sm:text-xl md:text-2xl">
                    Recorded Results
                  </h3>

                </div>
              </div>


              <p className="max-w-[360px] text-[10px] font-medium leading-5 text-[#64748B] sm:text-[11px]">
                Competition results showing event, category, placing and
                recorded height across Sandil&apos;s progression.
              </p>

            </div>


            {/* RESPONSIVE TABLE */}
            <div className="relative p-3 sm:p-4 md:p-6">

              <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-[#B88A44]/50 to-transparent" />


              <div
                className="
                  overflow-x-auto
                  rounded-xl
                  border border-[#111827]/10
                  bg-white

                  [&_table]:w-full
                  [&_table]:border-collapse

                  [&_thead]:bg-[#F8F6F1]

                  [&_th]:whitespace-nowrap
                  [&_th]:border-b
                  [&_th]:border-[#B88A44]/25
                  [&_th]:px-3
                  [&_th]:py-3
                  [&_th]:text-left
                  [&_th]:text-[8px]
                  [&_th]:font-extrabold
                  [&_th]:uppercase
                  [&_th]:tracking-[0.1em]
                  [&_th]:text-[#8F672F]
                  sm:[&_th]:px-4
                  sm:[&_th]:py-3.5
                  sm:[&_th]:text-[9px]

                  [&_td]:whitespace-nowrap
                  [&_td]:border-b
                  [&_td]:border-[#111827]/10
                  [&_td]:px-3
                  [&_td]:py-3
                  [&_td]:text-[10px]
                  [&_td]:font-medium
                  [&_td]:text-[#475569]
                  sm:[&_td]:px-4
                  sm:[&_td]:py-3.5
                  sm:[&_td]:text-[11px]

                  [&_tbody_tr]:transition-all
                  [&_tbody_tr]:duration-200
                  [&_tbody_tr:nth-child(even)]:bg-[#FCFBF8]
                  [&_tbody_tr:hover]:bg-[#B88A44]/[0.06]
                  [&_tbody_tr:hover_td:first-child]:shadow-[inset_3px_0_0_#B88A44]
                "
              >
                <div className="min-w-[760px]">
                  <ResultsTable />
                </div>
              </div>


              <p className="mt-3 text-center text-[7px] font-bold uppercase tracking-[0.12em] text-[#64748B] sm:hidden">
                Swipe table left or right →
              </p>


              <div className="mt-4 flex items-center gap-3 sm:mt-5">

                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B88A44]" />

                <span className="text-[7px] font-extrabold uppercase tracking-[0.12em] text-[#64748B] sm:text-[8px] sm:tracking-[0.15em]">
                  Competition Performance Record
                </span>

                <div className="h-px flex-1 bg-gradient-to-r from-[#B88A44]/25 to-transparent" />

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          ACADEMICS
      ====================================================== */}
      <section
        id="academics"
        className={`${manrope.className} relative scroll-mt-20 overflow-hidden bg-[#F8F6F1] px-4 py-12 sm:px-5 sm:py-14 md:px-8 md:py-20`}
      >

        <div className="pointer-events-none absolute -right-20 top-20 h-[300px] w-[300px] rounded-full bg-[#D4AF68]/10 blur-3xl sm:h-[360px] sm:w-[360px]" />

        <div className="pointer-events-none absolute -left-32 bottom-10 h-[240px] w-[240px] rounded-full bg-[#111827]/5 blur-3xl sm:h-[280px] sm:w-[280px]" />


        <div className="relative mx-auto max-w-[1320px]">

          <SectionTitle
            kicker="Student Athlete"
            title="Academic strength matters too."
            description="Strong academic performance, leadership responsibility, and professional experience alongside competitive high jump."
          />


          <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-2">

            {/* ACADEMICS */}
            <div className="min-w-0 overflow-hidden rounded-[18px] border border-[#111827]/10 bg-white shadow-[0_16px_45px_rgba(17,24,39,0.06)] sm:rounded-[22px]">

              {/* HEADER */}
              <div className="flex items-center justify-between gap-4 border-b border-[#111827]/10 px-4 py-4 sm:px-5 sm:py-5 md:px-7">

                <div className="min-w-0">

                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#B88A44] sm:text-[9px] sm:tracking-[0.2em]">
                    Academic Record
                  </p>

                  <h3 className="mt-1.5 text-xl font-extrabold uppercase tracking-[-0.02em] text-[#111827] sm:text-2xl md:text-3xl">
                    Qualifications
                  </h3>

                </div>


                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#B88A44]/10 text-[#B88A44] sm:h-10 sm:w-10">

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


              {/* ITEMS */}
              <div className="px-4 sm:px-5 md:px-7">

                {academics.map((item, index) => (
                  <div
                    key={item.subject}
                    className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 border-b border-[#111827]/10 py-4 sm:gap-5 sm:py-5"
                  >

                    <div className="flex min-w-0 gap-2.5 sm:gap-3">

                      <span className="mt-0.5 shrink-0 text-[9px] font-bold text-[#B88A44]/55 sm:text-[11px]">
                        0{index + 1}
                      </span>


                      <div className="min-w-0">

                        <h4 className="break-words text-sm font-extrabold uppercase leading-tight tracking-[-0.01em] text-[#111827] transition-colors duration-300 group-hover:text-[#B88A44] sm:text-lg md:text-xl">
                          {item.subject}
                        </h4>

                        <p className="mt-1 text-[9px] font-medium leading-4 text-[#64748B] sm:mt-1.5 sm:text-[11px] sm:leading-5">
                          {item.board}
                        </p>

                        {item.status === "AS" && (
                          <span className="mt-2 inline-flex rounded-full bg-[#111827]/5 px-2 py-1 text-[7px] font-bold uppercase tracking-[0.12em] text-[#64748B] sm:px-2.5 sm:text-[8px]">
                            AS Level
                          </span>
                        )}

                      </div>
                    </div>


                    {/* GRADE */}
                    <div
                      className={`
                        flex min-h-[44px] min-w-[48px]
                        shrink-0 items-center justify-center
                        rounded-lg
                        px-2
                        !text-[11px]
                        font-extrabold
                        leading-none
                        sm:min-h-[50px]
                        sm:min-w-[54px]
                        sm:rounded-xl
                        sm:!text-[12px]
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
              <div className="px-4 pb-5 pt-4 sm:px-5 sm:pb-6 sm:pt-5 md:px-7">

                <div className="rounded-xl border border-[#B88A44]/20 bg-[#B88A44]/5 p-3.5 sm:p-4">

                  <div className="flex gap-3">

                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B88A44]" />

                    <p className="text-[10px] leading-5 text-[#64748B] sm:text-[12px] sm:leading-6">
                      <strong className="font-semibold text-[#111827]">
                        IAL Mathematics complete with A*.
                      </strong>{" "}
                      AS Economics awarded A. Full IAL Economics and Further
                      Mathematics are scheduled for the 2027 examination
                      series.
                    </p>

                  </div>
                </div>


                <div className="mt-4">

                  {athlete.transcriptUrl ? (
                    <a
                      href={athlete.transcriptUrl}
                      className="
                        inline-flex items-center gap-2
                        rounded-full
                        bg-[#111827]
                        px-4 py-2.5
                        text-[8px] font-bold uppercase
                        tracking-[0.13em]
                        text-white
                        transition-all duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#B88A44]
                        sm:text-[9px]
                      "
                    >
                      View Transcript
                      <span>→</span>
                    </a>
                  ) : (
                    <span className="inline-flex rounded-full border border-[#111827]/10 bg-[#F8F6F1] px-3.5 py-2.5 text-[8px] font-bold uppercase tracking-[0.12em] text-[#64748B] sm:px-4 sm:text-[9px]">
                      Transcript link to be added
                    </span>
                  )}

                </div>
              </div>

            </div>


            {/* LEADERSHIP */}
            <div className="min-w-0 overflow-hidden rounded-[18px] bg-[#111827] text-white shadow-[0_16px_45px_rgba(17,24,39,0.14)] sm:rounded-[22px]">

              {/* HEADER */}
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-5 sm:py-5 md:px-7">

                <div className="min-w-0">

                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#D4AF68] sm:text-[9px] sm:tracking-[0.2em]">
                    Beyond Competition
                  </p>

                  <h3 className="mt-1.5 text-xl font-extrabold uppercase tracking-[-0.02em] text-white sm:text-2xl md:text-3xl">
                    Leadership & Experience
                  </h3>

                </div>


                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#D4AF68] sm:h-10 sm:w-10">

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


              {/* EXPERIENCE */}
              <div className="px-4 sm:px-5 md:px-7">

                {experience.map((item, i) => (
                  <article
                    key={item.title}
                    className="group grid grid-cols-[40px_minmax(0,1fr)] gap-3 border-b border-white/10 py-4 sm:grid-cols-[48px_minmax(0,1fr)] sm:gap-4 sm:py-5"
                  >

                    <div
                      className="
                        flex h-9 w-9 items-center justify-center
                        rounded-full
                        border border-[#D4AF68]/25
                        bg-[#D4AF68]/10
                        text-xs font-bold
                        text-[#D4AF68]
                        transition-all duration-300
                        group-hover:bg-[#D4AF68]
                        group-hover:text-[#111827]
                        sm:h-10 sm:w-10 sm:text-sm
                      "
                    >
                      0{i + 1}
                    </div>


                    <div className="min-w-0">

                      <h4 className="break-words text-sm font-extrabold uppercase leading-tight tracking-[-0.01em] text-white transition-colors duration-300 group-hover:text-[#D4AF68] sm:text-lg md:text-xl">
                        {item.title}
                      </h4>

                      <p className="mt-1.5 text-[10px] font-semibold text-white/80 sm:text-[12px]">
                        {item.organisation}
                      </p>

                      <p className="mt-2 max-w-lg text-[10px] leading-5 text-white/55 sm:text-[11px]">
                        {item.detail}
                      </p>

                      <div className="mt-3 h-px w-8 bg-[#D4AF68] transition-all duration-500 group-hover:w-16 sm:mt-4" />

                    </div>

                  </article>
                ))}

              </div>


              {/* NOTE */}
              <div className="px-4 py-4 sm:px-5 sm:py-5 md:px-7">

                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 sm:p-4">

                  <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#D4AF68] sm:text-[8px] sm:tracking-[0.18em]">
                    Student Athlete
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-white/55 sm:text-[12px] sm:leading-6">
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


      {/* =====================================================
          CONTACT
      ====================================================== */}
      <section
        id="contact"
        className={`${manrope.className} relative scroll-mt-20 overflow-hidden px-4 py-12 text-white sm:px-5 sm:py-16 md:px-8 md:py-20`}
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <Image
            src="/media/news.jpeg"
            alt=""
            fill
            priority={false}
            className="object-cover object-[72%_35%] sm:object-[80%_35%] lg:object-[90%_35%]"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-[#6E2C3A]/10" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#4A1F29]/45 via-[#6E2C3A]/15 to-transparent sm:from-[#4A1F29]/35 sm:via-[#6E2C3A]/10" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#281017]/20 via-transparent to-transparent" />

        </div>


        <div className="pointer-events-none absolute -right-24 top-[-100px] h-[300px] w-[300px] rounded-full bg-[#D4AF68]/15 blur-[100px] sm:h-[360px] sm:w-[360px]" />


        <div className="relative mx-auto max-w-[1320px]">

          {/* LABEL */}
          <div className="flex items-center gap-3">

            <span className="h-[2px] w-8 bg-[#D4AF68]" />

            <p className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-[#D4AF68] sm:text-[10px] sm:tracking-[0.18em]">
              Coaches & Recruiters
            </p>

          </div>


          {/* MAIN */}
          <div className="mt-7 grid gap-8 sm:mt-8 md:gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:gap-12">

            {/* LEFT */}
            <div>

              <h2 className="max-w-[720px] text-3xl font-extrabold leading-[1.03] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Start the
                <br />

                <span className="text-[#E3C17A]">
                  conversation.
                </span>
              </h2>


              <p className="mt-5 max-w-xl text-xs font-medium leading-6 text-white/70 sm:mt-6 sm:text-sm sm:leading-7 md:text-[15px]">
                For recruitment opportunities, competition information,
                academic details or additional footage, get in touch directly.
              </p>


              {/* CTA */}
              <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">

                <a
                  href={`mailto:${athlete.email}`}
                  className="
                    group inline-flex items-center gap-2.5
                    rounded-full
                    bg-[#D4AF68]
                    px-4 py-2.5
                    text-[8px]
                    font-extrabold
                    uppercase
                    tracking-[0.12em]
                    text-[#3F101B]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-white
                    hover:shadow-lg
                    sm:gap-3
                    sm:px-5 sm:py-3
                    sm:text-[10px]
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
                    group inline-flex items-center gap-2.5
                    rounded-full
                    border border-white/25
                    bg-white/10
                    px-4 py-2.5
                    text-[8px]
                    font-extrabold
                    uppercase
                    tracking-[0.12em]
                    text-white
                    backdrop-blur-sm
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-white/50
                    hover:bg-white
                    hover:text-[#3F101B]
                    sm:gap-3
                    sm:px-5 sm:py-3
                    sm:text-[10px]
                  "
                >
                  WhatsApp

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

              </div>
            </div>


            {/* CONTACT CARD */}
            <div className="min-w-0 overflow-hidden rounded-[16px] border border-white/15 bg-black/15 p-4 backdrop-blur-md sm:rounded-[20px] sm:p-5 md:p-6">

              {/* EMAIL */}
              <div className="border-b border-white/15 pb-4 sm:pb-5">

                <p className="text-[8px] font-extrabold uppercase tracking-[0.14em] text-[#D4AF68] sm:text-[9px] sm:tracking-[0.16em]">
                  Email
                </p>

                <a
                  href={`mailto:${athlete.email}`}
                  className="mt-2 block break-all text-[13px] font-bold tracking-[-0.01em] text-white transition-colors hover:text-[#E3C17A] sm:text-[15px] md:text-[17px]"
                >
                  {athlete.email}
                </a>

              </div>


              {/* PHONE */}
              <div className="border-b border-white/15 py-4 sm:py-5">

                <p className="text-[8px] font-extrabold uppercase tracking-[0.14em] text-[#D4AF68] sm:text-[9px] sm:tracking-[0.16em]">
                  Phone / WhatsApp
                </p>

                <a
                  href={athlete.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-[13px] font-bold tracking-[-0.01em] text-white transition-colors hover:text-[#E3C17A] sm:text-[15px] md:text-[17px]"
                >
                  {athlete.phone}
                </a>

              </div>


              {/* LOCATION */}
              <div className="pt-4 sm:pt-5">

                <p className="text-[8px] font-extrabold uppercase tracking-[0.14em] text-[#D4AF68] sm:text-[9px] sm:tracking-[0.16em]">
                  Location
                </p>

                <p className="mt-2 text-[13px] font-bold tracking-[-0.01em] text-white sm:text-[15px] md:text-[17px]">
                  {athlete.location}
                </p>

              </div>

            </div>
          </div>


          {/* FOOTER */}
          <div className="mt-10 flex flex-col gap-4 border-t border-white/20 pt-5 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-[8px] font-extrabold uppercase tracking-[0.13em] text-white/80 sm:text-[10px] sm:tracking-[0.15em]">
                {athlete.name}
              </p>

              <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:text-[9px] sm:tracking-[0.14em]">
                High Jump · International Recruit
              </p>

            </div>


            <div className="flex items-center gap-3">

              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF68]" />

              <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-white/55 sm:text-[9px] sm:tracking-[0.14em]">
                PB 2.01 m · Class of 2027
              </span>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}