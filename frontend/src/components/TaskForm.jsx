import React, { useState } from "react";
import { createTask, updateTask } from "../services/api";

const TaskForm = ({ task = {}, onSave }) => {
  const [title, setTitle] = useState(task.title || "");
  const [description, setDescription] = useState(task.description || "");
  const [completed, setCompleted] = useState(task.completed || false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const taskData = { title, description, completed };

    try {
      if (task.id) {
        await updateTask(task.id, taskData);
      } else {
        await createTask(taskData);
      }
      onSave();
    } catch (error) {
      console.error("Task save failed", error);
      alert("Failed to save task");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </label>
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;