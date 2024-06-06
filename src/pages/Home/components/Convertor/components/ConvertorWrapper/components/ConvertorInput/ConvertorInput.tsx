import { ChangeEvent, FC } from "react";
import { StyledConvertorInput } from "./StyledConvertorInput";

interface IConvertorInput {
    name: string,
    value: string
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void,
    readOnly?: boolean,
};

export const ConvertorInput: FC<IConvertorInput> = ({ name, value, handleInputChange, readOnly }) => {
    return (
        <StyledConvertorInput
            type='number'
            name={name}
            value={value}
            onChange={handleInputChange}
            readOnly={readOnly}
        />
    )
};