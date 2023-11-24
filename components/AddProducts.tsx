import React, { useState } from "react";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  discountPercentage: number;
}

const AddProduct: React.FC = () => {
    const [newProduct, setNewProduct] = useState<ProductProps>({
        id: 0,
        title: "",
        description: "",
        price: 0,
        stock: 0,
        category: "",
        discountPercentage: 0,
      });
    
      const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
        setNewProduct((prevProduct) => ({
          ...prevProduct,
          [name]: value,
        }));
      };
    
      const handleAddProduct = () => {
        if (newProduct.title && newProduct.price > 0 && newProduct.category && newProduct.description) {
          console.log(newProduct);
          setNewProduct({
            id: 0,
            title: "",
            description: "",
            price: 0,
            stock: 0,
            category: "",
            discountPercentage: 0,
          });
        }
      };

  return (
    <div>
      <h1 className="text-2xl ml-4 font-bold mt-4">Add Product</h1>
      <div className="p-10 rounded border border-slate-500 bg-cyan-950 m-4">
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-white">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={newProduct.title}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-white">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-white">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="stock" className="block text-sm font-medium text-white">
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={newProduct.stock}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-white">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={newProduct.category}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="discountPercentage" className="block text-sm font-medium text-white">
              Discount Percentage
            </label>
            <input
              type="number"
              id="discountPercentage"
              name="discountPercentage"
              value={newProduct.discountPercentage}
              onChange={handleInputChange}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <button
            type="button"
            onClick={handleAddProduct}
            className="inline-block bg-green-500 px-4 py-2 text-xs font-medium text-white rounded-md"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
