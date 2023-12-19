import express from "express";
import pool from "../utils/db";
import keycloak from "../utils/keycloak";
import { getUserInfo } from "../utils/keycloakHelper";

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

router.get<{}, TaskResponse>("/", async (req: any, res) => {
  console.log(getUserInfo(req));

  const { rows } = await pool.query("SELECT * FROM TASKS");
  res.json(rows);
});

export default router;
