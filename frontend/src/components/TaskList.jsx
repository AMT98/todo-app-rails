import React, { useEffect, useState } from "react";
import { fetchTasks, deleteTask } from "../services/api";

const TaskList = ({ userId }) => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const response = await fetchTasks(userId);
      setTasks(response.data);
    } catch (error) {
      console.error("Failed to load tasks", error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [userId]);

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      loadTasks();
    } catch (error) {
      console.error("Failed to delete task", error);
      alert("Could not delete task");
    }
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title}
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
