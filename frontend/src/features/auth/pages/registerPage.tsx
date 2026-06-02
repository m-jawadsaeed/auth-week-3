import {
  useForm,
} from "react-hook-form";

import {
  zodResolver,
} from "@hookform/resolvers/zod";

import { registerSchema } from "../schemas/auth.schema";
import type { RegisterFormData } from "../schemas/auth.schema";

import {
  useRegister,
} from "../hooks/useRegister";

import {
  Link,
} from "react-router-dom";

export default function RegisterPage() {

  const registerUser =
    useRegister();

  const {

    register,

    handleSubmit,

    formState: {
      errors,
    },

  } = useForm<
    RegisterFormData
  >({

    resolver:
      zodResolver(
        registerSchema
      ),
  });

  return (

    <div>

      <h1>
        Register
      </h1>

      <form
        onSubmit={handleSubmit(
          (data) =>
            registerUser.mutate(
              data
            )
        )}
      >

        <input
          placeholder="Name"
          {...register(
            "name"
          )}
        />

        <p>
          {
            errors.name
              ?.message
          }
        </p>

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
            registerUser.isPending
          }
        >
          Register
        </button>

      </form>

      <Link
        to="/login"
      >
        Login
      </Link>

    </div>
  );
}