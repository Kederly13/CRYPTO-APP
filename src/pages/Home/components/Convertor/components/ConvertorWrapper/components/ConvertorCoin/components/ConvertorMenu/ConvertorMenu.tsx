import { FC, useRef } from "react"
import { useOutsideClick } from "hooks/useOutsideClick";
import { StyledConvertorMenu, StyledConvertorMenuButton, StyledConvertorListItem } from './StyledConvertorMenu';
import { useSelectedObjSearchParams } from "hooks/useSelectedSearchParams";
import { useActions } from "hooks/useActions";
import { SEARCH_PARAMS } from "constants/searchParams";

interface ICoinList {
    index: number;
    coinList: string[];
    selectedCoin: string | undefined;
    handleActiveMenu: () => void;
};

export const ConvertorMenu: FC<ICoinList> = ({ index, coinList, selectedCoin, handleActiveMenu }) => {
    const ref = useRef<HTMLLIElement>(null);
    const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();

    const { onSetNulifyCoinsHistory } = useActions();

    const handleClick = (id: string) => {
        
        const coins = objSearchParams.coin?.split(',');
        coins?.splice(index, 1, id)

        onSetNulifyCoinsHistory()

        const newCoins = coins?.join(',')
        onSetObjSearchParams({
            [SEARCH_PARAMS.COIN]: newCoins
        });
    }

    useOutsideClick(ref, handleActiveMenu);
    
    return (
        <StyledConvertorMenu >
            {coinList.map((id) => (
                <StyledConvertorListItem key={id} $selected={selectedCoin === id} ref={ref}>
                    <StyledConvertorMenuButton 
                        type='button' 
                        onClick={() => {
                            handleClick(id)}
                        }   
                    >
                        {id}
                    </StyledConvertorMenuButton>
                </StyledConvertorListItem>
            ))}
        </StyledConvertorMenu>
    )
};