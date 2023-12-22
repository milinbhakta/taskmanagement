import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import tasks from "./tasks";
import status from "./status";

const router = express.Router();

// Welcome API Endpoint
router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

// Api Endpoints
router.use("/tasks", tasks);
router.use("/status", status);

export default router;
