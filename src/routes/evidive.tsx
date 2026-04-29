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
      { name: "description", content: "Estratégia de Social Media e Marketing de Influência para EviDive." },
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
        niche="Wellness & Saúde"
        phrase="Mergulho no Bem-estar"
        image="/hero-brandding.jpg"
      />

      <BeforeAfter 
        targetFollowers={5200}
        beforeImg="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800"
        afterImg="/hero-brandding.jpg"
      />

      <TopPosts 
        posts={[
          { img: "/hero-brandding.jpg", context: "Autoridade", stats: "18k reach" },
          { img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800", context: "Lifestyle", stats: "2.1k likes" },
          { img: "https://images.unsplash.com/photo-1518611012118-2969c63700b7?q=80&w=800", context: "Educativo", stats: "1.5k saves" },
          { img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=800", context: "Conversão", stats: "20% growth" },
        ]}
      />

      <TopCopies 
        copies={[
          { text: "Sua saúde não tira férias, mas você pode tirar um tempo para ela hoje.", img: "/hero-brandding.jpg" },
          { text: "Equilíbrio não é algo que você encontra, é algo que você cria diariamente.", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800" },
          { text: "O mergulho mais profundo é aquele que você faz em direção à sua melhor versão.", img: "https://images.unsplash.com/photo-1518611012118-2969c63700b7?q=80&w=800" },
        ]}
      />

      <GridEvolution 
        grids={[
          { month: "Jan: Identidade", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800" },
          { month: "Fev: Autoridade", img: "https://images.unsplash.com/photo-1518611012118-2969c63700b7?q=80&w=800" },
          { month: "Mar: Comunidade", img: "/hero-brandding.jpg" },
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
        clientName="Fundadora EviDive"
        clientRole="Founder"
        testimonial="O Murilo conseguiu traduzir a paz e a energia da nossa marca para o digital. O engajamento nunca foi tão qualificado."
        clientImage="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400"
      />

      <section className="site-section border-t border-border">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/milgrows" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoEviDive;
