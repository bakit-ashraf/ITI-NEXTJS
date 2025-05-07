import { redirect } from "next/navigation";

export const metadata = {
  title: "Product Details",
  description: "My page description",
};

async function Page({ params }) {
  const { details } = params;
  console.log(details);

  // Validate details
  const userId = parseInt(details, 10);
  if (isNaN(userId) || userId < 1 || userId > 10) {
    return (
      <div>Invalid user ID. Please provide a number between 1 and 10.</div>
    );
  }

  let user;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error(
        `Failed to fetch user data: ${response.status} ${response.statusText}`
      );
    }
    user = await response.json();
  } catch (error) {
    console.error(error);
    return <div>Error loading user details: {error.message}</div>;
  }

  async function goBack() {
    "use server";
    redirect("/dataUsers");
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.phone}</p>
      <form action={goBack}>
        <button type="submit" className="btn">
          Go Back
        </button>
      </form>
    </div>
  );
}

export default Page;
