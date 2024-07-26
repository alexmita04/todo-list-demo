function populateStorage(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
  getFromStorage();
}

function getFromStorage() {
  const projects = JSON.parse(localStorage.getItem("projects"));

  if (!projects) return [];
  return projects;
}

export { populateStorage, getFromStorage };
