import { FC } from "react";
import { useEffect, useRef } from "react";
import { StyledConvertorInput } from "./StyledConvertorInput";

interface IConvertorInput {
    inputValue: string,
    handleInputChange: (newValue: string) => void,
    readOnly?: boolean,
};
export const ConvertorInput: FC<IConvertorInput> = ({ inputValue, handleInputChange, readOnly }) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <StyledConvertorInput
            ref={inputRef} 
            type='number'
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
            readOnly={readOnly}

        />
    )
}