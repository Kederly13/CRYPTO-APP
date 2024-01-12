import { ChangeEvent } from 'react';

export interface IInputProps {
    type: 'text' | 'email' | 'tel' | 'search';
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string,
};

export const Input: React.FC<IInputProps> = ({ type, value, onChange, placeholder, }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
);