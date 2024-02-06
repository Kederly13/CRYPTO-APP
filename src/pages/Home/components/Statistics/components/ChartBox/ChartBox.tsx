import { FC, ReactNode } from 'react';

import { StyledChartBox } from './StyledChart';
import { UpperBlock } from './components/UpperBlock/UpperBlock';


interface IChartProps {
  headline: string;
  number: number;
  children: ReactNode;
};

export const ChartBox: FC<IChartProps> = ({ headline, number, children }) => {
  return (
    <StyledChartBox>
      <div>
          <UpperBlock
            headline={headline}
            number={number}
          />
          {children}
      </div>
    </StyledChartBox>
  )
};

  