import {getLogsInfo} from "@/components/userDataFetching/getLogs";
import Link from "next/link";
import SlideDown from "@/components/forMultiPages/slideDown";

export default async function HomeLogList() {
  const logData = await getLogsInfo();
  const logListLogs = logData.map((log) => {
    return (
      //동적 라우팅 : url object format -> https://nextjs.org/docs/app/api-reference/components/link
      <li className="logList_log" key={log.id}>
        <Link
          href={{
            pathname: "/my-logs-viewer",
            query: { title:log.title, docIdx: log.id },
          }}
        >
          <div className="logList_log_date">{log.date}</div>
          <div className="logList_log_title">{log.title}</div>
        </Link>
      </li>
    );
  });
  
  return (
    <div className="logListScrollBox">
      <ul className="logList">{logListLogs}</ul>
      <SlideDown />
    </div>
  );
}

