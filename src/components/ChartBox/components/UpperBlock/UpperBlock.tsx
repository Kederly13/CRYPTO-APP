import { FC } from 'react';
import { StyledUpperBlock } from './StyledUpperBlock';
import { useAppSelector } from 'hooks/reduxHooks';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';

interface IUpperBlock {
    headline: string,
    number: string
};

export const UpperBlock: FC<IUpperBlock> = ({ headline, number }) => {
    const { objSearchParams } = useSelectedObjSearchParams();

    return (
        <StyledUpperBlock>
            <>
                <p>{headline}</p>
                <p>{number}</p>
                {/* <p>{todayString}</p> */}
            </>
        </StyledUpperBlock>
    );
};