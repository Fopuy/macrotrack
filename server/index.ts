import express from "express";
const app = express();
import indexRouter from './routers/indexRouter.js'
import addMeal from "./routers/addMeal.js";
import cors from 'cors'

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

app.use("/api", indexRouter)
app.use("/api/addmeal", addMeal)

const PORT = process.env.PORT;
app.listen(3000, () => {
    console.log(`Listening on port ${PORT||3000}`)
})