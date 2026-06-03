import Navbar from "../../../components/navbar";

import { useAuthStore } from "../../auth/store/auth.store";

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-slate-700 mb-2">
              Welcome Back
            </h2>

            <p className="text-2xl font-bold text-slate-900">{user?.name}</p>

            <p className="text-slate-500 mt-2">Glad to see you again.</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold text-slate-700 mb-4">
              Account Information
            </h2>

            <div className="space-y-3">
              <div>
                <span className="text-slate-500">Name:</span>

                <span className="ml-2 font-medium">{user?.name}</span>
              </div>

              <div>
                <span className="text-slate-500">Email:</span>

                <span className="ml-2 font-medium">{user?.email}</span>
              </div>

              <div>
                <span className="text-slate-500">Role:</span>

                <span
                  className={`ml-2 px-3 py-1 rounded-full text-xs font-semibold ${
                    user?.role === "ADMIN"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {user?.role}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
