import LogContentR from "@/components/forOnePageAlone/viewer/logContent";

type params = {
  title: string;
  docIdx: string;
};

export default function ReadLog({ searchParams }: { searchParams: params }) {
  //fetch data from /firebase-thisUser-docid:specific

  const title = searchParams.title;
  const docIdx = Number(searchParams.docIdx);

  return (
    <>
      <div className="logView">
        <LogContentR docIdx={docIdx} />
      </div>
      <div className="emotionSelection">
        <div className="emotionSelection_title">Emotions</div>
        <div className="emotionSelection_emotions"></div>
      </div>
    </>
  );
}

/*
<div className="logFormat">
    <div className="logTitleContainer">
    </div>

    <div className="logDescriptionContainer">
        <div className="logDate">
            <div className="date">{today}</div>
        </div>

        <div className="paragraphGroup">
            <div className="paragraph">
            </div>
        </div>
    </div>
</div>
*/
//{searchParams} https://nextjs.org/docs/app/api-reference/file-conventions/page
