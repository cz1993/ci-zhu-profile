import type { Metadata } from "next";
import { ProfileShell } from "./profile-shell";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return <ProfileShell />;
}
