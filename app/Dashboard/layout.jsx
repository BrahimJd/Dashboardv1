import Sidebar from "../../components/Sidebar/Side";
import Navbar from "../../components/Navbar/Nav";
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-3">{children}</div>
      </div>
    </div>
  );
};
export default Layout;
