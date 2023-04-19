import express from 'express'
import { getAllUsers, getUserById, login, signUp } from '../controllers/userController';

const router = express.Router();

router.get("/", getAllUsers)
router.post("/signup", signUp)
router.get("/getUser", getUserById)
router.post("/login", login)
// router.get("/signup")

export default router