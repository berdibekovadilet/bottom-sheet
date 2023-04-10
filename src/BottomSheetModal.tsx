import React, {useRef, useEffect, useState} from "react";
import "./BottomSheetModal.css";

interface BottomSheetModalProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
                                                               isOpen,
                                                               onClose,
                                                               children,
                                                           }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            animate(0, 1);
        } else {
            animate(1, 0, () => setIsVisible(false));
        }
    }, [isOpen]);

    const animate = (from: number, to: number, onComplete?: () => void) => {
        const duration = 300;
        const startTime = performance.now();

        const step = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const t = Math.min(elapsed / duration, 1);
            const currentProgress = from + (to - from) * t;
            setProgress(currentProgress);

            if (t < 1) {
                requestAnimationFrame(step);
            } else {
                if (onComplete) {
                    onComplete();
                }
            }
        };

        requestAnimationFrame(step);
    };

    const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) onClose();
    };

    const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
        const touch = event.touches[0];
        if (touch.clientY < window.innerHeight / 2 && modalRef.current) {
            onClose();
        }
    };

    if (!isVisible) return null;

    return (
        <div
            className="modal-overlay"
            style={{opacity: progress, visibility: isVisible ? "visible" : "hidden"}}
            onMouseDown={handleClickOutside}
        >
            <div
                ref={modalRef}
                className="bottom-sheet"
                style={{transform: `translateY(${(1 - progress) * 100}%)`}}
                onTouchMove={handleTouchMove}
            >
                <button className="close-button" onClick={onClose}>
                    Закрыть
                </button>
                {children}
            </div>
        </div>
    );
};

export default BottomSheetModal;
