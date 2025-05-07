import React from "react";
import { signIn, signOut } from "../auth";

export default function loginGmail() {
  async function logIN() {
    "use server";
    await signIn("google", { redirectTo: "/" });
  }
  async function logOut() {
    "use server";
    await signOut({ redirectTo: "/" });
  }
  return (
    <>
      <form action={logIN}>
        <button> sign whith google</button>
      </form>
      <form action={logOut}>
        <button className=" btn btn-check bg-gray">LogOUt</button>
      </form>
    </>
  );
}
