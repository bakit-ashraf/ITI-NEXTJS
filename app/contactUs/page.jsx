import React from "react";
import { auth } from "../auth";

export const metadata = {
  title: "contact us",
  description: "My page contact us",
};
async function contactUs() {
  const user = await auth();
  console.log(user);

  if (!user) {
    console.log("User is not logged in");
    return <div>contact us (please log in to see your data)</div>;
  }

  return (
    <div className="bg-amber-500 ">
      contact us {user.user.name}
      <h1>what do think toDay about elعرابه ?</h1>
    </div>
  );
}

export default contactUs;
