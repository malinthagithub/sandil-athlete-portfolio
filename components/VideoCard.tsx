import Image from "next/image";

type Props = {
  title: string;
  meta: string;
  src: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
};

export default function VideoCard({
  title,
  meta,
  src,
  featured = false,
  image,
  imageAlt,
}: Props) {
  return (
    <>
      {/* =====================================================
          FEATURED RECRUITING VIDEO
      ====================================================== */}
      <article
        className="
          group min-w-0 overflow-hidden
          rounded-2xl
          border border-[#111827]/10
          bg-white
          shadow-[0_12px_35px_rgba(17,24,39,0.06)]
          transition-all duration-300
          hover:-translate-y-1
          hover:border-[#B88A44]/40
          hover:shadow-[0_18px_45px_rgba(17,24,39,0.10)]
        "
      >
        {/* VIDEO */}
        <div className="relative overflow-hidden bg-[#111827]">
          <video
            controls
            preload="metadata"
            playsInline
            className="aspect-video w-full bg-black object-cover"
          >
            <source src={src} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>

          {featured && (
            <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 backdrop-blur-md">
              <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-white">
                Featured Film
              </p>
            </div>
          )}
        </div>

        {/* VIDEO DETAILS */}
        <div className="p-4 sm:p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#B88A44]">
                Recruiting Film
              </p>

              <h3 className="mt-2 break-words font-display text-xl font-bold uppercase leading-none text-[#111827] sm:text-2xl md:text-3xl">
                {title}
              </h3>

              <p className="mt-3 max-w-xl text-[11px] font-medium leading-5 text-[#64748B] sm:text-xs sm:leading-6">
                {meta}
              </p>
            </div>

            <div
              className="
                flex h-9 w-9 shrink-0 items-center justify-center
                rounded-full
                bg-[#111827]
                text-[10px]
                text-white
                transition-all duration-300
                group-hover:bg-[#B88A44]
                sm:h-10 sm:w-10
              "
              aria-hidden="true"
            >
              ▶
            </div>
          </div>

          <div className="mt-5 h-px w-full bg-[#111827]/10">
            <div className="h-px w-10 bg-[#B88A44] transition-all duration-500 group-hover:w-full" />
          </div>
        </div>
      </article>

      {/* =====================================================
          FEATURED ATHLETE PHOTO
          Only shown when the video data contains image + featured
      ====================================================== */}
      {featured && image && (
        <figure
          className="
            group relative min-h-[320px] overflow-hidden
            rounded-2xl
            border border-[#111827]/10
            bg-[#111827]
            shadow-[0_12px_35px_rgba(17,24,39,0.08)]
            sm:min-h-[400px]
            md:min-h-full
          "
        >
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* PHOTO OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/90 via-[#111827]/10 to-transparent" />

          {/* PHOTO LABEL */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <div className="mb-4 h-px w-full bg-white/20" />

            <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#D4AF68]">
              Athlete Profile
            </p>

            <p className="mt-2 font-display text-xl font-bold uppercase leading-tight text-white sm:text-2xl">
              Sandil Hetti Arachchige
            </p>

            <p className="mt-2 font-display text-xl font uppercase leading-tight text-white sm:text-2xl">
              International Schools Athletic Competition 2019
            </p>
          </div>
        </figure>
      )}
    </>
  );
}