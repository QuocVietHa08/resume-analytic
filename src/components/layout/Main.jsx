import { useRouter } from 'next/router'
import Header from './Header';
import Footer from './Footer';
import UpToTop from './UpToTop';

const Main = ({ children }) => {
  const router = useRouter();

  return (
    <div className="w-full overflow-hidden">
      <div className={`${ router.pathname === '/' ? 'h-110 h-sp-70 h-tb-82' :'h-220 h-tb-140 h-sp-122'}`}>
        <Header />
      </div>
      {children}
      <UpToTop />
      <Footer />
    </div>
  );
};

export default Main;
