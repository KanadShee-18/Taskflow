import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { SignInSchema, SignUpSchema } from "@/features/auth/schemas";

const app = new Hono()
  .post("/login", zValidator("json", SignInSchema), async (c) => {
    try {
      const { email, password } = c.req.valid("json");

      console.log("Sign in received email: ", email);
      console.log("Sign in received password: ", password);

      return c.json({ success: true, message: "Logged in successfully" });
    } catch (error) {
      console.error("Error:", error);
      return c.json({ error: "Invalid credentials" }, 400);
    }
  })
  .post("/register", zValidator("json", SignUpSchema), async (c) => {
    try {
      const { name, email, password } = c.req.valid("json");
      console.log(`Name: ${name}, Email: ${email} and Password: ${password}`);

      return c.json({
        success: true,
        message: "Registered successfully!",
      });
    } catch (error) {
      console.log("Regiter error: ", error);
      return c.json({ error: "Invalid credentials." }, 400);
    }
  });

export default app;
