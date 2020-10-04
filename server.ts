import app from "./src/app";

const PORT = 3333;

app.listen(PORT,()=>{
    console.log(`Server runing http://localhost:${PORT}`);
})