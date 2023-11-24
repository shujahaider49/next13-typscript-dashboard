import { data } from "@/data/data";
import React, { useState } from "react";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { FaRegCalendarAlt, FaRegEnvelope } from "react-icons/fa";
import { LuCreditCard } from "react-icons/lu";
import { MdDelete } from "react-icons/md";

interface Customer {
  id: number;
  name: {
    first: string;
    last: string;
  };
  date: string;
  method: string;
}

const Customers: React.FC = () => {
  const [customer, setCustomer] = useState<Customer[]>(data);

  const handleDelete = (customerId: number) => {
    const updatedCustomer = customer.filter(
      (customer) => customer.id !== customerId
    );

    if (window.confirm("Are you sure you want to delete this customer?")) {
      setCustomer(updatedCustomer);
    }

    // Note: It's better not to modify the original 'data' array directly.
    // Instead, update the state variable 'customer'.
    // data.splice(updatedCustomer, 1);
  };

  return (
    <>
      <h1 className="text-2xl ml-4 font-bold mt-4">Customers</h1>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-between">
          {/* <h1 className="font-bold text-2xl ">Customers</h1> */}
        </div>
        <div className="p-4">
          <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer font-bold">
              <span>Name</span>
              <span className="sm:text-left text-right">Email</span>
              <span className="hidden md:grid">Last Order</span>
              <span className="hidden sm:grid">Method</span>
            </div>
            <ul>
              {customer.map((order) => (
                <li
                  key={order.id}
                  className="transition duration-300 ease-in-out bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="bg-cyan-700 p-3 rounded-lg">
                      <BsPersonFill className="text-black" />
                    </div>
                    <p className="pl-4">
                      {order.name.first + " " + order.name.last}
                    </p>
                  </div>
                  <p className="text-gray-600 sm:text-left text-right">
                    <FaRegEnvelope className="inline m-1" />
                    {order.name.first}@gmail.com
                  </p>
                  <p className="hidden md:flex">
                    <FaRegCalendarAlt className="inline m-1" />
                    {order.date}
                  </p>
                  <div className="sm:flex hidden justify-between items-center">
                    <div className="flex">
                      <LuCreditCard className="m-1" />
                      <p>{order.method}</p>
                    </div>
                    <MdDelete
                      size={25}
                      color="red"
                      onClick={() => handleDelete(order.id)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customers;
