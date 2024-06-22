
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/


const input = document.querySelectorAll('input[class^="user-"]');
const button = document.querySelector('.btn-login');
console.log(input);

const id = input[0];
const pw = input[1];

function validationHandler() {
  // 아이디(이메일) 정규식 확인
  if(emailReg(id.value)) id.classList.remove('is--invalid');
  else id.classList.add('is--invalid');

  // 비밀번호 정규식 확인
  if(pwReg(pw.value)) pw.classList.remove('is--invalid');
  else pw.classList.add('is--invalid');
}

function buttonHandler(e) {
  e.preventDefault();
  if(id.value === user.id && pw.value === user.pw) {
    window.location.href = 'welcome.html';
    id.value = '';
    pw.value = '';
  }
  else alert('아이디 또는 비밀번호를 잘못 입력하셨습니다.');
}

input.forEach(input => input.addEventListener('input', validationHandler));
button.addEventListener('click', buttonHandler);





/* --------------------------- 정규식 함수 --------------------------- */

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}