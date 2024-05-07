import { FC, useRef } from "react"
import { useOutsideRefClick } from "hooks/useOtsideRefClick";
import { StyledConvertorMenu, StyledConvertorMenuButton, StyledConvertorListItem } from './StyledConvertorMenu';
import { useSelectedObjSearchParams } from "hooks/useSelectedSearchParams";
import { SEARCH_PARAMS } from "constants/searchParams";

interface ICoinList {
    coinList: string[];
    selectedCoin: string;
    handleSelectedCoin: (id: string) => void,
    handleActiveMenu: () => void;
};

export const ConvertorMenu: FC<ICoinList> = ({ coinList, selectedCoin, handleSelectedCoin, handleActiveMenu }) => {
    const ref = useRef<HTMLLIElement>(null);
    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams()

    useOutsideRefClick(ref, handleActiveMenu)
    
    return (
        <StyledConvertorMenu  >
            {coinList.map((id) => (
                <StyledConvertorListItem key={id} $selected={id === selectedCoin} ref={ref}>
                    <StyledConvertorMenuButton type='button' onClick={() => {
                        handleSelectedCoin(id)}
                    }   
                    >
                        {id}
                    </StyledConvertorMenuButton>
                </StyledConvertorListItem>
            ))}
        </StyledConvertorMenu>
    )
};