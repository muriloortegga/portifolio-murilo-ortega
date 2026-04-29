import { createFileRoute, Link } from "@tanstack/react-router";
import { GenericProjectLayout } from "@/components/generic-project-layout";

export const Route = createFileRoute("/livin")({
  head: () => ({
    meta: [
      { title: "Livin Company — Case Study — Murilo Ortega" },
      { name: "description", content: "Mídia Impressa e Materiais de PDV para Livin Company." },
    ],
  }),
  component: ProjetoLivin,
});

function ProjetoLivin() {
  return (
    <div className="bg-background min-h-screen">
      <GenericProjectLayout 
        client="Livin Company"
        phrase="Experiência em Papel"
        description="Materiais impressos desenvolvidos para elevar a percepção de valor no ponto de venda e criar conexões físicas duradouras com o consumidor."
        serviceLabel="Mídia Impressa"
        mainImage="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200"
      />

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/marco-boni" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoLivin;
