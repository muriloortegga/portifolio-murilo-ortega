import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BrandHeader } from "@/components/brand-header";
import { ServiceSelector } from "@/components/service-selector";

export const Route = createFileRoute("/livin")({
  head: () => ({
    meta: [
      { title: "Livin Company — Case Study — Murilo Ortega" },
      { name: "description", content: "Mídia Impressa e Materiais de PDV para Livin Company." },
    ],
  }),
  component: ProjetoLivin,
});

function ProjetoLivin() {
  const [activeService, setActiveService] = useState("impressa");

  const services = [
    { id: "impressa", label: "Mídia Impressa" }
  ];

  const metaData = [
    { label: "Cliente", value: "Livin Company" },
    { label: "Ano", value: "2023" },
    { label: "Skills", value: "PDV, Mídia Impressa" }
  ];

  return (
    <div className="bg-background">
      <BrandHeader 
        client="Livin Company"
        phrase="Experiência em Papel"
        description="Materiais de ponto de venda e papelaria institucional desenvolvidos para criar conexões físicas e táteis com o consumidor final."
        niche="Retail & Lifestyle"
        meta={metaData}
      />

      <ServiceSelector 
        options={services} 
        activeId={activeService} 
        onChange={setActiveService} 
      />

      <div className="anim-fade-in site-container pb-32">
         <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200" alt="Livin PDV" className="w-full h-auto border border-border shadow-2xl" />
      </div>

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/marco-boni" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoLivin;
