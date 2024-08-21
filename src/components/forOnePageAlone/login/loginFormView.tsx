"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import loginFormLogic from "./loginFormLogic";
interface loginData {
  email: { value: string };
  password: { value: string };
}
export default function LoginFormView() {
  const router = useRouter();
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const { email, password } = e.target as typeof e.target & loginData;
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          router.push("/mood-of");
        } catch (err) {
          throw err;
        }
      }}
    >
      <input
        type="text"
        name="email"
        id="email"
        placeholder="mood_logger@email.com"
        required
      />
      <input
        type="text"
        name="password"
        id="password"
        placeholder="비밀번호"
        required
      />
      <input type="submit" value="로그인" />
    </form>
  );
}
