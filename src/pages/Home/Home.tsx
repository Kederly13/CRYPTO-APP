import { useState } from 'react';

import { HomeSwitch } from 'components/HomeSwitch';
import { Section } from 'components/Section';
import { Statistics } from './components/Statistics';
import { CoinTable } from './components/CoinTable';

interface ISection {
    section: 'Coins' | 'Convertor'
};

export const Home = () => {
    const [activeSection, setActiveSection] = useState<string>('Coins');
    
    return(
        <Section>
            <HomeSwitch
                onClick={setActiveSection}
                activeSection={activeSection} 
            />
            {activeSection === 'Coins' ? (
                <>
                    <Statistics />
                    <CoinTable />
                </>

            ) : 
                <></>
            }
        </Section>
    )

};

export default Home;
