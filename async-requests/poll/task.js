const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open('GET', "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4){
        let result = JSON.parse(xhr.response);
        createElements(result)
    }
})

function createElements(result){
    const title = document.createElement('span');
    title.textContent = result.data.title;

    pollTitle.append(title);
    
    for (let elem of result.data.answers){
        const btn = document.createElement('button');
        btn.classList.add('poll__answer');
        btn.textContent = elem;

        pollAnswers.appendChild(btn)

        btn.addEventListener("click", () => {
            alert('Спасибо, ваш голос засчитан!');
            window.location.reload()
        })
    }
}
