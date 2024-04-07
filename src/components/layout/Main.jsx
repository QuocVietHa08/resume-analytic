import Header from './Header';

const Main = ({ children }) => {
  return (
  <div className="w-full relative" style={{ backgroundColor: '#f7f7f7', height: 'auto'}}>
      <div>
        <Header />
      </div>
      {children}
    </div>
  );
};

export default Main;
