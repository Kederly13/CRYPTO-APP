import { Header } from './components/Header';

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout: React.FC <LayoutProps> = ({ children }) => (
    <>
        <Header />
        <main>
            {children}
        </main>
    </>
)