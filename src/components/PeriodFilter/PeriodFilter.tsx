import { SEARCH_PARAMS } from 'constants/searchParams';
import { StyledPeriodTab } from './StyledPeriodFilter';
import { peiodFilterData } from './periodFilterData';

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
          onSetObjSearchParams({
            ...objSearchParams,
            [SEARCH_PARAMS.DAYS]: value,
          },
          {
            toggle: false,
            limitToggle: 1,
            limitMultiple: 1,
            multiple: false,
          })
        }} className={objSearchParams.days === value ? 'selected' : ''}>
          <button type='button' onClick={undefined}>{label}</button>
        </li>
      ))}
    </StyledPeriodTab>
  )
};
