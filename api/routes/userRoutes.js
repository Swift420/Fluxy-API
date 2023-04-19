import express from 'express'
import { getAllUsers, getUserById, signUp } from '../controllers/userController';

const router = express.Router();

router.get("/", getAllUsers)
router.post("/signup", signUp)
router.get("/getUser", getUserById)
// router.get("/signup")

export default router