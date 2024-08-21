import { redirect } from "next/navigation";
import { user } from "@/firebase";

export default function prePage() {
  !user ? redirect("/account/log-in") : redirect("/mood-of");
  return <></>;
}
