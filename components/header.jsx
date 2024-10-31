import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { PenBox } from "lucide-react";
import UserMenu from "./user-menu";

export default function Header() {
  return (
    <nav className="mx-auto py-2 px-4 flex justify-between items-center shadow-md border-b-2">
      <Link href="/" className="flex items-center">
        <text className="text-2xl bg-violet-950 p-2 rounded-lg">SCRUMIFY</text>
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/project/create">
          <Button variant="destructive" className="flex items-center gap-2">
            <PenBox/>
            <span>Create a Project</span>
          </Button>
        </Link>
        <SignedOut>
          <SignInButton forceRedirectUrl="/onboarding">
            <Button variant="outline">Login</Button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserMenu />
        </SignedIn>
      </div>
    </nav>
  );
}
