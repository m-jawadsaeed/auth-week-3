import Navbar from "../../../components/navbar";

import { useUsers } from "../hooks/useUsers";

import UserRow from "../components/UserRow";

import type { User } from "../../../types/auth.types";

export default function UsersPage() {
  const { data, isLoading, isError, error } = useUsers();

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading Users...
      </div>
    );
  }

  if (isError) {
    return <div className="text-red-500 p-6">Error: {error.message}</div>;
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Users Management</h1>

          <div className="text-slate-500">Total Users: {data?.data.length}</div>
        </div>

        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="text-left p-4">Name</th>

                <th className="text-left p-4">Email</th>

                <th className="text-left p-4">Role</th>

                <th className="text-left p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {data?.data.map((user: User) => (
                <UserRow key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
