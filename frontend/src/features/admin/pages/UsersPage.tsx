import Navbar from "../../../components/navbar";

import { useUsers } from "../hooks/useUsers";

import UserRow from "../components/UserRow";

import type { User } from "../../../types/auth.types";

export default function UsersPage() {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useUsers();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return (
      <h2>
        Error: {error.message}
      </h2>
    );
  }

  return (
    <div>
      <Navbar />

      <h1>Users</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>

            <th>Email</th>

            <th>Role</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.data.map(
            (user: User) => (
              <UserRow
                key={user.id}
                user={user}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}