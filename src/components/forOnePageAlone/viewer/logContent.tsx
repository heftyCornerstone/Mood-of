import questions from "@/components/forMultiPages/logQuestions";
import { getLogByIdx } from "@/components/userDataFetching/getLogs";
import DeleteLogButton from "./deleteLogButton";
import Link from "next/link";

function RewriteBtn() {
  return (
    <div className="rewriteContainer">
      <Link href={'/update-a-log'}>rewrite</Link>
    </div>
  );
}
//Thu Aug 08 2024

export default async function LogContentR({ docIdx }: { docIdx: number }) {
  //타입 손봐야겠어
  //이제 이모션을 표시해주자. log에 들어있다.
  const log = await getLogByIdx(docIdx);
  const logKeys = Object.keys(log.contents);
  const logValues = Object.values(log.contents);
  const sections = logKeys.map((c, i) => {
    return (
      <div className="logSection" key={c}>
        <div className={`${c} query`}>{Object.values(questions)[i]}</div>
        <div className={`${c} content`} id="">
          {logValues[i]}
        </div>
      </div>
    );
  });
  const date = new Date();
  const now = date.toString().split(" ").slice(0, 4).join(" ");
  return (
    <>
      <DeleteLogButton docIndex={docIdx}/>
      {now === log.date ? <RewriteBtn/> : null}
      <div className="log">
        <div className="log_titleContainer">
          <h2 className="log_title">{log.title}</h2>
        </div>
        <div className="logDescriptionContainer">
          <div className="logDate">
            <div className="date">{log.date}</div>
          </div>
          <div className="logSectionGroup">{sections}</div>
        </div>
      </div>
    </>
  );
}
