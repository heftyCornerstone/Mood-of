import HomeLogList from "@/components/forOnePageAlone/home/homeLogList";

function Title() {
  //*{loged-in ? userName : you}
  const userName = 'you' //*get username from the database
  return (
    <>
      <div className="title_static">
        <h1>mood</h1>
        <h1>of</h1>
      </div>
      <div className="title_login">
        {userName}
      </div>
    </>
  );
}

export default function Home() {
  return (
    //*wrapper 스타일 적용
    <>
      <div className="title">
        <Title />
      </div>
      <div className="logListContainer">
        <HomeLogList />
      </div>
    </>
  );
}

