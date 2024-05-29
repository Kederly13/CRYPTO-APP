import { ReactNode, useState, useRef, useEffect, useCallback } from 'react';

import { Portal } from 'components/Portal/Portal';

import { StyledModal, StyledOverlay, StyledContent } from './StyledModal';

interface IModalProps { 
    children?: ReactNode;
    isOpen?: boolean;
    onClose? : () => void;
};

const ANIMATION_DELAY = 300;

export const Modal = (props: IModalProps) => {
    const {
        children,
        onClose,
        isOpen
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false);
            }, ANIMATION_DELAY)
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler()
        }
    }, []);

    const stopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown)
        } 

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen])

    return (
        <Portal>
            <StyledModal className={isOpen ? 'opened' : ''}>
                <StyledOverlay onClick={closeHandler}>
                    <StyledContent className={isOpen ? 'opened' : ''} onClick={stopPropagation}>
                        {children}
                    </StyledContent>
                </StyledOverlay>
            </StyledModal>
        </Portal>
    )
};