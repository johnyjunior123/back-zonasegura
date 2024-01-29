import { Router } from 'express'
export const userRouter = Router();

userRouter.post('/login', (req, res) => {
    res.json(req.body)
})

userRouter.post('/register', (req, res) => {
    res.json(req.body)
})