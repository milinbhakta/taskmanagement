import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import tasks from "./tasks";

const router = express.Router();

// Welcome API Endpoint
router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

// Api Endpoints
router.use("/tasks", tasks);

export default router;
