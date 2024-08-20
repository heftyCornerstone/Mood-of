//모달 패널

const items = {
  border: "1px solid gray",
  backgroundColor: "",
};

function emotionModal() {}

export default function EmotionPanel({
  emotionHandler,
}: {
  emotionHandler: (emotion: string) => void;
}) {
  //클릭되면 핸들러가 이모션 데이터를 업데이트. ...ok
  //showEmotionSelection 모달화하기. ...ok
  //클릭되면 패널에 표시되는 이모션이 변화. -동글동글한 패널 속 그래프를 어떻게 구현할지는 아직 잘 모르겠다.

  const modalSwitch = () => {
    const panel = document.getElementsByClassName(
      "emotionModal"
    )[0] as HTMLDivElement;
    panel.style.display === "none"
      ? (panel.style.display = "block")
      : (panel.style.display = "none");
  };
  return (
    <>
      <button type="button" onClick={modalSwitch}>
        Select emotions
      </button>
      <div className="emotionModal" style={{ 
          display: "none", position:'fixed', zIndex:'3', width:'100%', height:'100%', top:'0', left:'0', backgroundColor:'rgba(0, 0, 0, 0.5)'
          }}>
        <div className="showEmotionSelection" style={{ 
          position:'relative', width: "400px", top:'50%', left:'50%', transform:'translate(-50%,-50%)'
          }}>
          <div className="emotionSelection_title">
            Emotions
          </div>

          <div
            className="showEmotionSelection_emotions"
            style={{display: "grid",gridTemplateColumns: "1fr 1fr 1fr 1fr",}}>
            <div
              className="happy"
              onClick={(e) => {if (e.target instanceof HTMLElement) {emotionHandler(e.target.className);}}}
              style={{border: "1px solid gray",backgroundColor: "#fcf0cc",}}>
              happy
            </div>
            <div
              className="sad"
              onClick={(e) => {if (e.target instanceof HTMLElement) {emotionHandler(e.target.className);}}}
              style={{border: "1px solid gray", backgroundColor: "#ccdffc",}}>
              sad
            </div>
            <div
              className="angry"
              onClick={(e) => {if (e.target instanceof HTMLElement) {emotionHandler(e.target.className);}}}
              style={{border: "1px solid gray", backgroundColor: "#fccccc",}}>
              angry
            </div>
            <div
              className="anxious"
              onClick={(e) => {if (e.target instanceof HTMLElement) {emotionHandler(e.target.className);}}}
              style={{border: "1px solid gray", backgroundColor: "#fcccf2",}}>
              anxious
            </div>
            <div
              className="depressed"
              onClick={(e) => {if (e.target instanceof HTMLElement) {emotionHandler(e.target.className);}}}
              style={{border: "1px solid gray", backgroundColor: "#87848c",}}>
              depressed
            </div>
            <div
              className="empty"
              onClick={(e) => {if (e.target instanceof HTMLElement) {emotionHandler(e.target.className);}}}
              style={{border: "1px solid gray", backgroundColor: "#765ca1",}}>
              empty
            </div>
            <div
              className="lonely"
              onClick={(e) => {if (e.target instanceof HTMLElement) {emotionHandler(e.target.className);}}}
              style={{border: "1px solid gray", backgroundColor: "#736a55", color: "white",}}>
              lonely
            </div>
            <div
              className="emotionless"
              onClick={(e) => {if (e.target instanceof HTMLElement) {emotionHandler(e.target.className);}}}
              style={{border: "1px solid gray", backgroundColor: "#000000", color: "white",}}>
              emotionless
            </div>
          </div>
        <button type="button" onClick={modalSwitch}>
          okay
        </button>
      </div>
      </div>
    </>
  );
}

/*
<div className="showEmotionSelection">
  <div className="emotionSelection_title">Emotions</div>
  <div className="showEmotionSelection_emotions">emotion chart</div>
</div>
*/
