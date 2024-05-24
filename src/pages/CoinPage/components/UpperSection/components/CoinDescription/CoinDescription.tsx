import { FC } from 'react';
import { StyledCoinDescription, StyledDescriptionText, StyledCoinLinks } from './StyledCoinDescription';
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
            </StyledCoinLinks>
        </StyledCoinDescription>

    )
}