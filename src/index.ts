import express, { Express } from "express";
import mongoose from "mongoose";
import path from "path";
import driverRoutes from "./routes";



const app: Express = express();

// const buildPath = path.join(__dirname, '..', 'build');
// app.use(express.static(buildPath));


app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

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
