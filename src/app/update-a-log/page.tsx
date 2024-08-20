import UpdateFormView from "@/components/forOnePageAlone/update/updateFormView";
import { getLogByIdx } from "@/components/userDataFetching/getLogs";

//type 흐름 생각하기

export default async function UpdatePage() {
    const currentLog = await getLogByIdx(0);
  return (
    <>
      <div className="logSheet">
        <UpdateFormView currentLog={currentLog}/>
      </div>
    </>
  );
}//이건 server component니까 client component이더라도 CreateFormView에 prop을 넘겨줘도 됨