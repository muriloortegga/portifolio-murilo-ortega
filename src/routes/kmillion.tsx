import { createFileRoute, Link } from "@tanstack/react-router";
import { VisualIdentityLayout } from "@/components/visual-identity-layout";

export const Route = createFileRoute("/kmillion")({
  head: () => ({
    meta: [
      { title: "Kmillion — Case Study — Murilo Ortega" },
      { name: "description", content: "Identidade Visual e Inteligência Promocional para Kmillion Promotech." },
    ],
  }),
  component: ProjetoKmillion,
});

function ProjetoKmillion() {
  return (
    <div className="bg-background min-h-screen">
      <VisualIdentityLayout 
        client="Kmillion"
        phrase="Inteligência Adaptável"
        description="A Kmillion é uma promotech que transforma promoções em canais de relacionamento. Inspirada na adaptabilidade do camaleão, sua identidade traduz flexibilidade, autonomia e performance no varejo."
        mainImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
        showcaseImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"
        skills="Id Visual, UI/UX"
        year="2024"
      />

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/solid" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoKmillion;
