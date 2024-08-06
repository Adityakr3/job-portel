import app from "./app.js";

const port = process.env.PORT

app.listen(port , ()=>{
    console.log(`server is running at ${port}`);
})