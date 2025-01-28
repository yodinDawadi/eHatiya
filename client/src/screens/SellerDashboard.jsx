import React, { useState } from 'react';

const SellerDashboard = () => {
  // State to store item details
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // State to store added products
  const [products, setProducts] = useState([]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName && category && price && description && image) {
      const newProduct = { itemName, category, price, description, image };
      setProducts([...products, newProduct]);

      // Reset form fields
      setItemName('');
      setCategory('');
      setPrice('');
      setDescription('');
      setImage(null);
      setPreview(null);
    } else {
      alert('Please fill in all fields');
    }
  };

  // Handle image preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto p-6 flex space-x-6">
      {/* Left side: Form to input item details */}
      <div className="w-1/2 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Add New Product</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700">Item Name</label>
            <input
              type="text"
              placeholder="Enter item name"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-green-300"
            >
              <option value="">Select Category</option>
              <option value="Fruits">Fruits</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Grains">Grains</option>
              <option value="Dairy">Dairy</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div>
            <label className="block font-medium text-gray-700">Price per kg</label>
            <input
              type="number"
              placeholder="Enter price per kg"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Description</label>
            <textarea
              placeholder="Enter item description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none"
            />
            {/* Image preview */}
            {preview && (
              <div className="mt-4">
                <img src={preview} alt="Preview" className="w-full h-auto rounded-md" />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 shadow-md hover:shadow-lg"
          >
            Add Item
          </button>
        </form>
      </div>

      {/* Right side: Added products */}
      <div className="w-1/2 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Your Products</h1>

        {/* List of added products */}
        <div className="space-y-4">
          {products.length === 0 ? (
            <p className="text-gray-700">You haven't added any products yet.</p>
          ) : (
            products.map((product, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-md space-y-4">
                <h2 className="text-xl font-semibold">{product.itemName}</h2>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Price per kg:</strong> {product.price}</p>
                <p><strong>Description:</strong> {product.description}</p>
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.itemName}
                    className="w-full h-auto rounded-md mt-4"
                  />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
