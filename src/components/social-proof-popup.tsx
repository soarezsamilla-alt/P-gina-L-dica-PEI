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
      }, 4000); // Popup is visible for 4 seconds
    };

    // Show first popup after 5 seconds
    const initialTimeout = setTimeout(showPopup, 5000);
    // Show subsequent popups every 8 seconds
    const interval = setInterval(showPopup, 8000);

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
    <div className="fixed bottom-4 left-4 z-[60] w-full max-w-xs sm:max-w-sm animate-in slide-in-from-bottom-10 fade-in-50">
      <div className="relative rounded-xl border bg-card text-card-foreground shadow-lg p-4">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 p-1 rounded-full text-muted-foreground hover:bg-muted"
          aria-label="Fechar notificação"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Fechar</span>
        </button>
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 bg-primary/10 p-2 rounded-full">
            <CheckCircle className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-bold text-sm">{currentName}</p>
            <p className="text-sm text-muted-foreground">acabou de comprar o Plano PRO!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
