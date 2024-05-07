const AddUserPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="w-full max-w-lg p-8 bg-gray-100 rounded-lg shadow-md border border-gray-300">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Add User
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium">User Name</label>
                        <input
                            className="mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                            type="text"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium">User Email</label>
                        <input
                            className="mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                            type="email"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium">User Image</label>
                        <input
                            className="mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                            type="file"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium">User Password</label>
                        <input
                            className="mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                            type="password"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium">Phone</label>
                        <input
                            className="mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
                            type="phone"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium">User Role</label>
                        <select className="mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500">
                            <option value="">Select Role</option>
                            <option value="administrator">Administrator</option>
                            <option value="editor">Editor</option>
                            <option value="subscriber">Subscriber</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium">User Status</label>
                        <select className="mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500">
                            <option value="">Select Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                </div>
                <button className="mt-6 w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none">
                    Add User
                </button>
            </form>
        </div>
    );
};

export default AddUserPage;
