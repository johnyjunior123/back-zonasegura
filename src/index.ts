import express, { json } from "express"
import { AppDataSource } from "./data-source"
import { userRouter } from "./routes/user.router"
import { ocurrenceRouter } from "./routes/occurence.router"
const app = express()
app.use(json())

AppDataSource.initialize().then(async () => {
    app.use('/' ,userRouter)
    app.use('/' ,ocurrenceRouter)
    app.listen(3000)

}).catch(error => console.log(error))
