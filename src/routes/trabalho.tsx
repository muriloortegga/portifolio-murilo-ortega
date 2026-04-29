import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight, ChevronDown } from "lucide-react";

export const Route = createFileRoute("/trabalho")({
  head: () => ({
    meta: [
      { title: "Trabalho — Murilo Ortega" },
      { name: "description", content: "Projetos selecionados de branding, conteúdo e presença digital." },
      { property: "og:title", content: "Trabalho — Murilo Ortega" },
      { property: "og:description", content: "Projetos selecionados de branding, conteúdo e presença digital." },
    ],
  }),
  component: TrabalhoPage,
});

const projects = [
  // Social Media
  { name: "NaTrave", category: "Social Media", year: "2024", image: "/natrave-preview.gif", to: "/natrave" },
  { name: "Talk2Buy", category: "Social Media", year: "2024", image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800", to: "/trabalho" },
  { name: "Evidive", category: "Social Media", year: "2024", image: "/hero-brandding.jpg", to: "/trabalho" },
  { name: "Colégio Maxi", category: "Social Media", year: "2024", image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800", to: "/maxi" },
  { name: "Milgrows", category: "Social Media", year: "2023", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", to: "/trabalho" },
  { name: "Kapyi", category: "Social Media", year: "2023", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800", to: "/trabalho" },
  
  // Id Visual
  { name: "NaTrave", category: "Id Visual", year: "2024", image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800", to: "/natrave" },
  { name: "Symplice", category: "Id Visual", year: "2024", image: "/hero-brandding.jpg", to: "/symplice" },
  { name: "Kmillion", category: "Id Visual", year: "2024", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", to: "/trabalho" },
  { name: "Solid+", category: "Id Visual", year: "2024", image: "/solid-full.png", to: "/solid" },
  
  // Mídia Impressa
  { name: "Marco Boni", category: "Mídia Impressa", year: "2023", image: "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?q=80&w=800", to: "/trabalho" },
  { name: "Livin Company", category: "Mídia Impressa", year: "2023", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80", to: "/trabalho" },
  
  // Mídia OOH
  { name: "Colégio Maxi", category: "Mídia OOH", year: "2023", image: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=1200", to: "/maxi" },
];

const serviceInsights = {
  "Social Media": {
    title: "Sistema de Conteúdo",
    copy: "Social Media como um sistema integrado de autoridade.",
    preview: "Esqueça postagens isoladas. Criamos um ecossistema de conteúdo que sustenta sua marca e converte audiência em clientes reais.",
    to: "/servicos/sistema-de-conteudo"
  },
  "Id Visual": {
    title: "Estruturação de Marca",
    copy: "A base de tudo o que você entrega.",
    preview: "Do diagnóstico ao brandbook completo. Construímos identidades que confrontam o comum e elevam o valor percebido do seu negócio.",
    to: "/servicos/estruturacao-de-marca"
  },
  "Mídia Impressa": {
    title: "Mídia Impressa",
    copy: "Tangibilizando autoridade no mundo físico.",
    preview: "Catálogos físicos e digitais, diagramação e materiais institucionais. Entregamos qualidade gráfica que tangibiliza a autoridade da sua marca.",
    to: "/servicos/midia-impressa"
  },
  "Mídia OOH": {
    title: "Mídia OOH",
    copy: "Visibilidade massiva e autoridade local.",
    preview: "Do planejamento ao gerenciamento de budget. Criamos campanhas externas que garantem que sua marca seja vista em todos os lugares.",
    to: "/servicos/midia-ooh"
  }
};

const categories = ["Social Media", "Id Visual", "Mídia Impressa", "Mídia OOH"] as const;
type Category = typeof categories[number];

function TrabalhoPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const currentInsight = activeCategory ? serviceInsights[activeCategory] : null;

  return (
    <div ref={revealRef} className="pt-32 pb-32">
      <section className="site-section">
        <div className="site-container">
          <div className="mb-20">
            <h1 className="uppercase line-height-tight tracking-tight anim-fade-in">
              Conheça meu<br />
              <span className="text-secondary font-medium text-8xl md:text-[12vw]">Trabalho</span>
            </h1>
          </div>

          {/* Category Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border border border-border mb-20 anim-fade-in delay-250 overflow-hidden">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`p-10 text-left transition-all duration-700 group relative flex flex-col justify-between min-h-[160px] ${
                  activeCategory === cat ? "bg-foreground text-background" : "bg-background hover:bg-off-white"
                }`}
              >
                <div className="flex justify-between items-start">
                   <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">0{categories.indexOf(cat) + 1}</span>
                   <ChevronDown size={14} className={`transition-transform duration-500 ${activeCategory === cat ? "rotate-180" : ""}`} />
                </div>
                <span className="font-bold text-3xl uppercase tracking-tighter leading-none">{cat}</span>
              </button>
            ))}
          </div>
          
          {/* Dropdown Gallery */}
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeCategory}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
                  {projects
                    .filter((p) => p.category === activeCategory)
                    .map((project, i) => (
                      <Link 
                        key={project.name + i} 
                        to={project.to}
                        className="group"
                      >
                        <figure className="relative aspect-[4/5] bg-off-white overflow-hidden shadow-lg border border-border/10">
                          <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </figure>
                        <div className="mt-6 flex justify-between items-end">
                           <div>
                              <span className="text-[10px] font-mono uppercase text-secondary mb-1 block">{project.year}</span>
                              <h4 className="text-xl font-bold uppercase tracking-tight">{project.name}</h4>
                           </div>
                           <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                        </div>
                      </Link>
                    ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fallback View (When no category is selected) */}
          {!activeCategory && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 transition-all duration-500 pb-32">
              {projects.slice(0, 4).map((project, i) => (
                <Link 
                  key={project.name + i} 
                  to={project.to} 
                  className={`group ${i === 0 ? "md:col-span-2" : ""}`}
                >
                  <figure className="relative cursor-none">
                    <div className={`media-wrap ${i === 0 ? "aspect-[21/9]" : "aspect-[4/3]"} shadow-xl overflow-hidden`}>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                      />
                    </div>
                    <figcaption className="mt-8">
                      <span className="site-card-label">{project.category} · {project.year}</span>
                      <span className="font-bold text-3xl uppercase leading-tight block">{project.name}</span>
                    </figcaption>
                  </figure>
                </Link>
              ))}
            </div>
          )}

          {/* Dynamic Service Insight Section */}
          <div className="pt-24 border-t border-border">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory || "default"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                <div className="lg:col-span-5">
                  <span className="site-label mb-8">
                    {activeCategory ? `Insight: ${activeCategory}` : "Expertise & Entrega"}
                  </span>
                  <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter leading-[0.9] mb-8">
                    {currentInsight ? currentInsight.copy : "Sua marca pronta para o próximo nível."}
                  </h2>
                </div>
                <div className="lg:col-span-7 flex flex-col md:flex-row gap-12 items-start md:items-center">
                  <p className="text-xl text-secondary uppercase font-medium leading-tight max-w-md">
                    {currentInsight ? currentInsight.preview : "Combinamos estratégia, design e tecnologia para criar ecossistemas de marca que lideram mercados."}
                  </p>
                  {currentInsight && (
                    <Link to={currentInsight.to} className="btn-primary whitespace-nowrap">
                      Ver serviço <Plus size={18} className="ml-2" />
                    </Link>
                  )}
                  {!currentInsight && (
                    <Link to="/servicos" className="btn-primary whitespace-nowrap">
                      Conhecer serviços <Plus size={18} className="ml-2" />
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TrabalhoPage;
