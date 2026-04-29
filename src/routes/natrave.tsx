import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { 
  BeforeAfter, 
  TopPosts, 
  TopCopies, 
  GridEvolution, 
  VerticalGallery, 
  TestimonialCTA 
} from "@/components/social-case-layout";
import { BrandHeader } from "@/components/brand-header";
import { ServiceSelector } from "@/components/service-selector";
import { Maximize2, X } from "lucide-react";

export const Route = createFileRoute("/natrave")({
  head: () => ({
    meta: [
      { title: "NaTrave App — Murilo Ortega" },
      { name: "description", content: "Estratégia de Social Media e Branding para o NaTrave App." },
    ],
  }),
  component: ProjetoNaTrave,
});

function ProjetoNaTrave() {
  const [activeService, setActiveService] = useState("marca"); // Marca is default
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (isFullScreen) {
      document.body.classList.add("has-fullscreen");
    } else {
      document.body.classList.remove("has-fullscreen");
    }
    return () => document.body.classList.remove("has-fullscreen");
  }, [isFullScreen]);

  const services = [
    { id: "marca", label: "Id Visual" },
    { id: "social", label: "Social Media" },
    { id: "websites", label: "Websites" }
  ];

  const metaData = [
    { label: "Papel", value: "Direção & Design" },
    { label: "Ano", value: "2024" },
    { label: "Plataforma", value: "iOS & Android" },
    { label: "Skills", value: "UX/UI, Social" }
  ];

  return (
    <div className="bg-background">
      <BrandHeader 
        client="NaTrave App"
        phrase="Virando o Jogo"
        description="O futebol amador elevado ao nível de elite. Uma plataforma para conectar jogadores, organizadores e a paixão pelo esporte sem burocracia."
        niche="Projeto Autoral — Esporte & Tech"
        meta={metaData}
      />

      <ServiceSelector 
        options={services} 
        activeId={activeService} 
        onChange={setActiveService} 
      />

      {activeService === "social" && (
        <div className="anim-fade-in">
          <BeforeAfter 
            targetFollowers={1250}
            beforeImg="https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800"
            afterImg="/natrave-social.png"
          />

          <TopPosts 
            posts={[
              { img: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800", context: "Engajamento Orgânico", stats: "+15k reach" },
              { img: "/natrave-marca.png", context: "Brand Awareness", stats: "4.8k likes" },
              { img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800", context: "Comunidade", stats: "320 shares" },
              { img: "/natrave-social.png", context: "Conversão", stats: "12% CTR" },
            ]}
          />

          <TopCopies 
            copies={[
              { text: "O futebol amador nunca mais será o mesmo. O app que profissionaliza sua paixão.", img: "/natrave-social.png" },
              { text: "Cansado de organizar pelada no WhatsApp? Conheça o NaTrave.", img: "/natrave-marca.png" },
              { text: "Seu time, sua história, seu campo. Tudo em um só lugar.", img: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800" },
            ]}
          />

          <GridEvolution 
            grids={[
              { month: "Mês 01: Estruturação", img: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800" },
              { month: "Mês 02: Expansão", img: "/natrave-social.png" },
              { month: "Mês 03: Consolidação", img: "/natrave-marca.png" },
            ]}
          />

          <VerticalGallery 
            items={[
              { type: 'Reel', img: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800" },
              { type: 'Story', img: "/natrave-social.png" },
              { type: 'Reel', img: "/natrave-marca.png" },
              { type: 'Story', img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" },
            ]}
          />

          <TestimonialCTA 
            clientName="Fundador NaTrave"
            clientRole="CEO & Founder"
            testimonial="O Murilo não apenas desenhou o app, ele construiu a voz da nossa comunidade. O crescimento no Social foi o motor da nossa tração inicial."
            clientImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"
          />
        </div>
      )}

      {activeService === "marca" && (
        <div className="anim-fade-in site-container pb-32">
           <div className="relative w-full h-[700px] overflow-hidden border border-border group cursor-ns-resize" onClick={() => setIsFullScreen(true)}>
             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center pointer-events-none">
                <div className="bg-background/80 backdrop-blur px-6 py-3 border border-border opacity-0 group-hover:opacity-100 transition-all">
                   <Maximize2 size={18} className="inline-block" />
                   <span className="ml-2 text-[10px] font-mono uppercase tracking-widest">Ver Case Completo</span>
                </div>
             </div>
             <div className="w-full h-full overflow-y-auto no-scrollbar scroll-smooth">
                <img src="/natrave-marca.png" alt="NaTrave Branding Showcase" className="w-full h-auto" />
             </div>
           </div>
        </div>
      )}

      {activeService === "websites" && (
        <div className="anim-fade-in site-container pb-32">
           <p className="text-xl text-secondary uppercase font-medium leading-tight max-w-2xl mb-12">
            Desenvolvimento de plataforma focada em performance e comunidade para o futebol amador. Interfaces limpas e foco total na experiência do atleta.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <img src="/natrave-preview.gif" alt="NaTrave Website" className="w-full h-auto border border-border" />
              <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800" alt="NaTrave Website" className="w-full h-auto border border-border grayscale" />
           </div>
        </div>
      )}

      {/* Full Screen Overlay */}
      {isFullScreen && (
        <div className="fixed inset-0 z-[100] bg-background overflow-y-auto no-scrollbar anim-fade-in">
          <div className="sticky top-0 right-0 left-0 h-24 flex items-center justify-between site-container z-[101] bg-background/50 backdrop-blur-sm border-b border-border/10 pointer-events-auto">
            <span className="text-xs font-mono uppercase tracking-widest">NaTrave App Case — Branding</span>
            <button 
              onClick={() => setIsFullScreen(false)}
              className="p-4 bg-foreground text-background transition-transform hover:scale-110"
            >
              <X size={24} />
            </button>
          </div>
          <div>
            <img 
              src="/natrave-marca.png" 
              alt="NaTrave Full Presentation" 
              className="w-full h-auto shadow-2xl"
            />
          </div>
        </div>
      )}

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/solid" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoNaTrave;
