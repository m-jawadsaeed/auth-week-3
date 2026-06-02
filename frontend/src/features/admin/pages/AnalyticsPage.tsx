import Navbar
from "../../../components/navbar";

import {
  useAnalytics,
} from "../hooks/useAnalytics";

import {
  useRoleStats,
} from "../hooks/useRoleStats";

import {
  useSignupStats,
} from "../hooks/useSignupStats";

export default function AnalyticsPage() {

  const analytics =
    useAnalytics();

  const roles =
    useRoleStats();

  const signups =
    useSignupStats();

  if (
    analytics.isLoading
  ) {

    return (
      <div>
        Loading...
      </div>
    );
  }

  return (

    <div>

      <Navbar />

      <h1>
        Analytics
      </h1>

      <h3>
        Overview
      </h3>

      <pre>
        {JSON.stringify(
          analytics.data,
          null,
          2
        )}
      </pre>

      <h3>
        Roles
      </h3>

      <pre>
        {JSON.stringify(
          roles.data,
          null,
          2
        )}
      </pre>

      <h3>
        Signups
      </h3>

      <pre>
        {JSON.stringify(
          signups.data,
          null,
          2
        )}
      </pre>

    </div>
  );
}