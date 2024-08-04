const express = require("express");
const cors = require("cors");
const routes = require('./routes');
const mongoose = require("mongoose");
const mongoDbURL = "mongodb+srv://zoduak47:X0vhtpOc0b6ZNifn@dmytro.dtxqiuy.mongodb.net/?retryWrites=true&w=majority&appName=Dmytro";

const PORT = 2000;
const app = express();

mongoose.connect(mongoDbURL)
    .then(()=> console.log("Connected to MongoDB"))
    .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());

app.use('/api/todo-list', routes);

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
});