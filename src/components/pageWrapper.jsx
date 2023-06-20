import Navigation from './navigation';

const PageWrapper = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default PageWrapper;