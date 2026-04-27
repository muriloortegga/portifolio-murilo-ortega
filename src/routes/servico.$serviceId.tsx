import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/servico/$serviceId")({
  component: ServicePage,
});

const serviceData: Record<string, { title: string, description: string, image: string }> = {
  branding: {
    title: "Estruturação de Marca",
    description: "Nascemos para dar base a quem já cresceu. O processo de estruturação de marca organiza sua essência, visual e tom de voz em um sistema único.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop"
  },
  conteudo: {
    title: "Sistema de Conteúdo",
    description: "Transformamos presença digital em um sistema previsível. Criamos linhas editoriais que conectam seu posicionamento com o cotidiano da sua audiência.",
    image: "https://images.unsplash.com/photo-1557264305-7e2764da873b?q=80&w=2000&auto=format&fit=crop"
  },
  digital: {
    title: "Presença Digital",
    description: "Seu site é o centro da sua autoridade. Desenvolvemos experiências digitais que elevam a percepção de valor e facilitam a conversão do seu cliente.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
  },
  impressa: {
    title: "Mídia Impressa",
    description: "O tátil comunica o que o digital não alcança. Papelaria fina, catálogos e materiais de alto padrão que tangibilizam a qualidade da sua entrega.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2000&auto=format&fit=crop"
  },
  ooh: {
    title: "Mídia OOH",
    description: "Impacto em escala urbana. Planejamos e executamos campanhas de outdoor e sinalização que dominam o cenário e fixam sua marca na mente do público.",
    image: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=2000&auto=format&fit=crop"
  },
  influencia: {
    title: "Marketing de Influência",
    description: "Autoridade por associação. Estratégias que conectam sua marca a influenciadores que compartilham seus valores e falam com seu público-alvo real.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2000&auto=format&fit=crop"
  }
};

function ServicePage() {
  const { serviceId } = useParams({ from: "/servico/$serviceId" });
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const data = serviceData[serviceId] || serviceData.branding;

  return (
    <div ref={revealRef} className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.image} 
            alt={data.title}
            className="w-full h-full object-cover grayscale opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        
        <div className="container-site relative z-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] mb-8 block anim-fade-in">Serviço Especializado</span>
          <h1 className="text-6xl md:text-[8vw] leading-[1] tracking-tighter uppercase anim-fade-in max-w-4xl">
            {data.title}
          </h1>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold uppercase mb-12 scroll-reveal">Como Executamos</h2>
              <div className="space-y-12">
                {[
                  { n: "01", t: "Análise Estratégica", d: "Mergulho profundo nos objetivos e dores do negócio." },
                  { n: "02", t: "Concepção Visual", d: "Criação de caminhos estéticos que sustentam a estratégia." },
                  { n: "03", t: "Implementação", d: "Entrega final com rigor técnico e atenção aos detalhes." }
                ].map((step) => (
                  <div key={step.n} className="scroll-reveal">
                    <span className="text-xs font-mono text-secondary mb-2 block">{step.n}</span>
                    <h3 className="text-xl font-bold uppercase mb-2">{step.t}</h3>
                    <p className="text-secondary">{step.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-card border border-border p-12 lg:p-20 scroll-reveal">
                <p className="text-2xl lg:text-4xl font-medium leading-tight tracking-tight uppercase">
                  {data.description}
                </p>
                <div className="mt-20">
                  <Link to="/contato" className="btn btn-primary">
                    Solicitar Orçamento
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="pb-32">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="scroll-reveal aspect-square bg-card overflow-hidden">
               <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Work 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="scroll-reveal aspect-square bg-card overflow-hidden md:mt-12">
               <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80" alt="Work 2" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="scroll-reveal aspect-square bg-card overflow-hidden md:mt-24">
               <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80" alt="Work 3" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
