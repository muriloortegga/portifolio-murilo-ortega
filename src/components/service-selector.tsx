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
    <section className="site-container pt-32 mb-12">
      <div className="flex flex-wrap items-center gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={cn(
              "px-8 py-4 text-xs font-mono uppercase tracking-[0.2em] transition-all border",
              activeId === option.id 
                ? "bg-foreground text-background border-foreground shadow-lg scale-105" 
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
