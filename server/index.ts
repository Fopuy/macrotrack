import express from "express";
const app = express();

import indexRouter from './routers/indexRouter.js'

app.get("/", indexRouter)

const PORT = process.env.PORT;
app.listen((PORT||3000), () => {
    console.log(`Listening on port ${PORT||3000}`)
})