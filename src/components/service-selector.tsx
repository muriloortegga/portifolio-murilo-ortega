import { cn } from "@/lib/utils";

interface ServiceOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export function ServiceSelector({ 
  options, 
  activeId, 
  onChange 
}: { 
  options: ServiceOption[], 
  activeId: string, 
  onChange: (id: string) => void 
}) {
  return (
    <section className="site-container mb-12">
      <div className="flex flex-wrap items-center gap-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={cn(
              "px-6 py-3 text-[10px] font-mono uppercase tracking-[0.2em] transition-all border",
              activeId === option.id 
                ? "bg-foreground text-background border-foreground" 
                : "bg-transparent text-secondary border-border hover:border-foreground/40"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </section>
  );
}
