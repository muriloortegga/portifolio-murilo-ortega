import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BrandHeader } from "@/components/brand-header";
import { ServiceSelector } from "@/components/service-selector";

export const Route = createFileRoute("/kmillion")({
  head: () => ({
    meta: [
      { title: "Kmillion — Case Study — Murilo Ortega" },
      { name: "description", content: "Identidade Visual e Inteligência Promocional para Kmillion Promotech." },
    ],
  }),
  component: ProjetoKmillion,
});

function ProjetoKmillion() {
  const [activeService, setActiveService] = useState("marca");

  const services = [
    { id: "marca", label: "Id Visual" }
  ];

  const metaData = [
    { label: "Cliente", value: "Kmillion" },
    { label: "Ano", value: "2024" },
    { label: "Tech", value: "Promotech / Varejo" },
    { label: "Skills", value: "Id Visual, UI/UX" }
  ];

  return (
    <div className="bg-background">
      <BrandHeader 
        client="Kmillion"
        phrase="Inteligência Adaptável"
        description="Transformando promoções em canais de relacionamento. Inspirada na adaptabilidade do camaleão, a Kmillion entrega autonomia e inteligência para o marketing de varejo."
        niche="Tecnologia & Varejo"
        meta={metaData}
      />

      <ServiceSelector 
        options={services} 
        activeId={activeService} 
        onChange={setActiveService} 
      />

      <div className="anim-fade-in site-container pb-32">
         <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200" alt="Kmillion Branding" className="w-full h-auto border border-border shadow-2xl mb-12" />
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200" alt="Kmillion Data" className="w-full h-auto border border-border" />
            <div className="flex flex-col justify-center">
               <p className="text-sm text-secondary leading-relaxed uppercase font-medium">
                  Mais do que uma ferramenta, um ecossistema de inteligência promocional. Cada elemento visual foi pensado para reforçar a percepção de uma marca ágil e confiável.
               </p>
            </div>
         </div>
      </div>

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/solid" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoKmillion;
