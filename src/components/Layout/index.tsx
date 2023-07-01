import Nav from "../Nav";
import FloatingButtons from "../FloatingButtons";
const Layout = ({ children }: any) => {
  return (
    <div className="parent">
      <Nav />
      <main>{children}</main>
      <FloatingButtons />
    </div>
  );
};

export default Layout;
