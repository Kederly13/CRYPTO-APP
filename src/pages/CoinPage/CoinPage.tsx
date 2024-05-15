import { Section } from 'components/Section';
import { StyledCoinPageTitle } from './StyledCoinPage';
import { useParams } from 'react-router-dom';

const CoinPage = () => {
    const { id } = useParams<{ id: string }>();
    
    return (
        <Section>
            <StyledCoinPageTitle>
                Coin Summary
            </StyledCoinPageTitle>
        </Section>
    )
};

export default CoinPage;