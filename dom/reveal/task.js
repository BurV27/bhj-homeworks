const blockEvent = document.getElementsByClassName("reveal");

for (const blockElem of blockEvent){
    document.addEventListener("scroll", () => {
    const {top, bottom} = blockElem.getBoundingClientRect();
    console.log(blockElem.innerHeight)
        if (top >= 0 && bottom >= 0){
                blockElem.classList.add("reveal_active");
    } else {
        blockElem.classList.remove("reveal_active");
    }
    })
};