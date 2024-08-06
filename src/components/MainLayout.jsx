import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default MainLayout;
