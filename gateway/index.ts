import express, { Express } from "express";
import path from "path";
import { readFile } from "fs/promises";
import https from "https";
import dotenv from "dotenv";
import rootRouter from "./routes";

const distPath = path.join(__dirname, "../../dist");
const indexPath = path.join(distPath, "/index.html");
const keyPath = "ssl/selfsigned.key";
const certPath = "ssl/selfsigned.crt";

async function run(port: number) {
  dotenv.config();

  const app: Express = express();

  app.use(express.static(distPath));
  app.use("/api", rootRouter);
  app.get("*", (req, res) => res.sendFile(indexPath));

  const httpsServer = https.createServer(
    {
      key: await readFile(keyPath, "utf8"),
      cert: await readFile(certPath, "utf8"),
    },
    app
  );

  httpsServer.listen(port, () => {
    console.log(`[server]: Server is running at https://localhost:${port}`);
  });
}

void run(Number(process.env.PORTO) || 3000);
