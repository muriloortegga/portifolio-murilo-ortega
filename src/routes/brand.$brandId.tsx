import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/brand/$brandId")({
  component: BrandPage,
});

function BrandPage() {
  const { brandId } = useParams({ from: "/brand/$brandId" });
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const brandName = brandId.charAt(0).toUpperCase() + brandId.slice(1);

  return (
    <div ref={revealRef} className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px)`,
            filter: `blur(${Math.min(scrollY * 0.05, 10)}px)`
          }}
        >
          <img 
            src={`https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2000&auto=format&fit=crop`} 
            alt={brandName}
            className="w-full h-full object-cover opacity-40 grayscale"
          />
        </div>
        
        <div className="container-site relative z-10 text-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] mb-8 block anim-fade-in">Case Study</span>
          <h1 className="text-[15vw] leading-[0.8] tracking-tighter uppercase anim-fade-in">
            {brandName}
          </h1>
          <div className="mt-20 flex justify-center gap-24 anim-fade-in delay-250">
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase text-secondary block mb-2">Ano</span>
              <span className="text-xl">2024</span>
            </div>
            <div className="text-left">
              <span className="text-[10px] font-mono uppercase text-secondary block mb-2">Serviços</span>
              <span className="text-xl">Branding, Digital</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual System */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-32">
            <div className="lg:col-span-8">
              <h2 className="text-5xl lg:text-7xl tracking-tighter uppercase mb-8 scroll-reveal">O Desafio</h2>
              <p className="text-xl lg:text-3xl text-secondary leading-tight scroll-reveal">
                Transformar uma visão em um sistema visual coerente que comunica autoridade e modernidade. O projeto focou em criar uma identidade que se destaca pelo minimalismo e precisão.
              </p>
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="scroll-reveal aspect-[4/5] bg-card overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200&auto=format&fit=crop" 
                alt="Detail 1"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="scroll-reveal aspect-[4/5] bg-card overflow-hidden mt-20">
               <img 
                src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop" 
                alt="Detail 2"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Image */}
      <section className="h-[80vh] overflow-hidden my-32">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
          alt="Full view"
          className="w-full h-full object-cover"
          style={{ transform: `scale(${1 + scrollY * 0.0001})` }}
        />
      </section>

      {/* Footer Nav */}
      <section className="py-32 border-t border-border">
        <div className="container-site text-center">
          <Link to="/trabalho" className="text-sm font-mono uppercase tracking-widest hover:text-secondary transition-colors">
            Voltar para Projetos
          </Link>
        </div>
      </section>
    </div>
  );
}
