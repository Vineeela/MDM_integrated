const mongoose = require('mongoose')

const InfoSchema = new mongoose.Schema({
    selectServiceProvider:{
        type: String,
        required: true
    },
    selectServiceType:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    simNumber:{
        type: Number,
        required: true
    },
    selectServiceNumber :{
        type: Number,
        required: true
    },
    apnName :{
        type: String,
        required: true
    },
    ipType:{
        type: String,
        required: true
    },
    typeOfIp:{
        type: String,
        required: true
    },
    ipAddress:{
        type: String,
        required: true
    },
    
});

   /* userName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
});*/
const InfoModel = mongoose.model("Infos", InfoSchema)
module.exports = InfoModel
