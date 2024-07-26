export default class Project {
  constructor(title) {
    this.title = title;
    this.id = Math.floor(Math.random() * 10000);
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(id) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(taskIndex, 1);
  }
}
