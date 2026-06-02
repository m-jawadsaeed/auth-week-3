import {
  useForm,
} from "react-hook-form";

import {
  zodResolver,
} from "@hookform/resolvers/zod";

import {
  loginSchema,
} from "../schemas/auth.schema";
import type {
  LoginFormData,
} from "../schemas/auth.schema";

import {
  useLogin,
} from "../hooks/useLogin";

import {
  Link,
} from "react-router-dom";

export default function LoginPage() {

  const login =
    useLogin();

  const {

    register,

    handleSubmit,

    formState: {
      errors,
    },

  } = useForm<
    LoginFormData
  >({

    resolver:
      zodResolver(
        loginSchema
      ),
  });

  return (

    <div>

      <h1>
        Login
      </h1>

      <form
        onSubmit={handleSubmit(
          (data) =>
            login.mutate(
              data
            )
        )}
      >

        <input
          placeholder="Email"
          {...register(
            "email"
          )}
        />

        <p>
          {
            errors.email
              ?.message
          }
        </p>

        <input
          type="password"
          placeholder="Password"
          {...register(
            "password"
          )}
        />

        <p>
          {
            errors.password
              ?.message
          }
        </p>

        <button
          disabled={
            login.isPending
          }
        >
          Login
        </button>

      </form>

      <Link
        to="/register"
      >
        Register
      </Link>

    </div>
  );
}