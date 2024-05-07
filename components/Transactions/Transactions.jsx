const Transactions = () => {
  return (
    <div className="mx-auto max-w-screen-lg px-4 py-8 sm:px-8">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="font-semibold text-gray-700">Latest Transactions</h2>
        </div>
        <div className="flex items-center justify-between">
          <div className="ml-10 space-x-8 lg:ml-40" />
        </div>
      </div>
      <div className="overflow-y-hidden rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-800 text-left text-xs font-semibold uppercase tracking-widest text-white">
                <th className="px-5 py-3">Full Name</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-full w-full rounded-full"
                        src="https://placeholder.com/150"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="whitespace-no-wrap">Besique Monroe</p>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">Administrator</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">Sep 28, 2022</p>
                </td>

                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                    Active
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-full w-full rounded-full"
                        src="https://placeholder.com/150"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="whitespace-no-wrap">Perry Monroe</p>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">Editor</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">Sep 28, 2022</p>
                </td>

                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <span className="rounded-full bg-red-200 px-3 py-1 text-xs font-semibold text-red-900">
                    Inactive
                  </span>
                </td>
              </tr>
              <tr>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-full w-full rounded-full"
                        src="https://placeholder.com/150"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <p className="whitespace-no-wrap">Harrison Monroe</p>
                    </div>
                  </div>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">Administrator</p>
                </td>
                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <p className="whitespace-no-wrap">Sep 28, 2022</p>
                </td>

                <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                  <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-semibold text-green-900">
                    Active
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
