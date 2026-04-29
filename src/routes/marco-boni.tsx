import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BrandHeader } from "@/components/brand-header";
import { ServiceSelector } from "@/components/service-selector";

export const Route = createFileRoute("/marco-boni")({
  head: () => ({
    meta: [
      { title: "Marco Boni — Case Study — Murilo Ortega" },
      { name: "description", content: "Mídia Impressa e Catálogos de Alta Performance para Marco Boni." },
    ],
  }),
  component: ProjetoMarcoBoni,
});

function ProjetoMarcoBoni() {
  const [activeService, setActiveService] = useState("impressa");

  const services = [
    { id: "impressa", label: "Mídia Impressa" }
  ];

  const metaData = [
    { label: "Cliente", value: "Marco Boni" },
    { label: "Ano", value: "2023" },
    { label: "Segmento", value: "Beleza & Cosméticos" },
    { label: "Skills", value: "Design Gráfico, Catálogos" }
  ];

  return (
    <div className="bg-background">
      <BrandHeader 
        client="Marco Boni"
        phrase="Tangibilizando Qualidade"
        description="Desenvolvimento de catálogos e materiais institucionais para uma das maiores referências do mercado de beleza. Foco em excelência gráfica e valor de marca."
        niche="Beleza & Higiene"
        meta={metaData}
      />

      <ServiceSelector 
        options={services} 
        activeId={activeService} 
        onChange={setActiveService} 
      />

      <div className="anim-fade-in site-container pb-32">
         <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200" alt="Marco Boni Catalogo" className="w-full h-auto border border-border shadow-2xl" />
      </div>

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/livin" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoMarcoBoni;
