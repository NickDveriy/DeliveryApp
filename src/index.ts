import express, { Express } from "express";
import mongoose from "mongoose";
import driverRoutes from "./routes";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(driverRoutes);

const mongoUri: string = `mongodb+srv://nickDV:PmM4eYzMCIakZuww@jarviscluster.vjbi4.mongodb.net/deliveryDb?retryWrites=true&w=majority`;
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set("useFindAndModify", false);

mongoose.connect(mongoUri, mongoOptions).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
}).catch((error) => { throw error; });
