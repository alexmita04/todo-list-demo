import Project from "./project.js";
import Todo from "./task.js";
import {
  addProjectsToDom,
  addTasksToProjectDom,
  clearProjectForm,
  clearTaskForm,
} from "./dom.js";
import { populateStorage, getFromStorage } from "./localStorage.js";
import "./style.css";

const projectForm = document.getElementById("projects-form");
const taskForm = document.getElementById("tasks-form");
const projectsListEl = document.querySelector(".projects");
const tasksListEl = document.querySelector(".tasks");

let activeProject;

const projects = getFromStorage();

projectForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const projectName = e.target.querySelector("#new-project").value;
  const newProject = new Project(projectName);

  projects.push(newProject);
  addProjectsToDom(projects);
  clearProjectForm();
  populateStorage(projects);
});

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskTitle = e.target.querySelector("#title").value;
  const taskDescription = e.target.querySelector("#description").value;
  const taskDuedate = e.target.querySelector("#dueDate").value;
  const taskPriority = e.target.querySelector("#priority").value;

  const newTodo = new Todo(
    taskTitle,
    taskDescription,
    taskDuedate,
    taskPriority
  );

  activeProject.tasks.push(newTodo);
  addTasksToProjectDom(activeProject);
  clearTaskForm();
  populateStorage(projects);
});

projectsListEl.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    const currentProject = projects.find(
      (project) => project.id === parseInt(e.target.dataset.id)
    );

    addTasksToProjectDom(currentProject);
    activeProject = currentProject;

    taskForm.style.display = "block";
  }
});

tasksListEl.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const taskEl = e.target.parentNode;
    const taskId = parseInt(taskEl.dataset.id);
    const taskIndex = activeProject.tasks.findIndex(
      (task) => task.id === taskId
    );
    console.log(taskIndex);
    activeProject.tasks.splice(taskIndex, 1);
    addTasksToProjectDom(activeProject);

    console.log(projects);
  }

  populateStorage(projects);
});

addProjectsToDom(projects);
taskForm.style.display = "none";
