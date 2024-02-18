import { FC } from 'react';
import { StyledUpperBlock } from './StyledUpperBlock';
import { useAppSelector } from 'hooks/reduxHooks';

interface IUpperBlock {
    headline: string,
    number: number
};

export const UpperBlock: FC<IUpperBlock> = ({ headline, number }) => {
    const today = new Date();
    const todayString = today.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    const coinsHistory = useAppSelector(state => state.coinsHistory.coinsHistory);


    return (
        <StyledUpperBlock>
            {Object.keys(coinsHistory).length > 1 ? (
                <>
                    <p>{headline}</p>
                    <p>{todayString}</p>
                </>

            ) : (
                <>
                    <p>{headline}</p>
                    <p>${number}</p>
                    <p>{todayString}</p>
                </>
            )}  

        </StyledUpperBlock>
    );
};