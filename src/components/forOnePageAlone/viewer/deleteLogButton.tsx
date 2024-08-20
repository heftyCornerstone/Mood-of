"use client";
import { useRouter } from "next/navigation";

import deleteLog from "@/components/userDataFetching/deleteLog";
export default function DeleteLogButton({ docIndex }: { docIndex: number }) {
  const router = useRouter();

  return (
    <>
      <button
        onClick={async () => {
          await deleteLog(docIndex);
          router.push("/");
          router.refresh();
        }}
      >
        삭제하기
      </button>
    </>
  );
}
