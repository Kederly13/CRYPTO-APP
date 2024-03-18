import { FC } from 'react';
import { StyledButton } from './StyledButton';

interface IDefaultButtonProps {
    type: 'button' | 'submit',
    disabled: boolean,
    children: React.ReactNode;
    onClick?: () => void;
};

interface IStyledButtonProps {
    maxWidth?: string,
    $padding?: string,
    margin?: string,
    $backgroundcolor?: string,
    borderRadiusL?: string,
};

export type ButtonProps = IDefaultButtonProps & IStyledButtonProps;

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
    <StyledButton {...props}>
        {children}
    </StyledButton>
);

