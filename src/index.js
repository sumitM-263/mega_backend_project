import dotenv from "dotenv";

import connectDB from "./db/index.js";
import { DB_NAME } from "./constants.js";
import { app } from "./app.js";


dotenv.config({
    path: "./.env"
})

connectDB()
    .then(() => {
        app.on('error', (error) => {
            console.log('Error : ', error);
            throw error;
        })

        const port = process.env.PORT || 8000;


        app.listen(port, () => {
            console.log(`Server is listening at ${port}`);
        })
    })
    .catch((err) => {
        console.log(`MongoDB connection failed !`, err);
    })