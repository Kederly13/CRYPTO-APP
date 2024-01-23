import { HomeSwitch } from 'components/HomeSwitch';
import { Section } from 'components/Section';
import { Statistics } from './components/Statistics';

export const Home = () => (
    <Section>
        <HomeSwitch />
        <Statistics />
    </Section>
);

export default Home;
