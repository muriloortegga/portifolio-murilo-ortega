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

export const Route = createFileRoute("/milgrows")({
  head: () => ({
    meta: [
      { title: "Milgrows — Murilo Ortega" },
      { name: "description", content: "Estratégia de Social Media e Educação sobre Cannabis Medicinal para Milgrows." },
    ],
  }),
  component: ProjetoMilgrows,
});

function ProjetoMilgrows() {
  const [activeService, setActiveService] = useState("social"); // For new ones, maybe social is fine as default if it's the only one? 
  // Actually, the user wants the "old" dynamic. For Milgrows, let's keep Social as an option.

  const services = [
    { id: "social", label: "Social Media" }
  ];

  const metaData = [
    { label: "Cliente", value: "Milgrows" },
    { label: "Ano", value: "2023" },
    { label: "Nicho", value: "Cannabis Medicinal" },
    { label: "Skills", value: "Social Media, Educação" }
  ];

  return (
    <div className="bg-background">
      <BrandHeader 
        client="Milgrows"
        phrase="Semeando Conhecimento"
        description="Uma organização voltada à promoção do acesso seguro, legal e informado à cannabis medicinal. Suporte a pacientes e conexão com respaldo jurídico especializado."
        niche="Saúde & Movimento Social"
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
            targetFollowers={1200}
            beforeImg="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800"
            afterImg="https://images.unsplash.com/photo-1556922453-8691f99ffcd1?q=80&w=800"
          />

          <TopPosts 
            posts={[
              { img: "https://images.unsplash.com/photo-1556922453-8691f99ffcd1?q=80&w=800", context: "Educativo: Regulamentação", stats: "12k alcance" },
              { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800", context: "Humanização: Apoio ao Paciente", stats: "1.2k salvos" },
              { img: "https://images.unsplash.com/photo-1523348830342-d01f9fc56440?q=80&w=800", context: "Inovação: Cultivo Legal", stats: "800+ comentários" },
              { img: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=800", context: "Comunidade: Quebrando Estigmas", stats: "High Impact" },
            ]}
          />

          <TopCopies 
            copies={[
              { text: "A cannabis medicinal não é sobre o que você planta, é sobre a saúde que você colhe.", img: "https://images.unsplash.com/photo-1556922453-8691f99ffcd1?q=80&w=800" },
              { text: "Democratizar o conhecimento é o primeiro passo para o acesso seguro e legal.", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800" },
              { text: "Trabalhamos para que a ciência supere o estigma, e a saúde seja prioridade.", img: "https://images.unsplash.com/photo-1523348830342-d01f9fc56440?q=80&w=800" },
            ]}
          />

          <GridEvolution 
            grids={[
              { month: "Início: Identidade & Causa", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800" },
              { month: "Fase 02: Autoridade Educativa", img: "https://images.unsplash.com/photo-1523348830342-d01f9fc56440?q=80&w=800" },
              { month: "Atual: Movimento & Apoio", img: "https://images.unsplash.com/photo-1556922453-8691f99ffcd1?q=80&w=800" },
            ]}
          />

          <VerticalGallery 
            items={[
              { type: 'Reel', img: "https://images.unsplash.com/photo-1556922453-8691f99ffcd1?q=80&w=800" },
              { type: 'Story', img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800" },
              { type: 'Reel', img: "https://images.unsplash.com/photo-1523348830342-d01f9fc56440?q=80&w=800" },
              { type: 'Story', img: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=800" },
            ]}
          />

          <TestimonialCTA 
            clientName="Associação MilGrows"
            clientRole="Diretoria Executiva"
            testimonial="O Murilo traduziu temas complexos em conteúdos acolhedores. Ele conseguiu posicionar a MilGrows como uma autoridade humana e confiável."
            clientImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
          />
        </div>
      )}

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/kapyi" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoMilgrows;
