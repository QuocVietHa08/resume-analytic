import Header from './Header';

const Main = ({ children }) => {
  return (
    <div className="w-full relative" style={{ backgroundColor: '#f7f7f7', maxHeight: '100vh', overflow: 'auto' }}>
      <Header />
      <div style={{ height: 'calc(100% - 45px)' }}>{children}</div>
    </div>
  );
};

export default Main;
