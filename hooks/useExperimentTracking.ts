import { useEffect, useRef, useCallback } from 'react';

export const useExperimentTracking = (isTracking: boolean) => {
    const clickCountRef = useRef(0);
    const scrollLengthRef = useRef(0);
    const startTimeRef = useRef<number | null>(null);
    const lastScrollYRef = useRef<number>(0);

    useEffect(() => {
        if (!isTracking) {
            return;
        }

        startTimeRef.current = Date.now();
        lastScrollYRef.current = window.scrollY;
        clickCountRef.current = 0;
        scrollLengthRef.current = 0;

        const handleClick = () => {
            clickCountRef.current += 1;
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const delta = Math.abs(currentScrollY - lastScrollYRef.current);
            scrollLengthRef.current += delta;
            lastScrollYRef.current = currentScrollY;
        };

        window.addEventListener('click', handleClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('click', handleClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isTracking]);

    const endExperiment = useCallback(() => {
        if (!startTimeRef.current) return;

        const endTime = Date.now();
        const duration = endTime - startTimeRef.current;

        // Format date: YYMMDDHHmm
        const now = new Date();
        const yy = String(now.getFullYear()).slice(-2);
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const dd = String(now.getDate()).padStart(2, '0');
        const hh = String(now.getHours()).padStart(2, '0');
        const min = String(now.getMinutes()).padStart(2, '0');
        const filename = `${yy}${mm}${dd}${hh}${min}.txt`;

        const content = `Click Count: ${clickCountRef.current}\nScroll Length: ${Math.round(scrollLengthRef.current)}px\nTotal Duration: ${duration}ms`;

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, []);

    return { endExperiment };
};
