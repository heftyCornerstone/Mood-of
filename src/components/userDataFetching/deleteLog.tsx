import { dbStore } from "@/firebase";
import { doc, setDoc} from "firebase/firestore";
import { getLogByIdx } from "./getLogs";

export default async function deleteLog(docIndex:number){
  const userEmail = "heftycornerstone@gmail"//(user) ? user.email : null //지금 접속한 유저의 이메일 받아오기
  const docAdd = `user-data/${userEmail}/log`;
  const currentDocSnap = await getLogByIdx(docIndex);
  const docRef = doc(dbStore, docAdd, currentDocSnap.docId);
  if(userEmail!==null){
    let currentData = {
      date: currentDocSnap.rawDate,
      emotion: currentDocSnap.emotion,
      dither: 100,
      deleted: true
    };
    setDoc(docRef, currentData);
  } else{ alert('no email!') }
}//