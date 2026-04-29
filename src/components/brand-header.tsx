import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export interface MetaItem {
  label: string;
  value: string;
}

export function BrandHeader({
  client,
  phrase,
  description,
  niche,
  meta,
}: {
  client: string;
  phrase: string;
  description: string;
  niche: string;
  meta: MetaItem[];
}) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="pt-32">
      {/* Title Section */}
      <section className="site-section pb-12 border-t-0">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 anim-fade-in">
              <span className="text-secondary font-mono text-[10px] uppercase tracking-[0.2em] mb-4 block">
                {niche}
              </span>
              <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85]">
                {client} — <br />
                <span className="text-secondary font-medium italic">{phrase}</span>
              </h1>
            </div>
            <div className="lg:col-span-4 flex items-end anim-fade-in delay-250">
               <p className="text-sm text-secondary leading-relaxed">
                 {description}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Bar */}
      <section className="site-container border-t border-b border-border py-8 mb-12 anim-fade-in delay-250">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {meta.map((item, i) => (
            <div key={i}>
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-1">
                {item.label}
              </span>
              <span className="text-sm font-bold uppercase">{item.value}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
