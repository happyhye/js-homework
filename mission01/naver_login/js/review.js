
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


function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}



const $emailInput = document.querySelector('#userEmail');
const $passwordInput = document.querySelector('#userPassword');
const $loginBtn = document.querySelector('.btn-login');

let emailCheckPass = false;
let pwCheckPass = false;


function handleEmailCheck() {
  const value = this.value;

  if(emailReg(value)) {
    this.classList.remove('is--invalid');
    emailCheckPass = true;
  } else {
    this.classList.add('is--invalid');
    emailCheckPass = false;
  }
}

function handlePasswordCheck() {
  const value = this.value;

  if(pwReg(value)) {
    this.classList.remove('is--invalid');
    pwCheckPass = true;
  } else {
    this.classList.add('is--invalid');
    pwCheckPass = false;
  }
}

function handleLogin(e) {

  e.preventDefault();

  if(emailCheckPass && pwCheckPass) {
    try {
      const id = $emailInput.value;
      const pw = $passwordInput.value;

      // ↓ 여기서부터는 통신 과정을 넣어주면 됨 (우리는 통신 X)
      const getUserId = user.id;      
      const getUserPw = user.pw;

      if(id === getUserId && pw === getUserPw){
        location.href = 'welcome.html'
      }
    } catch (e) {
      console.log(e);
    }
  }

}

$emailInput.addEventListener('input', handleEmailCheck);
$passwordInput.addEventListener('input', handlePasswordCheck);
$loginBtn.addEventListener('click', handleLogin);