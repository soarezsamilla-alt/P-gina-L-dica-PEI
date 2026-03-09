'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

interface UpsellModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UpsellModal({ open, onOpenChange }: UpsellModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-sm sm:max-w-md bg-card border-primary shadow-2xl rounded-2xl p-0">
        <DialogHeader className="p-4 sm:p-6 text-center">
          <div className="flex justify-center mb-2">
            <div className="bg-primary/10 p-3 rounded-full">
                <Star className="h-6 w-6 text-primary" />
            </div>
          </div>
          <DialogTitle className="font-headline text-xl sm:text-2xl !mt-0">Espere! Temos uma oferta melhor!</DialogTitle>
          <DialogDescription className="text-muted-foreground pt-1 text-xs sm:text-sm">
            Por apenas <span className="font-bold text-primary">R$4,00 a mais</span>, você leva o <span className="font-bold text-foreground">Plano PRO</span>.
          </DialogDescription>
        </DialogHeader>
        
        <div className="px-4 sm:px-6">
            <div className="bg-background/50 rounded-lg p-4">
              <h4 className="font-bold text-center mb-3 text-sm sm:text-base text-foreground">O Plano PRO inclui:</h4>
              <ul className="space-y-2 text-xs text-left text-foreground/90">
                  <li className="flex items-start"><CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" /> <span>Tudo do Plano Básico e <span className="font-bold">MUITO</span> mais!</span></li>
                  <li className="flex items-start"><CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" /> <span><span className="font-bold">3 Bônus</span> (Autismo, Relatórios e Ativ. Motoras) 🎁</span></li>
                  <li className="flex items-start"><CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" /> <span><span className="font-bold">Combo Ed. Especial</span> com materiais extras</span></li>
                  <li className="flex items-start"><CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" /> <span><span className="font-bold">PEI Autismo Ed. Infantil</span></span></li>
                  <li className="flex items-start"><CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" /> <span>Relatórios AEE</span></li>
                  <li className="flex items-start"><CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" /> <span>PEI para deficiências múltiplas</span></li>
                  <li className="flex items-start"><CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" /> <span>Acesso a <span className="font-bold">futuras atualizações</span></span></li>
              </ul>
            </div>
        </div>

        <DialogFooter className="sm:justify-center flex-col sm:flex-col sm:space-x-0 gap-2 p-4 sm:p-6">
          <Button
            type="button"
            className="w-full h-11 text-base bg-accent hover:bg-accent/90 text-accent-foreground font-semibold animate-pulse-ring-accent"
            onMouseDown={() => window.location.href = 'https://pay.wiapy.com/VBXdX_ymda'}
          >
            Sim, quero o Plano PRO!
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="w-full text-muted-foreground hover:text-foreground text-xs"
            onMouseDown={() => window.location.href = 'https://pay.wiapy.com/qCy3ZzlkT1'}
          >
            Não, obrigado. Continuar com o Plano Básico.
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
