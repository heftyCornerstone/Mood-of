import { serverTimestamp } from "firebase/firestore";


export interface logEmot {
    angry: boolean;
    anxious: boolean;
    depressed: boolean;
    emotionless: boolean;
    empty: boolean;
    happy: boolean;
    lonely: boolean;
    sad: boolean;
}

export interface logCon {
    situation: string,
    thought: string,
    feeling: string,
    reaction: string,
    outcome: string,
};

export interface log {
    date ?: any,
    title: string,
    content: logCon,
    emotion: logEmot,
    deleted: boolean,
    initialLength ?: number,
    dither ?: number,
    originalContent ?: string,
}
//date:any 이런 식으로 타입을 탈출하면 안되는데 -> serverTimestamp()의 타입 찾기
