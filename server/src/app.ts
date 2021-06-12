import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import driverRoutes from "./routes";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(driverRoutes);

const mongoUri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@jarviscluster.vjbi4.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set("useFindAndModify", false);

mongoose.connect(mongoUri, mongoOptions).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening on http://localhost:${PORT}`);
    })
}).catch(error => { throw error });