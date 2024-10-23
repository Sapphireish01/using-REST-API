import express, { json } from "express";
import axios, { formToJSON } from "axios";


const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async(req, res) => {
    try{
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        const secretData = response.data;
        res.render("index.ejs", {
            secret: JSON.stringify(secretData.secret),
            user: JSON.stringify(secretData.username)
        })
    } catch (error) {
        res.render("index.ejs", { secret: "Sorry, something went wrong.", user: "" });
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});