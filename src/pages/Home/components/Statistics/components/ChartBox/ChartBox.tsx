import { FC, ReactNode } from 'react';

import { StyledChartBox } from './StyledChartBox';
import { UpperBlock } from './components/UpperBlock/UpperBlock';

interface IChartProps {
  headline: string;
  number: string;
  children: ReactNode;
};

export const ChartBox: FC<IChartProps> = ({ headline, number, children }) => {
  return (
    <StyledChartBox>
          <UpperBlock
            headline={headline}
            number={number}
          />
          {children}
    </StyledChartBox>
  )
};

  