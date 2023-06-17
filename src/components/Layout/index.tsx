import Nav from "../Nav";
const Layout = ({ children }: any) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
