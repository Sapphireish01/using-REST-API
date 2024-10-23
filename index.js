// HINTS:
// 1. Import express and axios
import express, { json } from "express";
import axios, { formToJSON } from "axios";

// 2. Create an express app and set the port number.

const app = express();
const port = 3000;

// 3. Use the public folder for static files.
app.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.
// 5. Use axios to get a random secret and pass it to index.ejs to display the

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
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});