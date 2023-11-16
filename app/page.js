import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      happy
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
