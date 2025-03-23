document.getElementById('time').innerHTML = new Date().toLocaleString() //현재웹문서를 나타냄

function pink() {
  document.body.style.backgroundColor = 'pink'
}
function Lightblue() {
  document.body.style.backgroundColor = 'Lightblue'
}
function Lightyellow() {
  document.body.style.backgroundColor = 'Lightyellow'
}
function Reset() {
  document.body.style.backgroundColor = 'White'
}

function showhtml() {
  document.getElementById('fig').src = 'html1.png'
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크앱 언어이다'
}
function showCSS() {
  document.getElementById('fig').src = 'CSS.png'
  document.getElementById('desc').innerHTML =
    '<b>CSS</b>는 HTML 문서의 스타일을 지정하기 위한 언어이다.'
}
function showjs() {
  document.getElementById('fig').src = 'js.png'
  document.getElementById('desc').innerHTML =
    '<b>js</b>는 웹을 위한 프로그래밍언어이며 웹문서에서 동작을 실행할 수 있게 된다.'
}

function hide() {
  document.getElementById('fig').src = ''
  document.getElementById('desc').innerHTML = ''
}
