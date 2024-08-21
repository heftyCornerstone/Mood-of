"use client";
import questions from "@/components/forMultiPages/logQuestions";
import ChooseEmotion from "../write/chooseEmotions";
import createFormLogic from "../../forMultiPages/loggingFormLogic";
import { logCon, logEmot } from "@/interface/types";

interface data {
  title: string;
  emotion: logEmot;
  date: string;
  contents: logCon;
  docId: string;
}

const stylish = {
  display: "block",
};

//일기 작성칸
function LogContentU({
  emotions,
  content,
}: {
  emotions: logEmot;
  content: logCon;
}): JSX.Element[] {
  const qEntiries = Object.entries(questions);
  const contents = Object.values(content);
  const sections = qEntiries.map((c, i) => {
    return (
      <div className="logSection" key={c[0]}>
        {c[0] === "feeling" ? <ChooseEmotion prevEmotions={emotions} /> : null}
        <label htmlFor={c[0]} style={stylish}>
          {c[1]}
        </label>
        <textarea name={c[0]} id={c[0]} style={stylish} defaultValue={contents[i]} required></textarea>
      </div>
    ); //textarea 내용 : 지금은 임시조치, 순서 의존하지 않도록 바꿔야 함
  });
  return sections;
}

export default function UpdateFormView({ currentLog }: { currentLog: data }) {
  return (
    <>
      <form
        onSubmit={(e) => {
          createFormLogic(e, currentLog.docId);
        }}
      >
        <div className="logTitleContainer">
          <input type="text" name="title" id="title" defaultValue={currentLog.title} required />
        </div>

        <div className="logDescriptionContainer">
          {currentLog.date}
          <div className="logSectionGroup">
            <LogContentU
              emotions={currentLog.emotion}
              content={currentLog.contents}
            />
          </div>
        </div>
        <div className="submitWriting">
          <input type="submit" value="Done" />
        </div>
      </form>
    </>
  );
}
// required 커스텀하기
