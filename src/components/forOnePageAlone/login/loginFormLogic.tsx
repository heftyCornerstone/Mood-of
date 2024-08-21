import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
interface loginData {
  email: { value: string };
  password: { value: string };
}

export default async function loginFormLogic(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const { email, password } = e.target as typeof e.target & loginData;
  await signInWithEmailAndPassword(auth, email.value, password.value);
}
