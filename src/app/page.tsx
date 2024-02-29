import { UserButton } from "@clerk/nextjs";

export default function Home() {
  console.log("test");

  return (
    <main>
      <UserButton />
      <h1>test</h1>
    </main>
  );
}
