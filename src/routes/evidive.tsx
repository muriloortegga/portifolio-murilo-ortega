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

export const Route = createFileRoute("/evidive")({
  head: () => ({
    meta: [
      { title: "EviDive — Case Study — Murilo Ortega" },
      { name: "description", content: "Estratégia de Social Media e Experiências Subaquáticas para EviDive Concept Dive Center." },
    ],
  }),
  component: ProjetoEviDive,
});

function ProjetoEviDive() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <SocialHero 
        client="EviDive"
        niche="Concept Dive Center & Wellness"
        phrase="Um Novo Universo"
        image="/hero-brandding.jpg"
      />

      <BeforeAfter 
        targetFollowers={5200}
        beforeImg="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800"
        afterImg="/hero-brandding.jpg"
      />

      <TopPosts 
        posts={[
          { img: "/hero-brandding.jpg", context: "Imersão: Emotion Dive", stats: "18k alcance" },
          { img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800", context: "Bem-estar & Natureza", stats: "2.1k likes" },
          { img: "https://images.unsplash.com/photo-1518611012118-2969c63700b7?q=80&w=800", context: "Educação: Mentoria", stats: "1.5k salvos" },
          { img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800", context: "Comunidade: Estilo de Vida", stats: "High Engagement" },
        ]}
      />

      <TopCopies 
        copies={[
          { text: "Mergulhar não é sobre prender a respiração, é sobre libertar a mente.", img: "/hero-brandding.jpg" },
          { text: "A EviDive é o único Concept Dive Center do mundo focado na sua transformação.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800" },
          { text: "Redescubra o tempo, o corpo e a natureza. O mergulho é a porta de entrada.", img: "https://images.unsplash.com/photo-1518611012118-2969c63700b7?q=80&w=800" },
        ]}
      />

      <GridEvolution 
        grids={[
          { month: "Início: Descoberta", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800" },
          { month: "Fase 02: Imersão & Comunidade", img: "https://images.unsplash.com/photo-1518611012118-2969c63700b7?q=80&w=800" },
          { month: "Atual: Autoridade em Experiências", img: "/hero-brandding.jpg" },
        ]}
      />

      <VerticalGallery 
        items={[
          { type: 'Reel', img: "/hero-brandding.jpg" },
          { type: 'Story', img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800" },
          { type: 'Reel', img: "https://images.unsplash.com/photo-1518611012118-2969c63700b7?q=80&w=800" },
          { type: 'Story', img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800" },
        ]}
      />

      <TestimonialCTA 
        clientName="Diretoria Evidive"
        clientRole="Fundador"
        testimonial="O Murilo não criou apenas posts, ele criou um destino digital. Hoje a EviDive é percebida como uma marca premium de lifestyle."
        clientImage="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400"
      />

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/milgrows" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoEviDive;
