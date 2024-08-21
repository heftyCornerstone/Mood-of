import { redirect } from "next/navigation";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "@/components/forMoodOfLayout/navbar";
import MusicPlayer from "@/components/forMoodOfLayout/musicPlayer";

export default async function protect({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /**/
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      console.log("oops");
      redirect("/account/log-in");
    }
  });
  return (
    <>
      <Navbar />
      <MusicPlayer />
      {children}
    </>
  );
}
