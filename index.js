const express = require("express")
const app = express()
const port = 3000  // Port of server
app.use(express.json())  // middleware For convert req body json to data  

// Summation restful API
app.post("/Sum", (req, res) => {
    if (!req.body || !req.body.data) {
        return res.status(400).send({ message: "error: body is empty", result: null })
    }
    data = req.body.data
    result = 0
    data.forEach(element => {
        result += element
    });
    return res.send({ message: "ok", data: result })
})


// Subtraction restful API
app.post("/Subtraction", (req, res) => {
    if (!req.body || !req.body.data) {
        return res.status(400).send({ message: "error: body is empty", result: null })
    }
    data = req.body.data
    result = null
    data.forEach(element => {
        if (result == null) {
            result = element
        }
        else {
            result -= element
        }

    });
    return res.send({ message: "ok", data: result })
})


// Multiplication restful API
app.post("/Multiplication", (req, res) => {
    if (!req.body || !req.body.data) {
        return res.status(400).send({ message: "error: body is empty", result: null })
    }
    data = req.body.data
    result = 1
    data.forEach(element => {
        result *= element
    });
    return res.send({ message: "ok", data: result })
})


// Division restful API
app.post("/Division", (req, res) => {
    if (!req.body || !req.body.data) {
        return res.status(400).send({ message: "error: body is empty", result: null })

    }
    data = req.body.data
    result = null
    data.forEach(element => {
        if (result == null) {
            result = element
        }
        else {
            result /= element
        }
        if (element == 0) {
            return res.status(400).send({ message: "error: number Division zero", result: null });

        }
    });
    if (!res.headersSent) {
        return res.status(200).send({ message: "ok", result: result })
    }

})

// Run Server
app.listen(port, () => console.log(`listening om port ${port}`)) 