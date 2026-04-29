import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function GenericProjectLayout({
  client,
  phrase,
  description,
  serviceLabel,
  mainImage,
  showcaseImage,
  role = "Direção & Design",
  year = "2024",
}: {
  client: string;
  phrase: string;
  description: string;
  serviceLabel: string;
  mainImage: string;
  showcaseImage?: string;
  role?: string;
  year?: string;
}) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="anim-fade-in">
      {/* Header */}
      <section className="site-section border-t-0 pt-0 pb-12">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <span className="site-label mb-6">{serviceLabel}</span>
              <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.85] mb-8">
                {client} — <br />
                <span className="text-secondary font-medium italic">{phrase}</span>
              </h1>
            </div>
            <div className="lg:col-span-4 flex items-end">
               <p className="text-sm text-secondary leading-relaxed">
                 {description}
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Bar */}
      <section className="site-container border-t border-b border-border py-8 mb-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-1">Papel</span>
            <span className="text-sm font-bold uppercase">{role}</span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-1">Ano</span>
            <span className="text-sm font-bold uppercase">{year}</span>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-1">Serviço</span>
            <span className="text-sm font-bold uppercase">{serviceLabel}</span>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="site-container mb-20">
         <div className="aspect-[21/9] overflow-hidden border border-border bg-card">
            <img src={mainImage} alt={client} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
         </div>
      </section>

      {/* Showcase Image */}
      {showcaseImage && (
        <section className="site-container mb-32">
           <img src={showcaseImage} alt={`${client} Showcase`} className="w-full h-auto border border-border" />
        </section>
      )}
    </div>
  );
}
