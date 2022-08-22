const express = require("express")
const serverless = require("serverless-http")

const app = express()
const router = express.Router()

router.get("/", (req, res) => {
    res.send("User List")
})

router.post("/", (req, res) => {
  res.send("create New User")
})

router
    .route("/:id")
    .get((req, res) => {
        res.send(`Get a User with ID: ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update a User with ID: ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete a User with ID: ${req.params.id}`)
    })


app.use("/.netlify/functions/api", router)
module.exports.handler = serverless(app)