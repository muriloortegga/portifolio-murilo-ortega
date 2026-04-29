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
      { name: "description", content: "Estratégia de Social Media para Milgrows." },
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
        niche="Agro & Inovação"
        phrase="Semeando Resultados"
        image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
      />

      <BeforeAfter 
        targetFollowers={1800}
        beforeImg="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800"
        afterImg="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800"
      />

      <TopPosts 
        posts={[
          { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", context: "Tecnologia Campo", stats: "6.5k reach" },
          { img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800", context: "Bastidores", stats: "1.1k likes" },
          { img: "https://images.unsplash.com/photo-1523348830342-d01f9fc56440?q=80&w=800", context: "Inovação", stats: "400 saves" },
          { img: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=800", context: "Sustentabilidade", stats: "8% engagement" },
        ]}
      />

      <TopCopies 
        copies={[
          { text: "O futuro do agro não é apenas o que você planta, mas como você mostra o que colhe.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
          { text: "Tecnologia no campo é autoridade no digital. A Milgrows lidera essa transição.", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800" },
          { text: "Sustentabilidade é o nosso norte, a performance digital é o nosso motor.", img: "https://images.unsplash.com/photo-1523348830342-d01f9fc56440?q=80&w=800" },
        ]}
      />

      <GridEvolution 
        grids={[
          { month: "Q1: Presença", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800" },
          { month: "Q2: Autoridade", img: "https://images.unsplash.com/photo-1523348830342-d01f9fc56440?q=80&w=800" },
          { month: "Q3: Liderança", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
        ]}
      />

      <VerticalGallery 
        items={[
          { type: 'Reel', img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
          { type: 'Story', img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800" },
          { type: 'Reel', img: "https://images.unsplash.com/photo-1523348830342-d01f9fc56440?q=80&w=800" },
          { type: 'Story', img: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=800" },
        ]}
      />

      <TestimonialCTA 
        clientName="Operations Director"
        clientRole="Milgrows"
        testimonial="O Murilo trouxe o Agro para a era digital de forma estratégica e elegante. Nossa percepção de marca no mercado mudou totalmente."
        clientImage="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400"
      />

      <section className="site-section border-t border-border">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/kapyi" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoMilgrows;
