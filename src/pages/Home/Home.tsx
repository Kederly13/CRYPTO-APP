import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { HomeSwitch } from 'components/HomeSwitch';
import { Section } from 'components/Section';
import { Statistics } from './components/Statistics';
import { CoinTable } from './components/CoinTable';
import { Coins } from './components/Coins/Coins';
import { useCurrentPath } from 'hooks/useCurrentPath';

interface ISection {
    section: 'Coins' | 'Convertor'
};

export const Home = () => {
    const [activeSection, setActiveSection] = useState<string>('Coins');
    const isHome = useCurrentPath('/')
    console.log(isHome)
    
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
