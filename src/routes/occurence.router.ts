import { Router } from 'express'
export const ocurrenceRouter = Router();

ocurrenceRouter.post('/ocurrence', (req, res) => {
    res.json(req.body)
})

ocurrenceRouter.post('/search/:id', (req, res) => {
    res.json(req.body)
})

ocurrenceRouter.post('/search/all', (req, res) => {
    res.json(req.body)
})