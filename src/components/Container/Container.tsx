import { ReactNode } from 'react';
import { StyledContainer } from './StyledContainer';

interface IContainerProps {
    children: ReactNode;
};

export const Container: React.FC<IContainerProps> = ({ children }) => (
    <StyledContainer>
        {children}
    </StyledContainer>
);