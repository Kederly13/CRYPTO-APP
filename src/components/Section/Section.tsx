import { ReactNode } from 'react';

import { Container } from 'components/Container';

interface ISectionParams {
    children: ReactNode;
    className?: ReactNode;
};

const Section: React.FC<ISectionParams> = ({ children }) => (
    <section> 
        <Container>
            {children}   
        </Container>       
    </section>
)


export { Section };