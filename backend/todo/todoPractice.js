const fs = require("fs");
const { argv } = require("process");
const filePath = "./task2.json";

function loadTask() {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
}
function saveTask(tasks) {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
}

const addTask = (task) => {
  const tasks = loadTask();
  tasks.push({ task });
  saveTask(tasks);
  console.log(`Your current ${task} task in now added`);
};

const listTask = () => {
  const tasks = loadTask();
  tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
};

const removeTask = (indexNumber) => {
  const arrayIndex = indexNumber - 1;
  let tasks = loadTask();
  tasks = tasks.filter((element, index) => index != arrayIndex);
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
  listTask();
};

const commend = process.argv[2];
const argument = process.argv[3];

if (commend === "add") {
  addTask(argument);
} else if (commend === "list") {
  listTask();
} else if (commend === "remove") {
  removeTask(parseInt(argument));
} else {
  console.log("commend not found");
}
