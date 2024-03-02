import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <a className="" href="/api/auth/login">
        Login
      </a>
      <a className="" href="/api/auth/logout">
        Logout
      </a>
      <Link className="" href="/profile">Profile</Link>
    </main>
  );
}
