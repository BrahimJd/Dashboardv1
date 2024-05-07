import Link from "next/link";

const Users = () => {
  const fetchUsersData = async () => {
    const users = await fetchUsers();
    console.log(users);
  };

  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
      <div className="flex items-center justify-between pb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Users List</h2>
        <Link href="/Dashboard/Users/add">
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
            <svg
              className="-ml-1 mr-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Add User
          </button>
        </Link>
      </div>
      <div className="overflow-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200 text-left text-xs font-semibold uppercase tracking-widest text-gray-700">
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Email</th>
                <th className="px-5 py-3">Roles</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="border-b border-gray-200 bg-white px-5 py-3 text-sm">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-full w-full rounded-full"
                        src="https://via.placeholder.com/150"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="whitespace-no-wrap">Besique Monroe</p>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-3 text-sm">
                  <p className="whitespace-no-wrap">besique@example.com</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-3 text-sm">
                  <p className="whitespace-no-wrap">Administrator</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-3 text-sm">
                  <p className="whitespace-no-wrap">Sep 28, 2022</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-3 text-sm">
                  <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                    Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center border-t bg-white px-5 py-5 sm:flex-row sm:justify-between">
          <span className="text-xs text-gray-600 sm:text-sm">
            Showing 1 to 5 of 12 Entries
          </span>
          <div className="mt-2 inline-flex sm:mt-0">
            <button className="mr-2 h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Prev
            </button>
            <button className="h-12 w-12 rounded-full border text-sm font-semibold text-gray-600 transition duration-150 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
