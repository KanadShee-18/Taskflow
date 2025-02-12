import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { SignInSchema, SignUpSchema } from "@/features/auth/schemas";
import { createAdminClient } from "@/lib/appwrite";
import { ID } from "node-appwrite";
import { deleteCookie, setCookie } from "hono/cookie";
import { AUTH_COOKIE } from "../constants";

const app = new Hono()
  .post("/login", zValidator("json", SignInSchema), async (c) => {
    try {
      const { email, password } = c.req.valid("json");

      const { account } = await createAdminClient();

      const session = await account.createEmailPasswordSession(email, password);

      setCookie(c, AUTH_COOKIE, session.secret, {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
      });

      return c.json({
        success: true,
        message: "You've logged in successfully!",
      });
    } catch (error) {
      console.error("Error:", error);
      return c.json({ error: "Invalid credentials" }, 400);
    }
  })
  .post("/register", zValidator("json", SignUpSchema), async (c) => {
    try {
      const { name, email, password } = c.req.valid("json");
      const { account } = await createAdminClient();
      await account.create(ID.unique(), email, password, name);
      const session = await account.createEmailPasswordSession(email, password);

      setCookie(c, AUTH_COOKIE, session.secret, {
        path: "/",
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
      });

      return c.json({
        success: true,
        message: "You've registered successfully!",
      });
    } catch (error) {
      console.log("Regiter error: ", error);
      return c.json({ error: "Invalid credentials." }, 400);
    }
  })
  .post("/logout", async(c) => {
    try {
      deleteCookie(c, AUTH_COOKIE);
      return c.json({
        success: true,
        message: "You've logged out successfully!",
      });
    } catch (error) {
      console.log("Error in signing out: ", error);
      return c.json({
        success: false,
        message: "Some error occurred while signing out!",
      });
    }
  });

export default app;
