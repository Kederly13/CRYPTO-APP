import { SEARCH_PARAMS } from 'constants/searchParams';
import { StyledPeriodTab } from './StyledPeriodFilter';
import { peiodFilterData } from './periodFilterData';

import { useResize } from 'hooks/useResize';

import { MEDIA_SIZES } from 'constants/mediaSizes';

import { useSelectedObjSearchParams } from 'hooks/useSelectedSearchParams';
import { useActions } from 'hooks/useActions';

export interface IStyledPeriodTabProps {
  selected?: boolean;
};

export const PeriodFilter = () => {
  const { objSearchParams, onSetObjSearchParams } = useSelectedObjSearchParams();
  const { width } = useResize();
  
  const { setNulifyCoins, onSetNulifyCoinsHistory } = useActions();

  return (
    <StyledPeriodTab>
      {peiodFilterData.map(({ label, value }) => {
        if (width < MEDIA_SIZES.SM && ['3M', '1Y', '3Y'].includes(label)) {
          return null;
        }
        
        return (
          <li key={value} className={objSearchParams.days === value ? 'selected' : ''}>
            <button 
              type='button' 
              onClick={() => {
                if (objSearchParams.days !== value) {
                  onSetNulifyCoinsHistory()
                  setNulifyCoins()
                  onSetObjSearchParams({
                    ...objSearchParams,
                    [SEARCH_PARAMS.DAYS]: value,
                  })
                }
              }}
          >
            {label}
            </button>
          </li>
        )
      })}
    </StyledPeriodTab>
  )
};
