import UsersList from "@/components/UsersList";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users ");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="min-h-screen flex flex-col">
      <UsersList data={data} />
    </main>
  );
}
