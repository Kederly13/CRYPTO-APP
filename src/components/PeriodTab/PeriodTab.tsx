import { StyledPeriodTab } from './StyledPeriodTab';

export const PeriodTab = () => {
  return (
    <StyledPeriodTab>
        <li className='period'>7D</li>
        <li className='period'>14D</li>
        <li className='period'>1W</li>
        <li className='period'>1M</li>
        <li className='period'>1Y</li>
        <li className='period'>3Y</li>
        <li className='period'>5Y</li>
    </StyledPeriodTab>
  )
}
