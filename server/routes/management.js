import express from "express";

const router = express.Router();

router.get("/admins", getAdmins);

export default router;
