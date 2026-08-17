type Props = {
  kicker: string;
  title: string;
  description?: string;
};

export function SectionTitle({ kicker, title, description }: Props) {
  return (
    <div className="mb-8 grid gap-4 border-t border-line pt-5 md:grid-cols-[180px_1fr] md:items-start">
      <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-wine">
        {kicker}
      </p>
      <div>
        <h2 className="max-w-4xl font-display text-4xl font-bold uppercase leading-[0.92] tracking-[-0.02em] md:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
