import type { User } from "../../../types/auth.types";

import { useUpdateRole } from "../hooks/useUpdateRole";

interface UserRowProps {
  user: User;
}

export default function UserRow({ user }: UserRowProps) {
  const updateRole = useUpdateRole();

  const nextRole = user.role === "ADMIN" ? "USER" : "ADMIN";

  const handleRoleChange = () => {
    updateRole.mutate({
      id: user.id,
      role: nextRole,
    });
  };

  return (
    <tr className="border-b hover:bg-slate-50 transition">
      <td className="p-4 font-medium text-slate-800">{user.name}</td>

      <td className="p-4 text-slate-600">{user.email}</td>

      <td className="p-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            user.role === "ADMIN"
              ? "bg-purple-100 text-purple-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {user.role}
        </span>
      </td>

      <td className="p-4">
        <button
          onClick={handleRoleChange}
          disabled={updateRole.isPending}
          className="
            px-4
            py-2
            rounded-lg
            bg-blue-600
            text-white
            hover:bg-blue-700
            disabled:opacity-50
            transition
          "
        >
          {updateRole.isPending ? "Updating..." : `Make ${nextRole}`}
        </button>
      </td>
    </tr>
  );
}
