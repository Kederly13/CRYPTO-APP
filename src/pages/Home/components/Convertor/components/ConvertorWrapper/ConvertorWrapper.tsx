import { useState, useEffect, ChangeEvent } from "react";

import { ConvertorCoin } from "./components/ConvertorCoin";
import { StyledConvertorCoinWrapper, StyledConvertorWrapper, StyledSwithcWrapper } from "./StyledConvertorWrapper";
import { useTheme } from 'styled-components';
import { useSelectedObjSearchParams } from "hooks/useSelectedSearchParams";
import { selectLastCoinList } from "store/slices/coinsSlice/coinsSlice"; 

import { useAppSelector } from 'hooks/reduxHooks';

import { ReactComponent as Switch } from 'assets/svg/switch.svg';
import { TFormDataConvertor, formDataConvertor } from "./data";

export interface IStyledConvertorCoinWrapperProps {
    $backgroundColor?: string;
};

export const ConvertorWrapper = () => {
    const coinsList = useAppSelector(selectLastCoinList);

    const [formObj, setFormObj] = useState<TFormDataConvertor>(formDataConvertor);

    const { objSearchParams } = useSelectedObjSearchParams();

    const theme = useTheme();
    
    const [firstCoin, secondCoin] = objSearchParams?.coin?.split(',')
    .map(id => coinsList.find(coin => coin.id === id))
    .filter(obj => obj !== undefined) || [];
    const convertPrice = (quantity: string, firstPrice: number, secondPrice: number) => String((Number(quantity) * (firstPrice / secondPrice)).toFixed(2));
    
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        setFormObj((prev) => {
            if (name === 'secondCoin') {
                return {
                    firstCoin: {
                        ...prev.firstCoin,
                        value: convertPrice(value, secondCoin?.current_price!, firstCoin?.current_price!)
                    },
                    [name]: {...prev[name], value},
                }
            }

            return {
                [name]: {...prev[name], value },
                secondCoin: {
                    ...prev.secondCoin,
                    value: convertPrice(value, firstCoin?.current_price!, secondCoin?.current_price!)
                }
            }
        })
    }

    useEffect(() => {
        if (firstCoin?.current_price && secondCoin?.current_price) {
            setFormObj((prev) => ({
                ...prev,
                secondCoin: {
                    ...prev.secondCoin,
                    value: convertPrice(formObj.firstCoin.value, firstCoin.current_price, secondCoin.current_price)
                }
            }))
        }
    }, [objSearchParams?.coin]) // eslint-disable-line
    
    return (
        <StyledConvertorWrapper>
            <StyledConvertorCoinWrapper $backgroundColor={theme.boxBackground.backgroundPrimary}>
                <ConvertorCoin
                    index={0}
                    heading='You sell' 
                    coins={coinsList}
                    selectedCoin={firstCoin}
                    inputValue={formObj.firstCoin.value}
                    inputName={formObj.firstCoin.name}
                    handleInputChange={handleInputChange}
                />
            </StyledConvertorCoinWrapper>
            <StyledSwithcWrapper type='button'>
                <Switch />
            </StyledSwithcWrapper>
            <StyledConvertorCoinWrapper $backgroundColor={theme.boxBackground.backgroundSecondary}>    
                <ConvertorCoin
                    index={1}
                    heading='You buy' 
                    coins={coinsList}
                    selectedCoin={secondCoin}
                    inputValue={formObj.secondCoin.value}
                    inputName={formObj.secondCoin.name}
                    handleInputChange={handleInputChange}    
                />
            </StyledConvertorCoinWrapper>
        </StyledConvertorWrapper>
    )
};