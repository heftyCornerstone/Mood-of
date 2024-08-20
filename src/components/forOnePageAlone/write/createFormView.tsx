"use client";
import questions from "@/components/forMultiPages/logQuestions";
import ChooseEmotion from "./chooseEmotions";
import CreateFormLogic from "./createFormLogic";
import { useRouter } from "next/navigation";

interface props {
  emotionHandler: (prop: string) => void;
}

const stylish = {
  display: "block",
};

//type 흐름 생각하기, data fetching과 랜더링 분리할 고민 하기
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
    ); //textarea사이에 내용이 들어가야겠지
  });
  return sections;
}

// 재활용 어떻게 안되나?
// 만약 오늘 작성한 로그 있으면 적어서 보여주고, 아니면 빈 화면.
// prop으로 받는 데이터가 있을수도, 없을수도 있음.
// 데이터가 있으면 title, textarea에 넣어주고 아니면 빈칸.

export default function CreateFormView() {
  const router = useRouter();
  const date = new Date();
  const now = date.toString().split(" ").slice(0, 4).join(" ");

  const writeNroute = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      await CreateFormLogic(e);
      router.push("/");
    } catch (err) {
      throw err;
    }
  };
  return (
    <>
      <form
        onSubmit={async (e) => {
          writeNroute(e);
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
  ); //title에 미리 title이 들어가 있어야겠지
}
// required 커스텀하기

/*
길이가 변하는 기능
만일 qkeys[n]이 feeling이라면 이모션 모달을 띄우는 버튼 삽입
<div className="paragraph">
  <label htmlFor={qkeys[0]}>{questions.situation}</label>
  <textarea name={qkeys[0]} id=""></textarea>
</div>
*/

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

/*
  const test = (e:any)=>{
    e.preventDefault();
    const {title, situation, thought, feeling, reaction, outcome, myEmotions} = e.target.elements
    const obb = {
      title: title.value,
      situation: situation.value,
      thought: thought.value,
      feeling: feeling.value,
      reaction: reaction.value,
      outcome: outcome.value,
      myEmotions: myEmotions.value,
    }
    console.log(obb);
  }
*/
