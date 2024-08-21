"use client"
import questions from "@/components/forMultiPages/logQuestions";
import ChooseEmotion from "./chooseEmotions";
import CreateFormLogic from "../../forMultiPages/loggingFormLogic";
import { useRouter } from "next/navigation";

const stylish = {
  display: "block",
};

function LogContentW(): JSX.Element[] {
  const qkeys = Object.keys(questions);
  const sections = qkeys.map((c, i) => {
    return (
      <div className="logSection" key={c}>
        {c === "feeling" ? <ChooseEmotion /> : null}
        <label htmlFor={c} style={stylish}>
          {Object.values(questions)[i]}
        </label>
        <textarea name={c} id={c} style={stylish} required></textarea>
      </div>
    );
  });
  return sections;
}

export default function CreateFormView() {
  const router = useRouter();
  const date = new Date();
  const now = date.toString().split(" ").slice(0, 4).join(" ");

  return (
    <>
      <form
        onSubmit={async (e) => {
          await CreateFormLogic(e);
          router.push("/mood-of");
          router.refresh();
        }}
      >
        <div className="logTitleContainer">
          <input type="text" name="title" id="title" required />
        </div>

        <div className="logDescriptionContainer">
          {now}
          <div className="logSectionGroup">
            <LogContentW />
          </div>
        </div>
        <div className="submitWriting">
          <input type="submit" value="Done" />
        </div>
      </form>
    </>
  );
}

//css를 똑같이 적용하고, 페이지 자체는 다르게 해야겠다
/*
  <div className="logFormat">
    <div className="logTitleContainer">
      <TitleComponent/>
    </div>

    <div className="logDescriptionContainer">
      <div className="logDate">
        <div className="date">{today}</div>
      </div>

      <div className="paragraphGroup">
        <div className="paragraph">

          <ParagraphComponent/>
        
        </div>
      </div>
    </div>
  </div>
*/
