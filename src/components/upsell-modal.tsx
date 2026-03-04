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
import Link from 'next/link';

interface UpsellModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function UpsellModal({ open, onOpenChange }: UpsellModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] sm:max-w-lg bg-card border-primary shadow-2xl rounded-2xl">
        <DialogHeader className="pt-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 p-4 rounded-full">
                <Star className="h-8 w-8 text-primary" />
            </div>
          </div>
          <DialogTitle className="font-headline text-2xl !mt-0">Espere! Temos uma oferta melhor!</DialogTitle>
          <DialogDescription className="text-muted-foreground pt-2 text-base">
            Por apenas <span className="font-bold text-primary">R$5,00 a mais</span>, você leva o <span className="font-bold text-foreground">Plano PRO</span>. É o nosso pacote mais completo e <span className="font-bold text-primary">mais vendido!</span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="my-6 px-6">
            <h4 className="font-bold text-center mb-4 text-foreground">Veja tudo que você recebe no Plano PRO:</h4>
            <ul className="space-y-2 text-sm text-left text-foreground/90">
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#6fbf74] mr-2 mt-0.5 flex-shrink-0" /> <span>Tudo do Plano Básico e <span className="font-bold">MUITO</span> mais!</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#6fbf74] mr-2 mt-0.5 flex-shrink-0" /> <span><span className="font-bold">3 Bônus</span> (Autismo, Relatórios e Ativ. Motoras) 🎁</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#6fbf74] mr-2 mt-0.5 flex-shrink-0" /> <span><span className="font-bold">Combo Ed. Especial</span> com materiais extras</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#6fbf74] mr-2 mt-0.5 flex-shrink-0" /> <span><span className="font-bold">PEI Autismo Ed. Infantil</span></span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#6fbf74] mr-2 mt-0.5 flex-shrink-0" /> <span>Relatórios AEE</span></li>
                <li className="flex items-start"><CheckCircle className="h-5 w-5 text-[#6fbf74] mr-2 mt-0.5 flex-shrink-0" /> <span>Acesso a <span className="font-bold">futuras atualizações</span></span></li>
            </ul>
        </div>

        <DialogFooter className="sm:justify-center flex-col sm:flex-col sm:space-x-0 gap-2 pt-0">
          <Link href="https://ggcheckout.com.br/checkout/v5/wAClZqNxlzOQ1mDxfJbY" className="w-full" onClick={() => onOpenChange(false)}>
            <Button 
                type="button" 
                className="w-full h-12 text-lg bg-primary hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Sim, quero o Plano PRO!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://ggcheckout.com.br/checkout/v5/nS0mZlwRYibwdCSDPg6A" className="w-full" onClick={() => onOpenChange(false)}>
            <Button 
                type="button" 
                variant="ghost" 
                className="w-full text-muted-foreground hover:text-foreground"
            >
                Não, obrigado. Quero o Plano Básico.
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
