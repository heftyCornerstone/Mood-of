"use client";
import { useRouter } from "next/navigation";

import deleteLog from "@/components/userDataFetching/deleteLog";
export default function DeleteLogButton({ docIndex }: { docIndex: number }) {
  const router = useRouter();

  const deleteNroute = async () => {
    try {
      await deleteLog(docIndex);
    } catch (err) {
      throw err;
    }
    router.push("/");
  };
  return (
    <>
      <button onClick={deleteNroute}>삭제하기</button>
    </>
  );
}
