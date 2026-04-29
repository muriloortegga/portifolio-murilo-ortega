import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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

export const Route = createFileRoute("/kapyi")({
  head: () => ({
    meta: [
      { title: "Kapyi — Case Study — Murilo Ortega" },
      { name: "description", content: "Estratégia de Social Media para Kapyi." },
    ],
  }),
  component: ProjetoKapyi,
});

function ProjetoKapyi() {
  const [activeService, setActiveService] = useState("social");

  const services = [
    { id: "social", label: "Social Media" }
  ];

  const metaData = [
    { label: "Cliente", value: "Kapyi" },
    { label: "Ano", value: "2023" },
    { label: "Nicho", value: "Gastronomia" },
    { label: "Skills", value: "Social Media, Lifestyle" }
  ];

  return (
    <div className="bg-background">
      <BrandHeader 
        client="Kapyi"
        phrase="Sabor que Conecta"
        description="A experiência Kapyi vai além do prato. É o encontro entre tradição e o novo lifestyle urbano, traduzido em desejo digital e conexão real com o público."
        niche="Gastronomia & Lifestyle"
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
            targetFollowers={4300}
            beforeImg="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800"
            afterImg="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800"
          />

          <TopPosts 
            posts={[
              { img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800", context: "Visual Impact", stats: "15k reach" },
              { img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800", context: "Menu Preview", stats: "2.5k likes" },
              { img: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=800", context: "Community", stats: "900 shares" },
              { img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800", context: "Behind the Scenes", stats: "High Story Views" },
            ]}
          />

          <TopCopies 
            copies={[
              { text: "A experiência Kapyi vai além do prato, é o encontro entre tradição e o novo lifestyle urbano.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" },
              { text: "Onde o sabor encontra a sua melhor companhia. Reserve seu momento Kapyi.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800" },
              { text: "Mais do que um café, um ponto de conexão. O digital reflete o que vivemos no presencial.", img: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=800" },
            ]}
          />

          <GridEvolution 
            grids={[
              { month: "Inauguração", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800" },
              { month: "Fase 02", img: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=800" },
              { month: "Atualidade", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" },
            ]}
          />

          <VerticalGallery 
            items={[
              { type: 'Reel', img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" },
              { type: 'Story', img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800" },
              { type: 'Reel', img: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=800" },
              { type: 'Story', img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800" },
            ]}
          />

          <TestimonialCTA 
            clientName="Proprietário Kapyi"
            clientRole="Founder"
            testimonial="O Murilo conseguiu capturar a essência do nosso espaço e traduzir isso em desejo digital. O movimento na casa aumentou visivelmente."
            clientImage="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400"
          />
        </div>
      )}

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoKapyi;
