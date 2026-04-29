import { createFileRoute, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Murilo Ortega — Design Estratégico & Identidade de Marca" },
      { name: "description", content: "Design que confronta o comum e eleva o digital. Branding, conteúdo e presença digital conectados em um sistema de alto nível." },
      { property: "og:title", content: "Murilo Ortega — Design Estratégico & Identidade de Marca" },
      { property: "og:description", content: "Design que confronta o comum e eleva o digital. Branding, conteúdo e presença digital conectados em um sistema de alto nível." },
    ],
  }),
  component: HomePage,
});

const projects = [
  {
    name: "NaTrave App — O Ecossistema do Futebol Amador",
    category: "Social Media · 2024",
    image: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800&auto=format&fit=crop",
    gif: "/natrave-preview.gif",
    to: "/natrave",
  },
  {
    name: "Solid + — Fintech Identity & Systems",
    category: "Id Visual · 2024",
    image: "/solid-full.png",
    to: "/solid",
  },
  {
    name: "Site + posicionamento — Consultoria",
    category: "Id Visual · 2023",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    to: "/trabalho",
  },
];

const services = [
  {
    id: "branding",
    num: "01",
    title: "Estruturação de Marca",
    body: "Para marcas que cresceram sem base. Posicionamento, identidade visual e brandbook que dão coerência ao que já existe.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "conteudo",
    num: "02",
    title: "Sistema de Conteúdo",
    body: "Para marcas que existem mas não têm consistência. Uma linha editorial que transforma presença digital em algo previsível e alinhado.",
    image: "https://images.unsplash.com/photo-1557264305-7e2764da873b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "digital",
    num: "03",
    title: "Presença Digital",
    body: "Para marcas que não são bem apresentadas online. Site que organiza a comunicação, melhora percepção de valor e facilita a conversão.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "impressa",
    num: "04",
    title: "Mídia Impressa",
    body: "Papelaria, catálogos e materiais físicos que tangibilizam a qualidade da sua marca no mundo real.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "ooh",
    num: "05",
    title: "Mídia OOH",
    body: "Campanhas externas, outdoors e sinalização que dominam a paisagem urbana com impacto visual.",
    image: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "influencia",
    num: "06",
    title: "Marketing de Influência",
    body: "Conectando sua marca com vozes que geram confiança e expandem seu alcance de forma autêntica.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
  },
];

const logoFiles = import.meta.glob("/src/assets/logos/*.{png,jpg,jpeg,svg,webp}", { eager: true, as: "url" });
const dynamicLogos = Object.entries(logoFiles).map(([path, url]) => {
  const name = path.split("/").pop()?.split(".")[0] || "";
  return { name, url: url as string };
});

const brands = [
  { name: "Symplice", id: "symplice" },
  { name: "NaTrave", id: "natrave" },
  { name: "Solid+", id: "solid" },
  { name: "Vogue", id: "vogue" },
  { name: "Natural Pure", id: "natural" },
  { name: "Tech Flow", id: "tech" },
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = (node: any) => {
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(node);
    }
  };

  return (
    <Link to={project.to} className="group">
      <figure 
        ref={cardRef}
        className="scroll-reveal project-card relative cursor-none" 
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="media-wrap aspect-[4/3]">
          <img 
            src={isVisible && project.gif ? project.gif : project.image} 
            alt={project.name} 
            className="w-full h-full object-cover transition-opacity duration-500"
          />
        </div>
        <figcaption className="mt-6">
          <span className="ds-card-label">{project.category}</span>
          <span className="font-medium text-lg leading-tight block">{project.name}</span>
        </figcaption>
      </figure>
    </Link>
  );
}

