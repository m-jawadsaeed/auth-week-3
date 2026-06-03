import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";

import { registerSchema } from "../schemas/auth.schema";

import type { RegisterFormData } from "../schemas/auth.schema";

import { useRegister } from "../hooks/useRegister";

export default function RegisterPage() {
  const registerUser = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Create Account</h1>

          <p className="text-slate-500 mt-2">Start your journey with us</p>
        </div>

        <form
          onSubmit={handleSubmit((data) => registerUser.mutate(data))}
          className="space-y-5"
        >
          {/* Name */}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              {...register("name")}
              className={`
                w-full
                rounded-lg
                border
                px-4
                py-3
                outline-none
                transition
                ${
                  errors.name
                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                }
              `}
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              {...register("email")}
              className={`
                w-full
                rounded-lg
                border
                px-4
                py-3
                outline-none
                transition
                ${
                  errors.email
                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                }
              `}
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              {...register("password")}
              className={`
                w-full
                rounded-lg
                border
                px-4
                py-3
                outline-none
                transition
                ${
                  errors.password
                    ? "border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                }
              `}
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}

          <button
            type="submit"
            disabled={registerUser.isPending}
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-medium
              py-3
              rounded-lg
              transition
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {registerUser.isPending ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="
              text-blue-600
              hover:text-blue-700
              font-medium
            "
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
