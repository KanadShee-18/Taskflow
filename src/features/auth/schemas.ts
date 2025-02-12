import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(6, {
    message: "Minimum 6 character name is required!",
  }),
  email: z.string().email({
    message: "Email address is required!",
  }),
  password: z.string().min(1, {
    message: "Minimum 8 characters password is required!",
  }),
});

export const SignInSchema = z.object({
  email: z.string().email({
    message: "Email address is required!",
  }),
  password: z.string().min(1, {
    message: "Password is required!",
  }),
});
