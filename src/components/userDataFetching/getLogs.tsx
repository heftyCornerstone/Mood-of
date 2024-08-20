//*데이터 인터페이스 결정하기
import { dbStore, user } from "@/firebase";
import { collection, query, orderBy, limit, getDocs, getDoc, doc } from "firebase/firestore";
import { logCon, log } from "@/interface/types";

const userEmail = "heftycornerstone@gmail"; //(user) ? user.email : null //지금 접속한 유저의 이메일 받아오기
const docLocation = `user-data/${userEmail}/log`
const q = query(
  collection(dbStore, docLocation),
  orderBy("date", "desc"),
  limit(14)
);// 일기를 읽다가 날짜가 지나가면 어떻게 표시하지

//최근 14일 내에 작성한 일기 받아오기

async function logsIn14days(){
  const docSnap = await getDocs(q);
  const filtered = docSnap.docs.filter((c) => {
    const {deleted} = c.data()
    const {date} = c.data();
    const jsdate = new Date();
    const toDate = date.toDate();
    const todaysDate = jsdate.getTime()/(24 * 60 * 60 * 1000);
    const logedDate = toDate.getTime()/(24 * 60 * 60 * 1000);
    
    if(todaysDate-logedDate<14 && deleted==false) return c
  })
  return filtered
}

export async function getLogsInfo() {
  //날짜, 제목
  const docSnap = await logsIn14days();
  const data = docSnap.map((c, i) => {
    const { date, title } = c.data();
    const dateNow = String(date.toDate()).split(" ").slice(0, 4).join(" ");
    return { id: i, date: dateNow, title };
  });
  return data;
}

export async function getLogByIdx(docIdx: number) {
  //날짜, 제목, 내용
  const docSnap = await logsIn14days();
  const log = docSnap[docIdx];
  const docId = log.id
  const { date, content, title, emotion } = log.data() as log;
  const logDate = String(date.toDate()).split(' ').slice(0, 4).join(' ');
  const contents = {
    situation: content.situation,
    thought: content.thought,
    feeling: content.feeling,
    reaction: content.reaction,
    outcome: content.outcome,
  };//이렇게 안하면 순서가 고정이 안되는 문제(순서 문제만 아니었어도 필요가 없는데...)
  return {title, emotion, rawDate:date, date: logDate, contents: contents, docId:docId};
}

export async function getOriginal(docId:string){
  const docRef = doc(dbStore, docLocation, docId);
  const docSnap = await getDoc(docRef);
  const originalContent = docSnap.get('originalContent');
  return originalContent
}


// **데이터 업로드하기
// textarea 길이가 작성하는만큼 길어지도록
// required 커스텀하기
// **그 외
// serverTimestamp 타입 탈출 문제 해결하기
// 순서의존문제 임시조치 해둔거 해결하기 (questions와 연계하여 entries 사용)
// setLog, updateLog 서로 너무 비슷함. 리팩터링
// 데이터를 더 효율적으로 저장할 순 없을까?

// 로그인 로그아웃

// 통계 로직 짜기
/*
// 최근 14일간의...
이모션 모아서 구체적인 갯수 가져오기, 퍼센트로 만들기
일기 작성 시간 가져와서 시간대별로 분류 후 퍼센트로 만들기 
---새벽-오전-오후-저녁-밤 시간 구분하기
---초는 필요 없음
디터 퍼센트 가져오기, 14일 평균 퍼센트로 만들기 
최근 14일간 일기 몇번 썼는지 표시하기
*/
// 통계 로직 반영해서 홈 화면 바꾸기(아직은 로직에 따른 메세지만 띄워보자)
// 통계 화면 임시로 띄우기
/*
1
이모션 비율 표시  -  작성 시간 비율 표시
이모션 구체적인 갯수
일기 작성 시간 구체적인 시간대
2
디터 평균 퍼센트 표시   -   일기 작성 빈도 표시
매 일기마다 몇퍼센트씩 디터가 있었는지
일기를 작성한 날, 그렇지 않은 날 표시
*/


// 이모션 패드 구현
// 통계 그래프 구현

// 로그인 관련
// 지금 접속한 유저의 이메일을 사용해서 데이터 패칭하도록 하기 : getlogs, updateLog
// 프로텍티드 라우트 //hoc vs serverside protection  :  https://www.freecodecamp.org/news/secure-routes-in-next-js/
// --로그인 여부 뿐만이 아님. !하루 지난 일기는 수정 페이지 접근 불가해야 함!
// ----------------------------------------
