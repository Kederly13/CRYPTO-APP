import { StyledPeriodTab } from './StyledPeriodFilter';
import { peiodFilterData } from './periodFilterData';

import { useAppDispatch } from 'hooks/reduxHooks';
import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
export interface IStyledPeriodTabProps {
  selected?: boolean;
};

export const PeriodFilter = () => {

  const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();
  
  return (
    <StyledPeriodTab>
      {peiodFilterData.map(({ label, value }) => (
        <li onClick={() => {

        }}>
          <button type='button' onClick={undefined}>{label}</button>
        </li>
      ))}
    </StyledPeriodTab>
  )
};
