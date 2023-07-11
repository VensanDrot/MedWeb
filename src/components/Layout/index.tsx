import Nav from "../Nav";
import FloatingButtons from "../FloatingButtons";
import Footer from "../Footer";

const Layout = ({ children }: any) => {
  return (
    <div className="parent">
      <Nav />
      <main>{children}</main>
      <FloatingButtons />
      <Footer />
    </div>
  );
};

export default Layout;
