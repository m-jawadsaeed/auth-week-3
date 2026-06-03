import { useState } from "react";

import Navbar from "../../../components/navbar";

import { useProfile } from "../hooks/useProfile";
import { useUpdateProfile } from "../hooks/useUpdateProfile";

export default function ProfilePage() {
  const { data, isLoading } = useProfile();

  const updateProfile = useUpdateProfile();

  const [name, setName] = useState("");

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading Profile...
      </div>
    );
  }

  const profile = data?.data;

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Profile not found
      </div>
    );
  }

  const displayName = name || profile.name;

  const handleUpdate = () => {
    updateProfile.mutate({
      name: displayName,
    });
  };

  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>

        <div className="bg-white rounded-xl shadow p-8">
          <div className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Email
              </label>

              <div className="bg-slate-100 rounded-lg p-3">{profile.email}</div>
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Role
              </label>

              <div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    profile.role === "ADMIN"
                      ? "bg-purple-100 text-purple-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {profile.role}
                </span>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-600 mb-2">
                Full Name
              </label>

              <input
                value={displayName}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="
                  w-full
                  border
                  border-slate-300
                  rounded-lg
                  px-4
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-200
                  focus:border-blue-500
                "
              />
            </div>

            <button
              onClick={handleUpdate}
              disabled={updateProfile.isPending}
              className="
                bg-blue-600
                hover:bg-blue-700
                text-white
                px-6
                py-3
                rounded-lg
                transition
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {updateProfile.isPending ? "Updating..." : "Update Profile"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
