import React from 'react';
import { StyledCoinPageCard } from './StyledCoinPageCard'; // Adjust the import path as needed

export interface ICoinPageCardProps {
    children: React.ReactNode;
    $maxWidth?: string;
    $width?: string

  }

export const CoinPageCard: React.FC<ICoinPageCardProps> = ({ children, $maxWidth, $width }) => {
  return (
    <StyledCoinPageCard $maxWidth={$maxWidth} $width={$width}>
      {children}
    </StyledCoinPageCard>
  );
};

