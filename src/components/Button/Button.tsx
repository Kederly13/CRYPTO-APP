import { FC } from 'react';
import { StyledButton } from './StyledButton';

interface IDefaultButtonProps {
    type: 'button' | 'submit',
    children: React.ReactNode;
    onClick?: () => void;
};

interface IStyledButtonProps {
    $maxWidth?: string,
    $padding?: string,
    margin?: string,
    $backgroundcolor?: string,
    borderRadiusL?: string,
    active?: boolean,
};

export type ButtonProps = IDefaultButtonProps & IStyledButtonProps;

export const Button: FC<ButtonProps> = ({ children, active, ...props  }) => (
    <StyledButton {...props} className={active ? 'active' : ''}>
        {children}
    </StyledButton>
);

