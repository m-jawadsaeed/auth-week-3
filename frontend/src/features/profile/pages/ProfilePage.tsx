import {
  useState,
} from "react";

import Navbar
from "../../../components/navbar";

import {
  useProfile,
} from "../hooks/useProfile";

import {
  useUpdateProfile,
} from "../hooks/useUpdateProfile";

export default function ProfilePage() {

  const {
    data,
    isLoading,
  } =
    useProfile();

  const updateProfile =
    useUpdateProfile();

  const [
    name,
    setName,
  ] =
    useState("");

  if (
    isLoading
  ) {

    return (
      <div>
        Loading...
      </div>
    );
  }

  const profile =
    data.data;

  return (

    <div>

      <Navbar />

      <h1>
        Profile
      </h1>

      <p>
        Email:
        {" "}
        {
          profile.email
        }
      </p>

      <p>
        Role:
        {" "}
        {
          profile.role
        }
      </p>

      <input
        value={name}
        placeholder="New name"
        onChange={(
          e
        ) =>
          setName(
            e.target
              .value
          )
        }
      />

      <button
        onClick={() =>
          updateProfile.mutate(
            {
              name,
            }
          )
        }
      >
        Update
      </button>

    </div>
  );
}