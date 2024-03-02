import { UserButton } from "@clerk/nextjs";
import { getTVTrending } from "./api/tmdb/config";
import { get } from "http";

export default function Home() {
  const trending = getTVTrending();
  return (
    <main>
      <h1>test</h1>
    </main>
  );
}
