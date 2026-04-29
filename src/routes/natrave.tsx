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

export const Route = createFileRoute("/natrave")({
  head: () => ({
    meta: [
      { title: "NaTrave App — Case Study — Murilo Ortega" },
      { name: "description", content: "Estratégia de Social Media e Branding para o NaTrave App." },
    ],
  }),
  component: ProjetoNaTrave,
});

function ProjetoNaTrave() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <SocialHero 
        client="NaTrave App"
        niche="Esporte & Tecnologia"
        phrase="Virando o Jogo"
        image="/natrave-preview.gif"
      />

      <BeforeAfter 
        targetFollowers={1250}
        beforeImg="https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800"
        afterImg="/natrave-social.png"
      />

      <TopPosts 
        posts={[
          { img: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800", context: "Engajamento Orgânico", stats: "+15k reach" },
          { img: "/natrave-marca.png", context: "Brand Awareness", stats: "4.8k likes" },
          { img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800", context: "Comunidade", stats: "320 shares" },
          { img: "/natrave-social.png", context: "Conversão", stats: "12% CTR" },
        ]}
      />

      <TopCopies 
        copies={[
          { text: "O futebol amador nunca mais será o mesmo. O app que profissionaliza sua paixão.", img: "/natrave-social.png" },
          { text: "Cansado de organizar pelada no WhatsApp? Conheça o NaTrave.", img: "/natrave-marca.png" },
          { text: "Seu time, sua história, seu campo. Tudo em um só lugar.", img: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800" },
        ]}
      />

      <GridEvolution 
        grids={[
          { month: "Mês 01: Estruturação", img: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800" },
          { month: "Mês 02: Expansão", img: "/natrave-social.png" },
          { month: "Mês 03: Consolidação", img: "/natrave-marca.png" },
        ]}
      />

      <VerticalGallery 
        items={[
          { type: 'Reel', img: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=800" },
          { type: 'Story', img: "/natrave-social.png" },
          { type: 'Reel', img: "/natrave-marca.png" },
          { type: 'Story', img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" },
        ]}
      />

      <TestimonialCTA 
        clientName="Fundador NaTrave"
        clientRole="CEO & Founder"
        testimonial="O Murilo não apenas desenhou o app, ele construiu a voz da nossa comunidade. O crescimento no Social foi o motor da nossa tração inicial."
        clientImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400"
      />

      <section className="site-section border-t border-border">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/solid" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoNaTrave;
