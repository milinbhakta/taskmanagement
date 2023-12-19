import express from "express";
import pool from "../utils/db";
import { getUserInfo } from "../utils/keycloakHelper";
import { z } from "zod";

const router = express.Router();

type Task = {
  task_id: number;
  task_name: string;
  description: string;
  assigned_to: string;
  status_id: number;
  deadline: string;
  created_on: string;
  last_update: string;
};

type TaskResponse = Task[];

const taskSchema = z.object({
  task_name: z.string(),
  description: z.string().optional(),
  assigned_to: z.string(),
  status_id: z.number(),
  deadline: z.string(),
});

router.get<{}, TaskResponse>("/", async (req: any, res) => {
  const userId = getUserInfo(req).sub;
  const { rows } = await pool.query<Task>(
    `SELECT * FROM TASKS WHERE assigned_to = $1 ORDER BY task_id`,
    [userId]
  );
  res.json(rows);
});

router.post<{}, TaskResponse>("/", async (req, res) => {
  // validate the request body
  const validatedTask = taskSchema.parse(req.body);
  const { task_name, description, assigned_to, status_id, deadline } =
    validatedTask;
  const { rows } = await pool.query<Task>(
    "INSERT INTO TASKS (task_name, description, assigned_to, status_id, deadline) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [task_name, description, assigned_to, status_id, deadline]
  );
  res.json(rows);
});

router.get<{}, TaskResponse>("/:id", async (req: any, res) => {
  const userId = getUserInfo(req).sub;
  const { rows } = await pool.query<Task>(
    `SELECT * FROM TASKS WHERE task_id = $1 AND assigned_to = $2`,
    [req.params.id, userId]
  );
  res.json(rows);
});

router.put<{ id: number }, TaskResponse>("/:id", async (req, res) => {
  // validate the request body
  const validatedTask = taskSchema.parse(req.body);
  const { task_name, description, assigned_to, status_id, deadline } =
    validatedTask;
  const { rows } = await pool.query<Task>(
    "UPDATE TASKS SET task_name = $1, description = $2, assigned_to = $3, status_id = $4, deadline = $5 WHERE task_id = $6 RETURNING *",
    [task_name, description, assigned_to, status_id, deadline, req.params.id]
  );
  res.json(rows);
});

router.delete<{ id: number }, TaskResponse>("/:id", async (req, res) => {
  const { rows } = await pool.query<Task>(
    "DELETE FROM TASKS WHERE task_id = $1",
    [req.params.id]
  );
  res.json(rows);
});

export default router;
