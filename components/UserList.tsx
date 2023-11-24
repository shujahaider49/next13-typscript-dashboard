import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

interface UserListProps {
  submittedValues: {
    email: string;
    name: string;
    title: string;
    city: string;
  };
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: User[] = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
          <h1 className="text-2xl ml-4 font-bold mt-4">Users</h1>
    <div className="overflow-x-auto p-3 text-center">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left divide-y-2 rtl:text-right bg-cyan-950 text-white font-bold">
          <tr>
            <th className="whitespace-nowrap px-4 py-2">
              Id
            </th>
            <th className="whitespace-nowrap px-4 py-2">
              Name
            </th>
            <th className="whitespace-nowrap px-4 py-2">
              Email
            </th>
            <th className="whitespace-nowrap px-4 py-2">
              City
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {users && users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {user.id}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {user.name}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {user.email}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {user.address.city}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <a
                    href="#"
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="whitespace-nowrap px-4 py-2 text-gray-700">
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

export default UserList;
