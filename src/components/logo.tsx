import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("font-headline font-bold text-2xl md:text-3xl tracking-tight", className)}>
      <span className="text-primary">Página</span>
      <span className="text-accent"> Lúdica</span>
      <span className={cn("text-secondary-foreground", className?.includes("text-white") && "text-white/90")}> PEI</span>
    </div>
  );
}
