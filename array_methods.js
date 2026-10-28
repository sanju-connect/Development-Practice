const tasks2 = [
  {title: "Javascript", completed: true, hours: 2},
  {title: "DSA", completed: false, hours: 3},
  {title: "Python", completed: false, hours: 2},
  {title: "SQL", completed: true, hours: 1}
];

function getSummary(tasks2) {
  const totalT = tasks2.filter(tasks2 => tasks2.title);
  const totalTasks = totalT.length;

  const pendingC = tasks2.filter(tasks2 => !tasks2.completed);
  const pendingCount = pendingC.length;

  const pendingHours = tasks2.reduce(
    (total, task) => total + (task.completed ? 0 : task.hours),
    0
  )

  return {
    totalTasks: totalTasks,
    pendingCount: pendingCount,
    pendingHours: pendingHours
  }
}

const summary = getSummary(tasks2);

console.log(summary.pendingCount);
console.log(summary.pendingHours);
