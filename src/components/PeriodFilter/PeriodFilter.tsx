import { SEARCH_PARAMS } from 'constants/searchParams';
import { StyledPeriodTab } from './StyledPeriodFilter';
import { peiodFilterData } from './periodFilterData';

import { useResize } from 'hooks/useResize';

import { MEDIA_SIZES } from 'constants/mediaSizes';

import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';

export interface IStyledPeriodTabProps {
  selected?: boolean;
};

export const PeriodFilter = () => {
  const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();
  const { width } = useResize();
  
  return (
    <StyledPeriodTab>
      {peiodFilterData.map(({ label, value }) => {
        if (width < MEDIA_SIZES.SM && ['3M', '1Y', '3Y'].includes(label)) {
          return null;
        }
        return (
          <li key={value} onClick={() => {
            if (objSearchParams.days !== value) {
              onSetObjSearchParams({
                ...objSearchParams,
                [SEARCH_PARAMS.DAYS]: value,
              })
            }
          }} className={objSearchParams.days === value ? 'selected' : ''}>
            <button type='button' onClick={undefined}>{label}</button>
          </li>
        )
      })}
    </StyledPeriodTab>
  )
};
