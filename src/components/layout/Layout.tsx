import Navbar from './Navbar';
import Footer from './Footer';
import { WhatsAppButton } from '../common/WhatsAppButton';
import AccessibilityWidget from '../common/AccessibilityWidget';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
            <Navbar />
            <main className="flex-grow w-full">{children}</main>           
            <Footer />
            {/* WhatsApp Button */}
            <WhatsAppButton phoneNumber="972520000000" />
            <AccessibilityWidget />
        </div>
    );
};

export default Layout;
