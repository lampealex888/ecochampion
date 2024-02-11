"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";

export default function ProfileClient() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user ? (
      <div>
        <Image
          src={user.picture ?? ""}
          alt={user.name ?? ""}
          width={100}
          height={100}
        />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <a className="btn btn-error" href="/api/auth/logout">Logout</a>
        <Link className="btn btn-primary" href="/">Go back</Link>
      </div>
    ) : (
      <div>
        <p>Not logged in</p>
        <a className="btn btn-primary" href="/api/auth/login">Login</a>
      </div>
    )
  );
}
