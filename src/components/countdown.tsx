'use client';

import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState<string | null>(null);

    useEffect(() => {
        // Set a fixed end date 24 hours from the first time the user visits.
        // Store it in localStorage to persist across page reloads.
        let countdownEndDate = localStorage.getItem('countdownEndDate');
        if (!countdownEndDate) {
            countdownEndDate = String(new Date().getTime() + 24 * 60 * 60 * 1000);
            localStorage.setItem('countdownEndDate', countdownEndDate);
        }

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = Number(countdownEndDate) - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft("Oferta encerrada!");
            } else {
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setTimeLeft(
                    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
                );
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-primary/10 px-4 py-2 text-base font-semibold text-primary">
            <Clock className="h-5 w-5" />
            <span>
                Essa Oferta Termina Em:{' '}
                <strong className="tabular-nums w-[80px] inline-block">
                    {timeLeft ?? '24:00:00'}
                </strong>
            </span>
        </div>
    );
}
