import express, { Express } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const app: Express = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(cors());

app.use(express.json());

app.get("/health", (req, res) => {
  res.send("service is healthy");
});

export default app;
