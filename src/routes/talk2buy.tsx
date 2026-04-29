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
      { name: "description", content: "Estratégia de Social Media para Talk2Buy." },
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
        niche="E-commerce & Tecnologia"
        phrase="Conversão em Diálogo"
        image="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800"
      />

      <BeforeAfter 
        targetFollowers={3800}
        beforeImg="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800"
        afterImg="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800"
      />

      <TopPosts 
        posts={[
          { img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800", context: "Lançamento de Feature", stats: "12k views" },
          { img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800", context: "Dica de Vendas", stats: "800 saves" },
          { img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800", context: "Social Proof", stats: "450 comments" },
          { img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800", context: "Institucional", stats: "High Reach" },
        ]}
      />

      <TopCopies 
        copies={[
          { text: "Vender não é sobre empurrar produtos, é sobre puxar conversas que importam.", img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800" },
          { text: "Seu cliente está a um direct de distância da próxima compra. Você está pronto?", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800" },
          { text: "A tecnologia facilita, mas a humanização do conteúdo é o que fecha o carrinho.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
        ]}
      />

      <GridEvolution 
        grids={[
          { month: "Fase 01: Setup", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800" },
          { month: "Fase 02: Engajamento", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
          { month: "Fase 03: Venda Ativa", img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800" },
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
        clientName="Marketing Manager"
        clientRole="Talk2Buy"
        testimonial="O Murilo transformou nosso Instagram em um canal real de vendas. A estratégia de copies foi o divisor de águas para nosso CTR."
        clientImage="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400"
      />

      <section className="site-section border-t border-border">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/evidive" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoTalk2Buy;
