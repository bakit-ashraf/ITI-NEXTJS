import Link from "next/link";

export default async function Home() {
  let users = await fetch("https://jsonplaceholder.typicode.com/users");
  users = await users.json();

  return (
    <div className="flex flex-row flex-wrap justify-center gap-4">
      {users.map((user) => (
        <div key={user.id} className="flex flex-col items-center">
          <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
            <div className="flex items-center px-6 py-3 bg-gray-900">
              <h1 className="mx-3 text-white font-semibold text-lg">
                {user.name}
              </h1>
            </div>
            <Link href={`/${user.id}`}>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg">
                View Details
              </button>
            </Link>
            <div className="py-4 px-6">
              <p className="py-2 text-lg text-gray-700">{user.phone}</p>
              <div className="flex items-center mt-4 text-gray-700"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
