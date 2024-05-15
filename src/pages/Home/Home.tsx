import { Outlet } from 'react-router-dom';

import { HomeSwitch } from 'components/HomeSwitch';
import { Section } from 'components/Section';
import { Coins } from './components/Coins/Coins';

import { useCurrentPath } from 'hooks/useCurrentPath';

export const Home = () => {
    const isHome = useCurrentPath('/');
    
    return(
        <Section>
            <HomeSwitch
            />
            {isHome ? (
                <Coins />
            ): (
                <Outlet />
            )}
        </Section>
    )
};

export default Home;
