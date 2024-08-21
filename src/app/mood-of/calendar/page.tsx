import SlideToNextPage from "@/components/forMultiPages/slideToNextPage";

function CalendarPage() {
  return (
    <div className="calendarPage">
      <div className="month"></div>
      <div className="days"></div>
    </div>
  );
}

export default function Calendar() {
  //[넘기고 넘기다 1월달이 되었다] = useState(false);
  return (
    <>
      <div>
        <div className="year">
          <div className="year"></div>
        </div>
        <div className="monthNdays">
          <SlideToNextPage />
          <div className="calendarPages">
            <CalendarPage/>
          </div>
        </div>
      </div>
    </>
  ); //몇달치 데이터를 미리 받아서 화면을 구성해놓기 -> 처음과 끝이 같은 사진, 캐러셀
}
