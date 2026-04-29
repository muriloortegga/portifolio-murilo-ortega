import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Maximize2 } from "lucide-react";

export function VisualIdentityLayout({
  client,
  phrase,
  description,
  mainImage,
  showcaseImage,
  role = "Direção & Design",
  year = "2024",
  skills = "Identidade Visual"
}: {
  client: string;
  phrase: string;
  description: string;
  mainImage: string;
  showcaseImage?: string;
  role?: string;
  year?: string;
  skills?: string;
}) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="anim-fade-in">
      {/* Header */}
      <section className="site-section border-t-0 pt-0 pb-12">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <span className="site-label mb-6">Identidade Visual</span>
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
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary block mb-1">Skills</span>
            <span className="text-sm font-bold uppercase">{skills}</span>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="site-container mb-20">
         <div className="aspect-[21/9] overflow-hidden border border-border bg-card">
            <img src={mainImage} alt={client} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
         </div>
      </section>

      {/* Showcase Image (Long scroll) */}
      {showcaseImage && (
        <section className="site-container mb-32">
          <div className="relative w-full h-[700px] overflow-hidden border border-border group cursor-ns-resize">
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center pointer-events-none">
                <div className="bg-background/80 backdrop-blur px-6 py-3 border border-border opacity-0 group-hover:opacity-100 transition-all">
                   <Maximize2 size={18} className="inline-block" />
                   <span className="ml-2 text-[10px] font-mono uppercase tracking-widest">Scroll para explorar</span>
                </div>
             </div>
             <div className="w-full h-full overflow-y-auto no-scrollbar scroll-smooth">
                <img src={showcaseImage} alt={`${client} Showcase`} className="w-full h-auto" />
             </div>
          </div>
        </section>
      )}
    </div>
  );
}
