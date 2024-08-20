export default function levDistance(original: string, current: string) {
  const originalDoc = original;
  let shorterDoc =
    original.length < current.length || original.length === current.length
      ? original.split("")
      : current.split("");
  let longerDoc =
    original.length < current.length || original.length === current.length
      ? current.split("")
      : original.split("");

  //메모이제이션용 매트릭스 초기화
  const matrixLen = longerDoc.length;
  let matrix: number[][] = [];
  for (let i = 0; i < matrixLen; i++) {
    matrix.push([]);
  }

  if (shorterDoc.length !== longerDoc.length) {
    const lenSub = Math.abs(shorterDoc.length - longerDoc.length);
    const header = Array(lenSub).fill(null);
    shorterDoc.length === matrixLen
      ? (longerDoc = header.concat(longerDoc))
      : (shorterDoc = header.concat(shorterDoc));
  }

  // 매트릭스 첫번째 어레이 메모이제이션하기
  shorterDoc.forEach((c, i) => {
    let curMin: number =
      i === 0 || (shorterDoc[i - 1] === null && c === longerDoc[0])
        ? 0
        : matrix[0][i - 1];
    if (c !== longerDoc[0]) curMin++;
    matrix[0].push(curMin);
  });

  // 매트릭스 채우기(문서 일치 최소 거리 구하기)
  longerDoc.slice(1, longerDoc.length).forEach((c, i) => {
    for (let k = 0; k < shorterDoc.length; k++) {
      let curMin =
        k === 0
          ? matrix[i][0]
          : Math.min(matrix[i][k - 1], matrix[i][k], matrix[i + 1][k - 1]);
      if (c !== shorterDoc[k]) curMin++;
      matrix[i + 1].push(curMin);
    }
  });

  // 문서 일치 최소 거리를 이용하여 dither 퍼센트 구하기
  const minDistance = matrix[matrixLen - 1][matrixLen - 1];
  const ditherRate = Math.floor((100 * minDistance) / originalDoc.length);
  return ditherRate;
}

//일기 길이 제한 어떻게 할지 생각해보자


/*
이해

얼마나 수정했는지 수치화해서 보여줄거야.

https://stackoverflow.com/questions/15303631/what-are-some-algorithms-for-comparing-how-similar-two-strings-are
(그리고 이쪽 분야 위키)

여러가지 알고리즘들이 있구나. 내가 찾던 알고리즘은 이것들이야.
Levenshtein distance  vs Damerau–Levenshtein distance
*/

/*
결정
Levenshtein distance  vs Damerau–Levenshtein distance

유사하다 -> 사유하다
Levenshtein distance
비용 : 2

Damerau–Levenshtein distance
비용 : 1


언어에 따라 다르지만
어휘의 많은 부분이 한자로 이루어진 한국어는 
유사한 음절이 많이 사용되고, 음절의 배치 순서에 따라 
완전히 다른 단어가 될 수도 있으니까 Levenshtein distance가 더 합리적으로 사용자의 의사를 반영할 것 같다.

*/

// dither를 감지한 항목에 대해서 무엇을 할까

/*
string metric algorithm
망설임 지수를 표시하기 위해서 이전 인풋과 수정된 인풋의 일치율을 비교하여야 한다.


망설임 지수
수정된 문서가 이전 문서와 얼마나 차이가 나는지 수치화하여 보여준다.

자신의 태도를 반추하는 경향으로 인해서 자기 표현에 수치심을 느꼈거나, 
작성 당시에는 감정을 묻어두어서 잘 떠오르지 않았지만, 일기 쓰기 활동이 자기 인지를 촉진하여서 감정이 뒤늦게 떠오르거나
최근 주의집중력이 저하되어서 실수와 누락이 많았거나

이유는 다르지만 공통적으로 인지 및 감정적으로 망설였다고 표현하기로.
*/

/*
Damerau–Levenshtein distance
-
The Levenshtein distance between night and nigth is 2 
but Damerau Levenshtein distance between night and nigth will be 1 
because it is just a swap of a pair of characters.
-
https://stackoverflow.com/questions/15303631/what-are-some-algorithms-for-comparing-how-similar-two-strings-are
*/
