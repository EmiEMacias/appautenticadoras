import express  from 'express';
//const moongose =require("mongoose");
import  cors from 'cors';
import router from './routes/index.js';

const app=express();

//mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/gobierno").then(_=>{
  //  console.log("------* Connected to Database *------");
//})

 //Exit application on error
//mongoose.connection.on('error', (err) => {
  //  console.error(MongoDB connection error: ${err});
    //process.exit(-1);
//});
app.use(express.json({init:'50mb'}));
app.use(express.urlencoded({limit: '50mb',extended:true}));
app.use(cors());
app.use('/api',router);


app.listen(4000,()=>{
    console.log("Yeei mi servidor jala");
});
 export default app;