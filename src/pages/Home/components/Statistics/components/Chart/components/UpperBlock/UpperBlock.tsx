import { FC } from 'react';
import { StyledUpperBlock } from './StyledUpperBlock';

interface IUpperBlock {
    headline: string,
    number: number
}

export const UpperBlock: FC<IUpperBlock> = ({ headline, number }) => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Months are zero-based, so we add 1
    const year = today.getFullYear();
    const todayString = `${month} ${day}, ${year}`;

    return (
        <StyledUpperBlock>
            <p>{headline}</p>
            <p>${number}</p>
            <p>{todayString}</p>
        </StyledUpperBlock>
    );
};