import express from 'express'
import proxy from 'express-http-proxy'

const app = express()
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send("Api Gateway home");
})

app.use("/user", proxy("http://localhost:5001"))
app.use("/product", proxy("http://localhost:5002"))

app.listen(PORT, () => {
    console.log(`Api GateWAy is working on port ${PORT}`)
})