const express = require('express')
const app = express();

app.use(express.static('public'))

app.get("/greet", (req, res) => res.send("Greetings!"))

app.listen(3000)
