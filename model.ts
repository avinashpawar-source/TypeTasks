// A task can only have one of these three statuses.
type TaskStatus = "todo" | "in-progress" | "done";

// The shape of every task.
interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}

// Adds a new task to the list.
function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
    title: title,
    status: "todo"
  };

  return [...tasks, newTask];
}

// Marks a task as completed.
function completeTask(tasks: Task[], id: number): Task[] {
  return tasks.map(task =>
    task.id === id
      ? { ...task, status: "done" }
      : task
  );
}

// Returns only tasks with the requested status.
function filterByStatus(
  tasks: Task[],
  status: TaskStatus
): Task[] {
  return tasks.filter(task => task.status === status);
}

// Extra operation: deletes a task by its ID.
function deleteTask(tasks: Task[], id: number): Task[] {
  return tasks.filter(task => task.id !== id);
}


// --------------------------------------------------
// Example usage / testing
// --------------------------------------------------

const tasks: Task[] = [
  {
    id: 1,
    title: "Learn TypeScript",
    status: "todo"
  },
  {
    id: 2,
    title: "Build TypeTasks",
    status: "in-progress"
  }
];

const newTasks = addTask(tasks, "Practice TypeScript");

const completedTasks = completeTask(newTasks, 1);

const todoTasks = filterByStatus(completedTasks, "todo");

const remainingTasks = deleteTask(completedTasks, 2);

console.log("All tasks:", newTasks);
console.log("Completed tasks:", completedTasks);
console.log("Todo tasks:", todoTasks);
console.log("After deleting task 2:", remainingTasks);


