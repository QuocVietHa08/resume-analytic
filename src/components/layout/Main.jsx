
import Header from './Header';
import Footer from './Footer';
import UpToTop from './UpToTop';

const Main = ({ children }) => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      {children}
      <UpToTop />
      <Footer />
    </div>
  );
};

export default Main;
