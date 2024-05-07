
const AddProductPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <form className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-700 mb-6">
          Add Product
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Product Name</label>
            <input
              className="block w-full mt-1 border border-gray-300 rounded-md"
              type="text"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Product Category
            </label>
            <select className="block w-full mt-1 border border-gray-300 rounded-md">
              <option value="">Select Category</option>
              <option value="">Category 1</option>
              <option value="">Category 2</option>
              <option value="">Category 3</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Product Price</label>
            <input
              className="block w-full mt-1 border border-gray-300 rounded-md"
              type="text"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Product Description
            </label>
            <textarea
              className="block w-full mt-1 h-32 border border-gray-300 rounded-md"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium">Product Image</label>
            <input
              className="block w-full mt-1 border border-gray-300 rounded-md"
              type="file"
            />
          </div>
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
