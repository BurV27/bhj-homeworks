const output = document.getElementById("timer");

const secondTimer = setInterval(function(){
  output.textContent -= 1;
  if (+output.textContent == 0){
    clearInterval(secondTimer);
    alert("Вы победили в конкурсе!");
   };
}, 1000);