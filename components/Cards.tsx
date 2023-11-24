
const Cards = () => {
  const data = [
  { amount: "$7,847", label: "Daily Revenue", percentage: "+39%" },
  { amount: "8392", label: "Orders", percentage: "+56%" },
  { amount: "5098", label: "Customers", percentage: "+42%" },
];
  return (
    <>
          <h1 className="text-2xl ml-4 font-bold mt-4">Dashboard</h1>
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 p-4">
    {data.map((item, index) => (
      <div key={index} className="bg-white border p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <p className="text-2xl font-bold">{item.amount}</p>
            <p className="text-gray-700">{item.label}</p>
          </div>
          <p className="bg-green-200 flex justify-center items-center p-2 rounded-full">
            <span className="text-green-700 text-lg">{item.percentage}</span>
          </p>
        </div>
      </div>
    ))}
  </div>
  </>
  );
};

export default Cards;
