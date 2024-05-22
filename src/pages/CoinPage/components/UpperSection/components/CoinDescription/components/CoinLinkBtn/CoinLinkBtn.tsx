import { FC } from 'react';
import { copiesToClipboard } from 'utils/copiesToClipboard'
import { StyledCoinLinkBtn, StyledCoinLink } from './StyledCopyLinkBtn';
import {ReactComponent as Copy} from 'assets/svg/copy.svg';

interface ICoinLinkBtn {
    link: string;
};

export const CoinLinkBtn: FC<ICoinLinkBtn> = ({ link }) => (
    <StyledCoinLinkBtn>
        <StyledCoinLink href={link} target="_blank">
            {link}
        </StyledCoinLink>
        <button onClick={() => copiesToClipboard(link)}>
            <Copy />
        </button>
    </StyledCoinLinkBtn>
)