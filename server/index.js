const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); // Allow frontend to connect
app.use(express.json()); // Parse JSON request bodies

app.get("/", (req, res) => {
    res.json({ message: "Hello from Express backend!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
