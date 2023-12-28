const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./database");

dotenv.config({ path: "config.env" }); 

const TEST = express();
TEST.use(express.json());
TEST.use(express.urlencoded({ extended: true }));

TEST.get("/",async(req,res)=>{
    const[result]=await (await dbConnection).query("SELECT * FROM data");
    res.status(200).json(result);
})


const PORT = process.env.PORT;
const server = TEST.listen(PORT, () => {
    console.log(`Server start in port ${PORT}`);
});