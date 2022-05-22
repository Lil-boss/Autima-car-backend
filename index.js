const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Connected to database');
        }

    })

const productRoute = require("./routes/routers");
app.use("/api/v1", productRoute);

app.use("/", (req, res) => {
    res.send("Hello from the server");
})
app.listen(port, () => console.log(`Server started on port ${port}`));