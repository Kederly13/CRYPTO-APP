import { FC, ReactNode } from 'react';

import { StyledChartBox } from './StyledChartBox';
import { UpperBlock } from './components/UpperBlock/UpperBlock';

export interface IChartBoxProps {
  headline: string;
  number?: string;
  children: ReactNode;
  $maxWidth?: string,
  $maxHeight?: string
};

export const ChartBox: FC<IChartBoxProps> = ({ headline, number, children, $maxWidth, $maxHeight }) => {
  return (
    <StyledChartBox headline={headline} $maxWidth={$maxWidth}  $maxHeight={$maxHeight}>
          <UpperBlock
            headline={headline}
            number={number ? number : ''}
          />
          {children}
    </StyledChartBox>
  )
};

  