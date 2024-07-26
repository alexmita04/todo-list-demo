const projectList = document.querySelector(".projects");
const tasksList = document.querySelector(".tasks");
const projectForm = document.getElementById("projects-form");
const taskForm = document.getElementById("tasks-form");

function addProjectsToDom(projects) {
  projectList.innerHTML = ``;
  projects.forEach((project) => {
    const newProjectEl = document.createElement("li");
    newProjectEl.textContent = project.title;
    newProjectEl.classList.add("project");
    newProjectEl.dataset.id = project.id;

    projectList.appendChild(newProjectEl);
  });
}

function addTasksToProjectDom(project) {
  tasksList.innerHTML = ``;

  project.tasks.forEach((task) => {
    const taskEl = document.createElement("div");
    taskEl.innerHTML = `
            <div class="title">${task.title}</div>
            <div class="description">${task.description}</div>
            <div class="dueDate">${task.dueDate}</div>
            <div class="priority">${task.priority}</div>
            <button class="delete-task">delete</button>
    `;
    taskEl.classList.add("task");
    taskEl.dataset.id = task.id;

    tasksList.appendChild(taskEl);
  });
}

function clearProjectForm() {
  projectForm.querySelector("input").value = "";
}

function clearTaskForm() {
  taskForm.querySelector("#title").value = "";
  taskForm.querySelector("#description").value = "";
  taskForm.querySelector("#dueDate").value = "";
  taskForm.querySelector("#priority").value = "";
}

export {
  addProjectsToDom,
  addTasksToProjectDom,
  clearProjectForm,
  clearTaskForm,
};
