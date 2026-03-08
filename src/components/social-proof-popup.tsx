'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

const names = [
  'Ana Paula', 'Fernanda', 'Beatriz', 'Mariana', 'Camila', 'Juliana',
  'Larissa', 'Carolina', 'Amanda', 'Bruna', 'Gabriela', 'Leticia',
  'Sofia', 'Isabela', 'Manuela', 'Laura', 'Valentina', 'Alice'
];

export default function SocialProofPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentName, setCurrentName] = useState('');
  
  useEffect(() => {
    let hideTimeout: NodeJS.Timeout;

    const showPopup = () => {
      const nameIndex = Math.floor(Math.random() * names.length);
      setCurrentName(names[nameIndex]);
      setIsVisible(true);

      hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 3000); // Popup is visible for 3 seconds
    };

    // Show first popup after 3 seconds
    const initialTimeout = setTimeout(showPopup, 3000);
    // Show subsequent popups every 5 seconds
    const interval = setInterval(showPopup, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
      clearTimeout(hideTimeout);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-[60] w-full max-w-[280px] animate-in slide-in-from-bottom-10 fade-in-50">
      <div className="relative rounded-lg border bg-card text-card-foreground shadow-lg p-3">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-1.5 right-1.5 p-1 rounded-full text-muted-foreground hover:bg-muted"
          aria-label="Fechar notificação"
        >
          <X className="h-3 w-3" />
          <span className="sr-only">Fechar</span>
        </button>
        <div className="flex items-center gap-2">
          <div className="flex-shrink-0 bg-primary/10 p-1.5 rounded-full">
            <CheckCircle className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-bold text-xs">{currentName}</p>
            <p className="text-xs text-muted-foreground">acabou de comprar o Plano PRO!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
