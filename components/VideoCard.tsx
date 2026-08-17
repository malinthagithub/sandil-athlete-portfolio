import Image from "next/image";

type Props = {
  title: string;
  meta: string;
  src: string;
  poster: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
};

export function VideoCard({
  title,
  meta,
  src,
  poster,
  featured,
  image,
  imageAlt,
}: Props) {
  return (
    <article className={featured ? "md:col-span-2" : ""}>
      {featured && image ? (
        <div className="grid overflow-hidden border border-line bg-white lg:grid-cols-[1.5fr_0.75fr]">
          
          {/* VIDEO */}
          <div className="video-shell aspect-video overflow-hidden bg-ink">
            <video
              controls
              preload="metadata"
              poster={poster}
              aria-label={title}
              className="h-full w-full object-cover"
            >
              <source src={src} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>

          {/* ATHLETE PHOTO */}
          <div className="relative min-h-[420px] overflow-hidden bg-ink">
            <Image
              src={image}
              alt={imageAlt || title}
              fill
              className="object-cover object-[50%_15%] transition-transform duration-700 hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 32vw"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

            {/* Athlete Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
                High Jump · Sri Lanka
              </p>

              <h3 className="mt-2 font-display text-4xl font-bold uppercase leading-[0.9]">
                Sandil
                <br />
                Hetti Arachchige
              </h3>

              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">
                Class of 2027 Recruit
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="video-shell aspect-[16/10] overflow-hidden bg-ink">
          <video
            controls
            preload="metadata"
            poster={poster}
            aria-label={title}
            className="h-full w-full object-cover"
          >
            <source src={src} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      )}

      {/* DETAILS */}
      <div className="flex items-start justify-between gap-4 border-x border-b border-line bg-white/45 px-5 py-5">
        <div>
          <h3 className="font-display text-2xl font-semibold uppercase leading-none md:text-3xl">
            {title}
          </h3>

          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate">
            {meta}
          </p>
        </div>

        <span className="shrink-0 rounded-full border border-wine/25 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-wine">
          {featured ? "Featured" : "Video"}
        </span>
      </div>
    </article>
  );
}