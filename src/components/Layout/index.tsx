import Nav from "../Nav";
import FloatingButtons from "../FloatingButtons";
import Footer from "../Footer";

type PropsType = {
  children: React.ReactElement;
};

const Layout = ({ children }: PropsType) => {
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
