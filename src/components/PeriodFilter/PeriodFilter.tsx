import { StyledPeriodTab } from './StyledPeriodFilter';
import { peiodFilterData } from './periodFilterData';

export interface IStyledPeriodTabProps {
  selected?: boolean;
};

export const PeriodFilter = () => {
  
  return (
    <StyledPeriodTab>
      {peiodFilterData.map(({ label, value }) => (
        <li>
          <button type='button' onClick={undefined}>{label}</button>
        </li>
      ))}
    </StyledPeriodTab>
  )
};
