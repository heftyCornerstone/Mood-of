import questions from "@/components/forMultiPages/logQuestions";

// 이미 일기를 작성한 경우, 다시 일기 작성하기를 하면 수정하기가 되는데 로직을 어찌할지 고민하기
// ->한 컴포넌트는 한가지 역할만을 수행해야 함, 따라서 수정과 쓰기는 각기 다른 컴포넌트?
// ->nav바의 일기쓰기를 일기 수정하기로 바꾸기?

export default function LogContentW(): JSX.Element[] {
  const qkeys = Object.keys(questions);
  const sections = qkeys.map((c, i) => {
    return (
      <div className="logSection">
        <label htmlFor={c}>{Object.values(questions)[i]}</label>
        <textarea name={c} id={c}></textarea>
      </div>
    );
  });
  return sections;
}
