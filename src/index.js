import express from "express";
import cors from "cors";
import winston from "winston";
import animalRouter from "./routes/animal.route.js";
import proprietarioRouter from "./routes/proprietario.routes.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "petshop-api.log" })
    ],
    format: combine(
        label({ label: "petshop-api" }),
        timestamp(),
        myFormat
    )
});

const app = express();

app.use(express.json());
app.use(cors());

app.use("/proprietario", proprietarioRouter);
app.use("/animal", animalRouter);

app.listen(3000, () => {
    console.log("API Iniciada!");
})