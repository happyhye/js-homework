# 엘리멘탈 poster 과제 구현
### [엘리멘탈 poster 과제 자바스크립트 코드 페이지](https://github.com/happyhye/js-homework/blob/main/mission02/poster/client/js/main.js)

## 문제
썸네일 이미지를 클릭하면 메인 이미지와 배경이 바뀔 수 있도록 코드 로직을 작성해주세요.

### 요구사항

1. 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.
    - 이벤트 위임
    - 반복문
2. 이미지와 색상의 데이터는 `data.js` 에서 불러와주세요.
3. 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.
    - 배경색 변경 ( colorB의 기본값은 `#000` 으로 한다 )
    
    ```jsx
    elem.style.background = `linear-gradient(to bottom, 'colorA','colorB')`;
    ```
    
    - 이미지 변경
    
    ```jsx
    target.src = `./assets/${data.name}.jpeg`;
    target.alt = data.alt;
    ```
    
4. 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.
    
    ```jsx
    target.textContent = data.name;
    ```
    
5. 함수를 분리시켜주세요.
    - `setBgColor` 함수
    - `setImage` 함수
    - `setNameText` 함수

## 결과
### [엘리멘탈 포스터 과제 배포 사이트](https://elemental-posters.netlify.app/)

## 함수 설명
```js
function setBgColor(data, index) {
  const [colorA, colorB='#000'] = data[index].color;
  document.body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}
```
- 배경색 바꾸는 함수
  - 배열의 구조 분해 할당을 사용하여 colorA와 colorB를 설정
  - colorB의 기본값은 #000

<br />

```js
function setImage(target, data, index) {
  target.src = `./assets/${data[index].name.toLowerCase()}.jpeg`;
  target.alt = data[index].alt;
}
```
- 이미지 바꾸는 함수
  - 이미지의 경로와 대체 텍스트를 설정

<br />

```js
function setNameText(target, data, index) {
  target.textContent = data[index].name;
}
```
- 상단 텍스트를 변경하는 함수
  - `textContent`를 사용하여 변경

<br />

## 느낀 점
오디오를 추가하니 더 재미있는 결과가 나왔다.

이렇게 과제 하나씩 할 때마다 내가 얼마나 부족한지 다시 한번 깨닫는다. ㅠㅠ

지금 내 실력은 간단한 함수도 버벅이면서 짜는 레벨인데, 재사용 가능한 함수로 코드 짜는 연습을 많이 해야겠다.