import { StyledPeriodTab } from './StyledPeriodTab';
import { peiodFilterData } from './periodFilterData';

export const PeriodTab = () => {

  
  return (
    <StyledPeriodTab>
      {peiodFilterData.map(({ label, value }) => (
        <li>
          <button type='button' onClick={undefined}>{value}</button>
        </li>
      ))}

    </StyledPeriodTab>
  )
}
