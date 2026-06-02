import type { User } from "../../../types/auth.types";

import { useUpdateRole } from "../hooks/useUpdateRole";

interface UserRowProps {
  user: User;
}

export default function UserRow({
  user,
}: UserRowProps) {
  const updateRole =
    useUpdateRole();

  const nextRole =
    user.role === "ADMIN"
      ? "USER"
      : "ADMIN";

  const handleRoleChange = () => {
    updateRole.mutate({
      id: user.id,
      role: nextRole,
    });
  };

  return (
    <tr>
      <td>{user.name}</td>

      <td>{user.email}</td>

      <td>{user.role}</td>

      <td>
        <button
          onClick={handleRoleChange}
          disabled={
            updateRole.isPending
          }
        >
          Make {nextRole}
        </button>
      </td>
    </tr>
  );
}