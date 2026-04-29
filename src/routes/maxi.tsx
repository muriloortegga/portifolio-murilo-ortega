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

export const Route = createFileRoute("/maxi")({
  head: () => ({
    meta: [
      { title: "Colégio Maxi — Case Study — Murilo Ortega" },
      { name: "description", content: "Estratégia de Social Media e Performance Acadêmica para o Colégio Maxi." },
    ],
  }),
  component: ProjetoMaxi,
});

function ProjetoMaxi() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <SocialHero 
        client="Colégio Maxi"
        niche="Educação & Performance"
        phrase="Tradição que Evolui"
        image="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200"
      />

      <BeforeAfter 
        targetFollowers={2500}
        beforeImg="https://images.unsplash.com/photo-1523050335192-ce1dee6507f1?q=80&w=800"
        afterImg="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800"
      />

      <TopPosts 
        posts={[
          { img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200", context: "Campanha Vestibular", stats: "85k impressões" },
          { img: "https://images.unsplash.com/photo-1523050335192-ce1dee6507f1?q=80&w=800", context: "Dia a Dia Acadêmico", stats: "1.2k saves" },
          { img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800", context: "Eventos", stats: "500+ comments" },
          { img: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=1200", context: "OOH Integration", stats: "Viral Reach" },
        ]}
      />

      <TopCopies 
        copies={[
          { text: "A aprovação começa no hábito. No Maxi, preparamos para os maiores desafios.", img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200" },
          { text: "Tradição não é sobre o passado, é sobre a base que sustenta o seu futuro.", img: "https://images.unsplash.com/photo-1523050335192-ce1dee6507f1?q=80&w=800" },
          { text: "Onde o alto desempenho encontra o suporte humano. Isso é ser Maxi.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" },
        ]}
      />

      <GridEvolution 
        grids={[
          { month: "Início: Formalidade", img: "https://images.unsplash.com/photo-1523050335192-ce1dee6507f1?q=80&w=800" },
          { month: "Transição: Dinamismo", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" },
          { month: "Atual: Autoridade Digital", img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200" },
        ]}
      />

      <VerticalGallery 
        items={[
          { type: 'Reel', img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1200" },
          { type: 'Story', img: "https://images.unsplash.com/photo-1523050335192-ce1dee6507f1?q=80&w=800" },
          { type: 'Reel', img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" },
          { type: 'Story', img: "https://images.unsplash.com/photo-1516216628859-9bccecab13ca?q=80&w=1200" },
        ]}
      />

      <TestimonialCTA 
        clientName="Diretoria de Marketing"
        clientRole="Colégio Maxi"
        testimonial="O trabalho do Murilo trouxe a leveza necessária para as redes sociais sem perder a seriedade que nossa instituição exige. Os números de captação subiram drasticamente."
        clientImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400"
      />

      <section className="site-section border-t border-border">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/natrave" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoMaxi;
