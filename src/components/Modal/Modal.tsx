import { FC, ReactNode } from 'react';
import { StyledModal, StyledOverlay, StyledContent } from './StyledModal';

interface IModalProps { 
    children?: ReactNode
};

export const Modal: FC<IModalProps> = ({ children }) => {
    return (
        <StyledModal>
            <StyledOverlay>
                <StyledContent>
                    {children}
                </StyledContent>
            </StyledOverlay>
        </StyledModal>

    )
}