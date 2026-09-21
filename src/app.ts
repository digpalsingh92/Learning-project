import express, { Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const app: Express = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

app.use(express.json());

export default app;
