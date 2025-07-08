const elemRotator = document.getElementsByClassName("rotator__case");
let index = 0;
console.log(elemRotator.length)
setInterval(() => {
  if (index === elemRotator.length - 1){
    elemRotator[index].classList.remove('rotator__case_active');
    elemRotator[0].classList.add('rotator__case_active');
    index = 0;
    return clearInterval();
    }
  if (!(elemRotator[index].classList.contains("rotator__case_active"))){
    if(index < elemRotator.length){
      elemRotator[index+1].classList.add('rotator__case_active');
    }
  } else {
    elemRotator[index].classList.remove('rotator__case_active');
    elemRotator[index+1].classList.add('rotator__case_active');
  };
  index++;
}, 1000)