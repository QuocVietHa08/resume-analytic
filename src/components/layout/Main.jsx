import Header from './Header';

const Main = ({ children }) => {
  return (
  <div className="w-full overflow-hidden relative" style={{ backgroundColor: '#f7f7f7', height: '100vh'}}>
      <div>
        <Header />
      </div>
      {children}
    </div>
  );
};

export default Main;
