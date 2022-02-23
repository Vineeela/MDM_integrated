const express = require("express");
const app = express()
const mongoose = require('mongoose')
const InfoModel = require('./models/Infos')

const cors = require("cors");

app.use(express.json());
app.use(cors());
mongoose.connect(
    "mongodb+srv://sravya:sravs246@mdmlogin.hy0dj.mongodb.net/mdmpowerfactor?retryWrites=true&w=majority"
);

app.get("/getInfos", (req, res) =>{
InfoModel.find({},(err, result) =>{
if (err) {
res.json(err);
} else{
    res.json(result)
}
})
});

app.post("/createSimInfos", async (req, res) => {
    const info = req.body
    const newInfo = new InfoModel(info);
    await newInfo.save();

    res.json(info)
});

app.listen(4000, () =>{
    console.log("SERVER RUNS PERFECTLY");
});