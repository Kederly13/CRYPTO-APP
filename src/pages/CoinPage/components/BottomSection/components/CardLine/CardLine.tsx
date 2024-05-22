import { FC } from 'react';
import { StyledCardLine, StyledLineValue, StyledLineText } from './StyledCardLine';

interface ICardLine {
    text: string,
    value: number
};

export const CardLine: FC<ICardLine> = ({ text, value }) => {

    return (
        <StyledCardLine>
            <StyledLineText>
                {text}
            </StyledLineText>
            <StyledLineValue>
                {value}
            </StyledLineValue>
        </StyledCardLine>
    )
}