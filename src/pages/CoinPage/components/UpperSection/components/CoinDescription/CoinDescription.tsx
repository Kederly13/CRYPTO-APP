import { FC } from 'react';
import { StyledCoinDescription, StyledDescriptionText, StyledCoinLinks, StyledCoinLink } from './StyledCoinDescription';
import { CoinLinkBtn } from './components/CoinLinkBtn';
import { ICoinPageProps } from '../../types';

export const CoinDescription: FC<ICoinPageProps> = ({ coinSummary }) => {
    const { description, links } = coinSummary;
    const { blockchain_site } = links;

    const validLinks = blockchain_site.filter(link => link !== '');

    return (
        <StyledCoinDescription>
            <StyledDescriptionText dangerouslySetInnerHTML={{ __html: description.en }} />
            <StyledCoinLinks>
                {blockchain_site.length > 0 && (
                    validLinks.map((link, index) => (
                        <CoinLinkBtn key={index} link={link} /> 
                    ))
                )}
                {/* <StyledCoinLinkBtn>
                    <StyledCoinLink href={blockchain_site[1]} target="_blank">
                        {blockchain_site[1]}
                    </StyledCoinLink>
                </StyledCoinLinkBtn>
                <StyledCoinLinkBtn>
                    <StyledCoinLink href={blockchain_site[2]} target="_blank">
                        {blockchain_site[2]}
                    </StyledCoinLink>
                </StyledCoinLinkBtn>
                <StyledCoinLinkBtn>
                    <StyledCoinLink href={blockchain_site[3]} target="_blank">
                        {blockchain_site[3]}
                    </StyledCoinLink>
                </StyledCoinLinkBtn> */}
            </StyledCoinLinks>
        </StyledCoinDescription>

    )
}