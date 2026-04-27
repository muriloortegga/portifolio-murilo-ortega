import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/maxi")({
  head: () => ({
    meta: [
      { title: "Colégio Maxi — Performance Acadêmica & Tradição" },
      { name: "description", content: "Case study de Social Media, Motion e OOH para o Colégio Maxi de Londrina." },
    ],
  }),
  component: MaxiPage,
});

const categories = [
  { id: "social", label: "Social Media" },
  { id: "motion", label: "Motion Design" },
  { id: "ooh", label: "Mídia OOH" }
];

const maxiProjects = {
  social: [
    { title: "Campanha Vestibular 2024", type: "Social Content", img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200" },
    { title: "Daily Performance", type: "Instagram Strategy", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" },
    { title: "Institutional Presence", type: "Social Branding", img: "https://images.unsplash.com/photo-1523050335192-ce1dee6507f1?q=80&w=1200" }
  ],
  motion: [
    { title: "Opening Series", type: "Motion Graphics", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200" },
    { title: "Digital Billboard", type: "Animation", img: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=1200" }
  ],
  ooh: [
    { title: "Avenida Higienópolis", type: "Billboard", img: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=1200" },
    { title: "Sinalização Interna", type: "OOH Strategy", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200" }
  ]
};

function MaxiPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [activeTab, setActiveTab] = useState("social");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={revealRef} className="bg-background min-h-screen pt-32 pb-32">
      {/* Header Info */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-secondary mb-8 block anim-fade-in">Education & Performance</span>
              <h1 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.9] anim-fade-in">
                Colégio <br /><span className="text-secondary font-medium">Maxi</span>
              </h1>
            </div>
            <div className="lg:col-span-4 anim-fade-in delay-250">
              <p className="text-lg text-secondary leading-relaxed">
                Tradição que se traduz em resultado. O Colégio Maxi de Londrina exige uma comunicação que equilibre a autoridade acadêmica com o dinamismo do mundo digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Showcase */}
      <section className="section-spacing border-t border-border mt-32">
        <div className="container-site">
          {/* Tab Selector */}
          <div className="flex flex-wrap gap-4 mb-20">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-8 py-4 uppercase font-mono text-[10px] tracking-widest border transition-all duration-500 ${
                  activeTab === cat.id ? "bg-foreground text-background border-foreground" : "bg-transparent border-border hover:border-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Dynamic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px] transition-all duration-700">
            {maxiProjects[activeTab as keyof typeof maxiProjects].map((project, i) => (
              <div 
                key={project.title + activeTab} 
                className="scroll-reveal group relative"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="media-wrap aspect-[16/10] bg-card overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[10px] font-mono uppercase text-secondary block mb-2">{project.type}</span>
                    <h4 className="text-2xl font-bold uppercase">{project.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="section-spacing bg-foreground text-background mt-32">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-6">
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter scroll-reveal">Estratégia <br />de Aprovação</h2>
            </div>
            <div className="lg:col-span-6 space-y-8 scroll-reveal">
              <p className="text-xl md:text-2xl opacity-80 leading-snug uppercase">
                A comunicação para o Maxi não pode ser "leve". Ela precisa transmitir o peso de uma formação sólida e a seriedade de quem prepara para os maiores desafios intelectuais do país.
              </p>
              <div className="pt-8 border-t border-background/20 grid grid-cols-2 gap-12">
                <div>
                  <span className="text-[10px] font-mono uppercase opacity-50 block mb-4">Foco</span>
                  <span className="text-lg font-bold uppercase">Resultado Acadêmico</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase opacity-50 block mb-4">Tom</span>
                  <span className="text-lg font-bold uppercase">Autoridade & Rigor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Nav */}
      <section className="py-32">
        <div className="container-site text-center">
          <Link to="/trabalho" className="text-sm font-mono uppercase tracking-[0.5em] hover:text-secondary transition-colors">
            Ver outros trabalhos
          </Link>
        </div>
      </section>
    </div>
  );
}
