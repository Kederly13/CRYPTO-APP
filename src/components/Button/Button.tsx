import { FC } from 'react';
import { StyledButton } from './StyledButton';

interface IDefaultButtonProps {
    type: 'button' | 'submit',
    disabled: boolean,
    children: React.ReactNode;
};

interface IStyledButtonProps {
    maxWidth?: string,
    padding?: string,
};

export type ButtonProps = IDefaultButtonProps & IStyledButtonProps;

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
    <StyledButton {...props}>
        <span>{children}</span>
    </StyledButton>
);

