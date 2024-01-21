'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

let randomIndex = 0;
let numBtn = document.getElementsByTagName("button");
const randomIventBtn = document.querySelectorAll("button");
const startBtn = document.getElementById("start-button");
const countElem = document.getElementById("timer");
const commentArea = document.getElementById("comment-area");
let clickCount = 0;
let countDownNum = 0;
let removeComment = document.getElementById("comment-area");

startBtn.addEventListener("click", start);

function start() {
  randomIndex = Math.ceil(Math.random() * 20);
  numBtn[randomIndex].style.background = "pink";
  addClickListener(randomIndex);
  countDownNum = setInterval(countDown, 1000);
  removeComment.removeChild(removeComment.firstElementChild);
}

function addClickListener() {
  numBtn[randomIndex].addEventListener("click", addClickProces);
}

function addClickProces() {
  numBtn[randomIndex].style.background = "gainsboro";
  clickCount++;
  //失敗例③
  numBtn[randomIndex].removeEventListener("click", addClickProces);
  randomIndex = Math.ceil(Math.random() * 20);
  numBtn[randomIndex].style.background = "pink";
  addClickListener();
}

function createComment(text) {
  const commentElem = document.createElement("p");
  commentElem.className = "result-comment";
  commentElem.textContent = text;
  commentArea.appendChild(commentElem);
}

function resetGame() {
  numBtn[randomIndex].style.background = "gainsboro";
  randomIndex = Math.ceil(Math.random() * 20);
  countElem.textContent = 10;
  clickCount = 0;
}

function countDown() {
  countElem.textContent--;
  if (countElem.textContent < 0) {
    clearInterval(countDownNum);
    startBtn.style.background = "";
    if (clickCount <= 5) {
      createComment("いつもと比べてクリック数が少ないです。");
      createComment("体調に変化はありませんか？");
    } else if (clickCount <= 8) {
      createComment(`【結果】 クリック数: 「${clickCount}」 Nice！いい感じ🙌`);
    } else {
      createComment(`【結果】 クリック数: 「${clickCount}」 It's wonderful today😍`);
    }
    alert("ゲーム終了です！！");
    resetGame();
    console.log(randomIndex);
  }
}



let appArea = document.getElementById("app-area");

numBtn[21].addEventListener("click", createTitle);

function createTitle() {
  for (let i = 0; i <= 5; i++) {
    const commentTitle = document.createElement("p");
    commentTitle.className = "title-game";
    commentTitle.innerText = "早押しゲーム（Time CLICK）";
    appArea.appendChild(commentTitle);
  }
}
