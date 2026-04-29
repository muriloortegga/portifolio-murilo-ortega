import { createFileRoute, Link } from "@tanstack/react-router";
import { VisualIdentityLayout } from "@/components/visual-identity-layout";

export const Route = createFileRoute("/solid")({
  head: () => ({
    meta: [
      { title: "Solid+ — Case Study — Murilo Ortega" },
      { name: "description", content: "Identidade Visual e Fintech Systems para Solid+." },
    ],
  }),
  component: ProjetoSolid,
});

function ProjetoSolid() {
  return (
    <div className="bg-background min-h-screen">
      <VisualIdentityLayout 
        client="Solid+"
        phrase="Estrutura Robusta"
        description="Fintech Identity & Systems. Design que transmite solidez, confiança e inovação para o mercado financeiro digital."
        mainImage="/solid-full.png"
        showcaseImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
        skills="Id Visual, Fintech Design"
        year="2024"
      />

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/symplice" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoSolid;
