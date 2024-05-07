import Link from "next/link";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <aside className="w-[300px] min-h-screen max-w-xs top-0 left-0 z-50 border-r bg-primary text-primary-foreground shadow">
      <div className="h-full px-3 py-4">
        <h3 className="text-2xl font-bold mb-4 text-accent-foreground">Dashboard</h3>
        <div className="mt-4">
          <div className="flex flex-col gap-2 w-full">
            <Link href="/Dashboard">
              <SidebarButton icon="Grid" title="Dashboard" />
            </Link>
            <Link href="/Dashboard/Products">
              <SidebarButton icon="Database" title="Products" />
            </Link>
            <Link href="/Dashboard/Users">
              <SidebarButton icon="Users" title="Profiles" />
            </Link>
            <Link href="/calendar">
              <SidebarButton icon="Calendar" title="Calendar" />
            </Link>
            <div className="border-t border-gray-200 my-4" />
            <Link href="/Dashboard/Profile">
              <SidebarButton icon="User" title="My Profile" />
            </Link>
            <Link href="/logout">
              <SidebarButton icon="LogOut" title="Log Out" />
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
