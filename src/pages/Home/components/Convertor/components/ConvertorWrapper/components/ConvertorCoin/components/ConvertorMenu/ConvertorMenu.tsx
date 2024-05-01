import { FC } from "react"
import { StyledConvertorMenu, StyledConvertorMenuButton, StyledConvertorListItem } from './StyledConvertorMenu';

interface ICoinList {
    coinList: string[];
    selectedCoin: string;
};

export const ConvertorMenu: FC<ICoinList> = ({ coinList, selectedCoin }) => {
    return (
        <StyledConvertorMenu>
            {coinList.map((coinName) => (
                <StyledConvertorListItem id={coinName} $selected={coinName === selectedCoin}>
                    <StyledConvertorMenuButton>
                        {coinName}
                    </StyledConvertorMenuButton>
                </StyledConvertorListItem>
            ))}
        </StyledConvertorMenu>
    )
};