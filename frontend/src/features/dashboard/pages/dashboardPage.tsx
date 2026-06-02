import Navbar
from "../../../components/navbar";

import {
  useAuthStore,
} from "../../auth/store/auth.store";

export default function DashboardPage() {

  const user =
    useAuthStore(
      (state) =>
        state.user
    );

  return (

    <div>

      <Navbar />

      <h1>
        Dashboard
      </h1>

      <p>
        Welcome{" "}
        {user?.name}
      </p>

      <p>
        Role:{" "}
        {user?.role}
      </p>

    </div>
  );
}