function HomePage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={revealRef}>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        <div className="ds-container w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div
              style={{ 
                transform: `translateY(${scrollY * 0.1}px)`,
                opacity: Math.max(1 - scrollY * 0.003, 0),
                filter: `blur(${scrollY > 20 ? Math.min((scrollY - 20) * 0.04, 12) : 0}px)`,
                transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease-out'
              }}
            >
              <h1 className="anim-fade-in">
                Marcas que não<br />
                pedem <span className="text-secondary font-medium">licença</span><br />
                para liderar.
              </h1>
              <p className="mt-10 text-lg lg:text-xl text-secondary leading-relaxed max-w-[600px] anim-fade-in delay-250">
                Design que confronta o comum e eleva o digital. Branding, conteúdo e presença digital conectados em um sistema de alto nível.
              </p>
            </div>
            <div className="mt-12 anim-fade-in delay-500" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
              <Link to="/trabalho" className="btn btn-arrow">
                Ver trabalho <span className="arrow" />
              </Link>
            </div>
          </div>
          <div 
            className="lg:col-span-5 block mt-12 lg:mt-0 anim-fade-in delay-250"
            style={{ 
              transform: `translateY(${scrollY * -0.1}px)`,
              transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <Link to="/symplice" className="block group">
              <figure className="project-card relative cursor-none">
                <div className="media-wrap aspect-[3/4]">
                  <img
                    src="/hero-brandding.jpg"
                    alt="Symplice project showcase"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <figcaption className="mt-6 flex items-center justify-between">
                  <div>
                    <span className="ds-card-label">Branding · 2024</span>
                    <span className="font-medium text-lg uppercase leading-tight block">Symplice — Identidade de<br />Marca para Startup</span>
                  </div>
                </figcaption>
              </figure>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Marquee */}
      <section className="py-32 overflow-hidden">
        <div className="ds-container mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-secondary scroll-reveal">Experiência</span>
          <h3 className="text-xl font-bold uppercase mt-2 scroll-reveal">Marcas que já trabalhei</h3>
        </div>
        <div className="animate-marquee flex items-center gap-24 whitespace-nowrap">
          {dynamicLogos.length > 0 ? (
            [...dynamicLogos, ...dynamicLogos].map((logo, i) => (
              <Link 
                key={i} 
                to={["natrave", "solid", "symplice", "maxi"].includes(logo.name.toLowerCase()) ? `/${logo.name.toLowerCase()}` : `/brand/${logo.name.toLowerCase()}`}
                className="flex items-center justify-center min-w-[300px] md:min-w-[500px] group transition-transform hover:scale-110 duration-500"
              >
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-[180px] md:h-[240px] w-auto object-contain transition-all duration-500" 
                />
              </Link>
            ))
          ) : (
            [...brands, ...brands].map((brand, i) => (
              <Link
                key={`${brand.id}-${i}`}
                to={brand.id === "symplice" || brand.id === "natrave" || brand.id === "solid" ? `/${brand.id}` : "/trabalho"}
                className="text-4xl md:text-6xl font-bold uppercase tracking-tighter opacity-20 hover:opacity-100 transition-opacity duration-500 flex items-center gap-4"
              >
                <span className="w-4 h-4 bg-foreground rounded-full" />
                {brand.name}
              </Link>
            ))
          )}
        </div>
      </section>

      {/* Positioning */}
      <section className="ds-section border-t border-border">
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">
                Abordagem
              </span>
            </div>
            <div className="lg:col-span-8">
              <p className="scroll-reveal text-2xl lg:text-4xl font-bold line-height-tight tracking-tight uppercase">
                O problema não é falta de ação. É falta de estrutura. Empresas que cresceram pela qualidade do serviço, mas cuja marca ainda não sustenta o nível que entregam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Preview */}
      <section className="ds-section border-t border-border">
        <div className="ds-container">
          <div className="flex items-center justify-between mb-12">
            <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">Projetos Selecionados</span>
            <Link to="/trabalho" className="text-link">Ver todos</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="ds-section border-t border-border relative z-10 bg-background">
        <div className="ds-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-mono uppercase tracking-tight text-secondary">Nossa Expertise</span>
              <h2 className="text-4xl font-bold mt-4">Serviços <br />Estratégicos</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Link
                key={s.id}
                to={s.id === "branding" ? "/servicos/estruturacao-de-marca" : 
                    s.id === "conteudo" ? "/servicos/sistema-de-conteudo" : 
                    s.id === "digital" ? "/servicos/presenca-digital" :
                    s.id === "impressa" ? "/servicos/midia-impressa" :
                    s.id === "ooh" ? "/servicos/midia-ooh" :
                    s.id === "influencia" ? "/servicos/marketing-de-influencia" : "/servicos"}
                className="scroll-reveal group block"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-[4/5] mb-8 bg-card border border-border group-hover:border-foreground/20 transition-colors duration-500">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="text-[10px] font-mono uppercase tracking-tight text-secondary mb-2 block">{s.num}</span>
                    <h4 className="text-2xl font-bold uppercase leading-tight">{s.title}</h4>
                  </div>
                </div>
                <p className="text-sm text-secondary leading-relaxed max-w-[300px] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {s.body}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
