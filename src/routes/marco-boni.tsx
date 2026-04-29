import { createFileRoute, Link } from "@tanstack/react-router";
import { GenericProjectLayout } from "@/components/generic-project-layout";

export const Route = createFileRoute("/marco-boni")({
  head: () => ({
    meta: [
      { title: "Marco Boni — Case Study — Murilo Ortega" },
      { name: "description", content: "Mídia Impressa e Catálogos de Alta Performance para Marco Boni." },
    ],
  }),
  component: ProjetoMarcoBoni,
});

function ProjetoMarcoBoni() {
  return (
    <div className="bg-background min-h-screen">
      <GenericProjectLayout 
        client="Marco Boni"
        phrase="Tangibilizando Qualidade"
        description="Desenvolvimento de catálogos, papelaria e materiais físicos que refletem a excelência e tradição da marca no mercado de beleza."
        serviceLabel="Mídia Impressa"
        mainImage="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200"
      />

      <section className="site-section border-t border-border mt-32">
        <div className="site-container flex justify-between items-center">
          <Link to="/trabalho" className="btn btn-arrow">← Voltar Projetos</Link>
          <Link to="/livin" className="btn btn-arrow">Próximo Projeto <span className="arrow" /></Link>
        </div>
      </section>
    </div>
  );
}

export default ProjetoMarcoBoni;
