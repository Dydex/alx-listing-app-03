import Header from './Header';

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='min-h-screen'>{children}</main>
    </>
  );
};

export default Layout;
