let users = [
  { id: 8, name: "Nicholas Runolfsdottir V" },
  { id: 9, name: "Glenna Reichert" },
  { id: 10, name: "Clementina DuBuque" },
];

export async function GET(request) {
  return new Response(JSON.stringify(users), { status: 200 });
}

export async function POST(request) {
  const { name } = await request.json();
  if (!name || typeof name !== "string") {
    return new Response("Invalid name", { status: 400 });
  }
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  return new Response(JSON.stringify(newUser), { status: 201 });
}

export async function DELETE(req) {
  const id = parseInt(req.nextUrl.searchParams.get("id"));
  if (!id || isNaN(id)) {
    return new Response("Invalid ID", { status: 400 });
  }
  const userExists = users.find((usr) => usr.id === id);
  if (!userExists) {
    return new Response("User not found", { status: 404 });
  }
  users = users.filter((usr) => usr.id !== id);
  return new Response(JSON.stringify(users), { status: 200 });
}

export async function PUT(req) {
  return new Response("Not implemented", { status: 501 });
}
