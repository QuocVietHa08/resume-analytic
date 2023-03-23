
import Header from './Header';
import Footer from './Footer';
import UpToTop from './UpToTop';

const Main = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <UpToTop />
      <Footer />
    </>
  );
};

export default Main;
