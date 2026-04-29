import { createFileRoute, Link } from "@tanstack/react-router";
import { 
  SocialHero, 
  BeforeAfter, 
  TopPosts, 
  TopCopies, 
  GridEvolution, 
  VerticalGallery, 
  TestimonialCTA 
} from "@/components/social-case-layout";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/milgrows")({
  head: () => ({
    meta: [
      { title: "Milgrows — Case Study — Murilo Ortega" },
      { name: "description", content: "Estratégia de Social Media e Educação sobre Cannabis Medicinal para Milgrows." },
    ],
  }),
  component: ProjetoMilgrows,
});

function ProjetoMilgrows() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <SocialHero 
        client="Milgrows"
        niche="Cannabis Medicinal & Educação"
        phrase="Semeando Conhecimento"
        image="https://images.unsplash.com/photo-1556922453-8691f99ffcd1?q=80&w=800"
      />

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
