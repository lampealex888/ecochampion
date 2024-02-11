import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <a className="btn btn-primary" href="/api/auth/login">
        Login
      </a>
      <a className="btn btn-secondary" href="/api/auth/logout">
        Logout
      </a>
      <Link className="btn btn-accent" href="/profile">Profile</Link>
    </main>
  );
}
