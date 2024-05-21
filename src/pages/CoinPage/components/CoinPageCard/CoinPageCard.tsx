import React from 'react';
import { StyledCoinPageCard } from './StyledCoinPageCard'; // Adjust the import path as needed

export interface ICoinPageCardProps {
    children: React.ReactNode;
    $maxWidth?: string;
  }

export const CoinPageCard: React.FC<ICoinPageCardProps> = ({ children, $maxWidth }) => {
  return (
    <StyledCoinPageCard $maxWidth={$maxWidth}>
      {children}
    </StyledCoinPageCard>
  );
};

