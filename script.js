const text = document.querySelector(".text");

const msg = "I love Xiaomaomi, so much, can someone stop me?";

const msgArr = msg.split("");
console.log(msgArr);
text.textContent = "";
msgArr.forEach((letter, idx) => {
  setTimeout(() => {
    text.textContent += letter;
  }, idx * 100);
});
