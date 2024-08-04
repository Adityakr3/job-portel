import app from "./app.js";

const port = 4000
app.listen( port , ()=>{
    console.log(`server is running at ${port}`);
})