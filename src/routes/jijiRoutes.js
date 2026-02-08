import express from "express";
import { askJiji } from "../controllers/jijiController.js";
import { validateQuery } from "../middleware/validationMiddleware.js";
import { mockAuth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/ask-jiji", mockAuth, validateQuery, askJiji);

export default router;
