import express from "express";
import "./database/db.js";

const app = express()
const port = 3000

app.get('/health', (req, res) => {
    res.json({status: "OK"})
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})