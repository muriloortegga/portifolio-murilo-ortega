import { createFileRoute, Link } from "@tanstack/react-router";
import { VisualIdentityLayout } from "@/components/visual-identity-layout";

export const Route = createFileRoute("/symplice")({
  head: () => ({
    meta: [
      { title: "Symplice — Case Study — Murilo Ortega" },
      { name: "description", content: "Identidade Visual para Symplice — Facilitando o complexo." },
    ],
  }),
  component: ProjetoSymplice,
});

function ProjetoSymplice() {
  return (
    <div className="bg-background min-h-screen">
      <VisualIdentityLayout 
        client="Symplice"
        phrase="Clareza Digital"
        description="Para marcas que operam na complexidade, a Symplice entrega simplicidade estratégica. Uma identidade visual limpa, direta e focada na experiência do usuário."
        mainImage="/hero-brandding.jpg"
        showcaseImage="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200"
        skills="Id Visual, Branding"
        year="2024"
      />

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/natrave" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoSymplice;
