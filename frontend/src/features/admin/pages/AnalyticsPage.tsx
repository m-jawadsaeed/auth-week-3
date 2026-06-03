import Navbar from "../../../components/navbar";

import { useAnalytics } from "../hooks/useAnalytics";
import { useRoleStats } from "../hooks/useRoleStats";
import { useSignupStats } from "../hooks/useSignupStats";

export default function AnalyticsPage() {
  const analytics = useAnalytics();
  const roles = useRoleStats();
  const signups = useSignupStats();

  if (analytics.isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading Analytics...
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-slate-500">Total Users</h3>

            <p className="text-4xl font-bold mt-2">
              {analytics.data?.totalUsers}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-slate-500">Active Users</h3>

            <p className="text-4xl font-bold mt-2">
              {analytics.data?.activeUsers}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-slate-500">Total Signups</h3>

            <p className="text-4xl font-bold mt-2">{analytics.data?.signups}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-4">Roles Breakdown</h2>

            <pre className="text-sm overflow-auto">
              {JSON.stringify(roles.data, null, 2)}
            </pre>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-4">Signup Statistics</h2>

            <pre className="text-sm overflow-auto">
              {JSON.stringify(signups.data, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
