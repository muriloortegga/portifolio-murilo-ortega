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

export const Route = createFileRoute("/talk2buy")({
  head: () => ({
    meta: [
      { title: "Talk2Buy — Case Study — Murilo Ortega" },
      { name: "description", content: "Estratégia de Social Media e Automação de Vendas via WhatsApp para Talk2Buy." },
    ],
  }),
  component: ProjetoTalk2Buy,
});

function ProjetoTalk2Buy() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <SocialHero 
        client="Talk2Buy"
        niche="Sales Automation & WhatsApp"
        phrase="Seu Vendedor 24/7"
        image="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800"
      />

      <BeforeAfter 
        targetFollowers={3800}
        beforeImg="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800"
        afterImg="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800"
      />

      <TopPosts 
        posts={[
          { img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800", context: "Automação: Venda Passiva", stats: "12k views" },
          { img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800", context: "Didática: Como Escalar", stats: "800+ saves" },
          { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", context: "Social Proof: Resultados", stats: "450 comments" },
          { img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800", context: "Institucional: Inovação", stats: "High Conversion" },
        ]}
      />

      <TopCopies 
        copies={[
          { text: "Vender não é sobre empurrar produtos, é sobre puxar conversas que escalam seu negócio.", img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800" },
          { text: "Seu cliente está a um direct de distância da próxima compra. O Talk2Buy fecha o carrinho por você.", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800" },
          { text: "A tecnologia facilita, mas a humanização do fluxo é o que gera previsibilidade.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
        ]}
      />

      <GridEvolution 
        grids={[
          { month: "Início: Setup de Autoridade", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800" },
          { month: "Fase 02: Engajamento & Prova", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
          { month: "Atual: Conversão em Escala", img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800" },
        ]}
      />

      <VerticalGallery 
        items={[
          { type: 'Reel', img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800" },
          { type: 'Story', img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800" },
          { type: 'Reel', img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
          { type: 'Story', img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800" },
        ]}
      />

      <TestimonialCTA 
        clientName="CEO Talk2Buy"
        clientRole="Fundador"
        testimonial="O Murilo transformou nossa presença digital em um motor de vendas. Ele não vende apenas posts, ele entrega escala e previsibilidade."
        clientImage="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400"
      />

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/evidive" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoTalk2Buy;
