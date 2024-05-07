import { Search } from "react-feather";

const Nav = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="/Dashboard"
              className="flex items-center text-white font-semibold text-lg hover:text-gray-300 transition duration-300"
            >
              <span className="text-blue-400 mr-2">🚀</span> My App
            </a>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <div className="relative">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="search"
                className="block w-48 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-800"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
