const params = new URLSearchParams({
  userid: "1",
  completed: "true"
});

const url = "https://jsonplaceholder.typicode.com/todos?" + params.toString();

console.log(url);


async function getCompletedTasks() {
  try {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?userId=1&completed=true");

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const tasks = await response.json();

  console.log(tasks);

  tasks.forEach((task) => {
    console.log(task.title);
  });
} catch (error) {
  console.error("Error fetching completed tasks:", error);
}
}

getCompletedTasks();
