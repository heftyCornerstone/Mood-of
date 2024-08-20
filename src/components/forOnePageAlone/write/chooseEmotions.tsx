"use client";
import EmotionPanel from "@/components/forMultiPages/emotionPanel";
import { useState, useEffect } from "react";
import { logEmot } from "@/interface/types";

type ChooseEmotionProps = {
  prevEmotions?: logEmot | null;
};//prop 있거나 없다는 이렇게 하면 되는구나

export default function ChooseEmotion({
  prevEmotions = null,
}: ChooseEmotionProps) {
  //prop으로부터 받은 이모션이 있으면 emotions state의 초기값으로 넣어주기 (리팩터링 필요)
  let myEmotionsDefault;
  let emotionDefault: string[] = [];
  if (prevEmotions !== null) {
    emotionDefault = Object.entries(prevEmotions)
      .filter((c) => c[1])
      .map((c) => {
        return c[0];
      });
    myEmotionsDefault = emotionDefault.join(" ");//Cannot set properties of null (setting 'value')
  }

  const [emotions, setEmotions] = useState<string[]>(emotionDefault);

  //이모션 선택 추가와 삭제
  const emotionHandler = (emotion: string) => {
    const emotionIdx = emotions.indexOf(emotion);
    if (emotionIdx !== -1) {
      const popCurrent = emotions.filter((c) => {
        if (c !== emotion) {
          return c;
        }
      });
      setEmotions(popCurrent);
    } else {
      setEmotions((current) => [...current, emotion]);
    }
  };

  //myEmotions의 value를 바꾸는 effect
  useEffect(() => {
    const myEmotions = document.getElementById("myEmotions") as HTMLInputElement;
    myEmotions.value = emotions.join(" ");
  }, [emotions]);

  //이모션 패널과 숨은 인풋 myEmotions
  return (
    <div style={{ backgroundColor: "#f3ebde", width: "400px" }}>
      <EmotionPanel emotionHandler={emotionHandler} />
      <input type="text" name="myEmotions" id="myEmotions" defaultValue={myEmotionsDefault} required />
    </div>
  );
}
//style={{display:'none'}} 테스트 끝나면 인풋 숨기기
//