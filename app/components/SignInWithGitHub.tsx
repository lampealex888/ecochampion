"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function SigninWithGithub() {
  return (
    <Button
      onClick={() =>
        signIn("github", {
          callbackUrl: `${window.location.origin}`,
        })
      }
      className="mt-6"
      variant="secondary"
    >
      Login with Github
      <FontAwesomeIcon icon={faGithub} className="w-5 h-5 ml-4" />
    </Button>
  );
}
