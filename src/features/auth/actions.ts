// "use server";

// import { cookies } from "next/headers";
// import { Account, Client } from "node-appwrite";

// import { AUTH_COOKIE } from "./constants";

// export const getCurrent = async () => {
//   try {
//     const client = new Client()
//       .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
//       .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

//     const session = await cookies().get(AUTH_COOKIE);
//     if (!session) {
//       return null;
//     }
//     const account = new Account(client);
//     return await account.get();
//   } catch {
//     return null;
//   }
// };

"use server";

import { cookies } from "next/headers";
import { Account, Client } from "node-appwrite";

import { AUTH_COOKIE } from "./constants";

export const getCurrent = async () => {
  try {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

    const session = cookies().get(AUTH_COOKIE);
    if (!session) {
      console.log("No session found");
      return null;
    }

    console.log("Session found:", session);

    // Set the session in the client
    client.setSession(session.value);

    const account = new Account(client);
    const user = await account.get();
    console.log("User:", user);
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};
