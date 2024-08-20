import { dbStore, user } from "@/firebase";
import { collection, setDoc, serverTimestamp, doc } from "firebase/firestore";
import { log, logEmot, logCon } from "@/interface/types";


interface data extends logCon {
  title: string;
  myEmotions: logEmot;
  dither?: number;
  originalContent?: string;
}

export default async function setLog(data: data) {
  const userEmail = "heftycornerstone@gmail"//(user) ? user.email : null //지금 접속한 유저의 이메일 받아오기
  const docAdd = `user-data/${userEmail}/log`;
  if(userEmail!==null){
    const col = collection(dbStore, docAdd);
    const docRef = doc(col); 
    let currentData:log = {
      date: serverTimestamp(),
      title: data.title,
      content: {
        situation: data.situation,
        thought: data.thought,
        feeling: data.feeling,
        reaction: data.reaction,
        outcome: data.outcome,
      },
      emotion: data.myEmotions,
      deleted:false,
      dither: Number(0),
    };
    currentData.originalContent=data.originalContent;
    setDoc(docRef, currentData);
  } else{ alert('no email!') }
}
