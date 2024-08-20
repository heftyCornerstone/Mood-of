import { dbStore } from "@/firebase";
import { doc, updateDoc} from "firebase/firestore";
import { logEmot, logCon } from "@/interface/types";


interface data extends logCon {
  title: string;
  myEmotions: logEmot;
  dither?: number;
}

export default async function updateLog(data: data, docId:string) {
  const userEmail = "heftycornerstone@gmail"//(user) ? user.email : null //지금 접속한 유저의 이메일 받아오기
  const docAdd = `user-data/${userEmail}/log`;
  const docRef = doc(dbStore, docAdd, docId);
  if(userEmail!==null){
    let currentData = {
      title: data.title,
      content: {
        situation: data.situation,
        thought: data.thought,
        feeling: data.feeling,
        reaction: data.reaction,
        outcome: data.outcome,
      },
      emotion: data.myEmotions,
      dither: data.dither
    };

    updateDoc(docRef, currentData);
  } else{ alert('no email!') }
}