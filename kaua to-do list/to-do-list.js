document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue) {
        const li = document.createElement('li');
        li.textContent = taskValue;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(deleteButton);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    } else {
        alert('Por favor, adicione uma tarefa.');
    }
});