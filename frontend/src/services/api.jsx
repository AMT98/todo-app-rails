import React from "react";
import axios from "axios";

const API = axios.create();

export const login = (email, password) =>
  API.post("/login", { email, password });
export const signup = (user) => API.post("/users", user);
export const fetchTasks = (userId) => API.get(`/tasks?user_id=${userId}`);
export const createTask = (task) => API.post("/tasks", task);
export const updateTask = (id, task) => API.put(`/tasks/${id}`, task);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
