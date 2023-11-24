import React, { useState, useEffect } from "react";

interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  discountPercentage: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products); // Ensure it's set to `products`, not `product`
      });
  }, []);

  return (
    <>
      <h1 className="text-2xl ml-4 font-bold mt-4">All Product Details</h1>
      <div className="overflow-x-auto p-3">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left divide-y-2 rtl:text-right bg-cyan-950 text-white font-bold">
            <tr>
              <th className="whitespace-nowrap px-4 py-2">Id</th>
              <th className="whitespace-nowrap px-4 py-2">Title</th>
              <th className="whitespace-nowrap px-4 py-2">Price</th>
              <th className="whitespace-nowrap px-4 py-2">Stock</th>
              <th className="whitespace-nowrap px-4 py-2">Category</th>
              <th className="whitespace-nowrap px-4 py-2">discount</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center">
            {products && products.length > 0 ? (
              products.map((user) => (
                <tr key={user.id}>
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {user.id}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.title}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.price}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.stock}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.category}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {user.discountPercentage.toFixed()}%
                  </td>
                  {/* <td className="whitespace-nowrap px-4 py-2">
                    <a
                      href="#"
                      className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    >
                      View
                    </a>
                  </td> */}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="whitespace-nowrap px-4 py-2 text-gray-700"
                >
                  No users available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
