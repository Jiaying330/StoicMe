import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://stoic.tekloon.net/stoic-quote"

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL);
        res.render("index.ejs", result.data);
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });