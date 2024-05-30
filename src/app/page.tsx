import UsersList from "@/components/UsersList";

export default async function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <UsersList />
    </main>
  );
}
