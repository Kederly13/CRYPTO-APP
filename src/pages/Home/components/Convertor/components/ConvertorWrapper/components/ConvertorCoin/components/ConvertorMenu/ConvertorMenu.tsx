import { FC, useRef } from "react"
import { useOutsideRefClick } from "hooks/useOtsideRefClick";
import { StyledConvertorMenu, StyledConvertorMenuButton, StyledConvertorListItem } from './StyledConvertorMenu';

interface ICoinList {
    coinList: string[];
    selectedCoin: string;
    handleSelectedCoin: (coinName: string) => void,
    handleActiveMenu: () => void;
};

export const ConvertorMenu: FC<ICoinList> = ({ coinList, selectedCoin, handleSelectedCoin, handleActiveMenu }) => {
    const ref = useRef<HTMLLIElement>(null);

    useOutsideRefClick(ref, handleActiveMenu)
    
    return (
        <StyledConvertorMenu  >
            {coinList.map((coinName) => (
                <StyledConvertorListItem id={coinName} $selected={coinName === selectedCoin} ref={ref}>
                    <StyledConvertorMenuButton type='button' onClick={() => handleSelectedCoin(coinName)}>
                        {coinName}
                    </StyledConvertorMenuButton>
                </StyledConvertorListItem>
            ))}
        </StyledConvertorMenu>
    )
};