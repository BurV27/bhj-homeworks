const bookSize = document.getElementsByClassName("font-size")
const bookContent = document.getElementsByClassName("book__content")[0].children

function clearActive(){
  for (const elem of bookSize){
    elem.classList.remove("font-size_active")
  }
}

function bookAddSmall(){
  for (elem of bookContent){
    if (elem.classList.contains("book_fs-big")){
        elem.classList.remove("book_fs-big")
    }
    elem.classList.add("book_fs-small")
  }
}

function bookAddBig(){
  for (elem of bookContent){
    if (elem.classList.contains("book_fs-small")){
        elem.classList.remove("book_fs-small")
    }
    elem.classList.add("book_fs-big")
  }
}

function bookAddStandart(){
  for (elem of bookContent){
    if (elem.classList.contains("book_fs-small")){
        elem.classList.remove("book_fs-small")
    }
  }
    if (elem.classList.contains("book_fs-big")){
        elem.classList.remove("book_fs-big")
    }
}

for (const elem of bookSize){
  elem.addEventListener('click', () => {

    if (!(elem.classList.contains("font-size_active"))){
      clearActive();
      elem.classList.add("font-size_active");
    }
    if (elem.classList.contains("font-size_active") && (elem.getAttribute("data-size") === "small")){
      bookAddSmall();
    };

    if (elem.classList.contains("font-size_active") && (elem.getAttribute("data-size") === "big")){
      bookAddBig();
    };

    if (elem.classList.contains("font-size_active") && (elem.getAttribute("data-size") === null))
      bookAddStandart()
    });
  }
