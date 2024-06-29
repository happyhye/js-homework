import { AudioPlayer } from './audio.js';

/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/


const nav = document.querySelector('nav');
const visualImage = document.querySelector('.visual img');
const nickName = document.querySelector('.nickName');
let currentAudioPlayer = null;


function handleClick(e) {
  const target = e.target;
  const li = target.closest('li');
  const ul = target.closest('ul');
  
  // 클릭한 대상이 li가 아니면 그냥 return
  if(!li) return;
  
  // index 추출
  const index = li.dataset.index-1;


  // 오디오 주소 설정
  const audioSource = `./assets/audio/${data[index].name.toLowerCase()}.m4a`;
  // 현재 재생 중인 오디오가 있다면 정지
  if (currentAudioPlayer) currentAudioPlayer.pause();
  // 새로운 AudioPlayer 생성 & 재생
  currentAudioPlayer = new AudioPlayer(audioSource);
  currentAudioPlayer.play();


  // is-active 클래스 전체 삭제 후 추가
  [...ul.children].forEach((li) => li.classList.remove('is-active'));
  li.classList.add('is-active');

  // 캐릭터 name 변경
  setNameText(nickName, data, index)

  // 이미지 & 이미지 설명 교체하기
  setImage(visualImage, data, index);

  // 배경색 변경
  setBgColor(data, index)
}


nav.addEventListener('click', handleClick);


// --------------------------- 함수 --------------------------- //

function setBgColor(data, index) {
  const [colorA, colorB='#000'] = data[index].color;
  document.body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}


function setImage(target, data, index) {
  target.src = `./assets/${data[index].name.toLowerCase()}.jpeg`;
  target.alt = data[index].alt;
}


function setNameText(target, data, index) {
  target.textContent = data[index].name;
}