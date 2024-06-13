import { FC } from 'react';
import { ICoin } from 'types/coinType';
import {  
    StyledCoinTableHead, 
    StyledCoinTableHeaderRow,
    StyledHeadButton
 } from './StyledCoinTableHead';

enum SortDirection {
    Ascending = 'ascending',
    Descending = 'descending',
};

interface ICoinTableHeadProps {
    onSort: (sortKey: keyof ICoin) => void;
    sortConfig: { key: keyof ICoin, direction: SortDirection };
};

export const CoinTableHead: FC<ICoinTableHeadProps> = ({ onSort, sortConfig }) => {
    const { key, direction } = sortConfig;

    const getSortIndicator = (columnKey: keyof ICoin) => {
        if (columnKey === key) {
            return direction === SortDirection.Ascending ? '▲' : '▼';
        }
        return '';
    };

    return (
        <StyledCoinTableHead>
            <StyledCoinTableHeaderRow>
                <th><span>#</span></th>
                <th><StyledHeadButton onClick={() => onSort('name')}>Name {getSortIndicator('name')}</StyledHeadButton></th>
                <th><StyledHeadButton onClick={() => onSort('current_price')}>Price {getSortIndicator('current_price')}</StyledHeadButton></th>
                <th><StyledHeadButton onClick={() => onSort('price_change_percentage_1h_in_currency')}>1h% {getSortIndicator('price_change_percentage_1h_in_currency')}</StyledHeadButton></th>
                <th><StyledHeadButton onClick={() => onSort('price_change_percentage_24h_in_currency')}>24h% {getSortIndicator('price_change_percentage_24h_in_currency')}</StyledHeadButton></th>
                <th><StyledHeadButton onClick={() => onSort('price_change_percentage_7d_in_currency')}>7d% {getSortIndicator('price_change_percentage_7d_in_currency')}</StyledHeadButton></th>
                <th><StyledHeadButton onClick={() => onSort('market_cap')}>24h volume / Market Cap {getSortIndicator('market_cap')}</StyledHeadButton></th>
                <th><StyledHeadButton onClick={() => onSort('circulating_supply')}>Circulating / Total supply {getSortIndicator('circulating_supply')}</StyledHeadButton></th>
                <th><span>Last 7d</span></th>
            </StyledCoinTableHeaderRow>
        </StyledCoinTableHead>
    );
};
