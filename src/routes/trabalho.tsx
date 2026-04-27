import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";

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
  {
    name: "Symplice — Identidade de Marca para Startup",
    category: "Id Visual",
    year: "2024",
    image: "/hero-brandding.jpg",
    to: "/symplice",
  },
  {
    name: "NaTrave App — O Ecossistema do Futebol Amador",
    category: "Social Media",
    year: "2024",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800&auto=format&fit=crop",
    to: "/natrave",
  },
  {
    name: "Solid + — Fintech Identity & Systems",
    category: "Id Visual",
    year: "2024",
    image: "/solid-full.png",
    to: "/solid",
  },
  {
    name: "Outdoor Campaign — Real Estate",
    category: "Mídia OOH",
    year: "2023",
    image: "https://images.unsplash.com/photo-1617478718481-673602164146?w=800&q=80",
    to: "/trabalho",
  },
  {
    name: "Social media — Marca wellness",
    category: "Social Media",
    year: "2024",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    to: "/trabalho",
  },
  {
    name: "Editorial Design — Brandbook",
    category: "Mídia Impressa",
    year: "2023",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
    to: "/trabalho",
  },
];

const categories = ["Social Media", "Id Visual", "Mídia Impressa", "Mídia OOH"];

const archive = ["Vogue Design", "Natural Pure", "Tech Flow", "Zen Garden", "Studio Max"];

function TrabalhoPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProjects = activeCategory 
    ? projects.filter(p => p.category === activeCategory)
    : projects;

  return (
    <div ref={revealRef} className="pt-32">
      <section className="section-spacing">
        <div className="container-site">
          <div className="mb-20">
            <h1 className="uppercase line-height-tight tracking-tight anim-fade-in">Conheça meu<br /><span className="text-secondary font-medium">Trabalho</span></h1>
          </div>

          {/* Category Filters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 anim-fade-in delay-250">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`p-6 border border-border text-left transition-all duration-300 hover:bg-foreground hover:text-background group ${
                  activeCategory === cat ? "bg-foreground text-background" : "bg-card"
                }`}
              >
                <span className="text-[10px] font-mono uppercase tracking-tighter block mb-2 opacity-60">Área</span>
                <span className="font-bold text-lg leading-tight block">{cat}</span>
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 transition-all duration-500">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, i) => (
                <Link 
                  key={project.name} 
                  to={project.to} 
                  className={`group ${i === 0 && !activeCategory ? "md:col-span-2" : ""}`}
                >
                  <figure className="scroll-reveal project-card relative cursor-none">
                    <div className={`media-wrap ${i === 0 && !activeCategory ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="mt-8">
                      <span className="card-label">{project.category} · {project.year}</span>
                      <span className="font-bold text-xl lg:text-2xl uppercase leading-tight block">{project.name}</span>
                    </figcaption>
                  </figure>
                </Link>
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-secondary">
                Nenhum projeto encontrado nesta categoria.
              </div>
            )}
          </div>

          <div className="mt-32 pt-12 border-t border-border grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">Arquivo de Projetos</span>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12">
                {archive.map((p) => (
                  <span key={p} className="text-sm uppercase tracking-tight font-medium py-2 border-b border-border/50">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
