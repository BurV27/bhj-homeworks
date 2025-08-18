const form = document.forms[0];
const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');

function addToDo(text) {
    const list = document.getElementById('tasks__list')
    const task = document.createElement('div');
    task.classList.add('task')

    const title = document.createElement('div');
    title.classList.add('task__title');
    title.textContent = text;

    const remove = document.createElement('a');
    remove.href = '#';
    remove.classList.add('task__remove');
    remove.innerHTML = '&times';

    remove.addEventListener('click', () => {
        task.remove();
    })

    task.append(title, remove);
    list.appendChild(task);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    addToDo(input.value)
})
