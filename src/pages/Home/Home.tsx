import { HomeSwitch } from 'components/HomeSwitch';
import { Section } from 'components/Section';
import { Statistics } from './components/Statistics';
import { CoinTable } from './components/CoinTable';
import { Sparkline } from './components/CoinTable/components/CoinTableBody/components/CoinTableRow/components/SparkLine';

export const Home = () => (
    <Section>
        {/* <HomeSwitch /> */}
        <Statistics />
        <CoinTable />  
    </Section>
);

export default Home;
