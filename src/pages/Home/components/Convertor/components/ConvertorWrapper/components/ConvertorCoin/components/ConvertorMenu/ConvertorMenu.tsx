import { FC } from "react"
import { StyledConvertorMenu, StyledConvertorMenuButton, StyledConvertorListItem } from './StyledConvertorMenu';

interface ICoinList {
    coinList: string[];
    selectedCoin: string;
    handleSelectedCoin: (coinName: string) => void,
};

export const ConvertorMenu: FC<ICoinList> = ({ coinList, selectedCoin, handleSelectedCoin }) => {
    return (
        <StyledConvertorMenu>
            {coinList.map((coinName) => (
                <StyledConvertorListItem id={coinName} $selected={coinName === selectedCoin}>
                    <StyledConvertorMenuButton type='button' onClick={() => handleSelectedCoin(coinName)}>
                        {coinName}
                    </StyledConvertorMenuButton>
                </StyledConvertorListItem>
            ))}
        </StyledConvertorMenu>
    )
};