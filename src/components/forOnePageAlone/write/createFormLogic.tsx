import setLog from "@/components/userDataFetching/setLog";
import updateLog from "@/components/userDataFetching/updateLog";
import { logCon, logEmot } from "@/interface/types";
import { getOriginal } from "@/components/userDataFetching/getLogs";
import levDistance from "../update/levDistance";

// 데이터를 적절한 형식으로 전달하고,
// 이상한 데이터는 거른다.
// 데이터는 userDataFetching에서

interface data extends logCon {
  title: string;
  myEmotions: logEmot;
  dither ?: number,
  originalContent ?: string,
}
interface elements {
  title: { value: string };
  situation: { value: string };
  thought: { value: string };
  feeling: { value: string };
  reaction: { value: string };
  outcome: { value: string };
  myEmotions: { value: string };
}
type moods =
  | "angry"
  | "anxious"
  | "depressed"
  | "emotionless"
  | "empty"
  | "happy"
  | "lonely"
  | "sad";

export default async function createFormLogic(e: React.FormEvent<HTMLFormElement>, docId?:string) {
  e.preventDefault();
  const { title, situation, thought, feeling, reaction, outcome, myEmotions } =
    e.target as typeof e.target & elements;

  let myEmotionsObj : logEmot = {
    angry: false,
    anxious: false,
    depressed: false,
    emotionless: false,
    empty: false,
    happy: false,
    lonely: false,
    sad: false,
  };
  const myEmotionsArr = myEmotions.value.split(" ") as moods[];
  myEmotionsArr.forEach((c) => {
    myEmotionsObj[c] = true;
  });

  let logData:data = {
    title: title.value,
    situation: situation.value,
    thought: thought.value,
    feeling: feeling.value,
    reaction: reaction.value,
    outcome: outcome.value,
    myEmotions: myEmotionsObj,
  };
  const wholeLog = [
    title,
    situation,
    thought,
    feeling,
    reaction,
    outcome,
  ].reduce((acc, cur) => {
    return acc + cur.value;
  }, '');

  //try catch문으로 다시 작성하기
  //(docId) ? 업데이트 : 새로운 로그 생성
  if(docId){
    const originalCon = await getOriginal(docId);
    const dither=levDistance(originalCon, wholeLog);
    logData.dither = (dither>100) ? 100 : dither;
    updateLog(logData, docId);
  }else{
    logData.originalContent=wholeLog;
    setLog(logData);
  }
  
}



//myEmotions: myEmotions.value.split(' ') as moods[], 나중에 수정하기
// 사실 궁극적으로는 input type을 checkbox로 바꾸는 것도 고려해봐야...

//fetch data to /firebase-thisUser
/* 
as typeof e.target & elements -> e.target.title.value는 되는데, 타입 정의 문제가 있어서.

{
docid:specific,
title: "",
situation: "",
thought: "",
feeling: "",
reaction: "",
outcome: "",
};
*/
