import { FC } from 'react';
import { StyledCoinDescription, StyledDescriptionText, CoinLinks, CoinLinkBtn, CoinLink } from './StyledCoinDescription';

import { ICoinPageProps } from '../../types';

export const CoinDescription: FC<ICoinPageProps> = ({ coinSummary }) => {
    const { description, links } = coinSummary;
    const { blockchain_site } = links;

    return (
        <StyledCoinDescription>
            <StyledDescriptionText dangerouslySetInnerHTML={{ __html: description.en }} />
            <CoinLinks>
                <CoinLinkBtn>
                    <CoinLink>
                        {blockchain_site[1]}
                    </CoinLink>
                </CoinLinkBtn>
                <CoinLinkBtn>
                    <CoinLink>
                        {blockchain_site[2]}
                    </CoinLink>
                </CoinLinkBtn>
                <CoinLinkBtn>
                    <CoinLink>
                        {blockchain_site[3]}
                    </CoinLink>
                </CoinLinkBtn>
            </CoinLinks>
        </StyledCoinDescription>

    )
}