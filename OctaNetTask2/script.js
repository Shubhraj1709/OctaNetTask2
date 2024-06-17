function addTask() {
    const taskName = document.getElementById('taskName').value;
    const deadline = document.getElementById('deadline').value;
    const priority = document.getElementById('priority').value;
    const label = document.getElementById('label').value;

    if (taskName === '' || deadline === '') {
        alert('Please enter task name and deadline.');
        return;
    }

    const taskList = document.getElementById('taskList');

    const task = document.createElement('div');
    task.className = `task ${priority.toLowerCase()}`;

    task.innerHTML = `
        <span><strong>${taskName}</strong> - ${deadline} - ${priority} - ${label}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(task);

    // Clear the input fields
    document.getElementById('taskName').value = '';
    document.getElementById('deadline').value = '';
    document.getElementById('priority').value = 'High';
    document.getElementById('label').value = 'Planning';
}

function removeTask(button) {
    const task = button.parentElement;
    task.remove();
}
